import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import swal from 'sweetalert';
import axios from "axios";
import ".//css/common.css";

export function Profile()
{ 

        
        const [username, setUsername] = useState([]);
        const [educationLevel, setEducationLevel] = useState([]);
        const [firstname, setFirstName] = useState([]);
        const [lastname, setLastName] = useState([]);
        const [role, setRole] = useState([]);
        const [message, setMessage] = useState([]);
   
        let {email} = useParams();

        const fetchData = () => {
          fetch(`https://eventfactorybackend.herokuapp.com/userDetails/${email}`) 
            .then(response => {
              return response.json()
            })
            .then(response => {
              console.log(response)
              setUsername(response.data.username)
              setEducationLevel(response.data.educationLevel)
              setFirstName(response.data.firstname)
              setLastName(response.data.lastname)
              setRole(response.data.role)
            })
        }
        
        /* console.log(firstname) */

        useEffect(() => {
          fetchData()
        }, []) 

        const handleLogout = () => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("user");
          window.location.href = "/";
        };

        let handleSubmit = async (e) => {
          e.preventDefault();
          try {
            let res = await axios.put("https://eventfactorybackend.herokuapp.com/userDetailsChange", {
                firstname: firstname,
                lastname: lastname,
                educationLevel: educationLevel,
                email: email,
               
            });
            if (res.status === 200) {
                swal("Success",  "User details updated", {
                    buttons: false,
                    timer: 2000,
                  }).then((value)=>{
              setFirstName("");
              setLastName("");
              setEducationLevel("");
              setMessage("User details updated successfully");
              window.location.href = `/userDetails/${email}`;
            }); 
            }else {
              swal("Update Failed",  "Please try again");
            }
          } catch (err) {
            console.log(err);
          }
        };



        return (
        <div className="bgimg">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link to="" className="navbar-brand" >Event factory</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="#" className="nav-link active" aria-current="page" >  {username}'s Profile</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="form-control me-2" type="submit" ><Link onClick={handleLogout}>Logout</Link></button>
            </form>            
          </div>
        </div>
      </nav>  

      <div className="pt-5" >
    <h1 className="text-center text-white">User Details</h1>
  
    <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="card card-body">
                                                    
                            <form id="submitForm" onSubmit={handleSubmit}  >
                            <input type="hidden" name="_csrf" value="7635eb83-1f95-4b32-8788-abec2724a9a4"/>
                                    
                                    <div className="form-group required">
                                    <label for="username">First Name</label>
                                    <input type="username"  className="form-control" id="firstname" required={true} contentEditable={true}  Value={firstname} suppressContentEditableWarning={true} onChange={e => setFirstName(e.target.value)}></input>
                                    <p></p>
                                    <div className="form-group required">
                                    <label for="username">Last Name</label>
                                    <input type="username"  className="form-control" id="username" required={true} contentEditable={true} suppressContentEditableWarning={true} onChange={e => setLastName(e.target.value)} Value={lastname}></input>
                                    </div>
                                    <p></p>
                                    <div className="form-group required">
                                    <label for="username">Email ID</label>
                                    <input type="email"  className="form-control" id="username" required={true} readOnly={true} Value={email}/* onChange={e => setEmail(e.target.value)} */></input>
                                    </div>
                                    <p></p>
                                    <div className="form-group required">
                                    <label for="username">Username</label>
                                    <input type="username"  className="form-control" id="username" required={true} readOnly={true} Value={username}/* onChange={e => setUsername(e.target.value)} */></input>
                                    </div>
                                    <p></p>
                                    <div className="form-group required">
                                    <label for="username">Role</label>
                                    <input type="username"  className="form-control" id="username" required={true} readOnly={true} Value={role}/* onChange={e => setUserName(e.target.value)} */></input>
                                    </div>
                                    <p></p>
                                    <div className="form-group required">
                                    <label for="username">Education level</label>
                                    <input type="username"  className="form-control" id="username" required={true} contentEditable={true} suppressContentEditableWarning={true} onChange={e => setEducationLevel(e.target.value)} Value={educationLevel}></input>
                                    </div>
                                    <p></p>  
                                    
                                    <div className="form-group pt-1">
                                   </div>
                                    <button className="btn btn-primary btn-block" type="submit" >Update my profile</button>
                                    <div className="message">{message ? <cite>{message}</cite> : null}</div>
                                </div>
                                </form>
                                </div>                          
                            
                            </div>
                            </div>
                        </div>
    </div>
    </div>);
    
}
export default Profile;