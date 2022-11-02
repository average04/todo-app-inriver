import styles from "../styles/Layout.module.css";
import Head from "next/head";

import { useSelector, useDispatch } from "react-redux";

import { createContext } from "react";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="header"></div>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
