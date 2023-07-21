import React from 'react';
import './Footer.css';
import { FaBell, FaCompass, FaWallet } from "react-icons/fa";
import { RiSettings2Fill } from "react-icons/ri";

const Footer = () => {
    const footerIcons = [
        {
            id: 1,
            icon: <FaWallet />,
            class: "active"
        },
        {
            id: 2,
            icon: <FaCompass />,
            class: ""
        },
        {
            id: 3,
            icon: <FaBell />,
            class: ""
        },
        {
            id: 4,
            icon: <RiSettings2Fill />,
            class: ""
        },
    ]
    return (
        <div className='footer-section'>
            <div className='footer-div'>
                {
                    footerIcons.map(fIcon =>
                        <p key={fIcon.id} className={fIcon.class}>{fIcon.icon}</p>)
                }
            </div>
            <hr className='bottom-bar'/>
        </div>
    );
};

export default Footer;