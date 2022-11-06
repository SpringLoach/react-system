import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { list } from "@/api/diary/diary";

import { Button, Radio } from "antd";
import { PageWrapper } from "./style";

export default memo(() => {
  const [blogList, setBlogList] = useState([]);
  const [mode, setMode] = useState("view");
  const history = useHistory();

  useEffect(() => {
    initList();
  }, []);

  const initList = async () => {
    const { data } = await list();
    if (!data) return;
    setBlogList(data);
  };

  const create = () => {
    history.push("/diary-edit");
  };
  const skipEdit = (id) => {
    if (mode === "view") {
      history.push(`/diary?id=${id}`);
    } else {
      history.push(`/diary-edit?id=${id}`);
    }
  };
  return (
    <PageWrapper>
      <Button type="primary" onClick={create}>
        新增
      </Button>
      <h3 style={{ marginTop: "20px" }}>操作模式</h3>
      <Radio.Group
        onChange={(e) => {
          setMode(e.target.value);
        }}
        value={mode}
      >
        <Radio value="view">查看</Radio>
        <Radio value="edit">编辑</Radio>
      </Radio.Group>
      <div className="blog-list">
        {blogList.map((blog) => {
          return (
            <div
              className="blog-item"
              key={blog.id}
              onClick={() => {
                skipEdit(blog.id);
              }}
            >
              {blog.title} - {blog.type}
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
});
