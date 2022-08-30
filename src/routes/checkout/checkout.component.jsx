import { useContext } from "react";
import { CartDropDownContext } from "../../context/cart-dropdown/cart-dropdown.context";
import CheckoutCartItem from "../../components/checkout-cart-item/checkout-cart-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
    const { cartItems, totalCostOfItemsInCart } = useContext(CartDropDownContext);
    return (
        <div className="checkout-container">
            <div className="checkout-wrapper">
                <div className="checkout-header">
                    <div className="header-item">Product</div>
                    <div className="header-item">Name</div>
                    <div className="header-item">Quantity</div>
                    <div className="header-item">Price</div>
                    <div className="header-item"></div>
                </div>
                {
                    cartItems.map(cartItem => <CheckoutCartItem key={cartItem.id} cartItem={cartItem} />)
                }
                <span className="total">Total: ${totalCostOfItemsInCart}</span>
            </div>
        </div>
    )
}

export default Checkout;