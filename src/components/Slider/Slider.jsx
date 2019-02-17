import React, { Component } from 'react';
import './Slider.scss';

export default class Slider extends Component {
    render() {
        return (
            <section className="slider-container">
                <div>
                    <div className="arrow-left"><i class="fas fa-chevron-left"></i></div>
                    <figure >
                        <img className="slide-image" src="../../images/slider.png" alt="" />
                    </figure>

                    <div className="arrow-right"><i class="fas fa-chevron-right"></i></div>
                </div>
                <div className="slider-dots-container">
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                </div>
            </section>
        )
    }
}