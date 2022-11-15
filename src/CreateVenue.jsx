import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export function CreateVenue()
{ 
        const [venueName, setvenueName] = useState("");
        const [description, setDescription] = useState("");
        const [location, setLocation] = useState("");
        const [bookingFee, setbookingFee] = useState("");
        const [maximumOccupancy, setmaximumOccupancy] = useState("");
        const [venueBookingStart, setvenueBookingStart] = useState("");
        const [venueBookingEnd, setvenueBookingEnd] = useState("");
        const [createdBy, setcreatedBy] = useState(localStorage.getItem("email"));
        const [message, setMessage] = useState("");


    
        let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post("https://eventfactorybackend.herokuapp.com/createVenue", {
              venueName: venueName,
                description: description,
                location: location,
                bookingFee: bookingFee,
                maximumOccupancy: maximumOccupancy,
                venueBookingStart: venueBookingStart,
                venueBookingEnd: venueBookingEnd,
                createdBy: createdBy
            });
            if (res.status === 200) {
                swal("Success",  "Venue created", {
                    buttons: false,
                    timer: 2000,
                }).then((value)=>{
            setvenueName("");
            setDescription("");
            setLocation("");
            setbookingFee("");
            setmaximumOccupancy("");
            setvenueBookingStart("");
            setvenueBookingEnd("");
            setcreatedBy("");
            setMessage("Venue created successfully");
            /* window.location.href = "/OrgDashboard"; */
            }); 
            }else {
            swal("Venue creation Failed",  "Please try again");
            }
        } catch (err) {
            console.log(err);
        } 
    }
        
        

        const handleLogout = () => {
          localStorage.removeItem("createdBy"); 
          window.location.href = "/";
        };

        return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link to="/UserDashboardTest" className="navbar-brand" >Event factory</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="#" className="nav-link" aria-current="page" >Welcome {/* {email} */}</Link>
              </li>
              <li></li>
             {/*  <li className="nav-item">
                <Link to='/profile' className="nav-link active" >My Profile</Link>
              </li> */}
              <li className="nav-item">
                <Link to='/profile' className="nav-link active" >Chat</Link>
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

      <div>
      <p class="text-sm-center"><h1 class="text-center text-white dispaly-1">CREATE EVENT</h1></p> 
     {/*  <div class="pt-5"> */}
  
    <div class="container">
                <div class="row">
                    <div class="col-md-5 mx-auto">
                        <div class="card card-body">
                                                    
                            <form id="submitForm"  onSubmit={handleSubmit}  >
                            <input type="hidden" name="_csrf" value="7635eb83-1f95-4b32-8788-abec2724a9a4"/>
                                    <div class="form-group required">
                                    <label for="username">Venue Name</label>
                                    <input type="username"  class="form-control" id="username" required={true}  onChange={e => setvenueName(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Description</label>
                                    <textarea type="username"  class="form-control" id="username" required={true}  onChange={e => setDescription(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Location</label>
                                    <input type="username"  class="form-control" id="username" required={true}  onChange={e => setLocation(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Booking Fee</label>
                                    <input type = "username"  class="form-control" id="username" required={true}   onChange={e => setbookingFee(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Maximum Occupancy</label>
                                    <input type="username"  class="form-control" id="username" required={true}   onChange={e => setmaximumOccupancy(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Created by</label>
                                    <input type = "email"  class="form-control" id="username" required={true}   disabled value={createdBy}/>
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Start time</label>
                                    <input type = "datetime-local"  class="form-control" id="username" required={true}   onChange={e => setvenueBookingStart(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">End time</label>
                                    <input type = "datetime-local"  class="form-control" id="username" required={true}   onChange={e => setvenueBookingEnd(e.target.value)} />
                                    </div>
                                    <p></p>
                                    
                                    <div class="form-group pt-1">
                                    {/* <button class="btn btn-primary btn-block" type={"submit"} ><Link to='/UserDashboard/pooja' className="nav-link">Login</Link></button> */}
                                    <button class="btn btn-primary btn-block" type="submit" >Submit</button>
                                </div>
                                </form>
                                </div>                          
                            
                            </div>
                            </div>
                        </div>
        {/* </div> */}
      </div>     
    </div>);
    
}
export default CreateVenue;