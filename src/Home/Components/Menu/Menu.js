import React from 'react';
import './Menu.css';
import { CgProfile } from "react-icons/cg";
import { FaUserEdit, FaShareAlt } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Menu = () => {
    const menuItems = [
        { id: 1, title: "Profile", icon: <CgProfile /> },
        { id: 2, title: "Edit", icon: <FaUserEdit /> },
        { id: 3, title: "Share", icon: <FaShareAlt /> },
        { id: 4, title: "Sign Out", icon: <RiLogoutCircleRLine /> }
    ]
    return (
        <div>
            <ul id='menu-div'>
                {
                    menuItems.map(mi =>
                        <div className='menu-items' key={mi.id}><p>{mi.title}</p> <span>{mi.icon}</span></div>
                    )
                }
            </ul>
        </div>
    );
};

export default Menu;