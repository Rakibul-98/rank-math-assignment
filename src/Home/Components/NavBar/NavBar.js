import React from 'react';
import './NavBar.css';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <p className='nav-icon'><MdOutlineArrowBackIos/></p>
            <h2 className='app-title'>Bitcoin Wallet</h2>
            <p className='nav-icon'><BsThreeDotsVertical/></p>
        </div>
    );
};

export default NavBar;