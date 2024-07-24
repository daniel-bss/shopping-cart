import React, { useContext } from "react";
import { Props } from "../shop/product";
import { ShopContext } from "../../context/shop-context";

export const CartItem: React.FC<Props> = ({ data }: Props ) => {
    const { id, price, productImage, productName } = data 

    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

    return (
        <div className="cartItem">
            <img src={productImage} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => {removeFromCart(id)}}>-</button>
                    <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => {addToCart(id)}}>+</button>
                </div>
            </div>
        </div>
    )
}