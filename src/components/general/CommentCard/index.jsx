import styles from "./index.module.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function CommentCard(props) {
  const { imgUrl, fullname, rating, comment } = props;
  const defalutUrl = "https://i.pravatar.cc/150?img=70";
  return (
    <article className={styles.wrapper}>
      <img
        className={styles.image}
        src={imgUrl ?? defalutUrl}
        alt={"customer avatar"}
      />
      <CardHead fullname={fullname} />
      <div className={styles.stretch}>
        <CardRate rating={rating} />
        <CardComment comment={comment} />
      </div>
    </article>
  );
}

export default CommentCard;

function CardHead(props) {
  const { fullname } = props;
  return <h3 className={"card-title"}>{fullname ?? "Fullname"}</h3>;
}

function CardRate(props) {
  const { rating } = props;
  return (
    <div>
      {!!rating
        ? Array(rating)
            .fill(0)
            .map(() => <FontAwesomeIcon icon={faStar} color={"#f4ce14"} />)
        : null}
    </div>
  );
}

function CardComment(props) {
  const { comment } = props;
  const defaultComment =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores atque consequuntur, corporis dicta enim eos natus odit pariatur quibusdam quidem rerum suscipit velit! Cupiditate, quis repellat. Ducimus, possimus, veniam.";
  return <p className={"card-text"}>{comment ?? defaultComment}</p>;
}
