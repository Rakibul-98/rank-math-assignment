import React from 'react';
import './Banner.css';
import { BsChevronCompactDown, BsChevronCompactUp, BsCurrencyBitcoin } from "react-icons/bs";
import BuySell from '../BuySell/BuySell';
import handleToggle from '../ToggleFunction/Toggle';

const Banner = () => {

    return (
        <div className='banner-section'>
            <div style={{padding:"20px 20px 0"}}>
                <div className='banner-header'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p className='bitcoin-icon'><BsCurrencyBitcoin /></p>
                        <p>Bitcoin</p>
                    </div>
                    <p style={{color:"#a0a5ab"}}>BTC</p>
                </div>
                <h1 style={{ margin: "5px 0" }}><span>3.529020</span> BTC</h1>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3 style={{ color: "#AEB8C4" }}>$<span>19.153</span> USD</h3>
                    <p className='exchange-rate'>- 2.32%</p>
                </div>
                <button className='collapse-btn' onClick={() => handleToggle("banner")}>
                    <span id='down'><BsChevronCompactDown /></span> <span id='up'><BsChevronCompactUp /></span>
                </button>
            </div>
            <div id='expand-sec'>
                <BuySell />
            </div>
        </div>
    );
};

export default Banner;