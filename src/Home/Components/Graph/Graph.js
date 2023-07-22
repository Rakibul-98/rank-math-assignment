import React from 'react';
import './Graph.css'
import Chart from './Chart';

const Graph = () => {
    const tabInfos=[
        {
            id:1,
            name:"Day",
            class:""
        },
        {
            id:2,
            name:"Week",
            class:"active"
        },
        {
            id:3,
            name:"Month",
            class:""
        },
        {
            id:4,
            name:"Year",
            class:""
        },
    ]

    return (
        <div>
            <div>
                <ul className="tab-title">
                    {
                        tabInfos.map(ti=>
                        <li key={ti.id} className={ti.class}>{ti.name}
                        </li>)
                    }
                </ul>
            </div>
            <div>
                <Chart/>
            </div>
        </div>
    );
};

export default Graph;