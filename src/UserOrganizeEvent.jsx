import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export function UserOrganizeEvent()
{ 
        const [name, setName] = useState("");
        const [description, setDescription] = useState("");
        const [location, setLocation] = useState("");
        const [time, setTime] = useState("");
        const [price, setPrice] = useState("");
        const [username, setUsername] = useState("");
        const [message, setMessage] = useState("");

    
        let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post("https://eventfactorybackend.herokuapp.com/register", {
                name: name,
                description: description,
                location: location,
                time: time,
                price: price,
                username: username,
            });
            if (res.status === 200) {
                swal("Success",  "User created", {
                    buttons: false,
                    timer: 2000,
                }).then((value)=>{
            setName("");
            setDescription("");
            setLocation("");
            setTime("");
            setPrice("");
            setUsername("");
            setMessage("Event created successfully");
            window.location.href = "/OrgDashboard";
            }); 
            }else {
            swal("Event creation Failed",  "Please try again");
            }
        } catch (err) {
            console.log(err);
        } 
    }
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
          <Link to="/UserDashboardTest" className="navbar-brand" >Event factory</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              
                <Link to="#" className="nav-link" aria-current="page" >Welcome {user}</Link>
              </li>
              <li></li>
              {/* <li className="nav-item">
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
                                                    
                            <form id="submitForm" /* onSubmit={handleSubmit} */  >
                            <input type="hidden" name="_csrf" value="7635eb83-1f95-4b32-8788-abec2724a9a4"/>
                                    <div class="form-group required">
                                    <label for="username">Event Name</label>
                                    <input type="email"  class="form-control" id="username" required={true}  /* onChange={e => setName(e.target.value)} *//>
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Description</label>
                                    <textarea type="email"  class="form-control" id="username" required={true} /* onChange={e => setDescription(e.target.value)} *//>
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Location</label>
                                    <input type="email"  class="form-control" id="username" required={true}  /* onChange={e => setLocation(e.target.value)} *//>
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Time</label>
                                    <input type = "datetime-local"  class="form-control" id="username" required={true}  /* onChange={e => setTime(e.target.value)} *//>
                                    </div>
                                    <p></p>
                                    <div class="form-group required">
                                    <label for="username">Price</label>
                                    <input type="email"  class="form-control" id="username" required={true}  /* onChange={e => setPrice(e.target.value)} *//>
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