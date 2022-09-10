import { PRODUCTS_TYPES } from "./products.type";
import SHOP_DATA from "./../../assets/shop-data.json";

const INITIAL_VALUE = {
  products: SHOP_DATA,
};

export const ProductsReducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_TYPES.SET_PRODUCTS: {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
};
