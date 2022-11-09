import React, { memo, useEffect, useState } from 'react'
import QRCode from "qrcode";
import html2canvas from "html2canvas";

import { Input, Button } from "antd";
import { ConentWrapper, ConentPoster } from "./poster-style";

const inputList = [
  {
    name: 'poster',
    placehoder: '背景路径'
  }, {
    name: 'avatar',
    placehoder: '头像路径'
  }, {
    name: 'nickname',
    placehoder: '昵称'
  }, {
    name: 'profile',
    placehoder: '说明'
  }, {
    name: 'codeContent',
    placehoder: '二维码内容'
  }, {
    name: 'codeText',
    placehoder: '二维码介绍'
  }
]

export default memo(() => {
  const [form, setForm] = useState({
    poster: "https://zyzxtest.oss-cn-shenzhen.aliyuncs.com/joosure/pmis/1/1667893846000/nf21g1hosupw1rc87qfhe0if06nqg9ch/1667804214985.jpg?Expires=4823653846&OSSAccessKeyId=LTAI4FnWkpxcpfG3pcAz6xL2&Signature=pZ6sqMAdZrbyEOXRWRcKwcPR1Lc%3D",
    avatar: "https://img2.baidu.com/it/u=3094149767,177600321&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1668099600&t=b3bc55a0c7999019fdb159b506147715",
    nickname: "共沐春鳅",
    profile: "黄河之水天上来，滋润代代华夏人",
    codeContent: "https://www.bilibili.com",
    code: "",
    codeText: "举杯邀明月对影成三人"
  })
  const [finishImgCount, setFinishImgCount] = useState(0)
  const [targetUrl, setTargetUrl] = useState("")

  useEffect(() => {
    // createCode()
    renew()
  }, [])

  // 刷新画布
  const renew = async () => {
    // 初始化数据
    setFinishImgCount(0)
    setTargetUrl("")
    // 处理二维码
    createCode()
    // 处理跨域图片
    const posterEl = document.querySelector(".poster-img")
    getBase64Image(form.poster, posterEl)
    const avatorEl = document.querySelector(".avator")
    getBase64Image(form.avatar, avatorEl)

    // 等图片加载完毕后生成海报
    const timer = setInterval(() => {
      setFinishImgCount(val => {
        if (val === 3) {
          generateImage()
          clearInterval(timer)
        }
        return val
      })
    }, 200)
  }

  // 生成二维码
  async function createCode() {
    const res = await QRCode.toDataURL(form.codeContent);
    setFinishImgCount((val) => val + 1);
    setForm({
      ...form,
      code: res
    })
  }

  // 处理图片跨域，污染画布（有些图片会处理不了，推测为服务器未开启跨域限制）
  const getBase64Image = (url, ref) => {
    // 如果图片本身就是 base64 格式的，就不需要处理了（处理会报错）
    console.log('url', form)
    if (url.indexOf('data:') !== -1) {
      console.log(222222222222222)
      setFinishImgCount((val) => val + 1);
      return
    }
    const image = new Image();
    let middle = ''
    if (url.indexOf('?') !== -1) {
      middle = "&v="
    } else {
      middle = "?v="
    }
    image.src = url + middle + Math.random(); // 处理缓存
    image.crossOrigin = "*"; // 支持跨域图片
    image.onload = () => {
      const base64 = drawBase64Image(image);
      ref.src = base64;
      console.log(22222222222)
      setFinishImgCount((val) => val + 1);
      console.log('mage.onloadmage.onloadmage.onload', finishImgCount)
    };
  }

  // 将img转化为dataURL
  const drawBase64Image = (img) => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    const dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

  // 生成海报
  const generateImage = () => {
    const targetDom = document.querySelector("#poster-box");
    html2canvas(targetDom, {
      useCORS: true
    }).then((canvas) => {
      const url = canvas.toDataURL("image/jpeg")
      setTargetUrl(url)
    });
  }

  // 点击下载海报
  const downloadPoster = () => {
    let src = targetUrl;
    let a = document.createElement("a");
    a.href = src;
    a.download = "示例海报.png";
    a.click();
  }

  // 改变表单控件值
  const changeForm = ({ target }, name) => {
    setForm({
      ...form,
      [name]: target.value
    })
    // renew();
  }

  return (
    <ConentWrapper>
      <div>
        {inputList.map(item => {
          const { name, placeholder } = item
          return <Input value={form[name]} placeholder={placeholder} key={name} onChange={e => { changeForm(e, name) }} />
        })}
        <div style={{ marginBottom: "16px" }}>
          <Button type="primary" onClick={renew}>更新海报</Button>
        </div>
      </div>
      <ConentPoster>
        <div style={{ marginRight: "30px" }}>
          <h3>示例样式</h3>
          <div className="poster-target-border" id="poster-box">
            <div className="poster-wrap">
              <img className="poster-img" src={form.poster} alt="" />
              <div className="avator-wrap">
                <div className="avator-out">
                  <img className="avator" src={form.avatar} alt="" />
                </div>
                <div className="user-name">{form.nickname}</div>
              </div>
            </div>
            <div className="other-info">
              <div className="introduce">
                {form.profile}
              </div>
              <div className="code-wrap">
                <div className="code-img">
                  <img className="code" src={form.code} alt="" />
                </div>
                <div className="code-test">{form.codeText}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>图像生成(点击下载)</h3>
          <img className='canvas-img' src={targetUrl} onClick={downloadPoster} />
        </div>
      </ConentPoster>
    </ConentWrapper>
  )
})
