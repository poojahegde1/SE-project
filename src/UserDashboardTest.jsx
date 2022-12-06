import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export function UserDashboardTest()
{ 
        
        let {email} = useParams();

        console.log(email) 

        const handleLogout = () => {
          localStorage.removeItem("email"); 
          window.location.href = "/";
        };

        return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link to="" className="navbar-brand" >Event factory</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="#" className="nav-link" aria-current="page" >Welcome {email}</Link>
              </li>
              <li></li>
              <li className="nav-item">
                <Link to={`/Profile/${email}`}  className="nav-link active" >My Profile</Link>
              </li>
              <li className="nav-item">
                <Link to='/Chat' className="nav-link active" >Chat</Link>
              </li>
              <li className="nav-item">
                <Link to='/UserCalendar' className="nav-link active" >Calendar</Link>
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

    <div style={{border: '500px',}}>
    <p></p>
      <center>
      <div className="row">
      <div className="col-sm-6">
          <div className="card" style={{backgroundColor: '#F5F5F5',}}>
            <div className="card-body">
              <p></p>
              <Link to="/UserViewEvent" className="btn btn-primary btn-light"><h1 className="card-title">View events</h1></Link>
              <p></p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" style={{backgroundColor: '#F5F5F5',}}>
            <div className="card-body">
              <p></p>
              <Link to="/UserViewVenue" className="btn btn-primary btn-light"><h1 className="card-title">View venues</h1></Link>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      </center>
      <p></p>
      <center>
      <div className="row">
      <div className="col-sm-6">
          <div className="card" style={{backgroundColor: '#F5F5F5',}}>
            <div className="card-body">
              <p></p>
              <Link to="/CheckVenues" className="btn btn-primary btn-light"><h1 className="card-title">Organize event</h1></Link>
              <p></p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" style={{backgroundColor: '#F5F5F5',}}>
            <div className="card-body">
              <p></p>
              <Link to="/UserEventsToAttend" className="btn btn-primary btn-light"><h1 className="card-title">Events to attend</h1></Link>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      </center>
      </div>

    </div>);
    
}
export default UserDashboardTest;