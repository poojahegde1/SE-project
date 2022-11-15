import { Component } from "react";
import { Link } from "react-router-dom";

export class MainContent extends Component
{
    render()
    {
        return (
        <div >
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
                    {/* <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
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
                    <button className="form-control me-2" type="submit"><Link to='/login' >Login/Register</Link></button>
                </form>  

                {/* <form className="d-flex" role="search" action="/login">
                    <button className="form-control me-2" type="submit">Login/Register</button>
                </form>  */} 
                
                
                
                </div>
            </div>
            </nav>  
            <p></p>
            <p></p>
            <p></p> 
            <p></p>
            <p></p>
            <p></p> 
            <p></p>
            <p></p>
            <p></p> 
            <p></p>
            <p></p>
            <p></p>      
            <p></p>
            <p></p>
            <p></p> 
            <p></p>
            <p></p>
            <p></p> 
            <p></p>
            <p></p>
            <p></p> 
            <p></p>
            <p></p>
            <p></p>      
            <p></p>
            <p></p>
            <p></p> 
            <p></p>
            <p></p>
            <p></p> 
            <p></p>
            <p></p>
            <p></p> 
            <p></p>
            <p></p>
            <p></p>      
            <p></p>
            <p></p>
            <p></p> 
            <p></p>
            <p></p>
            <p></p> 
            <p></p>
            <p></p>
            <p></p> 
            <p></p>
            <p></p>
            <p></p>      
            <h1 className="text-center text-white dispaly-1 text-sm-center">EVENT FACTORY</h1>  
    </div>);
    }
}
export default MainContent;