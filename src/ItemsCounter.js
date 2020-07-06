import React, { useState } from "react";
import "./App.css";

export const ItemsCounter = () => {
  const [counter, ChangeCounter] = useState(0);

  return (
    <div className="Wrapper">
      <button className="counter">{counter}</button>
      <button onClick={() => ChangeCounter(counter + 1)}>+</button>
      <button name="minus" onClick={() => ChangeCounter(counter - 1)}>
        -
      </button>
    </div>
  );
};

export default ItemsCounter;

//smake this counter grow when adding items to list
