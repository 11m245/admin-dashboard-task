import { CustomizedProgressBars } from "./CustomizedProgressBars";

function ProjectBars() {
    const projectsList = [{ label: "Server Migration", percent: 20, barColor: `red` }, { label: "Sales Tracking", percent: 40, barColor: `var(--clr4)` }, { label: "Customer Database", percent: 60, barColor: `var(--clr1)` }, { label: "Payout Details", percent: 80, barColor: `var(--clr3)` }, { label: "Account Setup", percent: 100, barColor: `var(--clr2)` }];
    return (<> <div className="card-head-container">
        <h3 className="card-head">Projects</h3>
        {/* <MoreVertIcon></MoreVertIcon> */}
    </div>
        <div className="card-body">
            {projectsList.map((data) => <ProjectBar data={data} />)}
        </div></>);
}


function ProjectBar({ data }) {
    // const data = { label: "Server Migration", percent: 20, barColor: "red" };
    return (
        <div className="project-container bar-container">
            <div className="label-container">
                <h4 className="bar-label">{data.label}</h4>
                <h4 className="bar-percent">{data.percent === 100 ? "Complete!" : `${data.percent}%`}</h4>
            </div>
            <div className="bar-container">
                <CustomizedProgressBars barColor={data.barColor} value={data.percent} />

            </div>
        </div >
    );

}

export { ProjectBars }