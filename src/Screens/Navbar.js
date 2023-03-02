import { Link } from 'react-router-dom'
import '../App.css'
import logo from '../images/logo.png'

const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-sm bg-body-tertiary sticky-top'>
            <div className='container-fluid'>
                <Link to='/' className='nav-link'>
                    <img src={logo}/>
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/states" className='nav-link'>States</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

};

export default Navbar;