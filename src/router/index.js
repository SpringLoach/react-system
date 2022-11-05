import React from "react";
import { Redirect } from "react-router-dom";

import Login from "@/pages/login";
import Main from "@/pages/main";
import Biology from "@/pages/main/base/biology";
import Hero from "@/pages/main/base/hero";
import StepForm from "@/pages/main/base/step-form";
import Center from "@/pages/main/account/center";
import Settings from "@/pages/main/account/settings";
import DiaryList from "@/pages/main/expand/diary";
import FooterConfig from "@/pages/main/account/footer-config";
import User from "@/pages/main/system/user";
import Eat from "@/pages/expand/eat";
import Diary from "@/pages/expand/diary";
import DiaryEdit from "@/pages/expand/diary-edit";

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
      {
        path: "/base/step-form",
        component: StepForm,
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
      {
        path: "/account/center",
        component: Center,
      },
      {
        path: "/account/footer-config",
        component: FooterConfig,
      },
    ],
  },
  {
    path: "/system",
    component: Main,
    routes: [
      {
        path: "/system",
        exact: true,
        render: () => <Redirect to="/system/user" />,
      },
      {
        path: "/system/user",
        component: User,
      },
    ],
  },
  {
    path: "/expand",
    component: Main,
    routes: [
      {
        path: "/expand",
        exact: true,
        render: () => <Redirect to="/expand/diaryList" />,
      },
      {
        path: "/expand/diary-list",
        component: DiaryList,
      },
    ],
  },
  {
    path: "/eat",
    component: Eat,
  },
  {
    path: "/diary",
    component: Diary,
  },
  {
    path: "/diary-edit",
    component: DiaryEdit,
  },
];

export default routes;
