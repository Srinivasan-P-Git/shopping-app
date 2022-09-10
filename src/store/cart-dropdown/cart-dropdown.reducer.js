import { CART_DROPDOWN_TYPES } from "./cart-dropdown.type";

const INITIAL_STATE = {
  isCartDropDownOpen: false,
  cartItems: [],
};

export const cartDropDownReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_DROPDOWN_TYPES.TOGGLE_CART_DROP_DOWN: {
      return { ...state, isCartDropDownOpen: payload };
    }
    case CART_DROPDOWN_TYPES.SET_CART_ITEMS: {
      return { ...state, cartItems: payload };
    }
    default: {
      return state;
    }
  }
};
