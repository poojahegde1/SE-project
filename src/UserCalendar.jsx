/* import { Eventcalendar, getJson, toast } from '@mobiscroll';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import React from 'react';

function UserCalendar() {
    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);
    
    const view = React.useMemo(() => {
        return {
            calendar: { type: 'month' },
            agenda: { type: 'month' }
        };
    }, []);

    return (
        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            eventDelete={false}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
       />
    ); 
}
export default UserCalendar;
 */

/* import React from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';

import moment from 'moment';

function UserCalendar()  {

       return (
        <div>
           <Calendar

               startAccessor="start"

               endAccessor="end"

           />
        </div>

       );

   
}
export default UserCalendar; */

/* import React from "react";
import { render } from "react-dom";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; */

import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Link } from "react-router-dom";
import React ,{useState, useEffect} from "react";


const localizer = momentLocalizer(moment)

function UserCalendar ()
{

    const [myEvents, setEvents] = useState([]);


    useEffect(() => {
        fetch("https://trial.mobiscroll.com/events/?vers=5")
            .then((res) => res.json())
            .then(
                (events) => {
                    setEvents(events);
                },
            );
    }, []);

    const user = localStorage.getItem("username"); 
        console.log(user);

        const handleLogout = () => {
          localStorage.removeItem("user"); 
          window.location.href = "/";
        };

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link to="/UserDashboard" className="navbar-brand" >Event factory</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link to="#" className="nav-link" aria-current="page" >Welcome {user.fname} {user.lname}</Link> */}
                <Link to="#" className="nav-link" aria-current="page" >Welcome {user}</Link>
              </li>
              <li></li>
              <li className="nav-item">
                <Link to='/profile' className="nav-link active" >My Profile</Link>
              </li>
              <li className="nav-item">
                <Link to='/profile' className="nav-link active" >Chat</Link>
              </li>
              <li className="nav-item">
                <Link to='/profile' className="nav-link active" >Calendar</Link>
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

        <div style={{ height: 700 , color: 'black', background: 'white'}}>
    <Calendar localizer={localizer}
      /* events={events} */
      views={["month"]}
      startAccessor="start"
     endAccessor="end"
     data={myEvents}
    />
  </div>

  </div>
    );
}

export default UserCalendar;
