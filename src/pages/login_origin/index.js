import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { handleUserLogin } from "@/pages/login/store/actionCreators";

import { NavLink } from "react-router-dom";
import { PageWrapper, Center } from "./style";

const login = memo((props) => {
  // redux
  const dispatch = useDispatch();
  async function toLogin() {
    await dispatch(handleUserLogin());
    props.history.push("/base");
  }
  return (
    <PageWrapper>
      <div className="wrapper"></div>
      <div className="logo"></div>
      <Center>
        <div className="slogan">
          <div>
            顾客
            <br />
            增长引擎欢迎您！
          </div>
          <div
            style={{
              width: "256px",
              height: "8px",
              background: "rgb(255, 255, 255)",
              marginTop: "17px",
            }}
          ></div>
        </div>
        <form className="form">
          <div className="form-title">登录</div>
          <div
            style={{ marginBottom: "20px" }}
            className={"input-wrap account"}
          >
            <input className="input-item" />
          </div>
          <div className={"input-wrap password"}>
            <input className="input-item" type="password" autoComplete="true" />
          </div>
          <div style={{ textAlign: "right", marginTop: "2px" }}>
            <span className="link">忘记密码?</span>
          </div>
          <NavLink exact to="base">
            <button className="login-btn">登 录</button>
          </NavLink>
          <span className="link" onClick={(e) => toLogin()}>
            注册账号
          </span>
        </form>
      </Center>
      <div className="copyright">
        Copyright @ 2022 Hangzhou miya information technology co., LTD. All
        rights reserved
      </div>
    </PageWrapper>
  );
});

export default login;
