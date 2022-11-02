import styles from "../styles/ItemBox.module.css";

import Checkbox from "./Checkbox";
import { Check, Cross, Day, Night } from "../components/svgs";

import { useSelector, useDispatch } from "react-redux";
import { create, remove, changeState } from "../slices/todoSlice";
import { useState } from "react";

const ItemBox = ({ todo }) => {
  const [hiddenItem, setHidden] = useState(true);
  const dispatch = useDispatch();
  const handleChangeState = () => {
    dispatch(changeState({ id: todo.id }));
  };
  const handleRemove = () => {
    dispatch(remove({ id: todo.id }));
  };
  return (
    <div
      className={"itembox " + styles.itemBox}
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      <div className={styles.item}>
        <Checkbox state={todo.state} onChange={handleChangeState} />

        <div className={styles.label_text}>
          <label
            style={{
              textDecoration: todo.state === 1 ? "line-through" : "none",
              color: todo.state === 1 ? "grey" : "",
            }}
          >
            {todo.todo}
          </label>
        </div>
        <div
          className={styles.cross}
          style={{
            display: hiddenItem === true ? "none" : "block",
            marginLeft: "auto",
            marginRight: "5pt",
          }}
        >
          <Cross onClick={handleRemove} />
        </div>
      </div>
    </div>
  );
};

export default ItemBox;
