import React, { memo, useState } from 'react'
import { useDispatch } from "react-redux";
import { changeUserInfoAction } from "@/pages/login/store/actionCreators";
import { getloginInfo } from "@/api/login/login";

import { Input, Button, message } from "antd"
import { PageWrapper } from "./style"

export default memo((props) => {
  // redux
  const dispatch = useDispatch();
  // state
  const [form, setForm] = useState({
    name: '',
    password: ''
  });

  const onChangeForm = (e, type) => {
    setForm({
      ...form,
      [type]: e.currentTarget.value
    })
  }

  const login = async () => {
    console.log(form)
    if (!form.name || !form.password) {
      message.info('Please fill in the account or password')
      return
    }
    const { data } = await getloginInfo(form);
    if (!data) return;
    dispatch(changeUserInfoAction(data));
    window.sessionStorage.setItem("userInfo", JSON.stringify(data));
    props.history.push("/phone/center");
    message.success(`您好，${data.nickname || "匿名用户"}，欢迎回来`);
  }

  return (
    <PageWrapper>
      <img className='logo' src="https://z4a.net/images/2022/10/12/LogoMakr-7mvp7a.png" alt="" />
      <div className="form-wrap">
        <Input placeholder="Username" value={form.name} onChange={(e) => { onChangeForm(e, 'name'); }} />
        <Input.Password className='password-row' placeholder="Password" value={form.password} onChange={(e) => { onChangeForm(e, 'password'); }} />
        <Button type="primary" onClick={login}>Login</Button>
      </div>
    </PageWrapper>
  )
})
