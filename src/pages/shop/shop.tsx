import React from "react";
import { PRODUCTS } from "../../products"
import { Product } from "./product";
import "./shop.css"
import {} from "../../context/shop-context"

export const Shop: React.FC = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Toko XYZ</h1>
            </div>

            <div className="products">
                {
                    PRODUCTS.map((product) => {
                        return <Product key={product.id} data={product} />
                    })
                }
            </div>
        </div>
    )
}