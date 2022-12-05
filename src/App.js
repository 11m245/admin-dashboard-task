import './App.css';
import PrimarySearchAppBar from './header.js';
import { Dashboard } from './Dashboard';
import { Buttons } from './Buttons';
import { Sidemenu } from './sidemenu';


function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <div className="body-container">
        <Sidemenu />
        <div className="body-content">
          <Dashboard />
          <Buttons />
        </div>
      </div>
    </div>

  );
}

export default App;