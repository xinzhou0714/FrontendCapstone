import React from "react";
import styles from "./index.module.css";
import logo from "./Logo-long.svg";
import { Link } from "react-router-dom";

const items = [
  { key: 1, title: "Home", path: "/" },
  { key: 2, title: "About", path: "/about" },
  { key: 3, title: "Menu", path: "/menu" },
  { key: 4, title: "Reservation", path: "/booking" },
  { key: 5, title: "Order online", path: "/ordering" },
  { key: 6, title: "Login", path: "/login" },
];

function Nav() {
  return (
    <nav className={styles.container}>
      <Link className={styles.one} to={"/"}>
        <img src={logo} alt={""} />
      </Link>
      <ul className={[styles.list, styles.two].join(" ")}>
        {items.map((item) => (
          <li key={item.key}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
