import { Link, useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";


function Header(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    

    
    <div className="header">

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
          
            {!localStorage.getItem("token") ? (
              <Link to="/login" className="btn btn-danger btn-outline-warning text-light" style={{textDecoration:'none'}} >LOGIN</Link>
            ) : (
              <MDBBtn
                className=" btn-light btn-outline-light "
                onClick={handleLogout}
                style={{color:'#34495E '}}
              >
                {" "}
                LOGOUT{" "}
              </MDBBtn>
            )}
          </div>
        </div>
      </nav>

    </div>
  
  );
}

export default Header;