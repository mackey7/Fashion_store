import React, { Component } from 'react';
import TopMenu from './components/TopMenu/TopMenu'
import Navigation from './components/Navigation/Navigation.jsx';
import Slider from './components/Slider/Slider.jsx';
import Products from './components/Products/Products.jsx';
import Footer from './components/Footer/Footer.jsx';
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
  render() {
    return (
      <React.Fragment >
        <TopMenu />
        <Navigation />
        <Slider slides={carouselSlidesData} />
        <Products />
        <Footer />
      </React.Fragment >
    );
  }
}

export default App;
