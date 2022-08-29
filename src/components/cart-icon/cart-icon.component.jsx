import { useContext } from "react";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { CartDropDownContext } from "../../context/cart-dropdown/cart-dropdown.context";

const CartIcon = () => {
    const { isCartDropDownOpen, toggleCartDropDown, totalItemsInCart } = useContext(CartDropDownContext);
    const toggleCart = () => toggleCartDropDown(!isCartDropDownOpen);
    return (
        <div className="cart-icon-container" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count ">{totalItemsInCart}</span>
        </div>
    )
}

export default CartIcon;