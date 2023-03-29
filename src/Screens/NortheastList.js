import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const NortheastList = () => {

    return (
        <>
            <h1>State List</h1>
            <Link to='/states/Alabama'>Alabama</Link>
            <Link to='/states/Alaska'>Alaska</Link>
        </>
    )

};

export default NortheastList;