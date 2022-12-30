import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,
    NavLink,
    useLocation
  } from "react-router-dom";

import '../css/components.css';

class Side extends Component {

    render() {

        return (

            <div className='page menu'>
                <div className='content_area'>
                    <ul className="Nav">
                        <li>
                            <NavLink to="/components/List">LIST</NavLink>
                        </li>
                        <li>
                            <NavLink to="/components/Memo">MEMO</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/components/View">View</NavLink>
                        </li> */}
                        <li>
                            <NavLink to="/components/Write">WRITE</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/components/Correct">Correct</NavLink>
                        </li> */}
                    </ul>
                    <button className='menu_close' onClick={SideClose}></button>
                </div>
            </div>

        )

    }

}

function SideClose () {
    let menu = document.querySelector('.menu');
    menu.style.height = "0px";
    menu.style.overflow = "hidden";
}

export default Side;
