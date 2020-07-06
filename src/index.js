import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ShopingList from "./ShopingList";
import FruitsSearchList from "./FruitsSearchList";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ShopingList />
    <FruitsSearchList />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
