import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const NotFound = () => {
     
    const navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 1000)
    },[])
    
    return (
        <h1> 404 Not Found</h1>
    )

};

export default NotFound;