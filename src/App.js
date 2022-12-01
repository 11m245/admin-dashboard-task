import './App.css';
import { SmallCards } from './SmallCards';
import { LineChart } from "./LineChart";
import { DoughnutChart } from "./DoughnutChart";
import { CustomizedProgressBars } from "./CustomizedProgressBars"

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

function Dashboard() {
  let color = "var(--clr1)";
  const projectsList = [{ label: "Server Migration", percent: 20, barColor: "red" }, { label: "Sales Tracking", percent: 40, barColor: "red" }, { label: "Customer Database", percent: 60, barColor: "red" }, { label: "Payout Details", percent: 80, barColor: "red" }, { label: "Account Setup", percent: 100, barColor: "red" }];

  console.log(color);
  return (<div>
    <SmallCards />
    <div className="line-chart-container"><LineChart lineColor="green" /></div>
    {/* <LineChart lineColor="var(--clr1)" /> */}
    <div className="doughnut-chart-container"><DoughnutChart /></div>

    <div className="projects-container">
      {projectsList.map((data) => <ProjectBar data={data} />)}
    </div>



  </div>);
}

function ProjectBar({ data }) {
  // const data = { label: "Server Migration", percent: 20, barColor: "red" };
  return (
    <div className="project-container">
      <div className="label-container">
        <h4>{data.label}</h4>
        <h4>{data.percent === 100 ? "Complete" : `${data.percent}%`}</h4>
      </div>
      <CustomizedProgressBars barColor={data.barColor} value={data.percent} />
    </div>
  );

}


export default App;
