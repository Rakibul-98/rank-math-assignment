import React from 'react';
import './BuySell.css';
import { FaDollarSign } from "react-icons/fa";

const BuySell = () => {
    const transactions = [
        {
            id: 1,
            text: "Buy BTC",
            class: "buy",
        },
        {
            id: 2,
            text: "Sell BTC",
            class: "sell",
        }
    ]

    return (
        <div className='transaction-div'>
            {
                transactions.map(tr =>
                    <div className="transaction-card">
                        <p className={tr.class}><FaDollarSign/></p>
                        <p>{tr.text}</p>
                    </div>
                )
            }
        </div>
    );
};

export default BuySell;