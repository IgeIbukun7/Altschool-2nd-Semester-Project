import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/repo.css';
import ErrorBoundary from '../components/ErrorBoundary';


const Errorpage = () => {
    return (
        <div>
            <ErrorBoundary>
            <p className='d-flex flex-row align-items-center justify-content-center error errpage'>Oops! An unexpected error occured. Failed to fetch repositories</p>
            </ErrorBoundary>;
        </div>
    );
};

export default Errorpage;