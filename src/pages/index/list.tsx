import { useState, useMemo } from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { Grouping, ListChildren } from "@/pages/index/type";
import style from "@/pages/index/index.module.less";
import "@/pages/index/index.less";

const List = (props: any) => {
  const { todoList } = props;

  return <div className={style.boxContainer}>
      {todoList.map((item: Grouping) => (
        <div className={style.todoListContainer} key={item.groupName}>
          <div className={style.todoListContainerTop}>
            <h4 className={style.cardTitle}>{item.groupName}</h4>
            <EllipsisOutlined className={style.Extensions} />
          </div>
          {item.children.map((childrenItem: ListChildren) => (
            <div
              className={style.todoListContainerBottom}
              key={childrenItem.id}
            >
              {childrenItem.content}
            </div>
          ))}
        </div>
      ))}
    </div>;
};

export default List;
