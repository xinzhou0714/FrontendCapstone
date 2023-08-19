import React from "react";
import styles from "./index.module.css";
import CommentCard from "@/components/general/CommentCard";

const customs = [
  {
    fullname: "Taylor Davidson",
    imgUrl: "https://i.pravatar.cc/150?img=47",
    rating: 5,
  },
  {
    fullname: "Lea Hodges",
    imgUrl: "https://i.pravatar.cc/150?img=25",
    rating: 4,
  },
  {
    fullname: "Donna Lloyd",
    imgUrl: "https://i.pravatar.cc/150?img=14",
    rating: 5,
  },
  {
    fullname: "Madelyn Sparks",
    imgUrl: "https://i.pravatar.cc/150?img=7",
    rating: 5,
  },
];

const cards = customs.map((item) => (
  <CommentCard
    key={item.fullname}
    imgUrl={item.imgUrl}
    fullname={item.fullname}
    rating={item.rating}
  />
));

function ContentBar() {
  return <div className={styles.gridBox}>{cards}</div>;
}

export default ContentBar;
