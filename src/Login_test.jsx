
import {React ,useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Link, redirect } from "react-router-dom";
import swal from 'sweetalert';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Redirect from "./redirect.jsx";

async function loginUser(credentials) {
  return fetch('https://eventfactorybackend.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Login_test() {
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const navigate = useNavigate();

      const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
          email,
          password
        });
        console.log(response)
        if ('message' in response && response['message']==="Success") {
          swal("Success", response.message, "success", {
            buttons: false,
            timer: 2000,
          })
          .then((value) => {
            
            console.log(response)
            localStorage.setItem('email', email);
            console.log(email);
            console.log(response.role);
          
            if(response['role']==="User") 
            {
              navigate(`/userDetails/${email}`);
            }
            else{
              navigate(`/organiserDetails/${email}`);
            }
          });
        } else {
          swal("Failed", response.message, "error");
        }
      } 

     
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
       {/*  <link rel="stylesheet" href="../css/register_test.css"/>
          <p className="title">Login Form</p>
    
          <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email", { required: true })} />
            {errors.email && <span style={{ color: "red" }}>
             *Email* is mandatory </span>}
            <input type="password" {...register("password")} />
            <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
          </form> */}


<div className="pt-5">

    <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="card card-body">
                        <h2 className="text-center text-black dispaly-1 text-sm-center">LOGIN</h2> 
                                  
                            <form id="submitForm" onSubmit={handleSubmit}  >
                            <input type="hidden" name="_csrf" value="7635eb83-1f95-4b32-8788-abec2724a9a4"/>
                                <div className="form-group required">
                                    <label htmlFor="username">Email</label>
                                    <input type="email"  className="form-control" id="email" required={true} onChange={e => setEmail(e.target.value)}/>
                                    {/* {errors.email && <span style={{ color: "red" }}>*Email* is mandatory </span>} */}
                                    </div>
                                    <div className="form-group required">
                                    <label className="d-flex flex-row align-items-center" htmlFor="password">Password 
                                        <a className="ml-auto border-link small-xl" href="/PasswordReset">Forget?</a></label>
                                    <input type="password"  className="form-control" required={true} id="password" name="password" /* defaultValue="H" */ onChange={e => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="form-group pt-1">
                                    <button className="btn btn-primary btn-block" type="submit" >Login</button>
                                </div>

                                
                                </form>
                                </div>
                                <p className="small-xl pt-3 text-center text-center text-white">
                                <span >Not a member?</span>                               
                                <Link to='/register' className="nav-link">Sign up</Link>                              
                            </p>
                              
                            </div>
                            </div>
                        </div>
    </div>
        </div>
  );
}
export default Login_test;