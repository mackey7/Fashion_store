import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopMenu from './components/TopMenu/TopMenu'
import Navigation from './components/Navigation/Navigation.jsx';
import Slider from './components/Slider/Slider.jsx';
import Products from './components/Products/Products.jsx';
import Footer from './components/Footer/Footer.jsx';
import { addToCart, removeItem } from './actions/actions';

import './App.css';

const carouselSlidesData = [
  {
    img: "http://zow.lublin.eu/wp-content/themes/the-wp/images/slider/slider4.jpg",
    alt: "zdjęcie"
  },
  {
    img: "https://vignette.wikia.nocookie.net/thefutureofeuropes/images/d/d7/Adolf-hitler-620-638970380.jpg",
    alt: "zdjęcie"
  }

];


class App extends Component {


  handleClick = (id) => {
    console.log(id);
    this.props.addToCart(id)
  }

  render() {
    return (
      <React.Fragment >
        <TopMenu />
        <Navigation cart={this.props.cart} cartLenght={this.props.cart.length} />
        <Slider slides={carouselSlidesData} />
        <Products product={this.props.products} onClick={this.handleClick} />
        <Footer />
      </React.Fragment >
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
