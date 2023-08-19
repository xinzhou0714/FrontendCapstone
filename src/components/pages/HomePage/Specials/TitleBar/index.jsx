import React from "react";
import styles from "./index.module.css";
import Button from "@/components/general/Button";
import { useNavigate } from "react-router-dom";

function TitleBar() {
  const navigate = useNavigate();
  const doClick = () => {
    console.log("online menu clicked");
    navigate("/menu");
  };

  return (
    <div className={[styles.flex].join(" ")}>
      <h3 className={"section-categories"}>This Week's Specials</h3>
      <Button caption={"online menu"} doClick={doClick} />
    </div>
  );
}

export default TitleBar;
