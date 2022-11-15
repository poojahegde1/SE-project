import {React ,useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const  Redirect = function(){

        const [role, setRole] = useState([]);
        
        let {email} = useParams();

        const navigate = useNavigate();

        const fetchData = () => {
          fetch(`https://eventfactorybackend.herokuapp.com/userDetails/${email}`) 
            .then(response => {
              return response.json()
            })
            .then(response => {
              console.log(response)
              setRole(response.data.role)
            })
        }
        
        console.log(role)

        useEffect(() => {
          fetchData()
        }, []) 


    if(role==="admin")
    {
        navigate(`/OrgDashboard`); 
    }
    else
    {   
        navigate(`/userDetails/${email}`);
    }

}
export default Redirect;