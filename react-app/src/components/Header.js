/*import { Link, useNavigate } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';

function Header()
{

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login')
    
  }

    return(
        <div className="header" >

          /* Navbar 

            <nav style={{backgroundColor: '#EA2027'}} class="navbar navbar-expand-lg" >
  <div class="container-fluid">
    <a class="navbar-brand text-light " href="/">FurryTaless</a>
    <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-light"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="/adopt">Adopt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/product">Product</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item " href="#">About us</a></li>
            <li><a class="dropdown-item " href="#">Contact us</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search" style={{marginRight:'10px'}} >
        <input class="form-control me-2 text-light" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-warning text-light btn-sm " type="submit">Search</button>
      </form>
      {
  !localStorage.getItem('token') ? (
    <Link to="/login">LOGIN</Link>
  ) : (
    <MDBBtn className=" btn-danger btn-outline-warning text-light"  onClick={handleLogout} > LOGOUT </MDBBtn>
  )
}
    </div>
  </div>
</nav>

      /* LOGIN */

      /* {
  !localStorage.getItem('token') ? (
    <Link to="/login">LOGIN</Link>
  ) : (
    <MDBBtn className=" btn-danger btn-outline-warning text-light"  onClick={handleLogout} > LOGOUT </MDBBtn>
  )
} 
        </div>
    )
}

export default Header; */

import { Link, useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";


function Header(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    

    
    <div className="header">
      {/* Navbar */}

      <nav
        style={{ backgroundColor: "#34495E" }}
        className="navbar navbar-expand-lg"
      >
        <div className="container-fluid" >
          <Link className="navbar-brand text-light " to="/">
            FurryTales
          </Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/Adopt"
                >
                  Adopt
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Product">
                  Product
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item " to="/about">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="/contact">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" style={{ marginRight: "10px" }}>
              <input
                className="form-control me-2 text-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={props && props.search}
                onChange={(e) => props.handlesearch && props.handlesearch(e.target.value)}
              />
              <button
                className="btn btn-outline-warning text-light btn-sm "
                /*type="submit"*/
                onClick={(e) => props.handleClick && props.handleClick(e)}
        
              >
                Search
              </button>
            </form>
            {!localStorage.getItem("token") ? (
              <Link to="/login">LOGIN</Link>
            ) : (
              <MDBBtn
                className=" btn-danger btn-outline-warning text-light"
                onClick={handleLogout}
              >
                {" "}
                LOGOUT{" "}
              </MDBBtn>
            )}
          </div>
        </div>
      </nav>

      {/* LOGIN */}

      {/* {
  !localStorage.getItem('token') ? (
    <Link to="/login">LOGIN</Link>
  ) : (
    <MDBBtn classNameName=" btn-danger btn-outline-warning text-light"  onClick={handleLogout} > LOGOUT </MDBBtn>
  )
} */}
    </div>
  
  );
}

export default Header;