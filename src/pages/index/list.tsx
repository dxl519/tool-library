import { useState } from "react";
import { EllipsisOutlined } from "@ant-design/icons";

import style from "@/pages/index/index.module.less";
import "@/pages/index/index.less";

type Grouping = {
  id: number;
  groupName: string;
};

const List: React.FC = () => {
  // const [todoList, setToDoList] = useState<Grouping>();

  const todoList = [
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
  return (
    <div className={style.boxContainer}>
      {todoList.map((item) => {
        return (
          <div className={style.todoListContainer} key={item.groupName}>
            <div className={style.todoListContainerTop}>
              <h4 >{item.groupName}</h4>
              <EllipsisOutlined className={style.Extensions} />
            </div>
            {item.children.map((childrenItem: any) => {
              return (
                <div className={style.todoListContainerBottom}>
                  {childrenItem.content}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default List;
