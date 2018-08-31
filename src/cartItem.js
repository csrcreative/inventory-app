import React, { Component } from "react";

class CartItem extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleRemoveClick(this.props.index);
    }
    render() {
        return (
            <div className="cardItem">
                <div className="cartItemName">{this.props.name}</div>
                <button className="cartItemRemove" onClick={this.handleClick}>Remove</button>
            </div>
        );
    }
}

export default CartItem;
