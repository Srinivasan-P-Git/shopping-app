import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/user/user.context';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { ReactComponent as CrwnLogo } from './../../assets/crown.svg';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartDropDownContext } from '../../context/cart-dropdown/cart-dropdown.context';

import './nav-bar.styles.scss';

const NavBar = () => {
    const user = useContext(UserContext);
    const { isCartDropDownOpen } = useContext(CartDropDownContext);
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    {user.currentUser ? <span>Welcome {user.currentUser}</span> : ''}
                    <Link className='nav-link' to='other-work'>
                        Other Work
                    </Link>
                    <Link className='nav-link' to='shop'>
                        SHOP
                    </Link>
                    {
                        user.currentUser ?
                            <div className='nav-link' onClick={() => { user.setCurrentUser(null) }}>
                                SIGN OUT
                            </div> :
                            <Link className='nav-link' to='sign-up'>
                                SIGN IN
                            </Link>
                    }
                    <CartIcon />
                </div>
                {isCartDropDownOpen && <CartDropDown />}
            </div>
        </Fragment>
    );
}
export default NavBar;