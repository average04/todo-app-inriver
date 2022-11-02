import styles from "../styles/ItemNav.module.css";

import { useSelector, useDispatch } from "react-redux";
import {
  create,
  remove,
  changeState,
  clearCompleted,
  changeView,
} from "../slices/todoSlice";

const Layout = () => {
  const todos = useSelector((state) => state.todos.todos);
  const view = useSelector((state) => state.todos.view);
  const dispatch = useDispatch();
  return (
    <div className={`itembox ${styles.itemBox} ${styles.item}`}>
      <label className={styles.counter}>
        {
          todos.filter((todo) => {
            if (view === "All") return true;
            else if (view === "Active" && todo.state === 0) return true;
            else if (view === "Completed" && todo.state === 1) return true;
          }).length
        }{" "}
        Items
      </label>
      <label
        className={`btn ${view === "All" ? styles.active : ""}`}
        onClick={() => dispatch(changeView("All"))}
      >
        All
      </label>
      <label
        className={`btn ${view === "Active" ? styles.active : ""}`}
        onClick={() => dispatch(changeView("Active"))}
      >
        Active
      </label>
      <label
        className={`btn ${view === "Completed" ? styles.active : ""}`}
        onClick={() => dispatch(changeView("Completed"))}
      >
        Completed
      </label>
      <label className="btn" onClick={() => dispatch(clearCompleted())}>
        Clear Completed
      </label>
    </div>
  );
};

export default Layout;
