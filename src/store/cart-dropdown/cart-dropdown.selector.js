import { createSelector } from "reselect";

const selectCartDropDownReducerSlice = (state) => state.cartDropDown;

export const selectCartItems = createSelector(
  selectCartDropDownReducerSlice,
  (cartDropDown) => cartDropDown.cartItems
);

export const selectIsCartDropDownOpen = createSelector(
  selectCartDropDownReducerSlice,
  (cartDropDown) => cartDropDown.isCartDropDownOpen
);

export const selectTotalItemsInCart = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectTotalCostOfItemsInCart = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    )
);
