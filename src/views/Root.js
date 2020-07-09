import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import MainTemplate from "../template/MainTemplate";
import LoginView from "./LoginView";
import HomeView from "./HomeView";
import MenuView from "./MenuView";
import CartView from "./CartView";
import AboutView from "./AboutView";

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route exact path="/" component={LoginView} />
              <Route path="/home" component={HomeView} />
              <Route path="/menu" component={MenuView} />
              <Route path="/cart" component={CartView} />
              <Route path="/about" component={AboutView} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
