import { useContext } from "react";
import { CartDropDownContext } from "../../context/cart-dropdown/cart-dropdown.context";

import "./checkout-cart-item.styles.scss";

const CheckoutCartItem = ({ cartItem }) => {
    const { addItemToCart, removeItemFromCart } = useContext(CartDropDownContext);
    const { name, price, quantity, imageUrl } = cartItem;
    const addCartItemHandler = () => addItemToCart(cartItem);
    const removeCartItemHandler = () => removeItemFromCart(cartItem);
    const clearItemFromCartHandler = () => removeItemFromCart(cartItem, cartItem.quantity);
    return (
        <div className="checkout-cart-item">
            <div className="image-container"><img src={imageUrl} alt={name} /></div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="minus" onClick={removeCartItemHandler}>&#8722;</span>
                <span className="value">{quantity}</span>
                <span className="plus" onClick={addCartItemHandler}>&#43;</span>
            </span>
            <span className="price">{price}</span>
            <span className="remove" onClick={clearItemFromCartHandler}>&#10005;</span>
        </div>
    )
}

export default CheckoutCartItem;