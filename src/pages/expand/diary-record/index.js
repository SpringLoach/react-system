import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { list } from "@/api/diary/diary";

import { Button, Radio } from "antd";
import PhoneHeader from "@/components/phone-header"
import { PageWrapper, PageContent } from "./style";

const a = [
  { id: 7, user_id: 17, title: '测试', type: '感悟' },
  { id: 8, user_id: 17, title: '测试', type: '感悟' },
  { id: 9, user_id: 17, title: '测试', type: '感悟' },
  { id: 10, user_id: 17, title: '测试', type: '感悟' },
  { id: 11, user_id: 17, title: '测试', type: '感悟' },
  { id: 12, user_id: 17, title: '测试', type: '感悟' },
  { id: 13, user_id: 17, title: '测试', type: '感悟' },
  { id: 1, user_id: 17, title: '测试', type: '感悟' },
  { id: 2, user_id: 17, title: '测试', type: '感悟' },
  { id: 3, user_id: 17, title: '测试', type: '感悟' },
  { id: 4, user_id: 17, title: '测试', type: '感悟' },
  { id: 5, user_id: 17, title: '测试', type: '感悟' },
  { id: 6, user_id: 17, title: '测试', type: '感悟' },
  { id: 14, user_id: 17, title: '测试', type: '感悟' },
  { id: 15, user_id: 17, title: '测试', type: '感悟' },
  { id: 16, user_id: 17, title: '测试', type: '感悟' },
  { id: 17, user_id: 17, title: '测试', type: '感悟' },
  { id: 18, user_id: 17, title: '测试', type: '感悟' },
  { id: 19, user_id: 17, title: '测试', type: '感悟' },
  { id: 20, user_id: 17, title: '测试', type: '感悟' },
  { id: 21, user_id: 17, title: '测试', type: '感悟' },
  { id: 22, user_id: 17, title: '测试', type: '感悟' },
  { id: 23, user_id: 17, title: '测试', type: '感悟' },
]

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
      <PhoneHeader title="我的日记" />
      <PageContent>
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
      </PageContent>
    </PageWrapper>
  );
});
