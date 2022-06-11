import React, { useEffect, useState } from "react";
import { Drawer, Input, Button } from "antd";
import { PlusCircleFilled, PlusOutlined } from "@ant-design/icons";

import List from "@/pages/index/list";

import style from "@/pages/index/index.module.less";
import "@/pages/index/index.less";

const Index: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false); //显示抽屉，增加待办
  const [isAddIcon, setIsAddIcon] = useState<boolean>(true);
  const [todoContent, setToDoContent] = useState<string>();
  //打开抽屉，添加代办
  const handClickAddTodo = (): void => {
    setIsAddIcon(!isAddIcon);
    setVisible(!visible);
  };

  //关闭抽屉
  const onClose = (): void => {
    setIsAddIcon(!isAddIcon);
    setVisible(!visible);
  };

  //todolist添加的内容
  const handChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setToDoContent(event.target.value);
  };
  return (
    <div className={style.Container}>
      <List />
      <Drawer
        title="添加待办列表"
        width={"60%"}
        placement="right"
        onClose={onClose}
        visible={visible}
        closable={false}
        zIndex={20000}
      >
        <Input className={style.CardNameBox} placeholder="请输入内容" onChange={handChangeValue} />
        <Button className={style.AddCardBtn} type="primary" shape="round" icon={<PlusOutlined />} size={'large'}>
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
