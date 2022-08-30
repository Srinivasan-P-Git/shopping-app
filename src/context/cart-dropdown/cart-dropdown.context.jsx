import { createContext, useEffect, useState } from "react";

export const CartDropDownContext = createContext({
    isCartDropDownOpen: false,
    toggleCartDropDown: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    totalItemsInCart: 0,
    totalCostOfItemsInCart: 0
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

const removeCartItem = (cartItems, productToRemove, quantity) => {
    return cartItems.reduce((accum, cartItem) => {
        if (cartItem.id === productToRemove.id) {
            let modifiedCartItem = { ...cartItem, quantity: cartItem.quantity - quantity };
            if (modifiedCartItem.quantity > 0) accum.push(modifiedCartItem);
        } else accum.push(cartItem);
        return accum;
    }, []);
}

export const CartDropDownContextProvider = ({ children }) => {
    const [isCartDropDownOpen, toggleCartDropDown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalItemsInCart, setTotalItemsInCart] = useState(0);
    const [totalCostOfItemsInCart, setTotalCostOfItemsInCart] = useState(0);

    useEffect(() => {
        let count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setTotalItemsInCart(count);
    }, [cartItems]);

    useEffect(() => {
        let totalCost = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
        setTotalCostOfItemsInCart(totalCost);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove, quantity = 1) => {
        setCartItems(removeCartItem(cartItems, productToRemove, quantity));
    }

    return (
        <CartDropDownContext.Provider value={{ isCartDropDownOpen, toggleCartDropDown, cartItems, addItemToCart, totalItemsInCart, removeItemFromCart, totalCostOfItemsInCart }}>
            {children}
        </CartDropDownContext.Provider>
    )
}