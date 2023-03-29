import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';

const Northeast = () => {
    const { id } = useParams()

    return (
        <div>
            State {id}
        </div>
    )

};

export default Northeast;