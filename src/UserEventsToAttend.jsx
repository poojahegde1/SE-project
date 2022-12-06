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
import swal from "sweetalert";


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

export function UserEventsToAttend()
{ 
        const [user, setUser] = useState(localStorage.getItem("email"));

        const classes = useStyles();
        const [product, setProduct] = useState([]);
        const [search, setSearch] = useState("");
        const [filterParam, setFilterParam] = useState(["All events"]);

        const location_set = new Set();

        const getProductData = async () => {
          try {
            const data = await axios.get(
              `https://eventfactorybackend.herokuapp.com/getEventsAttending?userEmail=${user}`
            );
            console.log(data.data.Events);
            setProduct(data.data.Events);
          } catch (e) {
            console.log(e);
          }
        };

        useEffect(() => {
          getProductData();
        }, []);


        let handleClick = async (e, eventNumber) => {
          e.preventDefault();
          try {
              let res = await axios.post(`https://eventfactorybackend.herokuapp.com/unregisterEvent`, {
                userEmail : user,
                eventNumber : eventNumber,
              });
              if (res.status === 200) {
                  swal("Unregistered",  "Unregistered", {
                      buttons: false,
                      timer: 2000,
                  })
                  window.location.reload(true);
              }else {
              swal("Venue deletion Failed",  "Please try again");
              }
          } catch (err) {
              console.log(err);
          } 
      }


        const handleLogout = () => {
          localStorage.removeItem("email"); 
          window.location.href = "/";
        };

        return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link to={`/userDetails/${user}`} className="navbar-brand" >Event factory</Link>
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
                <Link to={`/Profile/${user}`}  className="nav-link active" >My Profile</Link>
              </li> 
              <li className="nav-item">
                <Link to='/profile' className="nav-link active" >Chat</Link>
              </li>
              <li className="nav-item">
                <Link to='/UserCalendar' className="nav-link active" >Calendar</Link>
              </li>
            
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
      
      <p class="text-sm-center"><h1 class="text-center text-white dispaly-1">VENUE LIST</h1></p>  
      <p/>
      <div className="form-group required">
      <input className="form-control"
        type="text"
        placeholder="Search venues"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <p></p>
      </div>

      <div className="form-group required">
        <select className="form-control"
        type="text"
        placeholder="Filter"
        onChange={(e) => {
          setFilterParam(e.target.value);
        }}>
          <option className="form-control" value="All events">All events</option>         
          {product
              .filter((item) => {
                {
                  return item;
                }
              }).map((item) => {
                if (!location_set.has(item.location))
                {
                  location_set.add(item.location);
                  return(<option className="form-control" value={item.location}>{item.location}</option>);
                }
                })}         
        </select>

      </div>
      
      <p></p>

      {/* {product
        .filter((item) => {
          if (search == "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <p>
              {item.name} - {item.price}
            </p>
          );
        })} */}

<TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">Event Name</StyledTableCell>
              <StyledTableCell align="center">Location</StyledTableCell>
              <StyledTableCell align="center">Organizer</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Starts at</StyledTableCell>
              <StyledTableCell align="center">Ends at</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>

          
          <TableBody>
          {product
              .filter((item) => {
                if (filterParam == item.location)
                {
                  if (search == "") {
                    return item;
                  } else if (
                    item.eventName.toLowerCase().includes(search.toLowerCase())                   
                  ) {
                    return item;
                  } 
                }
                else if (filterParam == "All events")
                {
                  if (search == "") {
                    return item;
                  } else if (
                    item.eventName.toLowerCase().includes(search.toLowerCase())                   
                  ) {
                    return item;
                  } 
                }

            })
              .map((item) => {
                return (
                  <StyledTableRow key={item.eventNumber} >
                    <StyledTableCell component="th" scope="row">
                      {item.eventNumber}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.eventName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.location}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.createdBy}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.eventDate}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.eventStartTime}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.eventEndTime}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                    <button type="button" class="btn btn-dark" onClick={(e)=>handleClick(e,item.eventNumber)}>Unregister</button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>

        </Table>
      </TableContainer>


      

    </div>);
    
}
export default UserEventsToAttend;