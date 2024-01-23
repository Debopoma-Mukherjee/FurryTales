import { Link, useNavigate } from "react-router-dom";
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

          {/* Navbar */}

            <nav style={{backgroundColor: '#EA2027'}} class="navbar navbar-expand-lg" >
  <div class="container-fluid">
    <a class="navbar-brand text-light " href="/">FurryTales</a>
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

      {/* LOGIN */}

      {/* {
  !localStorage.getItem('token') ? (
    <Link to="/login">LOGIN</Link>
  ) : (
    <MDBBtn className=" btn-danger btn-outline-warning text-light"  onClick={handleLogout} > LOGOUT </MDBBtn>
  )
} */}
        </div>
    )
}

export default Header;