import React, { useEffect, useState } from "react";
import { Drawer, Input, Button } from "antd";
import { PlusCircleFilled, PlusOutlined } from "@ant-design/icons";
import { Grouping } from "@/pages/index/type";
import List from "@/pages/index/list";

import style from "@/pages/index/index.module.less";
import "@/pages/index/index.less";
const todoListTest = [
  {
    id: 1,
    groupName: "测试1",
    children: [
      {
        id: 1,
        content: "内容1",
      },
      {
        id: 2,
        content: "内容2",
      },
    ],
  },
  {
    id: 2,
    groupName: "测试2",
    children: [
      {
        id: 3,
        content: "内容1",
      },
      {
        id: 4,
        content: "内容2",
      },
    ],
  },
];
const Index: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false); //显示抽屉，增加待办
  const [isAddIcon, setIsAddIcon] = useState<boolean>(true);
  const [todoContent, setToDoContent] = useState<string>();
  const [todoList, setToDoList] = useState<Grouping[]>();
  useEffect(() => {
    setToDoList([...todoListTest]);
  }, []);
  //打开抽屉，添加代办
  const handClickAddTodo = (): void => {
    setIsAddIcon(!isAddIcon);
    setVisible(!visible);
  };

  const handKeyDownAddCard = (
    event: KeyboardEvent
  ): void => {
    console.log(event)
  };
  //关闭抽屉
  const onClose = (): void => {
    setIsAddIcon(!isAddIcon);
    setVisible(!visible);
  };

  //todolist输入的内容
  const handChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setToDoContent(event.target.value);
  };

  //点击添加todo卡片
  const handClickAddCard = (): void => {
    console.log("添加卡片");
  };

  return (
    <div className={style.Container}>
      <List todoList={todoListTest} />
      <Drawer
        title="添加待办列表"
        width={"60%"}
        placement="right"
        onClose={onClose}
        visible={visible}
        closable={false}
        zIndex={20000}
      >
        <Input
          className={style.CardNameBox}
          placeholder="请输入内容"
          onChange={handChangeValue}
        />
        <Button
          className={style.AddCardBtn}
          onClick={handClickAddCard}
          onKeyDown={handKeyDownAddCard}
          type="primary"
          shape="round"
          icon={<PlusOutlined />}
          size={"large"}
        >
          添加卡片
        </Button>
      </Drawer>
      {isAddIcon ? (
        <PlusCircleFilled
          className={style.addTodo}
          onClick={handClickAddTodo}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Index;
