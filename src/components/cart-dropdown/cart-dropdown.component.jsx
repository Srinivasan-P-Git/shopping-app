import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropDownContext } from "../../context/cart-dropdown/cart-dropdown.context";

import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
    let navigate = useNavigate();
    const { cartItems } = useContext(CartDropDownContext);
    const navigateToCheckoutHandler = () => navigate("checkout");
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
                }
            </div>
            <Button type={"button"} onClick={navigateToCheckoutHandler}>
                GO TO CHECKOUT
            </Button>
        </div>
    )
}

export default CartDropDown;