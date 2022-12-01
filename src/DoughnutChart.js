import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


function DoughnutChart() {

    const data = {
        labels: ["Direct", "Social", " Referral"],
        datasets: [
            {
                label: "# of Votes",
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
                borderWidth: 1,
                cutout: "83%"
            }
        ]
    };


    return <Doughnut data={data} />;
}

export { DoughnutChart }
