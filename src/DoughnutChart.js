import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";


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

    const renderDropDownMenu = (<div onBlur={() => { console.log("onblur"); setShowMenu(!showMenu) }} className="drop-down-menu" style={{ position: "absolute", top: "30px", right: "0" }}>
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
                <h3 className="card-head">Revenue Sources</h3>
                <button onBlur={() => setShowMenu(false)} className="drop-down-menu-icon" href="#"><MoreVertIcon onClick={() => { console.log("onclick"); setShowMenu(!showMenu) }} onBlur={() => { console.log("onblur"); setShowMenu(!showMenu) }} fontSize="small" sx={{ color: "hsl(233deg 7% 55%)" }} ></MoreVertIcon></button>
                {showMenu ? renderDropDownMenu : null}
            </div>
            <div className="card-body">
                <Doughnut data={data} options={options} />
            </div>
        </>);


}

export { DoughnutChart }
