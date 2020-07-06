import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItemToShoppingList = value => {
    setShoppingList([...shoppingList, value]);
    setInputValue("");
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <ul>
        {shoppingList.map(item => (
          <li>
            {item}
            <button>remove</button>
          </li>
        ))}
      </ul>
      <input value={inputValue} onChange={handleInputChange} name="item" />
      <button onClick={() => addItemToShoppingList(inputValue)}>
        Add item
      </button>
    </div>
  );
};

export default App;
