import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import App from './App';
import { UserContextProvider } from './context/user/user.context';
import { ModalContextProvider } from './context/modal/modal.context';
import { ProductsContextProvider } from './context/products/products.context';
import { CartDropDownContextProvider } from './context/cart-dropdown/cart-dropdown.context';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserContextProvider>
                <ProductsContextProvider>
                    <CartDropDownContextProvider>
                        <ModalContextProvider>
                            <App />
                        </ModalContextProvider>
                    </CartDropDownContextProvider>
                </ProductsContextProvider>
            </UserContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);