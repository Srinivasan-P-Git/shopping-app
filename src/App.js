import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Modal from './components/modal/modal.component';
import Carousel from './components/carousel/carousel.component';
import OtherWork from './components/other-work/other-work.component';
import Authenticate from './routes/authenticate/authenticate.component';
import CategoriesList from './components/categories-list/categories-list.component';

import './App.scss';

const App = () => {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<CategoriesList />} />
                    <Route path='sign-up' element={<Authenticate />} />
                    <Route path='shop' element={<Shop />} />
                    <Route path='other-work' element={<OtherWork />}>
                        <Route path='carousel' element={<Carousel />} />
                        <Route path='modal' element={<Modal />} />
                    </Route>
                </Route>
            </Routes>
        </Fragment>
    )
}

export default App;