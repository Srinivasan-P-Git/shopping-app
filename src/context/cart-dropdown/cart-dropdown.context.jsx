import { createContext, useEffect, useState } from "react";

export const CartDropDownContext = createContext({
    isCartDropDownOpen: false,
    toggleCartDropDown: () => { },
    cartItems: [],
    addItemToCart: () => { },
    totalItemsInCart: 0
});

const addCartItem = (cartItems, productToAdd) => {
    let isexistingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
    if (isexistingCartItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === productToAdd.id ? ({ ...cartItem, quantity: cartItem.quantity + 1 }) : cartItem;
        })
    } else {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }
}

export const CartDropDownContextProvider = ({ children }) => {
    const [isCartDropDownOpen, toggleCartDropDown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalItemsInCart, setTotalItemsInCart] = useState(0);

    useEffect(() => {
        let count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setTotalItemsInCart(count);
    },[cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    return (
        <CartDropDownContext.Provider value={{ isCartDropDownOpen, toggleCartDropDown, cartItems, addItemToCart, totalItemsInCart }}>
            {children}
        </CartDropDownContext.Provider>
    )
}