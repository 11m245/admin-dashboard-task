import './App.css';
import { NotFound } from './NotFound'
import PrimarySearchAppBar from './header.js';
import { Dashboard } from './Dashboard';
import { Buttons } from './Buttons';
import { Cards } from './Cards';
import { Sidemenu } from './sidemenu';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {



  const mobileStyle = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "100px auto"
  };
  const pcStyle = {
    display: "grid",
    gridTemplateColumns: "200px auto"
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
    window.addEventListener("resize", handleResize);
    // console.log("exec");
  })



  return (
    <div className="App">
      <PrimarySearchAppBar sx={{ position: "fixed", top: 0 }} isMobile={isMobile} setIsMobile={setIsMobile} />
      <div className="body-container" style={isMobile ? mobileStyle : pcStyle}>
        <Sidemenu isMobile={isMobile} />
        <div className="body-content">
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/Buttons"} element={<Buttons />} />
            <Route path={"/Cards"} element={<Cards />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>

          {/* <Buttons /> */}
        </div>
      </div>
    </div>

  );
}

export default App;