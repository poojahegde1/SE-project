
import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import swal from 'sweetalert';
import axios from "axios";

function Register_tests() {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [educationLevel, setEducationLevel] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

  
    let handleSubmit = async (e) => {
      e.preventDefault();
      /* console.log("pooja",{firstname: firstname,
        lastname: lastname,
        educationLevel: educationLevel,
        email: email,
        password: password,
        role: role,
        username: username,}) */
      try {
        let res = await axios.post("https://eventfactorybackend.herokuapp.com/register", {
            firstname: firstname,
            lastname: lastname,
            educationLevel: educationLevel,
            email: email,
            password: password,
            role: role,
            username: username,
        });
        if (res.status === 200) {
            swal("Success",  "User created", {
                buttons: false,
                timer: 2000,
              }).then((value)=>{
          setFirstName("");
          setLastName("");
          setEducationLevel("");
          setEmail("");
          setPassword("");
          setRole("");
          setUsername("");
          setMessage("User created successfully");
          window.location.href = "/login";
        }); 
        }else {
          swal("Registration Failed",  "Please try again");
        }
      } catch (err) {
        console.log(err);
      }
};

   
  
  return (
    <div>

        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'/>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Muli'/>
            
            
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand" >Event factory</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                </li>
            </ul>

            <form className="d-flex" role="search">
                <button className="form-control me-2" type="submit"><Link to='/login' >Login/Register</Link></button>
            </form>      
            </div>
        </div>
        </nav>

        <div className="pt-5">
    
<div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="card card-body">
                        <p class="text-sm-center"><h2 class="text-center text-black dispaly-1">REGISTER</h2></p>                 
                            <form id="submitForm" onSubmit={handleSubmit} method="post" >
                            <input type="hidden" name="_csrf" value="7635eb83-1f95-4b32-8788-abec2724a9a4"/>
                            <div className="form-group required">
                                    <label htmlFor="username">First name</label>
                                    <input type="text"  value={firstname} className="form-control" id="firstname" required={true} name="firstname"  onChange={(e) => setFirstName(e.target.value)}/>
                                </div>   
                                <div className="form-group required">
                                    <label htmlFor="username">Last name</label>
                                    <input type="text"  value={lastname} className="form-control" id="lastname" required={true} name="lastname"  onChange={(e) => setLastName(e.target.value)}/>
                                     
                                </div>   
                                <div className="form-group required">
                                    <label htmlFor="username">Email</label>
                                    <input type="email"  value={email} className="form-control" id="email" required={true} name="email"  onChange={(e) => setEmail(e.target.value)}/>
                                    
                                </div>   
                                <div className="form-group required">
                                    <label htmlFor="username">Username</label>
                                    <input type="text"  value={username} className="form-control" id="username" required={true} name="username"  onChange={(e) => setUsername(e.target.value)}/>
                                    
                                </div>                    
                                <div className="form-group required">
                                    <label className="d-flex flex-row align-items-center" for="password">Password </label>
                                    <input type="password"  value={password} className="form-control" required={true} id="password" name="password" pattern="^[a-zA-Z0-9!@#$%^&*]{6,16}$"  minlength="8" onChange={(e) => setPassword(e.target.value)}/>
                                    
                                </div>
                                {/* <div className="form-group required">
                                    <label htmlFor="username">Role</label>
                                    <input type="text"  value={role} className="form-control" id="role" required={true} name="role"  onChange={(e) => setRole(e.target.value)}/>                                   
                                </div>   */} 
                                <div className="form-group required">
                                <label htmlFor="username">Role</label><br></br>
                                <select name="role" id="role" className="form-control" value={role} onChange={(e) => {setRole(e.target.value);}}>
                                    <option  className="form-control">Select role</option>
                                    <option  className="form-control">User</option>
                                    <option  className="form-control">Organizer</option>
                                </select>
                                </div>                        
                                <div className="form-group required">
                                    <label htmlFor="username">Education level</label>
                                    <input type="text"  value={educationLevel} className="form-control" id="educationLevel"  name="educationLevel"  onChange={(e) => setEducationLevel(e.target.value)}/>
                                </div>   
                                <div></div>
                                
                                <div className="form-group pt-1">
                                    {/* <button type={"submit"} className="btn btn-primary btn-block" ><Link to="/login" classNameName="nav-link">Register</Link></button> */}
                                    <button type="submit" className="btn btn-primary btn-block" >Register</button>
                                    <div className="message">{message ? <p>{message}</p> : null}</div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
    
  );
}
export default Register_tests;