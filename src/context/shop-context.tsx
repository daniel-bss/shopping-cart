import React, { createContext, useState } from "react"
import { PRODUCTS, Product } from "../products"

interface Cart {
    [key: number]: number
}

function getDefaultCart(): Cart {
    let cart: Cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

interface ContextValue {
    cartItems: Cart
    addToCart: (itemId: number) => void
    removeFromCart: (itemId: number) => void
    updateCartItemCount: (newAmount: number, itemId: number) => void
    getTotal: () => number
}

const defaultVal: ContextValue = {
    cartItems: {},
    addToCart: (itemId: number) => {},
    removeFromCart: (itemId: number) => {},
    updateCartItemCount: (a: number, b: number) => {},
    getTotal: () => 0
}

export const ShopContext = createContext<ContextValue>(defaultVal)

type ContextProviderProps = {
    children: React.ReactNode
}

export const ShopContextProvider = ({ children }: ContextProviderProps) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotal: () => number = () => {
        let total: number = 0
        for (const tempKey of Object.keys(cartItems)) {
            const key: number = Number(tempKey)
            const product = PRODUCTS.find((product) => {
                return product.id === key
            })

            if (product === undefined) {
                return 0
            }

            total += cartItems[(key)] * product.price
        }
        return total
    }

    const addToCart = (itemId: number) => {
        setCartItems((prev: Cart) => (
            {
                ...prev,
                [itemId]: prev[itemId] + 1
            }
        ))
    }

    const removeFromCart = (itemId: number) => {
        setCartItems((prev: Cart) => {
            return {
                ...prev,
                [itemId]: prev[itemId] - 1
            }
        })
    }

    const updateCartItemCount = (newAmount: number, itemId: number) => {
        setCartItems((prev: Cart) => {
            return {
                ...prev,
                [itemId]: newAmount
            }
        })
    }

    const contextValue: ContextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotal}

    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
}
