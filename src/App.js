import './App.css';
import PrimarySearchAppBar from './header.js';
import { Dashboard } from './Dashboard';
import { Buttons } from './Buttons';



function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      {/* <Dashboard /> */}
      <Buttons />
    </div>
  );
}

export default App;