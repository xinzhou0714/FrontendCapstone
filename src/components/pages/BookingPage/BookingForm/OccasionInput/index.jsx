import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTree } from "@fortawesome/free-solid-svg-icons";

function OccasionInput(props) {
  return (
    <div className={styles.flexSpace}>
      <FontAwesomeIcon
        icon={faTree}
        className={["inter-medium", styles.icon].join(" ")}
      />
      <span className={"inter-medium"}>Birthday</span>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={["inter-medium", styles.icon].join(" ")}
      />
    </div>
  );
}

export default OccasionInput;
