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
import 'bootstrap/dist/css/bootstrap.min.css';
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

export function CheckVenues()
{ 
        
        const [user, setUser] = useState(localStorage.getItem("email"));

        const classes = useStyles();
        const [product, setProduct] = useState([]);
        const [search, setSearch] = useState("");
        let prod = [];
        

        const [date, setEventDate] = useState("");
        const [startTime, setStartTime] = useState("");
        const [endTime, setEndTime] = useState("");
        const [maximumOccupancy, setMaxOccupancy] = useState("");

        let handleSubmit = async (e) => {
            e.preventDefault();
            try {
                let res = await axios.get(`https://eventfactorybackend.herokuapp.com/venueSearch?date=${date}&startTime=${startTime}&endTime=${endTime}&maximumOccupancy=${maximumOccupancy}`, {
                    date: date,
                    startTime: startTime,
                    endTime: endTime,
                    maximumOccupancy: maximumOccupancy,
                });
                if (res.status === 200) {
                    swal("Success",  "View search results", {
                        buttons: false,
                        timer: 2000,
                    }).then((value)=>{
                        setEventDate("");
                        setStartTime("");
                        setEndTime("");
                        setMaxOccupancy("");
                        console.log(res);
                        console.log(res.data.data);
                        
                        prod = res.data.data;
                        console.log(prod);
                        
                        const getProductData = async () => {
                          try {
                            const data = await axios.get(
                              `https://eventfactorybackend.herokuapp.com/venueSearch?date=${date}&startTime=${startTime}&endTime=${endTime}&maximumOccupancy=${maximumOccupancy}`
                            );
                            console.log(prod);
                            setProduct(prod);
                          } catch (e) {
                            console.log(e);
                          }
                        };
                        getProductData();
                }); 
                }else {
                swal("No venues available",  "Please try again");
                prod = []
                }
            } catch (err) {
                console.log(err);
            } 
        }

        
      
        let handleSelection = async (e,a) => {
          e.preventDefault();
          
          try {
            let res = await axios.post("https://eventfactorybackend.herokuapp.com/bookVenue", {
              venueNumber: a,
              bookedBy: user,
              venueBookedDate: date,
              venueBookingStart: startTime,
              venueBookingEnd: endTime,
            });
            if (res.status === 200) {
                swal("Proceeding to create events page",  "Get ready!", {
                    buttons: false,
                    timer: 2000,
                  }).then((value)=>{
              setEventDate("");
              setStartTime("");
              setEndTime("");
              /* setMessage("User created successfully"); */
              window.location.href = `/UserOrganizeEvent/${user}`;
            }); 
            }else {
              swal("Error",  "Please try again");
            }
          } catch (err) {
            console.log(err);
          }
    };
    

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
                <Link to={`/UserCalendar/${user}`} className="nav-link active" >Calendar</Link>
              </li>
            
             
            </ul>
            <form className="d-flex" role="search">
              <button className="form-control me-2" type="submit" ><Link onClick={handleLogout}>Logout</Link></button>
            </form>            
          </div>
        </div>
      </nav>  
      
      <p class="text-sm-center"><h1 class="text-center text-white dispaly-1">VENUE AVAILABILITY</h1></p>  
      <p/>

<form onSubmit={handleSubmit}>
    <div class="row">
    <div class="col">
    <label for="date" class="col-sm-2 col-form-label  text-center text-white dispaly-1">Date</label>
    <div class="col-sm-10">
        <input type="date" class="form-control" id="date" onChange={(e) => {
          setEventDate(e.target.value);
        }} />
    </div>
    </div>
    <div class="col">
    <label for="time" class="col-sm-2  col-form-label text-center text-white dispaly-3">StartTime</label>
    <div class="col-sm-10">
        <input type="number"  class="form-control" id="Start time" placeholder="24 hour format" onChange={(e) => {
          setStartTime(e.target.value);
        }}/>
    </div>
    </div>
    <div class="col">
    <label for="time" class="col-sm-2 col-form-label text-center text-white dispaly-3">EndTime </label>
    <div class="col-sm-10">
        <input type="number" class="form-control" id="End time" placeholder="24 hour format" onChange={(e) => {
          setEndTime(e.target.value);
        }}/>
    </div>
    </div>
    <div class="col">
    <label for="time" class="col-sm-2 col-form-label text-center text-white dispaly-3">MaxOccupancy</label>
    <div class="col-sm-10">
        <input type="number" class="form-control" id="End time" placeholder="MaxOccupancy" onChange={(e) => {
          setMaxOccupancy(e.target.value);
        }}/>
    </div>
    </div>
    <div class="col">
    <label for="time" class="col-sm-2 col-form-label text-center text-white dispaly-3">.</label>
    <div class="col-sm-10">
    <button className="btn btn-dark" type="submit">Search</button>
    </div>
    
    </div>
  </div>
    
  </form>

      <p></p>

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
    
      <p></p>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">Venue Name</StyledTableCell>
              <StyledTableCell align="center">Location</StyledTableCell>
              <StyledTableCell align="center">Owner</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>

          

          <TableBody>
            {product
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.venueName.toLowerCase().includes(search.toLowerCase())                   
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <StyledTableRow key={item.venueNumber} >
                    <StyledTableCell component="th" scope="row">
                      {item.venueNumber}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.venueName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.location}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.createdBy}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                    <button type="button" class="btn btn-dark" onClick={(e)=>handleSelection(e,item.venueNumber)}>Book</button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          
          </TableBody>

        </Table>
      </TableContainer>

    </div>);
    
}
export default CheckVenues;