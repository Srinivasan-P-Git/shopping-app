import { createSelector } from "reselect";

const selectProductsReducerSlice = (state) => state.products;

export const selectProducts = createSelector(
  selectProductsReducerSlice,
  (prod) => prod.products
);
