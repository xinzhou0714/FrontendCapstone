import React from "react";
import styles from "./index.module.css";

function Card(props) {
  const { imgUrl, title, price, description } = props;
  return (
    <article className={styles.wrapper}>
      <img
        className={styles.image}
        src={imgUrl ?? "https://picsum.photos/id/237/200/300"}
        alt={" "}
      />
      <CardHead title={title} price={price} />
      <CardContent description={description} />
      <CardFooter />
    </article>
  );
}

export default Card;

function CardHead(props) {
  const { title, price } = props;
  return (
    <div className={styles.head}>
      <h4>{title ?? "card title"}</h4>
      <span>{price ?? "$9.99"}</span>
    </div>
  );
}
function CardContent(props) {
  const { description } = props;
  const randomText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus dicta doloribus earum eveniet, explicabo facere in incidunt iure necessitatibus nobis non, numquam pariatur quis quisquam recusandae saepe, tempora totam.";
  return (
    <div>
      <p>{description ?? randomText}</p>
    </div>
  );
}

function CardFooter() {
  return (
    <div className={styles.footer}>
      <h4>Order a delivery</h4>
      <span>icon</span>
    </div>
  );
}
