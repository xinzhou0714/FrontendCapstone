import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const { imgUrl, title, price, description } = props;
  return (
    <article className={styles.wrapper}>
      <img
        className={styles.image}
        src={imgUrl ?? "https://picsum.photos/id/237/200/300"}
        alt={" "}
      />
      <div className={styles.stretch}>
        <CardHead title={title} price={price} />
        <CardContent description={description} />
        <CardFooter />
      </div>
    </article>
  );
}

export default Card;

function CardHead(props) {
  const { title, price } = props;
  return (
    <div className={styles.head}>
      <h4 className={"card-title"}>{title ?? "card title"}</h4>
      <span className={"price-text"}>{price ?? "$9.99"}</span>
    </div>
  );
}
function CardContent(props) {
  const { description } = props;
  const randomText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus dicta doloribus earum eveniet, explicabo facere in incidunt iure necessitatibus nobis non, numquam pariatur quis quisquam recusandae saepe, tempora totam.";
  return (
    <div>
      <p className={"card-text"}>{description ?? randomText}</p>
    </div>
  );
}

function CardFooter() {
  return (
    <div className={styles.footer}>
      <span className={"default-text-bold"}>Order a delivery</span>
      <span className={"default-text"}>
        <FontAwesomeIcon icon={faMotorcycle} />
      </span>
    </div>
  );
}
