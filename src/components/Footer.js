import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './repo.css';
import linkedin from '../assets/mdi--linkedin.svg';
import git from '../assets/mdi--github.svg';
import medium from '../assets/mingcute--medium-fill.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='line'></div>
            <div className='d-flex flex-row align-items-center justify-content-center foot'>
                <p>© Ibukun Ige (2024)</p>
                <span className='d-flex flex-row align-items-center justify-content-center social'>
                    <a href='https://www.linkedin.com/in/ibukun-ige-b5207b177/'><img
                        src= {linkedin} 
                        className=""
                        alt="linkedin"
                    /></a>
                    <a href='https://github.com/IgeIbukun7/'><img
                        src= {git} 
                        className=""
                        alt="github"
                    /></a>
                    <a href='/'><img
                        src= {medium} 
                        className=""
                        alt="medium"
                    /></a>
                </span>
            </div>
        </div>
    );
};

export default Footer;