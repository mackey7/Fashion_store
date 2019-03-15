import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem } from "../../actions/actions";



class Cart extends Component {
    handleRemove = id => {
        this.props.removeItem(id);
    };
    render() {
        return (

            <div>
                Koszyk
</div>

        )
    }

}
const mapStateToProps = state => {
    return {
        cart: state.cart,
        cartTotal: state.cartTotal

    };
};
const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => dispatch(removeItem(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
