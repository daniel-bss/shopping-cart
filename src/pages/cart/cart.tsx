import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css"

export const Cart = () => {
    const { cartItems, getTotal } = useContext(ShopContext)
    const total: number = getTotal()
    return (
        <div className="cart">
            <div>
                <h1>Your cart items</h1>
            </div>

            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />
                    }
                })}
            </div>

            {
                total > 0 ? (
                    <div className="checkout">
                        <p>Subtotal: ${total}</p>
                        <button>Continue shopping</button>
                        <button>Checkout</button>
                    </div>
                ) : (
                    <h1>NO ITEM HERE!</h1>
                )
            }
            
        </div>
    )
}