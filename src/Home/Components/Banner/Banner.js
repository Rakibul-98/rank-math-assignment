import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCurrencyBitcoin } from "react-icons/bs";

const Banner = () => {
    return (
        <div>
            <div>
                <p><BsCurrencyBitcoin/></p>
                <p>Bitcoin</p>
                <p>BTC</p>
            </div>
            <h1><span>3.529020</span>BTC</h1>
            <div>
                <h3>$<span>19.153</span>USD</h3>
                <button>-2.32%</button>
            </div>
            <p><MdKeyboardArrowDown/></p>
        </div>
    );
};

export default Banner;