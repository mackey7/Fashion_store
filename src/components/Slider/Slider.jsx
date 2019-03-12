import React, { Component } from 'react';
import SliderLeftArrow from './SliderLeftArrow.jsx';
import SliderRightArrow from './SliderRightArrow.jsx';
import SlideDot from './SlideDot.jsx';
import Slide from './Slide.jsx';
import './Slider.scss';


export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    goToSlide = index => {
        this.setState({
            activeIndex: index
        });
    };

    prevSlide = e => {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;
        this.setState({
            activeIndex: index
        });

    };

    nextSlide = e => {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    };




    render() {
        return (
            <section className="Slider">

                <SliderLeftArrow onClick={e => this.prevSlide(e)} />

                <ul className="Slider_item">
                    {this.props.slides.map((slide, index) => (
                        <Slide
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />

                    ))}

                </ul>

                <SliderRightArrow onClick={e => this.nextSlide(e)} />

                <ul className="dot_container">
                    {this.props.slides.map((slide, index) => (
                        <SlideDot
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            isActive={this.state.activeIndex === index}
                            onClick={e => this.goToSlide(index)}
                        />
                    ))}

                </ul>

            </section>
        )
    }
}