import React, { memo, useState } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { loginInit } from "@/utils/user";
import { ConfigProvider } from "antd";
import zh_CN from "antd/es/locale/zh_CN";
import en_US from "antd/es/locale/en_US";
import zh_HK from "antd/es/locale/zh_HK";

import 'moment/locale/zh-cn'

import routes from "./router";
// 引入以支持共享
import store from "./store";

import { HashRouter } from "react-router-dom";

const langList = {
  zh_CN: zh_CN,
  zh_HK: zh_HK,
  en_US: en_US,
};

const UserContext = React.createContext();

export { UserContext };

export default memo(function App() {
  const [lang, setLang] = useState("zh_CN");
  const func = (o) => {
    setLang(o);
  };
  return (
    <Provider store={store}>
      <ConfigProvider locale={langList[lang]}>
        <UserContext.Provider value={{ func, lang }}>
          <HashRouter setLang={setLang}>{renderRoutes(routes)}</HashRouter>
        </UserContext.Provider>
      </ConfigProvider>
    </Provider>
  );
});

// 状态初始化
loginInit();
