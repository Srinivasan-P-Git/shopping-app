import { useContext } from "react";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropDownContext } from "../../context/cart-dropdown/cart-dropdown.context";

import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
    const { cartItems } = useContext(CartDropDownContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
                }
            </div>
            <Button type={"button"} onClick={() => { }}>
                GO TO CHECKOUT
            </Button>
        </div>
    )
}

export default CartDropDown;