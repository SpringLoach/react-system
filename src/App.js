import React, { memo } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { loginInit } from "@/utils/user";

import routes from "./router";
// 引入以支持共享
import store from "./store";

import { HashRouter } from "react-router-dom";

import ConfigComponent from "@/components/config-component"


export default memo(function App() {
  return (
    <Provider store={store}>
      <ConfigComponent>
        <HashRouter>{renderRoutes(routes)}</HashRouter>
      </ConfigComponent>
    </Provider>
  );
});

// 状态初始化
loginInit();
