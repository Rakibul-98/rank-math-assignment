import React from 'react';
import { AreaChart, Area } from 'recharts';
import './Chart.css';
import { GoDotFill } from "react-icons/go";

const Chart = () => {

    const data = [
        {
            name: 'Sat',
            rate: "4.895"
        },
        {
            name: 'Sun',
            rate: "5.495"
        },
        {
            name: 'Mon',
            rate: "5.195"
        },
        {
            name: 'Tues',
            rate: "5.495"
        },
        {
            name: 'Wed',
            rate: "6.857"
        },
        {
            name: 'Thurs',
            rate: "6.358"
        },
        {
            name: 'Fri',
            rate: "6.595"
        }

    ];

    return (
        <div className='chart-div'>
            <div className='chart-status'>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <GoDotFill style={{ color: "#EF2755" }} />
                    <p> Lower: $<span>4.895</span></p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <GoDotFill style={{ color: "gray" }} />
                    <p>Higher: $<span>6.857</span></p>
                </div>
            </div>
            <AreaChart width={370} height={150} data={data} >
                <Area type="monotone" dataKey="rate" stroke="#FF8F17" fill="#FFF7EE" strokeWidth="4" />
            </AreaChart>
            <div className='current-rate'>
            <GoDotFill l style={{ color: "#FF8F17" }} />
                <p> 1 BTC = $<span>5.483</span></p>
            </div>
        </div>
    );
};

export default Chart;