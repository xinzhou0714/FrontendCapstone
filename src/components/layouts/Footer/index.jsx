import React from "react";
import styles from "./index.module.css";
import logo from "./pics/logo_rect.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={styles.outer}>
      <section className={styles.inner}>
        <img
          src={logo}
          className={[styles.child, styles.logo].join(" ")}
          alt=""
        />
        <Navigation />
        <Contact />
        <Social />
      </section>
    </footer>
  );
}

export default Footer;

const items = [
  { key: 1, title: "Home", path: "/" },
  { key: 2, title: "About", path: "/about" },
  { key: 3, title: "Menu", path: "/menu" },
  { key: 4, title: "Reservation", path: "/booking" },
  { key: 5, title: "Order online", path: "/ordering" },
  { key: 6, title: "Login", path: "/login" },
];

function Navigation() {
  return (
    <div className={styles.child}>
      <h3>Navigation</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.key}>
            <Link className={"aa"} to={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const infos = [
  {
    key: "address",
    text: "Teresa Street 56, Chicago, 45214",
    icon: <FontAwesomeIcon icon={faLocationDot} />,
  },
  {
    key: "phone",
    text: "(815) 970-x077 ",
    icon: <FontAwesomeIcon icon={faPhone} />,
  },
  {
    key: "email",
    text: "uffrod2nafz@wuuvo.com",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
];

function Contact() {
  return (
    <div className={styles.child}>
      <h3>Contact</h3>
      <ul className={styles.list}>
        {infos.map((info) => (
          <li key={info.key}>
            <a>
              {info.icon} <span>{info.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const medias = [
  {
    key: "twitter",
    text: "twitter",
    url: "https://twitter.com/",
    icon: <FontAwesomeIcon icon={faXTwitter} />,
  },
  {
    key: "github",
    text: "Github",
    url: "https://github.com/",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    key: "linkedin",
    text: "Linkedin",
    url: "https://www.linkedin.com/",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    key: "tiktok",
    text: "Tiktok",
    url: "https://www.tiktok.com/",
    icon: <FontAwesomeIcon icon={faTiktok} />,
  },
];

function Social() {
  return (
    <div className={styles.child}>
      <h3>Social</h3>
      <ul className={styles.list}>
        {medias.map((media) => (
          <li key={media.key}>
            <a href={media.url ?? "https://www.baidu.com"} target="_blank">
              {media.icon} <span>{media.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
