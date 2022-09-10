import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { ProductsReducer } from "./products/products.reducer";
import { cartDropDownReducer } from "./cart-dropdown/cart-dropdown.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cartDropDown: cartDropDownReducer,
  products: ProductsReducer,
});
