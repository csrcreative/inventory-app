import React from "react";
import CartItem from "./cartItem";
import CartHeader from "./cartHeader";

function Cart(props) {
    return (
        <div className="cart">
            <CartHeader />

            {props.cart.length > 0 && (
                <div className="cartItems">
                    {props.cart.map((i, index) => {
                        return (
                            <CartItem
                                name={i}
                                key={index}
                                handleRemoveClick={ props.handleRemoveClick }
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Cart;
