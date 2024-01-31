import React from "react";
import styles from "./DefaultLayout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Outlet />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
