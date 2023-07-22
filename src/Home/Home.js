import React from 'react';
import './Home.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Graph from './Components/Graph/Graph';
import BuySell from './Components/BuySell/BuySell';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';

const Home = () => {
    const btns =[
        {id:1, class:"key power-btn"},
        {id:2, class:"key alert-btn"},
        {id:3, class:"key volume-btn up"},
        {id:4, class:"key volume-btn down"}
        
    ]
    return (
        <div className='home-section'>
            <NavBar />
            <Menu />
            <div>
                {
                    btns.map(btn=><hr className={btn.class} />)
                }
            </div>
            <div id='main-content-div' style={{ margin: "0 30px" }}>
                <Banner />
                <Graph />
                <BuySell />
            </div>
            <Footer />
        </div>
    );
};

export default Home;