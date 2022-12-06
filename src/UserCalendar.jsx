import React ,{useState, useEffect} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Link } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

/* const EventComponent = ({ eventStartTime, eventEndTime, eventName }) => {
  return (
    <>
      <p>{eventName}</p>
      <p>{eventStartTime}</p>
      <p>{eventEndTime}</p>
    </>
  );
};
 */

export default function UserCalendar() {

        const [myEvents, setEvents] = useState([]);

        const [user, setUser] = useState(localStorage.getItem("email"));

        const handleLogout = () => {
          localStorage.removeItem("email"); 
          window.location.href = "/";
        };

        useEffect(() => {
          fetch(`https://eventfactorybackend.herokuapp.com/getEventsAttending?userEmail=${user}`)
              .then((res) => res.json())
              .then(
                  (events) => {
                      setEvents(events);
                  },
              );
              console.log(myEvents);
      }, []);

      let myEventsList = myEvents.Events;

      /* const calendarStyle = (date) => {
        let currentDate = `${new Date().getDate()} ${new Date().getMonth()+1} ${new Date().getFullYear()}`
        let allDate = `${date.getDate()} ${date.getMonth()+1} ${date.getFullYear()}`
    
        if ( allDate === currentDate)
        return {
          style: {
            backgroundColor: '#FFFF00', 
            border: '1px solid blue',
            margin: 0,
            padding: 0
          }
        }
    }
 */
       

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
              <li className="nav-item">
                <Link to={`/Profile/${user}`}  className="nav-link active" >My Profile</Link>
              </li>
              <li className="nav-item">
                <Link to='/Chat' className="nav-link active" >Chat</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link inactive" >Calendar</Link>
              </li>
            
            </ul>
            <form className="d-flex" role="search">
              <button className="form-control me-2" type="submit" ><Link onClick={handleLogout}>Logout</Link></button>
            </form>            
          </div>
        </div>
      </nav>  
      <div className="App" style={{ height: 700 , color: 'black', background: 'white'}}>
      <Calendar 
        localizer={localizer}
        events={myEventsList}
        views={["month"]} 
        startAccessor="eventDate"
        endAccessor= "eventDate"
        onSelectEvent={event => alert(event.eventName)}
        onSelectSlot = {event => alert(event.description)}

        eventPropGetter={(event) => {
          return { 
            style: { 
            backgroundColor: '#FFA500', 
            height:"100px",
            margin: 0,
            padding: 0,
            border: "none",
         } }
        }}
        /* dayPropGetter={calendarStyle} */
        
      />
    </div>

    </div>
    
  );
}