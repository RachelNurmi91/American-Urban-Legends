import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const StateList = () => {

    return (
        <>
            <h1>State List</h1>
            <Link to='/states/Alabama'>Alabama</Link>
            <Link to='/states/Alaska'>Alaska</Link>
        </>
    )

};

export default StateList;