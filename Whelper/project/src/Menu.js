import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
    Route,
    Routes,
    useLocation
} from "react-router-dom";

import './css/App.css';
import './css/header.css';

import List from './components/List'
import Memo from './components/Memo'
import Write from './components/Write'
import Side from './components/Side'
import Search from './components/Search'

function Menu() {

    const location = useLocation();

    return (

        <div className='menuWrap'>

            <TransitionGroup component={null}>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <Routes location={location}>

                        <Route exact path="/" />

                        <Route exact path="/components/Side" element={<Side />} />
                        <Route exact path="/components/Search" element={<Search />} />

                        <Route exact path="/components/List" element={<List />} />
                        <Route path="/components/Memo" element={<Memo />} />
                        {/* <Route path="/components/View" element={<View />} /> */}
                        <Route path="/components/Write" element={<Write />} />
                        {/* <Route path="/components/Correct" element={<Correct />} /> */}

                    </Routes>
                </CSSTransition>
            </TransitionGroup>

        </div>

    )

}

export default Menu;