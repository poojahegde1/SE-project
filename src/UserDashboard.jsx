import { React } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
/*only testing**************************************************************************************************************/

export function UserDashboard()
{ 
     /* const { username } = useParams();
     useEffect(() => {
        fetch('https://eventfactorybackend.herokuapp.com/getAll')
        .then(response => response.json())
        .then(json => console.log(json))
        }, []);  */

        /* const user = JSON.parse(localStorage.getItem('username'));  */


        const user = localStorage.getItem("username"); 
        console.log(user);

        const handleLogout = () => {
          localStorage.removeItem("user"); 
          window.location.href = "/";
        };

        return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link to="/UserDashboard" className="navbar-brand" >Event factory</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link to="#" className="nav-link" aria-current="page" >Welcome {user.fname} {user.lname}</Link> */}
                <Link to="#" className="nav-link" aria-current="page" >Welcome {user}</Link>
              </li>
              <li></li>
              <li className="nav-item">
                <Link to='/profile' className="nav-link active" >My Profile</Link>
              </li>
              {/* <li className="nav-item">
                <Link to='/profile' className="nav-link active" >Upload Venue</Link>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <button className="form-control me-2" type="submit" ><Link onClick={handleLogout}>Logout</Link></button>
            </form>            
          </div>
        </div>
      </nav> 
      
<p></p>
<p></p>
<p></p>
      <center>
      <div class="row">
        <div class="col-sm-6 ">
          <div class="card" style={{backgroundColor: '#F5F5F5',}}>
            <div class="card-body ">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary btn-dark">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" style={{backgroundColor: '#F5F5F5',}}>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary btn-dark">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      </center>
      <p></p>
      <center>
      <div class="row">
        <div class="col-sm-6 ">
          <div class="card card " style={{backgroundColor: '#F5F5F5',}}>
            <div class="card-body ">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary btn-dark">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" style={{backgroundColor: '#F5F5F5',}}>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary btn-dark">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      </center>
     
       
    </div>);
    
}
export default UserDashboard;