import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from './../../assets/crown.svg';

import './nav-bar.styles.scss';

const NavBar = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-up'>
                        SIGN IN
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}
export default NavBar;