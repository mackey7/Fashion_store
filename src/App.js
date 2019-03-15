import React, { Component } from "react";
import { connect } from "react-redux";

import TopMenu from "./components/TopMenu/TopMenu";
import Navigation from "./components/Navigation/Navigation.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Products from "./components/Products/Products.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { addToCart } from "./actions/actions";
import { carouselSlidesData } from './api/carouselSlidesData.js'
import "./App.css";



class App extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    return (
      <div>
        <TopMenu />
        <Navigation />


        <Slider slides={carouselSlidesData} />
        <Products
          product={this.props.products}
          handleClick={this.handleClick}
        />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



