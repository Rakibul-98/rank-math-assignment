import React from 'react';
import { AreaChart, Area, Tooltip } from 'recharts';
import './Chart.css';
import { GoDotFill } from "react-icons/go";

const Chart = ({data}) => {
    const rates = data.map(d=>(d.rate));
    const max = Math.max(...rates);
    const min = Math.min(...rates);
    const avg = (min+max)/2;

    const chartTitle = [
        { id: 1, name: "Lower", value: min, color: "#EF2755" },
        { id: 2, name: "Higher", value: max, color: "#1EC070" }
    ]

    return (
        <div className='chart-div'>
            <div className='chart-status'>
                {
                    chartTitle.map(ct =>
                        <div key={ct.id} style={{ display: "flex", alignItems: "center" }}>
                            <GoDotFill style={{color: `${ct.color}`}} />
                            <p style={{color:"#AEB8C4"}}> {ct.name}: $<span>{ct.value}</span></p>
                        </div>
                    )
                }
            </div>
            <AreaChart width={370} height={150} data={data} >
                <Area type="monotone" dataKey="rate" stroke="#FF8F17" fill="#fbe8d4" strokeWidth="4"/>
                <Tooltip />
            </AreaChart>
            <div className='current-rate'>
                <GoDotFill style={{ color: "#FF8F17", marginRight:"4px"}} />
                <p>1 BTC = $<span>{avg}</span></p>
            </div>
        </div>
    );
};

export default Chart;