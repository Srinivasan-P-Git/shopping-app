import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Button from '../button/button.component';
import { ModalContext } from '../../context/modal/modal.context';

import './other-work.styles.scss';

const OtherWork = () => {
    const { toggleModal, setModalContent } = useContext(ModalContext);
    const showModal = () => {
        toggleModal(true);
        setModalContent("This is new Content");
    }
    return (
        <Fragment>
            <div className='other-works-nav-container'>
                <Link to='carousel' className='nav-link'>
                    Carousel
                </Link>
                <Button type={"button"} onClick={showModal}>
                    Modal
                </Button>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default OtherWork;