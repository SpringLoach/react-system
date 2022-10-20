import React, { memo } from "react";
import "@/assets/css/layout.css";
import { useSelector, shallowEqual } from "react-redux";
import { Layout } from "antd";
import { renderRoutes } from "react-router-config";

import AppHeader from "@/components/app-header";
import AppAside from "@/components/app-aside";
import AppFooter from "@/components/app-footer";
import AuthComponent from "@/components/auth-component";
const { Header, Sider, Content } = Layout;

const Main = memo((props) => {
  // 获取 redux 中的状态、dispatch方法
  const { collapsed } = useSelector((state) => {
    return {
      collapsed: state.getIn(["main", "collapsed"]),
    };
  }, shallowEqual);
  return (
    <AuthComponent>
      <Layout className="layout" style={{ maxHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} trigger={null}>
          <AppAside />
        </Sider>
        <Layout>
          <Header>
            <AppHeader />
          </Header>
          <Content className="global-content" style={{ overflow: "auto" }}>
            {renderRoutes(props.route.routes)}
            <AppFooter />
          </Content>
        </Layout>
      </Layout>
    </AuthComponent>
  );
});

export default Main;
