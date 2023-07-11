import React from "react";
import styles from "./index.module.css";
import logo from "./Logo-long.svg";

const items = [
  { key: 1, title: "Home" },
  { key: 2, title: "About" },
  { key: 3, title: "Menu" },
  { key: 4, title: "Reservation" },
  { key: 5, title: "Order online" },
  { key: 6, title: "Login" },
];

function Nav() {
  return (
    <nav className={styles.container}>
      <a className={styles.one} href={"/"}>
        <img src={logo} alt={""} />
      </a>
      <ul className={[styles.list, styles.two].join(" ")}>
        {items.map((item) => (
          <li key={item.key}>{item.title}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
