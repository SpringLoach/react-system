import React, { memo, useEffect } from "react";
import { Tabs, List } from "antd";
import {
  StarOutlined,
  DingdingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { NotificationWrapper, CommonWrapper } from "./style"

// <PlusOutlined />
const data = [
  {
    title: "绑定淘宝",
    description: "5年前",
    avatar: <SmileOutlined />,
  },
  {
    title: "绑定支付宝",
    description: "当前未绑定支付宝账号",
    avatar: <StarOutlined />,
  },
  {
    title: "绑定钉钉",
    description: "当前未绑定钉钉账号",
    avatar: <DingdingOutlined className="dingding" />,
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
    )
  })

  const firstContent = (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={item.avatar}
            title={<span>{item.title}</span>}
            description={<span style={{ color: 'red' }}>item.description</span>}
          />
        </List.Item>
      )}
    />
  )

  const items = [
    { label: '通知 (4)', key: '1', children: <CommonContent content={firstContent} /> },
    { label: '消息 (3)', key: '2', children: <CommonContent content="内容2" /> },
    { label: '代办 (4)', key: '3', children: <CommonContent content="内容3" /> },
  ];

  useEffect(() => {
    function func(e) {
      const target = document.getElementsByClassName('notification-wrapper')[0]
      if (!e.path.includes(target)) {
        props.closeNotification();
      }
    };
    document.addEventListener('mousedown', func)
    return () => {
      document.removeEventListener('mousedown', func)
    }
  })

  return (
    <NotificationWrapper className="notification-wrapper">
      <Tabs items={items} />
    </NotificationWrapper>
  );
});
