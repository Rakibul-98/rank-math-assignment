import React from 'react';
import { LiaDollarSignSolid } from "react-icons/lia";

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
        },
    ]
    return (
        <div>
            {
                transactions.map(tr =>
                    <div className={tr.class}>
                        <p><LiaDollarSignSolid/></p>
                        <p>{tr.text}</p>
                    </div>
                )
            }
        </div>
    );
};

export default BuySell;