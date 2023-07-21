import React from 'react';
import './Home.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Graph from './Components/Graph/Graph';
import BuySell from './Components/BuySell/BuySell';
import Footer from './Components/Footer/Footer';

const Home = () => {
    return (
        <div className='home-section'>
            <NavBar/>
            <Banner/>
            <Graph/>
            <BuySell/>
            <Footer/>
        </div>
    );
};

export default Home;