import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class NoMatch extends Component{
    render(){
        return (<div>
            <h1 class="text-center text-white">Page not found</h1>

            <div>
            <h1 class="text-center text-white"><Link to='/' className="nav-link">Go back to home</Link></h1>
            </div>
            
        </div>
        );
    }
}

