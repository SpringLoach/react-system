import React, { memo } from "react";
import store from "@/store";
import { Redirect } from "react-router-dom";

const AuthComponent = memo(({ children }) => {
  const { token = undefined } = store.getState().getIn(["login", "userInfo"]);
  // return token ? <>{children}</> : <Redirect to="/login" />;
  return token ? <>{children}</> : <>{children}</>;
});

export default AuthComponent;
