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

const products = [
  {
    name: "",
    img: "https://mybutik.pl/images/mybutik/0-1000/13-35-Sukienka-sportowa-Papirus-napis-zielony_%5B403%5D_480.jpg",
    price: 100,
    currency: "PLN",
    quantity: 10,
    alt: ""
  },
  {
    name: "",
    img: "https://mybutik.pl/images/mybutik/0-1000/13-9-Sukienka-sportowa-napisy-czarny_%5B204%5D_480.jpg",
    price: 100,
    currency: "PLN",
    quantity: 10,
    alt: ""
  },
  {
    name: "",
    img: "https://mybutik.pl/images/mybutik/0-1000/13-1A-Sukienka-sportowa-czarna_%5B255%5D_480.jpg",
    price: 100,
    currency: "PLN",
    quantity: 10,
    alt: ""
  },
  {
    name: "",
    img: "https://mybutik.pl/images/mybutik/3000-4000/13-74-Sukienka-sportowa-JEANS-w-biale-GROCHY_%5B3280%5D_480.jpg",
    price: 100,
    currency: "PLN",
    quantity: 10,
    alt: ""
  },
  {
    name: "",
    img: "https://mybutik.pl/images/mybutik/4000-5000/13-95-Sukienka-sportowa-z-wiazaniem-i-kieszonkami-ZIELEN_%5B4521%5D_480.jpg",
    price: 100,
    currency: "PLN",
    quantity: 10,
    alt: ""
  },
  {
    name: "",
    img: "https://mybutik.pl/images/mybutik/3000-4000/13-91-Sukienka-sportowa-KOLOROWE-KWIATY-na-granatowym-tle_%5B3984%5D_480.jpg",
    price: 100,
    currency: "PLN",
    quantity: 10,
    alt: ""
  },

];

class App extends Component {
  render() {
    return (
      <React.Fragment >
        <TopMenu />
        <Navigation />
        <Slider slides={carouselSlidesData} />
        <Products product={products} />
        <Footer />
      </React.Fragment >
    );
  }
}

export default App;
