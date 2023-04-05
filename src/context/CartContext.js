"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("the useTask must be used inside the TasksContextProvider")
    }
    return context;
}

export function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartShow, setCartShow] = useState(false);
    const [totalCart, setTotalCart] = useState(() => {
        const priceCart = cartItems.map((item) => {
            if (item.quantity === 1) {
                return item.price
            }
            else {
                console.log("entra")
                return item.price * item.quantity
            }
        })
        return priceCart
    });


    useEffect(() => {
        const productsCartInLocalStorage = localStorage.getItem("productsCart");
        const carts = JSON.parse(productsCartInLocalStorage);
        console.log(carts);
        if (carts.length > 0) {
            console.log("entra")
            setCartItems(carts);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("productsCart", JSON.stringify(cartItems))
    }, [cartItems])

    const handleAddCart = (product) => {
        const inCart = cartItems.find((productInCart) => productInCart.id === product.id);
        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, quantity: inCart.quantity + 1 }
                    }
                    else {
                        return productInCart;
                    }
                })
            )
        }
        else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }

    const handleRemoverCart = (product) => {
        const inCart = cartItems.find((productInCart) => productInCart.id === product.id);
        if (inCart.quantity === 1) {

            setCartItems(
                cartItems.filter(productInCart => productInCart.id !== product.id)
            );
        }
        else {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, quantity: inCart.quantity - 1 };
                    }
                    else {
                        console.log("entra en 5")
                        return productInCart
                    }
                }))
        }
    }

    useEffect(() => {
        setTotalCart(() => {
            const priceCart = cartItems.map((item) => {
                if (item.quantity === 1) {
                    return item.price
                }
                else {
                    console.log("entra")
                    return item.price * item.quantity
                }
            })
            return priceCart.reduce((a, b) => a + b, 0);
        })

    }, [cartItems])

    return (
        <CartContext.Provider value={{ cartItems, handleAddCart, cartShow, setCartShow, handleRemoverCart, totalCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;