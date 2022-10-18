import React from "react";
import { Redirect } from "react-router-dom";

import Login from "@/pages/login";
import Main from "@/pages/main";
import Biology from "@/pages/main/base/biology";
import Hero from "@/pages/main/base/hero";
import Settings from "@/pages/main/account/settings";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/login" />,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/base",
    component: Main,
    routes: [
      {
        path: "/base",
        exact: true,
        render: () => <Redirect to="/base/biology" />,
      },
      {
        path: "/base/biology",
        component: Biology,
      },
      {
        path: "/base/hero",
        component: Hero,
      },
    ],
  },
  {
    path: "/account",
    component: Main,
    routes: [
      {
        path: "/account",
        exact: true,
        render: () => <Redirect to="/account/settings" />,
      },
      {
        path: "/account/settings",
        component: Settings,
      },
    ],
  },
];

export default routes;
