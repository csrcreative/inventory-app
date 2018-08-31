import React, { Component } from "react";
import "./App.css";

import Inventory from "./Inventory";
import Cart from "./Cart";


class InventoryApp extends Component {
    constructor(props) {
        super(props);

        this.items = [
            { item: "Shoes" },
            { item: "Shirt" },
            { item: "Pants" },
            { item: "Socks" }
        ];

        this.state = {
            addToCart: false,
            itemToAdd: false,
            cart: []
        };

        this.inventoryHeading = "Items";
        this.cartHeading = "Cart";

        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    handleAddClick(item) {
        this.setState(prevState => ({
            addToCart: true,
            cart: [...prevState.cart, item]
        }));
    }

    handleRemoveClick(index) {
        this.setState(
            prevState => {
                let state = {};
                prevState.cart.splice(
                    index,
                    1
                );

                return state;
            }
        );
    }

    render() {
        return (
            <div className="App">
                <Inventory
                    handleAddClick={this.handleAddClick}
                    items={this.items}
                />

                <Cart
                    cart={this.state.cart}
                    handleRemoveClick={this.handleRemoveClick}
                /> 
            </div>
        );
    }
}

export default InventoryApp;
