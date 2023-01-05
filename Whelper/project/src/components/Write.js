import React, { useState } from 'react';
import WriteContentData from '../data'
import View from './View.js'

import '../css/components.css';
import { Route, NavLink, Routes, useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';

function Write() {

    let [WriteListData] = useState(WriteContentData);

    return (

        <div className='common_page'>
            <div className='content_area'>

                <Routes>
                    <Route path="/" element={

                        <>

                            {
                                WriteListData.map(function (a, i) {
                                    return (
                                        <div className='WriteDiv' key={i}>
                                            <WriteList WriteListData={WriteListData[i]} i={i}></WriteList>
                                        </div>
                                    )
                                })
                            }

                        </>

                    } />

                    <Route path="/components/View/:id" element={<View WriteListData={WriteListData} />} />
                </Routes>

            </div>
        </div>

    )

}

function WriteList(props) {

    let navigate = useNavigate();

    return (

        <div>

            <NavLink onClick={() => navigate('/components/View/:id')}>
                <div className='write_list'>
                    <div className='write_list_btn'>
                        <button></button>
                        <button></button>
                    </div>
                    <span>{props.WriteListData.title}</span>
                    <strong>{props.WriteListData.subTitle}</strong>
                    <p>{props.WriteListData.content}</p>
                </div>
            </NavLink>

        </div>

    )

}

export default Write;
