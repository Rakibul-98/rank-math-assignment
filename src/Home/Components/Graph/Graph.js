import React, { useState } from 'react';
import './Graph.css'
import Chart from './Chart';

const Graph = () => {
    const [state, setState] = useState('2');

    const tabInfos = [
        {
            id: 1,
            name: "Day",
        },
        {
            id: 2,
            name: "Week"
        },
        {
            id: 3,
            name: "Month"
        },
        {
            id: 4,
            name: "Year"
        },
    ];

    const dayData = [
        { name: '8.00 AM', rate: 8.895 },
        { name: '12.00 PM', rate: 5.495 },
        { name: '4.00 PM', rate: 6.195 },
        { name: '8.00 PM', rate: 4.495 },
        { name: '12.00 AM', rate: 6.855 },
        { name: '4.00 AM', rate: 7.358 }
    ];

    const weekData = [
        { name: 'Sat', rate: 4.895 },
        { name: 'Sun', rate: 5.495 },
        { name: 'Mon', rate: 5.195 },
        { name: 'Tues', rate: 5.495 },
        { name: 'Wed', rate: 6.855 },
        { name: 'Thurs', rate: 6.358 },
        { name: 'Fri', rate: 6.595 }

    ];

    const monthData = [
        { name: 'January', rate: 4.895 },
        { name: 'February', rate: 5.495 },
        { name: 'March', rate: 5.195 },
        { name: 'April', rate: 5.495 },
        { name: 'May', rate: 6.855 },
        { name: 'June', rate: 7.358 },
        { name: 'July', rate: 6.595 },
        { name: 'August', rate: 5.495 },
        { name: 'September', rate: 5.195 },
        { name: 'October', rate: 5.495 },
        { name: 'November', rate: 6.855 },
        { name: 'December', rate: 6.358 }
    ];

    const yearData = [
        { name: '2018', rate: 3.855 },
        { name: '2019', rate: 6.358 },
        { name: '2020', rate: 4.895 },
        { name: '2021', rate: 5.495 },
        { name: '2022', rate: 6.195 },
        { name: '2023', rate: 9.495 }

    ];

    const [data, setData] = useState(weekData);

    const handleTab = (index) => {
        setState(index);
        if (index === "1") {
            setData(dayData);
        }
        else if (index === "2") {
            setData(weekData);
        }
        else if (index === "3") {
            setData(monthData);
        }
        else if (index === "4") {
            setData(yearData);
        }
    }

    return (
        <div>
            <div>
                <ul className="tab-title">
                    {
                        tabInfos.map(ti =>
                            <li key={ti.id} onClick={() => handleTab(`${ti.id}`)} className={state === `${ti.id}` ? "active" : " "}><p>{ti.name}</p>
                            </li>)
                    }
                </ul>
            </div>
            <div>
                <Chart data={data}></Chart>
            </div>
        </div>
    );
};

export default Graph;