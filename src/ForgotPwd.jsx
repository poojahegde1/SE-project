
import {React ,useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ForgotPwd() {
    
/* ############################################################################################### */
      const [username, setUserName] = useState("");
      const [password, setPassword] = useState("");
      const navigate = useNavigate();

      /* const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
          username,
          password
        });
        if ('message' in response && response['message']==="Success") {
          swal("Success", response.message, "success", {
            buttons: false,
            timer: 2000,
          })
          .then((value) => {
            localStorage.setItem('username', JSON.stringify(response['username']));
            console.log(username);
            navigate("/UserDashboard");
          });
        } else {
          swal("Failed", response.message, "error");
        }
      }  */

      /* ############################################################################################### */

      
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


<div class="pt-5">
   
    <div class="container">
                <div class="row">
                    <div class="col-md-5 mx-auto">
                        <div class="card card-body">
                        <p class="text-sm-center"><h2 class="text-center text-black dispaly-1">PASSWORD RESET</h2></p>  
                            <form id="submitForm" /* onSubmit={handleSubmit}  */ >
                            <input type="hidden" name="_csrf" value="7635eb83-1f95-4b32-8788-abec2724a9a4"/>
                                <div class="form-group required">
                                    <lSabel for="username">Email</lSabel>
                                    <input type="username"  class="form-control" id="username" required={true} onChange={e => setUserName(e.target.value)}/>
                                    </div>
                                    <div class="form-group required">
                                    <label class="d-flex flex-row align-items-center" for="password">New Password </label>
                                        
                                    <input type="password"  class="form-control" required={true} id="password" name="password" defaultvalue="H" onChange={e => setPassword(e.target.value)}/>
                                    </div>
                                    <div class="form-group pt-1">
                                    <button class="btn btn-primary btn-block" type="submit" >Change Password</button>
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
export default ForgotPwd;