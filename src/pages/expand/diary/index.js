import React, { memo, Fragment } from "react";

import { UngroupOutlined } from "@ant-design/icons";
import {
  PageWrapper,
  PageHeader,
  PageContent,
  ArticleWrap,
  Aside,
} from "./style";

export default memo(() => {
  const demo = [
    {
      type: "paragraph",
      value:
        "一年半前刚搬到这儿的时候，同伴们兴致勃勃地讨论着各种出游计划，大家建了个群，名字就叫“霓虹国出游计划委员会”。然而在接下来的日子里，有的人离职了，有的人刚入职，有的人生病了，渐渐地，这件事仿佛被忘记了，“出游计划委员会”也变成了日常聊天的地方。两个月前，有谁忽然提起了这件事，我才意识到时间已经过去那么久了。大家规划了下时间，又找人咨询了签证事宜，多番努力下，出游计划终于进行了下去。",
      title: "段落",
    },
    {
      info: "圣地巡礼这种事情我并不是很热衷，看到了熟悉的画面，不免还是有些微妙的感觉。和《言叶之庭》",
      src: "https://blog.ibireme.com/wp-content/uploads/2017/08/新宿御苑.jpg",
      tip: "",
      title: "图片",
      type: "img",
    },
    {
      type: "paragraph",
      value:
        "一个周五下午，我坐在桌前打字，忽然感觉肚子疼。忍了一阵子，提前下班去了医院，然而什么都没查出来。晚上痛得身子发抖，拜托朋友带我去了最近的大医院，中日友好医院。打了止痛针，拍了片，发现似乎是很严重的问题。值班医生是个看起来很精干的人，虽然稍显年轻，但能给人以某种信任感。",
      title: "段落",
    },
    { type: "title", value: "镜花水月", title: "普通分割线" },
    {
      info: "111",
      src: "https://z4a.net/images/2022/10/12/13.jpg",
      tip: "死神",
      title: "图片",
      type: "img",
    },
    { type: "divisionText", value: "流星易水", title: "文字分割线" },
  ];
  console.log(JSON.stringify(demo));

  return (
    <PageWrapper>
      <PageHeader>
        {/* <div className=""></div> */}
        <img
          className="logo"
          src="https://z4a.net/images/2022/11/03/LogoMakr-1U8snf.png"
          alt=""
        />
        <UngroupOutlined style={{ color: "#008cff" }} />
      </PageHeader>
      <PageContent>
        <ArticleWrap>
          <h1>记事</h1>
          <p className="info-row">
            由 <span className="info-tip">ibireme</span> | 2017-09-01 |{" "}
            <span className="info-tip">日常</span>
          </p>
          {demo.map((config, index) => {
            let inner = "";
            if (config.type === "title") {
              inner = <h2>{config.value}</h2>;
            }
            if (config.type === "paragraph") {
              inner = <p className="paragraph">{config.value}</p>;
            }
            if (config.type === "division") {
              inner = <div className="division"></div>;
            }
            if (config.type === "divisionText") {
              inner = (
                <div className="division-text">
                  <span className="division-item"></span>
                  流星易水
                  <span className="division-item"></span>
                </div>
              );
            }
            if (config.type === "img") {
              inner = (
                <>
                  {config.info && <p className="img-info">{config.info}</p>}
                  <img src={config.src} alt="" />
                  {config.tip && <div className="img-tip">{config.tip}</div>}
                </>
              );
            }
            return <Fragment key={index}>{inner}</Fragment>;
          })}
          {/* <p className="paragraph">
            一年半前刚搬到这儿的时候，同伴们兴致勃勃地讨论着各种出游计划，大家建了个群，名字就叫“霓虹国出游计划委员会”。然而在接下来的日子里，有的人离职了，有的人刚入职，有的人生病了，渐渐地，这件事仿佛被忘记了，“出游计划委员会”也变成了日常聊天的地方。两个月前，有谁忽然提起了这件事，我才意识到时间已经过去那么久了。大家规划了下时间，又找人咨询了签证事宜，多番努力下，出游计划终于进行了下去。
          </p>
          <p className="img-info">
            圣地巡礼这种事情我并不是很热衷，看到了熟悉的画面，不免还是有些微妙的感觉。和《言叶之庭》
          </p>
          <img
            src="https://blog.ibireme.com/wp-content/uploads/2017/08/新宿御苑.jpg"
            alt=""
          />
          <p className="paragraph">
            一个周五下午，我坐在桌前打字，忽然感觉肚子疼。忍了一阵子，提前下班去了医院，然而什么都没查出来。晚上痛得身子发抖，拜托朋友带我去了最近的大医院，中日友好医院。打了止痛针，拍了片，发现似乎是很严重的问题。值班医生是个看起来很精干的人，虽然稍显年轻，但能给人以某种信任感。
          </p>
          <h2>镜花水月</h2>
          <p className="paragraph">
            镜中花与水中月,比喻空幻飘渺诗有可解不可解,若镜花水月勿泥其迹可也。
          </p>
          <img
            src="https://blog.ibireme.com/wp-content/uploads/2017/08/龍安寺-方丈石庭2.jpg"
            alt=""
          />
          <div className="division"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>
          <h2>月季花</h2>
          <img
            src="https://blog.ibireme.com/wp-content/uploads/2017/08/龍安寺-苔藓.jpg"
            alt=""
          />
          <div className="img-tip">七月盛夏</div>
          <p className="paragraph">
            文化是一个国家、一个民族的灵魂。文化自信是一个国家、一个民族发展中最基本、最深沉、最持久的力量。
          </p>
          <div className="division-text">
            <span className="division-item"></span>
            流星易水
            <span className="division-item"></span>
          </div>
          <div className="paragraph">
            这次在殷墟遗址考察时，习近平总书记再次强调，中华优秀传统文化是我们党创新理论的“根”，我们推进马克思主义中国化时代化的根本途径是“两个结合”。
          </div> */}
        </ArticleWrap>
        <Aside>aside</Aside>
      </PageContent>
    </PageWrapper>
  );
});
