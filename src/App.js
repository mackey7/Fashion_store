import React, { Component } from 'react';
import TopMenu from './components/TopMenu/TopMenu'
import Navigation from './components/Navigation/Navigation.jsx';
import Slider from './components/Slider/Slider.jsx';
import Products from './components/Products/Products.jsx';
import Footer from './components/Footer/Footer.jsx';
import productsArray from './api/productsArray.js';
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
  state = {
    cart: [{
      name: "name",
      img: "https://mybutik.pl/images/mybutik/3000-4000/13-91-Sukienka-sportowa-KOLOROWE-KWIATY-na-granatowym-tle_%5B3984%5D_480.jpg",
      price: 100,
      currency: "PLN",
      quantity: 10,
      alt: ""
    },],
    products: productsArray,
  }
  render() {
    return (
      <React.Fragment >
        <TopMenu />
        <Navigation cart={this.state.cart} />
        <Slider slides={carouselSlidesData} />
        <Products product={this.state.products} />
        <Footer />
      </React.Fragment >
    );
  }
}

export default App;
