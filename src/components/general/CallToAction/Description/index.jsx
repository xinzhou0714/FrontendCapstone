import React from "react";

import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import Button from "@/components/general/Button";

function Description() {
  const navigate = useNavigate();

  const doClick = () => {
    navigate("/booking");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={"display-title"}>Little lemon</h1>
      <h3 className={"sub-title"}>Chicage</h3>
      <p className={"lead-text"} style={{ padding: "1rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab at aut
        blanditiis consequuntur dolore ea eius eum eveniet fugiat illum itaque
        nesciunt, quaerat quibusdam, quo rerum ullam vitae voluptatum.
      </p>
      <Button caption={"Reseve a Table"} doClick={doClick} />
    </div>
  );
}

export default Description;
