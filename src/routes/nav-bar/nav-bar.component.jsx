import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setCurrentUser } from "./../../store/user/user.action";
import { selectCurrentUser } from "./../../store/user/user.selector";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { ReactComponent as CrwnLogo } from "./../../assets/crown.svg";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectIsCartDropDownOpen } from "./../../store/cart-dropdown/cart-dropdown.selector";
import "./nav-bar.styles.scss";

const NavBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartDropDownOpen = useSelector(selectIsCartDropDownOpen);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {currentUser ? <span>Welcome {currentUser}</span> : ""}
          <Link className="nav-link" to="other-work">
            Other Work
          </Link>
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {currentUser ? (
            <div
              className="nav-link"
              onClick={() => {
                dispatch(setCurrentUser(null));
              }}
            >
              SIGN OUT
            </div>
          ) : (
            <Link className="nav-link" to="sign-up">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartDropDownOpen && <CartDropDown />}
      </div>
    </Fragment>
  );
};
export default NavBar;
