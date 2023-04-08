import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const SouthwestList = ({listOutAllRegionStories, title}) => {

    return (
        <div className="solid p-4">
            <h1>{title}</h1>

            <div className="container">
                <div className="row">
                    {listOutAllRegionStories()}
                </div>
            </div>
            

        </div>
    )

};

export default SouthwestList;