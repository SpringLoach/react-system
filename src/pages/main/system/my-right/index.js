import React, { memo, useState, useEffect } from "react";

import { right, viewRight } from "@/api/diary/diary";

import { Card, Input, Button, message } from "antd";
import { PageWrapper } from "./style";

export default memo(() => {
  const [blogNameList, setBlogNameList] = useState();

  useEffect(() => {
    initRightList();
  }, []);

  const initRightList = async () => {
    const { data } = await viewRight();
    if (!data) return;
    setBlogNameList(data.name);
  };

  const editBlog = async () => {
    console.log(blogNameList);
    const { data } = await right({ nameList: blogNameList });
    if (!data) return;
    message.success("修改成功");
  };
  return (
    <PageWrapper>
      <Card>
        <h3>博客（日记）模块</h3>
        <Input.TextArea
          rows={4}
          autoSize={{ minRows: 4 }}
          style={{ marginBottom: "16px" }}
          placeholder="逗号分隔的账号列表"
          value={blogNameList}
          onChange={(e) => {
            setBlogNameList(e.currentTarget.value);
          }}
        />
        <div style={{ textAlign: "right" }}>
          <Button type="primary" onClick={editBlog}>
            修改
          </Button>
        </div>
      </Card>
    </PageWrapper>
  );
});
