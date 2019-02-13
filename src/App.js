import React, { Component } from 'react';
import TopMenu from './components/TopMenu/TopMenu'
import Navigation from './components/Navigation/Navigation.jsx';
import Slider from './components/Slider/Slider.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <TopMenu />
        <Navigation />
        <Slider />
      </div>
    );
  }
}

export default App;
