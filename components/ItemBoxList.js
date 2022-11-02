import styles from "../styles/ItemBoxList.module.css";

import ItemBox from "./ItemBox";
import ItemNav from "./ItemNav";
import NewTodo from "./NewTodo";

import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { handleDrop } from "../slices/todoSlice";

const Layout = () => {
  const todos = useSelector((state) => state.todos.todos);
  const view = useSelector((state) => state.todos.view);
  const dispatch = useDispatch();
  const handleDropConst = (e) => {
    handleDrop(e);
  };

  const variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <div className={styles.boxlist}>
      <NewTodo />
      <AnimatePresence>
        {view === "All" ? (
          todos.map((todo, i) => (
            <motion.div
              key={todo.todo}
              initial="hidden"
              animate="visible"
              exit={{ x: "30%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              variants={variants}
            >
              <div key={"ib" + i} className={styles.itembox}>
                <ItemBox key={"ib" + i} todo={todo} />
              </div>
            </motion.div>
          ))
        ) : (
          <div />
        )}

        {view === "Active" ? (
          todos.map((todo, i) =>
            todo.state === 0 ? (
              <motion.div
                key={todo.todo}
                initial="hidden"
                animate="visible"
                exit={{ x: "30%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                variants={variants}
              >
                <div key={"ib" + i} className={styles.itembox}>
                  <ItemBox key={"ib" + i} todo={todo} />
                </div>
              </motion.div>
            ) : (
              <div />
            )
          )
        ) : (
          <div />
        )}
        {view === "Completed" ? (
          todos.map((todo, i) =>
            todo.state === 1 ? (
              <motion.div
                key={todo.todo}
                initial="hidden"
                animate="visible"
                exit={{ x: "30%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                variants={variants}
              >
                <div key={"ib" + i} className={styles.itembox}>
                  <ItemBox key={"ib" + i} todo={todo} />
                </div>
              </motion.div>
            ) : (
              <div />
            )
          )
        ) : (
          <div />
        )}
      </AnimatePresence>
      <ItemNav />
    </div>
  );
};

export default Layout;
