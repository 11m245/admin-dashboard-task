import './App.css';
import { SmallCards } from './SmallCards';

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
  </div>);
}


export default App;
