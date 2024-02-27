import React from "react";
import styles from "@/app/admin/sidebar/Sidebar.module.css";
import {
  MdLogout,
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdListAlt
} from "react-icons/md";
import MenuLink from "./menuLink/MenuLink";
// import { signOut } from '@/auth';

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Trang Chủ",   
        path: "/admin",
        icon: <MdDashboard />,
      },
      {
        title: "Student",
        path: "/dashboard/student",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Teacher",
        path: "/dashboard/teacher",
        icon: <MdShoppingBag />,
      },
      {
        title: "Courses",
        path: "/dashboard/courses",
        icon: <MdListAlt />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Feedback",
        path: "/dashboard/feedback",
        icon: <MdWork />,
      },
      {
        title: "Messages",
        path: "/dashboard/messages",
        icon: <MdPeople />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const Sidebar = async () => {
  return (
    <div className={styles.container}>
        <div className={styles.userDetail}>
          <span className={styles.userTitle}>Khánh Dương</span>
          <ul className={styles.list}>
            {menuItems.map((cat) => (
              <li key={cat.title}>
                <span className={styles.cat}>{cat.title}</span>
                {cat.list.map((item) => (
                  <MenuLink item={item} key={item.title} />
                ))}
              </li>
            ))}
          </ul>
        </div>
      <form
      // action={async () => {
      //   "use server";
      //   await signOut();
      // }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
