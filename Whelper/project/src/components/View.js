import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import '../css/components.css';

function View(props) {

    let { id } = useParams();

    return (

        <div>

            <div className='View_page'>

            </div>

        </div>

    )

}

export default View;
