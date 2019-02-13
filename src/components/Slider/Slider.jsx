import React, { Component } from 'react';
import './Slider.scss';

export default class Slider extends Component {
    render() {
        return (
            <section className="slider-container">
                <div>
                    <div><i class="fas fa-chevron-left"></i></div>
                    <figure>
                        <img src="../../images/slider.png" alt="" />
                    </figure>

                    <div><i class="fas fa-chevron-right"></i></div>
                </div>
                <div>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                </div>
            </section>
        )
    }
}