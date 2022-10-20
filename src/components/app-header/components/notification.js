import React, { memo, useEffect } from "react";
import { Tabs, List, Tag } from "antd";
import {
  StarOutlined,
  NotificationOutlined,
  SmileOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import {
  NotificationWrapper,
  CommonWrapper,
  IconWrapper,
  ContentWrapper,
  ToDoItem,
} from "./style";

const data = [
  {
    title: "请查看你的上周考勤统计",
    description: "5 年前",
    avatar: (
      <IconWrapper>
        <NotificationOutlined className="icon-tip icon-notification" />
      </IconWrapper>
    ),
  },
  {
    title: "小钉：欢迎新人入群",
    description: "2 年前",
    avatar: (
      <IconWrapper>
        <StarOutlined className="icon-tip icon-star" />
      </IconWrapper>
    ),
  },
  {
    title: "还原了 Ant Design Pro 的一些界面",
    description: "3 年前",
    avatar: (
      <IconWrapper>
        <LikeOutlined className="icon-tip icon-like" />
      </IconWrapper>
    ),
  },
  {
    title: "左侧图标用于区分不同的类型",
    description: "3 年前",
    avatar: (
      <IconWrapper>
        <SmileOutlined className="icon-tip icon-smile" />
      </IconWrapper>
    ),
  },
  {
    title: "账号绑定成功消息通知",
    description: "2 年前",
    avatar: (
      <IconWrapper>
        <NotificationOutlined className="icon-tip icon-notification" />
      </IconWrapper>
    ),
  },
];

const avatarStyle = {
  display: "inline-block",
  height: "30px",
  width: "30px",
  borderRadius: "50%",
};

const messageData = [
  {
    title: "王大哥 评论了你",
    description: "当然只有玩粑粑省时间",
    time: "2 分钟前",
    avatar: (
      <img
        src="https://z4a.net/images/2022/10/20/_20221020213213.jpg"
        alt=""
        style={avatarStyle}
      />
    ),
  },
  {
    title: "王大哥 回复了你",
    description: "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像",
    time: "5 小时前",
    avatar: (
      <img
        src="https://z4a.net/images/2022/10/20/_20221020213213.jpg"
        alt=""
        style={avatarStyle}
      />
    ),
  },
  {
    title: "系 @了你",
    description: "今天大规模核酸，晚上不要忘了做",
    time: "1 小时前",
    avatar: (
      <img
        src="https://z4a.net/images/2022/10/20/_20221020214527.jpg"
        alt=""
        style={avatarStyle}
      />
    ),
  },
];

const todoData = [
  {
    title: "任务名称",
    description: "任务需要在 2017-01-12 20:00 前启动",
    statusTip: "未开始",
    status: "default",
  },
  {
    title: "第三方紧急代码变更",
    description: "根鸟提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",
    statusTip: "马上到期",
    status: "error",
  },
  {
    title: "ABCD 版本发布",
    description: "指派龙族于 2017-01-09 前完成更新并发布",
    statusTip: "进行中",
    status: "processing",
  },
];

export default memo((props) => {
  const CommonContent = memo((p) => {
    return (
      <CommonWrapper>
        {p.content}
        <div className="footer-btn-group">
          <span className="footer-btn">清空通知</span>
          <span className="footer-btn">查看更多</span>
        </div>
      </CommonWrapper>
    );
  });

  const firstContent = (
    <ContentWrapper>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={item.avatar}
              title={<span>{item.title}</span>}
              description={
                <span style={{ fontSize: "10px" }}>{item.description}</span>
              }
            />
          </List.Item>
        )}
      />
    </ContentWrapper>
  );

  const secondContent = (
    <ContentWrapper>
      <List
        itemLayout="horizontal"
        dataSource={messageData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={item.avatar}
              title={<span>{item.title}</span>}
              description={
                <>
                  <span style={{ fontSize: "10px" }}>{item.description}</span>
                  <div style={{ fontSize: "10px", marginTop: "6px" }}>
                    {item.time}
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
    </ContentWrapper>
  );

  const thirdContent = (
    <ContentWrapper>
      <List
        itemLayout="horizontal"
        dataSource={todoData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <ToDoItem>
                  <span>{item.title}</span>
                  <Tag color={item.status}>{item.statusTip}</Tag>
                </ToDoItem>
              }
              description={
                <span style={{ fontSize: "10px" }}>{item.description}</span>
              }
            />
          </List.Item>
        )}
      />
    </ContentWrapper>
  );

  const items = [
    {
      label: "通知 (5)",
      key: "1",
      children: <CommonContent content={firstContent} />,
    },
    {
      label: "消息 (3)",
      key: "2",
      children: <CommonContent content={secondContent} />,
    },
    {
      label: "代办 (3)",
      key: "3",
      children: <CommonContent content={thirdContent} />,
    },
  ];

  useEffect(() => {
    function func(e) {
      const target = document.getElementsByClassName("notification-wrapper")[0];
      if (!e.path.includes(target)) {
        props.closeNotification();
      }
    }
    document.addEventListener("mousedown", func);
    return () => {
      document.removeEventListener("mousedown", func);
    };
  });

  return (
    <NotificationWrapper className="notification-wrapper">
      <Tabs items={items} />
    </NotificationWrapper>
  );
});
