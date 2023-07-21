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
            <NavBar />
            <hr style={{height:"120px", width:"10px", borderRadius:"10px" ,border:"1px solid #b5c1d3", background:"#b5c1d3", position:"absolute", right:"-15px", top:"180px"}}/>

            <hr style={{height:"50px", width:"10px", borderRadius:"10px" ,border:"1px solid #b5c1d3", background:"#b5c1d3", position:"absolute", left:"-15px", top:"100px"}}/>

            <hr style={{height:"70px", width:"10px", borderRadius:"10px" ,border:"1px solid #b5c1d3", background:"#b5c1d3", position:"absolute", left:"-15px", top:"200px"}}/>

            <hr style={{height:"70px", width:"10px", borderRadius:"10px" ,border:"1px solid #b5c1d3", background:"#b5c1d3", position:"absolute", left:"-15px", top:"300px"}}/>

            <div style={{margin:"0 30px"}}>
                <Banner />
                <Graph />
                <BuySell />
            </div>
            <Footer />
        </div>
    );
};

export default Home;