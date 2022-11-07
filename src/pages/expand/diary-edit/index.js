import React, { memo, useEffect, useState } from "react";
import { parseURLToObj } from "@/utils/common";
import { query, edit, add } from "@/api/diary/diary";
import { useHistory } from "react-router-dom";

import {
  Popconfirm,
  Input,
  Dropdown,
  Menu,
  message,
  Button,
  Radio,
} from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import PhoneHeader from "@/components/phone-header"
import { PageWrapper, ConfigItemWrapper, PageFooter } from "./style";

const TitleConfig = memo(({ item, changeConfig }) => {
  const onChange = (e) => {
    changeConfig({
      ...item,
      value: e.currentTarget.value,
    });
  };
  return (
    <Input
      placeholder="请输入标题"
      defaultValue={item.value}
      onChange={onChange}
    />
  );
});

const DivisionConfig = memo(({ item, changeConfig }) => {
  const onChange = (e) => {
    changeConfig({
      ...item,
      value: e.currentTarget.value,
    });
  };
  return (
    <Input
      placeholder="请输入分割文字"
      defaultValue={item.value}
      onChange={onChange}
    />
  );
});

const ImgConfig = memo(({ item, changeConfig }) => {
  const onChange = (e, type) => {
    changeConfig({
      ...item,
      [type]: e.currentTarget.value,
    });
  };
  const onClick = () => {
    changeConfig({
      ...item,
      src: "https://z4a.net/images/2022/10/12/13.jpg",
    });
  };
  return (
    <>
      <Button type="primary" style={{ marginBottom: "10px" }} onClick={onClick}>
        使用占位路径
      </Button>
      <Input
        placeholder="图片路径"
        value={item.src}
        onChange={(e) => {
          onChange(e, "src");
        }}
      />
      <Input.TextArea
        rows={4}
        style={{ marginTop: "10px" }}
        placeholder="图片说明（可选）"
        autoSize={{ minRows: 4 }}
        defaultValue={item.info}
        onChange={(e) => {
          onChange(e, "info");
        }}
      />
      <Input
        placeholder="图片提示（可选）"
        style={{ marginTop: "10px" }}
        defaultValue={item.tip}
        onChange={(e) => {
          onChange(e, "tip");
        }}
      />
    </>
  );
});

const ParagraphConfig = memo(({ item, changeConfig }) => {
  const onChange = (e) => {
    console.log(e.currentTarget.value, item);
    changeConfig({
      ...item,
      value: e.currentTarget.value,
    });
  };
  return (
    <Input.TextArea
      rows={4}
      placeholder="请输入段落内容"
      autoSize={{ minRows: 4 }}
      value={item.value}
      onChange={onChange}
    />
  );
});

const items = [
  {
    label: (
      <div style={{ fontSize: "16px", padding: "2px 15px 2px 15px" }}>标题</div>
    ),
    key: "title",
  },
  {
    type: "divider",
  },
  {
    label: (
      <div style={{ fontSize: "16px", padding: "2px 15px 2px 15px" }}>段落</div>
    ),
    key: "paragraph",
  },
  {
    type: "divider",
  },
  {
    label: (
      <div style={{ fontSize: "16px", padding: "2px 15px 2px 15px" }}>图片</div>
    ),
    key: "img",
  },
  {
    type: "divider",
  },
  {
    label: (
      <div style={{ fontSize: "16px", padding: "2px 15px 2px 15px" }}>
        普通分割线
      </div>
    ),
    key: "division",
  },
  {
    type: "divider",
  },
  {
    label: (
      <div style={{ fontSize: "16px", padding: "2px 15px 2px 15px" }}>
        文字分割线
      </div>
    ),
    key: "divisionText",
  },
];

export default memo((props) => {
  const [mode, setMode] = useState("create");
  const [config, setConfig] = useState([
    {
      type: "paragraph",
      value: "",
      title: "段落",
    },
  ]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("日常");
  const [showBtn, setShowBtn] = useState(true);
  const history = useHistory();

  const queryObj = parseURLToObj(props.location.search);
  if (queryObj.id && mode === "create") {
    setMode("edit");
  }

  useEffect(() => {
    if (mode === "edit") {
      initRecord();
    }
  }, []);

  const initRecord = async () => {
    const { data } = await query({ id: queryObj.id });
    if (!data) return;
    console.log(111, data);
    setConfig(JSON.parse(data.config));
    setTitle(data.title);
    setType(data.type);
  };

  const onClickMenuItem = ({ key }, index) => {
    const map = {
      title: {
        type: "title",
        value: "",
        title: "次级标题",
      },
      paragraph: {
        type: "paragraph",
        value: "",
        title: "段落",
      },
      division: {
        type: "division",
        title: "普通分割线",
      },
      divisionText: {
        type: "divisionText",
        value: "",
        title: "文字分割线",
      },
      img: {
        type: "img",
        src: "",
        info: "",
        tip: "",
        title: "图片",
      },
    };
    console.log(key, index);
    config.splice(index + 1, 0, map[key]);
    setConfig([...config]);
  };
  const menu = (index) => {
    return (
      <Menu
        items={items}
        onClick={(e) => {
          onClickMenuItem(e, index);
        }}
      />
    );
  };

  const changeConfigItem = (index) => {
    return (target) => {
      console.log("修改---", target);
      config[index] = target;
      setConfig([...config]);
    };
  };

  const deleteConfirm = (index) => {
    if (config.length <= 1) {
      message.info("需要存在至少一条配置");
      return;
    }
    config.splice(index, 1);
    setConfig([...config]);
  };

  const save = async () => {
    if (mode === "edit") {
      editRecord();
    } else {
      createRecord();
    }
  };
  const createRecord = async () => {
    const params = {
      title,
      type,
      config,
    };
    const { data } = await add(params);
    if (!data) return;
    message.success("新建成功");
    setTimeout(() => {
      history.goBack();
    }, 1500);
  };
  const editRecord = async () => {
    const params = {
      title,
      type,
      config,
      id: queryObj.id,
    };
    const { data } = await edit(params);
    if (!data) return;
    message.success("编辑成功");
    setTimeout(() => {
      history.goBack();
    }, 1500);
  };

  // 动态显示按钮
  var clientHeight =
    document.documentElement.clientHeight || document.body.clientHeight;
  const resize = () => {
    var nowClientHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    if (clientHeight > nowClientHeight) {
      setShowBtn(false);
    } else {
      setShowBtn(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <PageWrapper>
      <PhoneHeader title="编辑博客" />
      <h2>博客标题</h2>
      <Input
        style={{ marginBottom: "20px" }}
        placeholder="请输入标题"
        value={title}
        onChange={(e) => {
          setTitle(e.currentTarget.value);
        }}
      />

      <h2>博客类型</h2>
      <Radio.Group
        style={{ marginBottom: "20px" }}
        onChange={(e) => {
          setType(e.target.value);
        }}
        value={type}
      >
        <Radio value="日常">日常</Radio>
        <Radio value="感悟">感悟</Radio>
        <Radio value="游戏">游戏</Radio>
      </Radio.Group>

      <h2>博客内容</h2>
      {config.map((item, index) => {
        const map = {
          title: (
            <TitleConfig item={item} changeConfig={changeConfigItem(index)} />
          ),
          paragraph: (
            <ParagraphConfig
              item={item}
              changeConfig={changeConfigItem(index)}
            />
          ),
          img: <ImgConfig item={item} changeConfig={changeConfigItem(index)} />,
          division: null,
          divisionText: (
            <DivisionConfig
              item={item}
              changeConfig={changeConfigItem(index)}
            />
          ),
        };
        return (
          <ConfigItemWrapper key={index}>
            <div className="config-top">
              <div className="config-title">{item.title}</div>
              <div id="config-btn-group">
                <Popconfirm
                  placement="bottomRight"
                  getPopupContainer={() =>
                    document.getElementById("config-btn-group")
                  }
                  title="确认删除?"
                  onConfirm={() => {
                    deleteConfirm(index);
                  }}
                  okText="是"
                  cancelText="否"
                >
                  <MinusCircleOutlined
                    className="dec-icon"
                    style={{ fontSize: "20px" }}
                  />
                </Popconfirm>
                <Dropdown overlay={menu(index)}>
                  <PlusCircleOutlined
                    className="inc-icon"
                    style={{ fontSize: "20px" }}
                  />
                </Dropdown>
                {/*  */}
              </div>
            </div>
            <div>{map[item.type]}</div>
          </ConfigItemWrapper>
        );
      })}
      {showBtn && <PageFooter onClick={save}>保存</PageFooter>}
    </PageWrapper>
  );
});
