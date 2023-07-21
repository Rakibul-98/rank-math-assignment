import React from 'react';
import './NavBar.css';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BsBatteryFull, BsThreeDotsVertical } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { BiWifi2 } from "react-icons/bi";

const NavBar = () => {
    return (
        <div className='nav-section'>
            <div className='top-nav'>
                <div>
                    <p>9:45</p>
                </div>
                <div className='notch'>
                    <hr className='speaker-grill'/>
                    <hr className='noise-cancellation'/>
                </div>
                <div>
                    <GiNetworkBars />
                    <BiWifi2 />
                    <BsBatteryFull />
                </div>
            </div>
            <div className='nav-bar'>
                <p className='nav-icon'><MdOutlineArrowBackIos /></p>
                <h2 className='app-title'>Bitcoin Wallet</h2>
                <p className='nav-icon'><BsThreeDotsVertical /></p>
            </div>
        </div>
    );
};

export default NavBar;