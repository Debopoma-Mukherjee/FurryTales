/*import Header from "./components/Header";

function App(){
  return(
    <div className="App" >
      <Header/>
    </div>
  );
}

export default App;*/


import Adopt from "./components/Adopt";
import Product from "./components/Product";
import Home from "./components/Home";

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App(){
  return(
    <>
    <Router>
    
    <div className="App" >
   
      <Home/>
      <Routes>
          <Route exact path="/" element={<Home />}> 
          </Route>
          <Route exact path="/about" element={<AboutUs />}> 
          </Route>
          <Route exact path="/contact" element={<ContactUs />}> 
          </Route>

          <Route exact path="/Adopt" element={<Adopt />}> 
          </Route>
          <Route exact path="/Product" element={<Product />}> 
          </Route>
      </Routes>
        
    </div>
    
    </Router>
    </>
  );
}

export default App;