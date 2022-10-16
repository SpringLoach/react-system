import React from "react";
import { Redirect } from "react-router-dom";

import Login from "@/pages/login";
import Main from "@/pages/main";
import Biology from "@/pages/main/base/biology";
import Hero from "@/pages/main/base/hero";

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
];

export default routes;
