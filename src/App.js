import './App.css';
import { SmallCards } from './SmallCards';
import { LineChart } from "./LineChart";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

function Dashboard() {

  return (<div>
    <SmallCards />
    <LineChart lineColor="green" />
    {/* <LineChart lineColor="var(--clr1)" /> */}
  </div>);
}


export default App;
