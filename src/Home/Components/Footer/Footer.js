import React from 'react';
import { FaBell, FaCompass, FaWallet } from "react-icons/fa";
import { RiSettings2Fill } from "react-icons/ri";

const Footer = () => {
    const footerIcons =[
        {
            id:1,
            icon:<FaWallet/>
        },
        {
            id:2,
            icon:<FaCompass/>
        },
        {
            id:3,
            icon:<FaBell/>
        },
        {
            id:4,
            icon:<RiSettings2Fill/>
        },
    ]
    return (
        <div>
            {
                footerIcons.map(fIcon=>
                <p key={fIcon.id}>{fIcon.icon}</p>)
            }
        </div>
    );
};

export default Footer;