import React, { useState } from 'react';
import WriteContentData from '../data'
import View from './View.js'

import '../css/components.css';
import { Route, Routes, useLocation } from 'react-router-dom';

function Write() {

    let [WriteListData] = useState(WriteContentData);

    return (

        <div className='common_page'>
            <div className='content_area'>
                <div className=''>
                    <div></div>
                    {
                        WriteListData.map(function (a, i) {

                            return (
                                <div className='WriteDiv' key={i}>

                                    <WriteList WriteListData={WriteListData[i]} i={i}></WriteList>
                                </div>
                            
                            )
                        })
                    }

                </div>
            </div>
        </div>

    )

}

function WriteList(props) {

    const location = useLocation();

    return (

        <div>

            {/* <Routes location={location}>
                <Route path="./View/:id" element={<View />}> */}
                    <div className='write_list'>
                        <div className='write_list_btn'>
                            <button></button>
                            <button></button>
                        </div>
                        <span>{props.WriteListData.title}</span>
                        <strong>{props.WriteListData.subTitle}</strong>
                        <p>{props.WriteListData.content}</p>
                    </div>
                {/* </Route>
            </Routes> */}

        </div>

    )

}

export default Write;
