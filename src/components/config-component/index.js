import React, { memo, useState } from "react";
import { ConfigProvider } from "antd";
import zh_CN from "antd/es/locale/zh_CN";
import en_US from "antd/es/locale/en_US";
import zh_HK from "antd/es/locale/zh_HK";

import 'moment/locale/zh-hk'
import 'moment/locale/zh-cn'

const langList = {
  zh_CN: zh_CN,
  zh_HK: zh_HK,
  en_US: en_US,
};

const UserContext = React.createContext();

export { UserContext };

const ConfigComponent = memo(({ children }) => {
  const [lang, setLang] = useState("zh_CN");
  const func = (o) => {
    setLang(o);
  };
  return (
    <ConfigProvider locale={langList[lang]}>
      <UserContext.Provider value={{ func, lang }}>
        <>{children}</>
      </UserContext.Provider>
    </ConfigProvider>
  );
});

export default ConfigComponent;
