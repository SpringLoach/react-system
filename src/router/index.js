import React from "react";
import { Redirect } from "react-router-dom";

import Login from "@/pages/login";
import Main from "@/pages/main";
import Biology from "@/pages/main/base/biology";
import Hero from "@/pages/main/base/hero";
import StepForm from "@/pages/main/base/step-form";
import Center from "@/pages/main/account/center";
import Settings from "@/pages/main/account/settings";
import FooterConfig from "@/pages/main/account/footer-config";
import User from "@/pages/main/system/user";
import MyRight from "@/pages/main/system/my-right";
import Eat from "@/pages/expand/eat";
import Diary from "@/pages/expand/diary";
import DiaryEdit from "@/pages/expand/diary-edit";
import DiaryRecord from "@/pages/expand/diary-record";
import PhoneLogin from "@/pages/phone/login"
import PhoneCenter from "@/pages/phone/center"

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
      {
        path: "/system/my-right",
        component: MyRight,
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
        render: () => <Redirect to="/expand/diary-record" />,
      },
      {
        path: "/expand/diary-record",
        component: DiaryRecord,
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
  {
    path: "/diary-record",
    component: DiaryRecord,
  },
  {
    path: "/phone/login",
    component: PhoneLogin,
  },
  {
    path: "/phone/center",
    component: PhoneCenter,
  }
];

export default routes;
