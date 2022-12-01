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
        responsive: true,
        plugins: {
            legend: {
                position: "none"
            },
            title: {
                display: false,
                text: "Chart.js Line Chart"
            }
        }
    };

    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
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
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                lineTension: 0.2
            }
        ]
    };


    return <Line options={options} data={data} />;
}


export { LineChart }