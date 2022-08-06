import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../nav-bar/nav-bar.component';

const Home = () => {
    return (
        <Fragment>
            <NavBar />
            <Outlet />
        </Fragment>
    )
}

export default Home;