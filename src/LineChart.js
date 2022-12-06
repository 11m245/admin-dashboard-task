import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function LineChart({ lineColor }) {
    const options = {
        radius: 5,
        hitRadius: 20,
        hoverRadius: 10,
        responsive: true,
        plugins: {
            legend: {
                position: "none"
            },
            title: {
                display: false,
                text: "Chart.js Line Chart"
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },

            y: {

                min: 0,
                max: 40000,
                ticks: {
                    stepSize: 10000,
                    callback: (value) => "$ " + value
                },

                grid: {
                    borderDash: [10]
                }

            }
        }
    };

    const labels = [
        "January",
        "",
        "March",
        "",
        "May",
        "",
        "July",
        "",
        "September",
        "",
        "November",
        ""
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: [
                    0,
                    10000,
                    5000,
                    15000,
                    10000,
                    20000,
                    15000,
                    25000,
                    20000,
                    30000,
                    25000,
                    35000
                ],
                borderColor: lineColor,
                backgroundColor: lineColor,
                pointBorderColor: lineColor,
                pointBackgroundColor: lineColor,
                pointBorderWidth: 3,
                tension: 0.2
            }
        ]
    };

    const renderDropDownMenu = (<div className="drop-down-menu" style={{ position: "absolute", top: "30px", right: "0" }}>
        <h3 className="drop-down-header">Dropdown Header</h3>
        <a href="#" onClick={() => setShowMenu(!showMenu)} className="drop-down-item"> option1</a>
        <a href="#" onClick={() => setShowMenu(!showMenu)} className="drop-down-item">option2</a>
        <div className="drop-down-divider"></div>
        <a href="#" onClick={() => setShowMenu(!showMenu)} className="drop-down-item">option3</a>
    </div >);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className="card-head-container" style={{ position: "relative " }}>
                <h3 className="card-head">Earnings Overview</h3>
                <button onBlur={() => setShowMenu(false)} className="drop-down-menu-icon" href="#"><MoreVertIcon onClick={() => setShowMenu(!showMenu)} fontSize="small" sx={{ color: "hsl(233deg 7% 55%)" }} ></MoreVertIcon></button>
                {showMenu ? renderDropDownMenu : null}
            </div>
            <div className="card-body">
                <Line options={options} data={data} />
            </div>
        </>);
}


export { LineChart }