import './App.css';
import { SmallCards } from './SmallCards';
import { LineChart } from "./LineChart";
import { DoughnutChart } from "./DoughnutChart";
import { CustomizedProgressBars } from "./CustomizedProgressBars"

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Dashboard />
    </div>
  );
}

function Dashboard() {

  const cardData = {
    heading: "Illustrations",
    image: "https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg",
    content: `Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!`,
    linkName: `Browse Illustrations on unDraw →`,
    linkUrl: `https://undraw.co/`
  }

  return (
    <div>
      <SmallCards />
      <div className="line-chart-container"><LineChart lineColor="green" /></div>
      {/* <LineChart lineColor="var(--clr1)" /> */}
      <div className="doughnut-chart-container"><DoughnutChart /></div>

      <div className="projects-container">
        {projectsList.map((data) => <ProjectBar data={data} />)}
      </div>
      <div className="section-3">
        <div className="projects-container card-container shadow">
          <ProjectBars />
        </div>

        <div className="color-cards-container card-container shadow">
          <ColorCards />
        </div>

        <div className="card-with-pic illustrations-card card-container shadow">
          <CardwithPic data={cardData} />
        </div>

      </div>
    </div>);
}

function ProjectBar({ data }) {

  return (
    <div className="project-container">
      <div className="label-container">
        <h4>{data.label}</h4>
        <h4>{data.percent === 100 ? "Complete" : `${data.percent}%`}</h4>
      </div>
    </div>
  );
}


export default App;
