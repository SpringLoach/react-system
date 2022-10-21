import React, { memo, useState, useRef } from 'react';

import { Row, Col, Card, Divider, Tag, Input } from "antd";
import { IdcardOutlined, ClusterOutlined, HomeOutlined, PlusOutlined } from "@ant-design/icons";
import { PageWrapper } from "./style";

const skillList = [
  {
    title: 'Vue2全家桶',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
  }, {
    title: 'Vue3全家桶',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
  }, {
    title: '微信小程序',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
  }, {
    title: 'uni-app',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
  }, {
    title: 'TypeScript',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
  }, {
    title: 'React',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
  }, {
    title: 'Node.js',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
  }, {
    title: 'MySQL',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
  }, {
    title: '数据结构与算法',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
  }, {
    title: '网络协议',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
  },
]

let tagList = [
  "不怕困难的",
  "游戏爱好者",
  "美食",
  "爬山/跑步",
  "炒牛河",
  "细心",
  "冷静沉着",
  "学无止境",
]

export default memo(() => {
  const ref = useRef(null);
  const [newTags, setNewTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const showInput = () => {
    setInputVisible(true);
    setTimeout(() => {
      if (ref.current) {
        // eslint-disable-next-line no-unused-expressions
        ref.current?.focus();
      }
    }, 0)
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let tempsTags = [...newTags];
    if (inputValue && !tempsTags.includes(inputValue)) {
      tempsTags = [...tempsTags, inputValue];
    }
    setNewTags(tempsTags);
    setInputVisible(false);
    setInputValue('');
  };

  return (
    <PageWrapper>
      <Row gutter={24}>
        <Col lg={7} sm={24} xs={24}>
          <Card className='left-card'>
            <div className="avatar-wrap">
              <img className='info-avatar' src="https://himg.bdimg.com/sys/portrait/item/public.1.9c514cd0.8wukqHg6lGH4a-Itk8mY-A.jpg" alt="" />
              <div className='info-name'>Master</div>
              <div>心系一处，乘风破浪</div>
            </div>
            <div className='other-info-wrap'>
              <div className='other-info-row'><IdcardOutlined />前端开发工程师</div>
              <div className='other-info-row'><ClusterOutlined />佛山大学</div>
              <div className='other-info-row'><HomeOutlined />广东省广州市</div>
            </div>
            <Divider dashed />
            <div className='tag-wrap'>
              <div className='item-title'>标签</div>
              <div className='tag-list'>
                {
                  (tagList || []).concat(newTags).map(item => <Tag key={item} className='tag-item'>{item}</Tag>)
                }
                {inputVisible && (
                  <Input
                    ref={ref}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                  />
                )}
                {!inputVisible && (
                  <Tag onClick={showInput} style={{ borderStyle: 'dashed' }}>
                    <PlusOutlined />
                  </Tag>
                )}
              </div>
            </div>
            <Divider dashed />
            <div className='skill-wrap'>
              <div className='item-title'>技能</div>
              <Row gutter={36}>
                {
                  skillList.map(item => {
                    return (
                      <Col key={item.title} lg={24} xl={12}>
                        <div className='skill-wrap-item'>
                          <img className='skill-wrap-icon' src={item.img} alt="" />
                          {item.title}
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
            </div>
          </Card>
        </Col>
        <Col lg={17} sm={24} xs={24}>
          <Card>todo</Card>
        </Col>
      </Row>
    </PageWrapper >
  )
})