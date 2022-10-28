import React, { memo, useState } from 'react'

import { Card, Table, Button, Image, Tag } from "antd"
import { CrownOutlined } from "@ant-design/icons"
import TableController from "@/components/table-controller"
import Search from "./components/search"
import EditRoleModal from "./components/edit-role"
import { ConentWrapper } from "./style"

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: "头像",
    dataIndex: "faceImg",
    key: "faceImg",
    align: "center",
    width: "100px",
    render: (_, record) => (
      <>
        <Image width={80} src={_} preview={{ src: record.heroImg }} />
      </>
    ),
  },
  {
    title: "账号",
    dataIndex: "cname",
    key: "cname",
    align: "center",
  },
  {
    title: "姓名",
    dataIndex: "title",
    key: "title",
    align: "center",
  },
  {
    title: "角色",
    dataIndex: "occupation",
    key: "occupation",
    align: "center",
  },
  {
    title: "创建时间",
    dataIndex: "occupation",
    key: "occupation",
    align: "center",
  },
  {
    title: "操作",
    dataIndex: "operate",
    key: "operate",
    align: "center",
    width: "120px",
    render: (_, record) => (
      <>
        <EditRoleModal />
      </>
    ),
  },
];

export default memo(() => {
  const [extraAttr, setExtraAttr] = useState({ showHeader: true, size: 'default' });

  const changeExtraAttr = (e) => {
    setExtraAttr(e)
  }

  const Main = memo(() => {
    return (
      <>
        <TableController extraAttr={extraAttr} changeExtraAttr={changeExtraAttr} />
        <Table
          dataSource={[]}
          columns={columns}
          rowKey="cname"
          pagination={false}
          {...extraAttr}
        />
      </>
    );
  });
  return (
    <ConentWrapper>
      <Card title="用户管理列表">
        {/* <Card title={true ? <>用户管理列表<CrownOutlined style={{ marginLeft: '6px', color: 'gold' }} /></> : '用户管理列表'}> */}
        <Search />
        <Main />
      </Card>
    </ConentWrapper>
  )
})