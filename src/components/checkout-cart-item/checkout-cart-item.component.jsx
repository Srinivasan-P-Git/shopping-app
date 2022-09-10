import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
} from "./../../store/cart-dropdown/cart-dropdown.action";
import { selectCartItems } from "./../../store/cart-dropdown/cart-dropdown.selector";

import "./checkout-cart-item.styles.scss";

const CheckoutCartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, quantity, imageUrl } = cartItem;
  const addCartItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeCartItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemFromCartHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem, cartItem.quantity));
  return (
    <div className="checkout-cart-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="minus" onClick={removeCartItemHandler}>
          &#8722;
        </span>
        <span className="value">{quantity}</span>
        <span className="plus" onClick={addCartItemHandler}>
          &#43;
        </span>
      </span>
      <span className="price">{price}</span>
      <span className="remove" onClick={clearItemFromCartHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutCartItem;
