import React from "react";
import Sidebar from "@/app/admin/sidebar/Sidebar";
import styles from "@/app/admin/dashboard.module.css";
import Search from "./search/Search";
import LayoutCard from "./layoutCard/LayoutCard";
import Chart from "./chart/Chart";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Search />
        <div className={styles.cards}>
          <LayoutCard />
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default page;
