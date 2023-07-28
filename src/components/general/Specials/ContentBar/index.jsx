import React from "react";
import styles from "./index.module.css";
import Card from "../../Card";
import saladUrl from "./pics/greek salad.jpg";
import bruchettaUrl from "./pics/bruchetta.svg";
import dessertUrl from "./pics/lemon dessert.jpg";

function ContentBar(props) {
  const items = [
    {
      title: "Greek Salad",
      price: "$12.99",
      imageUrl: saladUrl,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      title: "Bruschetta",
      price: "$5.99",
      imageUrl: bruchettaUrl,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  ",
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      imageUrl: dessertUrl,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.  ",
    },
  ];
  const cards = items.map((item) => (
    <Card
      key={item.title}
      title={item.title}
      price={item.price}
      description={item.description}
      imgUrl={item.imageUrl}
    />
  ));

  return <div className={styles.innerContainer}>{cards}</div>;
}

export default ContentBar;
