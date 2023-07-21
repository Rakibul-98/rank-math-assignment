import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Graph from './Components/Graph/Graph';
import BuySell from './Components/BuySell/BuySell';
import Footer from './Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Graph/>
            <BuySell/>
            <Footer/>
        </div>
    );
};

export default Home;