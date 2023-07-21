import React from 'react';
import './Banner.css';
import { BsChevronCompactDown, BsCurrencyBitcoin } from "react-icons/bs";

const Banner = () => {
    return (
        <div className='banner-section'>
            <div className='banner-header'>
                <div style={{display:"flex", alignItems:"center"}}>
                    <p className='bitcoin-icon'><BsCurrencyBitcoin /></p>
                    <p>Bitcoin</p>
                </div>
                <p>BTC</p>
            </div>
            <h1 style={{margin:"5px 0"}}><span>3.529020</span> BTC</h1>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h3  style={{color:"gray"}}>$<span>19.153</span> USD</h3>
                <p className='exchange-rate'>- 2.32%</p>
            </div>
            <button className='collapse-btn'><BsChevronCompactDown /></button>
        </div>
    );
};

export default Banner;