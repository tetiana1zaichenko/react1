import React from "react";

const Item = (item) => {
  return (
    <li>
      <img src="{item.image}" width={200} />
      <p>{item.name}</p>
    </li>
  );
};

export default Item;
