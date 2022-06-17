import React, { useEffect, useState } from "react";
import { Drawer, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

import List from "@/pages/index/list";

import style from "@/pages/index/index.module.less";
import "@/pages/index/index.less";


const Index: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false); //显示抽屉，增加待办
  const [isAddIcon, setIsAddIcon] = useState<boolean>(true);
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
    console.log(event);
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
        <Input placeholder="请输入内容" onChange={handChangeValue} />
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
