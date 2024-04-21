import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './repo.css';


const Hero = () => {
    return (
        <div id='hero' className='d-flex flex-column'>
            <h1>Welcome!</h1>
            <p>Hi there 👋,</p> 
            <p>My name is Ibukun Ige. I am a FrontEnd Developer from Lagos State, Nigeria.</p>
            <p>This page contains the list of my github repositories and the projects I've worked on so far in my Software Engineering career.</p>
            <p>Click here to see the Error Page implemented: <a href='/error'>Error Page</a> </p>
            <p>Click here to see the 404 Page implemented: <a href='/404'>404 Page</a> </p>
        </div>
    );
};

export default Hero;