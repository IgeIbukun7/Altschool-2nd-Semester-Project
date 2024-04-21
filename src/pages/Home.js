import React from 'react';
import Hero from '../components/Hero';
import RepositoryList from '../components/RepositoryList';

const Home = () => {
    return (
        <div>
            <Hero />
            <RepositoryList />
        </div>
    );
};

export default Home;