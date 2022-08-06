import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
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
                </Route>
            </Routes>
        </Fragment>
    )
}

export default App;