import { useSelector, useDispatch } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import {
  selectIsCartDropDownOpen,
  selectTotalItemsInCart,
} from "./../../store/cart-dropdown/cart-dropdown.selector";
import { toggleCartDropDown } from "./../../store/cart-dropdown/cart-dropdown.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const totalItemsInCart = useSelector(selectTotalItemsInCart);
  const isCartDropDownOpen = useSelector(selectIsCartDropDownOpen);

  const toggleCart = () => dispatch(toggleCartDropDown(!isCartDropDownOpen));

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count ">{totalItemsInCart}</span>
    </div>
  );
};

export default CartIcon;
