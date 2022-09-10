import { useSelector } from "react-redux";

import CheckoutCartItem from "../../components/checkout-cart-item/checkout-cart-item.component";
import {
  selectCartItems,
  selectTotalCostOfItemsInCart,
} from "./../../store/cart-dropdown/cart-dropdown.selector";

import "./checkout.styles.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalCostOfItemsInCart = useSelector(selectTotalCostOfItemsInCart);
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
        {cartItems.map((cartItem) => (
          <CheckoutCartItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <span className="total">Total: ${totalCostOfItemsInCart}</span>
      </div>
    </div>
  );
};

export default Checkout;
