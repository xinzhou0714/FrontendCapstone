import React from "react";
import Button from "../../Button";
import styles from "./index.module.css";

function Description() {
  return (
    <div className={styles.wrapper}>
      <h1 className={"display-title"}>Little lemon</h1>
      <h3 className={"sub-title"}>Chicage</h3>
      <p className={"lead-text"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab at aut
        blanditiis consequuntur dolore ea eius eum eveniet fugiat illum itaque
        nesciunt, quaerat quibusdam, quo rerum ullam vitae voluptatum.
      </p>
      <Button caption={"Reseve a Table"} />
    </div>
  );
}

export default Description;
