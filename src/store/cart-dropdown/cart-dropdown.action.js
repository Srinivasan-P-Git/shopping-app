import { CART_DROPDOWN_TYPES } from "./cart-dropdown.type";

import { createAction } from "./../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  let isexistingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (isexistingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItem = (cartItems, productToRemove, quantity) => {
  return cartItems.reduce((accum, cartItem) => {
    if (cartItem.id === productToRemove.id) {
      let modifiedCartItem = {
        ...cartItem,
        quantity: cartItem.quantity - quantity,
      };
      if (modifiedCartItem.quantity > 0) accum.push(modifiedCartItem);
    } else accum.push(cartItem);
    return accum;
  }, []);
};

export const toggleCartDropDown = (isCartDropDownOpen) =>
  createAction(CART_DROPDOWN_TYPES.TOGGLE_CART_DROP_DOWN, isCartDropDownOpen);

export const addItemToCart = (cartItems, productToAdd) => {
  let newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_DROPDOWN_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (
  cartItems,
  productToRemove,
  quantity = 1
) => {
  let newCartItems = removeCartItem(cartItems, productToRemove, quantity);
  return createAction(CART_DROPDOWN_TYPES.SET_CART_ITEMS, newCartItems);
};
