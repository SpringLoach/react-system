import React, { memo, useState, useMemo, useRef, useEffect } from "react";

import { Modal, Input, Tooltip } from "antd";
import { PageWrapper, DiyContent } from "./style";

const baseFoodList = [
  "麻辣烫",
  "海底捞",
  "虾蟹煲",
  "红烧牛肉面",
  "兰州拉面",
  "桂林米粉",
  "炒河粉",
  "泡面",
  "鸡公煲",
  "火锅",
  "烧烤",
  "沙县小吃",
  "猪脚饭",
  "木桶饭",
  "烧腊",
  "喝粥",
  "披萨",
];

export default memo(() => {
  const eat = useRef(null);
  const [buttonText, setButtonText] = useState("随机抽取");
  const [target, setTarget] = useState(""); // 目标食物
  const [foodList, setFoodList] = useState(baseFoodList);
  const [isBegin, setIsBegin] = useState(true); // 开始抽取
  const [count, setCount] = useState(0); // 抽取次数
  const [interShowFood, setInterShowFood] = useState(); // 展示timer
  const [interSelect, setInterSelect] = useState(); // 展示timer

  const [diyFormView, setDiyFormView] = useState(false);
  const [diyList, setDiyList] = useState(""); // 自定义菜单

  const title = useMemo(() => {
    let title;
    let h = new Date().getHours;
    if (h <= 16) {
      title = "今天中午吃什么好？";
    } else {
      title = "晚餐时间到，就决定吃你了";
    }
    return title;
  }, []);

  const handleClick = () => {
    handleButtonText();
    if (isBegin) {
      showFood();
      setIsBegin(false);
      setInterSelect(setInterval(selectTarget, 50));
    } else {
      clearInterval(interShowFood);
      clearInterval(interSelect);
      setIsBegin(true);
    }
  };

  /* 随机抽取食物 */
  const selectTarget = () => {
    let food = foodList[Math.floor(Math.random() * foodList.length)];
    setTarget(food);
  };
  /* 处理按钮文字 */
  const handleButtonText = () => {
    setCount(count + 1);
    if ((count + 1) % 2 !== 0) {
      setButtonText("暂停");
      return;
    } else {
      setButtonText("再次抽取");
    }
  };
  /* 循环展示食物 */
  const showFood = () => {
    setInterShowFood(setInterval(showFoodItem, 100));
  };
  /* 展示单个食物 */
  const showFoodItem = () => {
    let x = Math.floor(Math.random() * 100 - 5) + "%";
    let y = Math.floor(Math.random() * 100 - 5) + "%";
    let food = foodList[Math.floor(Math.random() * foodList.length)];

    const span = document.createElement("span");
    span.innerHTML = food;
    span.style.position = "fixed";
    span.style.top = x;
    span.style.left = y;
    span.style.animation = "flash 2s forwards";
    span.style.fontSize = "20px";
    span.style.cursor = "default";

    let parentNode = eat.current;

    parentNode.appendChild(span);
    setTimeout(() => {
      parentNode.removeChild(span);
    }, 2000);
  };

  /* 随机背景颜色 */
  const initBackground = () => {
    let el = document.querySelector(".eat");
    let colorList = [
      "#f1939c",
      "#7a7374",
      "#c4cbcf",
      "#eeb8c3",
      "#3e3841",
      "#93b5cf",
      "#69a794",
      "#f7cfba",
    ];
    let randomColor = colorList[Math.floor(Math.random() * colorList.length)];
    el.style.backgroundColor = randomColor;
  };

  /* 唤出自定义菜单 */
  const showDiyForm = (e) => {
    console.log(e);
    // 如果正在抽取，暂停
    if (!isBegin) {
      handleClick();
    }
    setDiyFormView(true);
  };
  const changeDiyList = ({ target }) => {
    setDiyList(target.value);
  };
  /* 取消修改 */
  const handleCancelDiy = () => {
    setDiyFormView(false);
  };
  /* 确认修改 */
  const handleSureDiy = () => {
    setFoodList(diyList.split(" "));
    setDiyFormView(false);
  };

  useEffect(() => {
    initBackground();
  }, []);

  return (
    <PageWrapper className="eat" ref={eat}>
      <h3>{title}</h3>
      <p>{target}</p>
      <button
        className="extract-btn"
        onClick={handleClick}
        onDoubleClick={showDiyForm}
      >
        {buttonText}
      </button>
      {/* diy表单 */}
      <Modal
        width={700}
        open={diyFormView}
        closable={false}
        footer={null}
        bodyStyle={{ padding: "24px 24px 12px" }}
      >
        <DiyContent>
          <h3 className="title">自定义菜单</h3>
          <Input.TextArea
            placeholder="菜名间以空格作为分隔，如：番茄炒蛋 腐竹炒肉 鱼香肉丝"
            defaultValue={diyList}
            onChange={({ target }) => {
              setDiyList(target.value);
            }}
          />
          <div className="img-btn">
            <Tooltip title="想不出来" overlayStyle={{ fontSize: "12px" }}>
              <div className="btn-wrap">
                <img
                  src="https://z4a.net/images/2022/11/01/not-diy.jpg"
                  alt=""
                  onClick={handleCancelDiy}
                />
              </div>
            </Tooltip>
            <Tooltip
              title="决定好了(●ˇ∀ˇ●)"
              overlayStyle={{ fontSize: "12px" }}
            >
              <div className="btn-wrap">
                <img
                  src="https://z4a.net/images/2022/11/01/sure-diy.jpg"
                  alt=""
                  onClick={handleSureDiy}
                />
              </div>
            </Tooltip>
          </div>
        </DiyContent>
      </Modal>
    </PageWrapper>
  );
});
