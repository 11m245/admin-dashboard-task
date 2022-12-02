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
                pointBackgroundColor: "red",
                pointBorderWidth: 3,
                tension: 0.2
            }
        ]
    };


    return (
        <>
            <div className="card-head-container">
                <h3 className="card-head">Earnings Overview</h3>
                <MoreVertIcon></MoreVertIcon>
            </div>
            <Line options={options} data={data} />
        </>);
}


export { LineChart }