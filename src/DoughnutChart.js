import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import MoreVertIcon from '@mui/icons-material/MoreVert';

ChartJS.register(ArcElement, Tooltip, Legend);


function DoughnutChart() {

    //refer https://www.chartjs.org/docs/latest/configuration/legend.html

    const options = {

        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle'
                },
                display: true,
                title: {
                    padding: 0
                }
            }
        }
    };
    const data = {
        labels: ["Direct", "Social", " Referral"],
        datasets: [
            {
                label: "Revenue Resources",
                data: [55, 15, 30],
                backgroundColor: [
                    "hsl(225deg 69% 59%)",
                    "hsl(158deg 75% 45%)",
                    "hsl(188deg 60% 51%)"
                ],
                borderColor: [
                    "#fff",
                    "#fff",
                    "#fff"
                ],
                spacing: 5,
                borderWidth: 1,
                cutout: "83%"
            }
        ]
    };
    return (
        <>
            <div className="card-head-container">
                <h3 className="card-head">Revenue Sources</h3>
                <MoreVertIcon fontSize="small" sx={{ color: "hsl(233deg 7% 55%)" }} ></MoreVertIcon>
            </div>
            <div className="card-body">
                <Doughnut data={data} options={options} />
            </div>
        </>);


}

export { DoughnutChart }
