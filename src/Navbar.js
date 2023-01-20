import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-sm bg-body-tertiary'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>Urban Legends</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Link</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

};

export default Navbar;