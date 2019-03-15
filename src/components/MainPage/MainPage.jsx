import React, { Component } from 'react';
import Slider from "../Slider/Slider.jsx";
import Products from "../Products/Products.jsx";
import { carouselSlidesData } from '../../api/carouselSlidesData.js';
import { connect } from "react-redux";
import { addToCart } from "../../actions/actions";

class MainPage extends Component {
    handleClick = id => {
        this.props.addToCart(id);
    };
    render() {
        return (
            <div>
                <Slider slides={carouselSlidesData} />
                <Products
                    product={this.props.products}
                    handleClick={this.handleClick}
                />
            </div >
        )
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
)(MainPage);
