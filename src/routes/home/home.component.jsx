import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../nav-bar/nav-bar.component';
import Modal from '../../components/modal/modal.component';
import { ModalContext } from '../../context/modal/modal.context';

const Home = () => {
    const { isModalOpen, modalContent } = useContext(ModalContext);
    return (
        <Fragment>
            {
                isModalOpen && <Modal>{modalContent}</Modal>
            }
            <NavBar />
            <Outlet />
        </Fragment>
    )
}

export default Home;