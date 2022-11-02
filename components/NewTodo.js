import styles from "../styles/NewTodo.module.css";

import Checkbox from "./Checkbox";
import { Check, Cross, Day, Night } from "../components/svgs";

import { useSelector, useDispatch } from "react-redux";
import { create } from "../slices/todoSlice";
import { useState } from "react";

import CheckBox from "../components/Checkbox";

const NewTodo = ({ todo }) => {
  const [text, setText] = useState("Create a new todo...");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = () => {
    if (value !== "") {
      dispatch(create({ todo: { todo: value } }));
      setValue("");
    }
  };

  const handlInputFocus = (action) => {
    setText("Currently typing");
  };
  const handlInputBlur = (action) => {
    setText("New todo here");
  };
  return (
    <div className={`itembox ${styles.itemBox}`}>
      <div className={styles.item}>
        <CheckBox onChange={handleOnChange} />
        <label className={styles.label_text}>{text}</label>
        <input
          className={styles.input}
          type="text"
          onFocus={() => handlInputFocus()}
          onBlur={() => handlInputBlur()}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
          value={value}
        ></input>
      </div>
    </div>
  );
};

export default NewTodo;
