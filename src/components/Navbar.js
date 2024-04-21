import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './repo.css';
import github from '../assets/github-wh.svg';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className='d-flex flex-row align-items-center justify-content-around' id='nav'>
                <a href ='/' className='d-flex flex-row align-items-center justify-content-center homelogo'>
                    <img
                        src= {github} 
                        className="gitlogo"
                        alt="logo"
                    />
                    <p>IgeIbukun7</p>
                </a>
                <h3>GitHub Repositories</h3>
                <Link to='mailto:jonathan4lyf@gmail.com'><button className='repobtn'>Contact Me</button></Link>
            </nav>
        </div>
    );
};

export default Navbar;