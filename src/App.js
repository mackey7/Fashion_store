import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopMenu from "./components/TopMenu/TopMenu";
import Navigation from "./components/Navigation/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainPage from './components/MainPage/MainPage.jsx';
import Cart from './components/Cart/Cart.jsx';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <TopMenu />
        <Navigation />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;



