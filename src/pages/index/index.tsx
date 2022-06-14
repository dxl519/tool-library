import React, { useEffect, useState, useMemo } from "react";
import { Drawer, Input, Button } from "antd";
import { PlusCircleFilled, PlusOutlined } from "@ant-design/icons";
import List from "@/pages/index/list";
import { apiTest } from "@/http/apiConfig";

import { Grouping } from "@/pages/index/type";

import style from "@/pages/index/index.module.less";
import "@/pages/index/index.less";

const Index: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false); //显示抽屉，增加待办
  const [isAddIcon, setIsAddIcon] = useState<boolean>(true);  //是否显示增加按钮
  const [todoContent, setToDoContent] = useState<string>(); //输入todo卡片列表名称
  const [todoList, setToDoList] = useState<Grouping[]>([]); //todo卡片列表

  useEffect(() => {
    getTest();
  }, []);

  const getTest = async () => {
    const res = await apiTest();
    setToDoList(res.data.todoListTest);
  };

  //抽离公共逻辑
  const statusIconVisible = () => {
    setIsAddIcon(!isAddIcon);
    setVisible(!visible);
    setToDoContent("");
  };

  //打开抽屉，添加代办
  const handClickAddTodo = (): void => {
    statusIconVisible();
  };
  const handKeyDownAddCard = (event: React.KeyboardEvent): void => {
    if (event.nativeEvent.keyCode == 13) {
      const newList = [
        {
          id: 4,
          groupName: "测试3",
          children: [
            {
              id: 8,
              content: "内容3",
            },
            {
              id: 9,
              content: "内容3",
            },
          ],
        },
      ];
      setToDoList([...newList, ...todoList]);
      statusIconVisible();
    }
  };
  //关闭抽屉
  const onClose = (): void => {
    statusIconVisible();
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

  const ListElement = useMemo(() => {
    return <List todoList={todoList} />;
  }, [todoList]);

  // const
  return (
    <div className={style.Container}>
      {ListElement}
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
          value={todoContent}
          onChange={handChangeValue}
          onKeyDown={handKeyDownAddCard}
        />
        <Button
          className={style.AddCardBtn}
          onClick={handClickAddCard}
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
