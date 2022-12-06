import './App.css';
import PrimarySearchAppBar from './header.js';
import { Dashboard } from './Dashboard';
import { Buttons } from './Buttons';
import { Sidemenu } from './sidemenu';
import { useState, useEffect } from 'react';


function App() {



  const mobileStyle = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "100px auto"
  };
  const pcStyle = {
    display: "grid",
    gridTemplateColumns: "150px auto"
  };


  const [isMobile, setIsMobile] = useState(false)


  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }


  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })



  return (
    <div className="App">
      <PrimarySearchAppBar isMobile={isMobile} setIsMobile={setIsMobile} />
      <div className="body-container" style={isMobile ? mobileStyle : pcStyle}>
        <Sidemenu isMobile={isMobile} />
        <div className="body-content">
          <Dashboard />
          {/* <Buttons /> */}
        </div>
      </div>
    </div>

  );
}

export default App;