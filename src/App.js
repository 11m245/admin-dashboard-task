import './App.css';
import PrimarySearchAppBar from './header.js';
import { Dashboard } from './Dashboard';



function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Dashboard />
    </div>
  );
}

export default App;