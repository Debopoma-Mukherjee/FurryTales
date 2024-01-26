/*import { useEffect } from "react";
import Header from "./Header";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!localStorage.getItem('token')) {
    //         navigate('/login');
    //     }
    // }, []);

    // useEffect(() => {
    //     const url = 'http://localhost:4000/get-pets';
    //     axios.get(url)
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((err)=> {
    //             console.log(err)
    //         })
    // })

    return (
        <div>
            <Header />
            {/* <Link to="/add-pet" > ADD PET </Link> }
        </div>
    );
}

export default Home;*/

import { useEffect, React } from "react";
import "./HomeSection.css";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  

  return (
    <div>
      <Header  />
      <div className='home-container' /*style={{ backgroundImage:`url(/public/video/Aaratrika Mukherjee (Photo).jpg)`}}*/>
        <video src='/video/cat2.mp4' autoPlay loop muted />
        <h1>Pet Lover's Paradise</h1>
        <p>Because every tail deserves a happy tale!</p>
        
    </div>
      <Footer />
    </div>
  );
}

export default Home;
