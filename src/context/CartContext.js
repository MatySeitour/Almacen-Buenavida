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
    const [navMobileState, setNavMobileState] = useState(false);
    const [focus, setFocus] = useState(false);
    const [animateCartState, setAnimateCartState] = useState(false);

    const [totalCart, setTotalCart] = useState(() => {
        const priceCart = cartItems.map((item) => {
            if (item.quantity === 1) {
                return item.price
            }
            else {
                return item.price * item.quantity
            }
        })
        return priceCart
    });

    const productsItemNotification = cartItems.map((item) => {
        let numbersItems = 0;
        numbersItems = numbersItems + item.quantity;
        return numbersItems
    })

    const totalItems = productsItemNotification.reduce((a, b) => a + b, 0);

    useEffect(() => {
        const productsCartInLocalStorage = localStorage.getItem("productsCart");
        const carts = JSON.parse(productsCartInLocalStorage);
        if (carts != false) {
            setCartItems(carts);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("productsCart", JSON.stringify(cartItems))
    }, [cartItems])


    const handleAddCart = (product) => {
        setAnimateCartState(true);
        const inCart = cartItems.find((productInCart) => productInCart.id === product.id);
        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, quantity: inCart.quantity + product.quantity }
                    }
                    else {
                        return productInCart;
                    }
                })
            )
            setTimeout(() => {
                setAnimateCartState(false);
            }, 300)
        }
        else {
            setCartItems([...cartItems, { ...product, quantity: product.quantity }])
            setTimeout(() => {
                setAnimateCartState(false);
            }, 300)
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
                        return productInCart
                    }
                }))
        }
    }

    const handleDeleteCart = (product) => {
        setCartItems(
            cartItems.filter(productInCart => productInCart.id !== product.id)
        )
    }

    useEffect(() => {
        setTotalCart(() => {
            const priceCart = cartItems.map((item) => {
                let discountPrice = 0;
                let discountTotal = 0;
                let offer2x1 = 0;
                if (item.offer != "2x1" && item.offer != "") {
                    discountPrice = parseInt(item.offer);
                    discountPrice = (item.price * discountPrice) / 100;
                    let discountTotal = (item.price - discountPrice) * item.quantity;
                    return discountTotal;
                }
                else if (item.offer == "2x1") {
                    return item.price * item.quantity
                }

            })
            return priceCart.reduce((a, b) => a + b, 0);
        })

    }, [cartItems])

    return (
        <CartContext.Provider value={{ cartItems, handleAddCart, cartShow, setCartShow, handleRemoverCart, totalCart, navMobileState, setNavMobileState, handleDeleteCart, totalItems, focus, setFocus, animateCartState }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;