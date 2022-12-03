import './App.css';
import { SmallCards } from './SmallCards';
import { LineChart } from "./LineChart";
import { DoughnutChart } from "./DoughnutChart";
import { ProjectBars } from './ProjectBars';
import { ColorCards } from './ColorCards';
import { CardwithPic } from './CardwithPic';
import { CardOnly } from './CardOnly';
import PrimarySearchAppBar from './header.js';



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
    <div className="dashboard-container">

      <h1 className='heading'>Dashboard</h1>
      <SmallCards />
      <div className="section-2">

        <div className="line-chart-container card-container shadow">
          <LineChart lineColor="hsl(225deg 69% 59%)" />
        </div>
        {/* <LineChart lineColor=`${var(--clr1)}` /> */}

        <div className="doughnut-chart-container card-container shadow">
          <DoughnutChart />
        </div>
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

        <div className="card-only illustrations-card card-container shadow">
          <CardOnly />
        </div>
      </div>

    </div>);

}



export default App;