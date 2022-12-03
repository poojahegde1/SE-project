import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export function UserOrganizeEvent()
{ 

        const [user, setUser] = useState(localStorage.getItem("email"));

        const [eventName, seteventName] = useState("");
        const [description, setDescription] = useState("");
        const [eventEntryFee, seteventEntryFee] = useState("");
        const [location, setlocation] = useState("");
        const [maximumOccupancy, setmaximumOccupancy] = useState("");
        /* const [createdBy, setcreatedBy] = useState(""); */
        const [eventDate, seteventDate] = useState("");
        const [eventStartTime, seteventStartTime] = useState("");
        const [eventEndTime, seteventEndTime] = useState("");
        const [venueNumber, setvenueNumber] = useState("");
        const [graduationLevel, setgraduationLevel] = useState("");

        

        const [message, setMessage] = useState("");
    
        let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post("https://eventfactorybackend.herokuapp.com/createEvent", {
              eventName: eventName,
                description: description,
                eventEntryFee: eventEntryFee,
                location: location,
                maximumOccupancy: maximumOccupancy,
                createdBy: user,
                eventDate: eventDate,
                eventStartTime: eventStartTime,
                eventEndTime: eventEndTime,
                venueNumber: venueNumber,
                graduationLevel: graduationLevel,
            });
            if (res.status === 200) {
                swal("Success",  "Event created", {
                    buttons: false,
                    timer: 2000,
                }).then((value)=>{
            seteventName("");
            setDescription("");
            seteventEntryFee("");
            setlocation("");
            setmaximumOccupancy("");
           /*  setcreatedBy(""); */
            seteventDate("");
            seteventStartTime("");
            seteventEndTime("");
            setvenueNumber("");
            setgraduationLevel("");
            setMessage("Event created successfully");
            /* window.location.href = "/OrgDashboard"; */
            }); 
            }else {
            swal("Event creation Failed",  "Please try again");
            }
        } catch (err) {
            console.log(err.response.data);
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
              
                <Link to="#" className="nav-link" aria-current="page" >Welcome {user}</Link>
              </li>
              <li></li>
              <li className="nav-item">
                <Link to={`/Profile/${user}`} className="nav-link active" >My Profile</Link>
              </li> 
              <li className="nav-item">
                <Link to='/profile' className="nav-link active" >Chat</Link>
              </li>
              <li className="nav-item">
                <Link to='/UserCalendar' className="nav-link active" >Calendar</Link>
              </li>
             
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
                                                    
                            <form id="submitForm" onSubmit={handleSubmit}   >
                            <input type="hidden" name="_csrf" value="7635eb83-1f95-4b32-8788-abec2724a9a4"/>
                                    <div class="form-group required">
                                    <label for="username">Event Name</label>
                                    <input type="text"  class="form-control" id="username" required={true}   onChange={e => seteventName(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Description</label>
                                    <textarea type="text"  class="form-control" id="username" required={true}  onChange={e => setDescription(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Location</label>
                                    <input type="text"  class="form-control" id="username" required={true}  onChange={e => setlocation(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Entry fee</label>
                                    <input type = "number"  class="form-control" id="username" required={true}   onChange={e => seteventEntryFee(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Maximum occupancy</label>
                                    <input type = "number"  class="form-control" id="username" required={true}   onChange={e => setmaximumOccupancy(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Event created by</label>
                                    <input type="email"  class="form-control" id="username" required={true}   readOnly={true} Value={user}  />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Date</label>
                                    <input type="date"  class="form-control" id="username" required={true}   onChange={e => seteventDate(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Start time</label>
                                    <input type="number"  class="form-control" id="username" required={true}   placeholder="24 hour format" onChange={e => seteventStartTime(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">End time</label>
                                    <input type="number"  class="form-control" id="username" required={true}  placeholder="24 hour format" onChange={e => seteventEndTime(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Venue number</label>
                                    <input type="text"  class="form-control" id="username" required={true}   onChange={e => setvenueNumber(e.target.value)} />
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Graduation level</label>
                                    <input type="text"  class="form-control" id="username"   onChange={e => setgraduationLevel(e.target.value)} />
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
export default UserOrganizeEvent;