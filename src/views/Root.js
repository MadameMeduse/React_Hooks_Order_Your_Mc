import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainTemplate from "../template/MainTemplate";
import ModalView from "./ModalView";
import OrderCompleteView from "./OrderCompleteView";
import OfferView from "./OfferView";
import BasketView from "./BasketView";

class Root extends React.Component {
  render() {
    return (
      <MainTemplate>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ModalView} />
            <Route path="/OrderComplete" component={OrderCompleteView} />
            <Route path="/Offer" component={OfferView} />
            <Route path="/Basket" component={BasketView} />
          </Switch>
        </BrowserRouter>
      </MainTemplate>
    );
  }
}

export default Root;
