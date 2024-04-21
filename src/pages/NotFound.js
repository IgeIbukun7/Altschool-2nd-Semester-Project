import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/repo.css';
import notfound from '../assets/404 Error-rafiki.svg';

const NotFound = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center notfound'>
            <img
                src= {notfound} 
                className="404"
                alt="404"
            />
            <h3>Page not found. Return <a href='/'>Home</a></h3>
        </div>
    );
};

export default NotFound;