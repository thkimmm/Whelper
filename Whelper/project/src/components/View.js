import React, { Component } from 'react';
import WriteContentData from './Write'
import { Route, useParams } from 'react-router-dom';

import '../css/components.css';

function View(props) {

    let {id} = useParams();

    return (

        <div>
            <div className='write_list_btn'>
                <button></button>
                <button></button>
            </div>
            <span>{props.WriteListData[id].title}</span>
            <strong>{props.WriteListData[id].subTitle}</strong>
            <p>{props.WriteListData[id].content}</p>
        </div>

    )

}

export default View;
