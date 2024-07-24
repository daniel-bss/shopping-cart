import React, { useContext } from "react";
import { Product as ProductDetail } from "../../products"
import { ShopContext } from "../../context/shop-context"

export interface Props {
    data: ProductDetail
}

export const Product: React.FC<Props> = ({ data }: Props) => {
    const { id, productName, price, productImage } = data

    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
    
    return (
        <div className="product">
            <img src={productImage} alt={productImage} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>

            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                {/* Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</> } */}
                Add to cart 
                    {
                        cartItemAmount > 0 ? (
                            <span> ({cartItemAmount})</span>
                        ) : (
                            <span></span>
                        )
                    }
            </button>
        </div>
    )
}