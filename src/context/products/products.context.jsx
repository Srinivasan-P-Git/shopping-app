import { createContext, useState } from "react";

import SHOP_DATA from './../../assets/shop-data.json';

export const ProductsContext = createContext({
    products: [],
    setProducts: () => { }
});

export const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState(SHOP_DATA);
    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}