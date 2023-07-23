import React from 'react';
import './BuySell.css';

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
                    <div key={tr.id} className="transaction-card">
                        <span className={tr.class}>$</span>
                        <p style={{marginTop:"15px"}}>{tr.text}</p>
                    </div>
                )
            }
        </div>
    );
};

export default BuySell;