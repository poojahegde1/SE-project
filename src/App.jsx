import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBarHome from "./nav_bar_home";
import MainContent from "./MainContent";
import Log_reg from "./Log_reg"; 
import NoMatch from "./Error_page";
import UserDashboard from "./UserDashboard";
import Register_tests from "./Register_tests"; 
import Login_test from "./Login_test"; 
import Profile from "./profile";
import UserDashboardTest from "./UserDashboardTest";
import UserCalendar from "./UserCalendar";
import OrgDashboard from "./OrgDashboard";
import ForgotPwd from "./ForgotPwd";
import CreateVenue from "./CreateVenue";
import ViewVenue from "./ViewVenue";
import UserViewEvent from "./UserViewEvent";
import UserViewVenue from "./UserViewVenue";
import UserEventsToAttend from "./UserEventsToAttend";
import UserOrganizeEvent from "./UserOrganizeEvent";


export default class App extends Component
{
    render(){

        
        return (
            <BrowserRouter>
           
            <Routes>
            <Route path='/Log_reg'  element={<Log_reg/>}/> 
             <Route path="/UserDashboard"  element={<UserDashboard/>} />

            <Route path='/login'  element={<Login_test/>}/>
            <Route path='/register'  element={<Register_tests/>}/>
            <Route path= '/'  element={<MainContent/>}/>
            <Route path='*' element={<NoMatch/>}/>         
           {/*  <Route path="/Profile" exact element={<Profile/>}/> */}
            <Route path="/Profile/:email"  element={<Profile/>}/>
            <Route path="/PasswordReset"  element={<ForgotPwd/>}/>

            {/* <Route path='/OrgDashboard'  element={<OrgDashboard/>}/> */}
            <Route path='/organiserDetails/:email'  element={<OrgDashboard/>}/>
            <Route path="/CreateVenue"  element={<CreateVenue/>}/>
            <Route path="/ViewVenue/:email"  element={<ViewVenue/>}/>

            <Route path='/UserDashboardTest' exact element={<UserDashboardTest/>}/> 
            <Route path="/userDetails/:email"  element={<UserDashboardTest/>} /> 
            <Route path="/UserViewEvent"  element={<UserViewEvent/>}/>
            <Route path="/UserOrganizeEvent"  element={<UserOrganizeEvent/>}/>
            <Route path="/UserViewVenue"  element={<UserViewVenue/>}/>
            <Route path="/UserEventsToAttend"  element={<UserEventsToAttend/>}/>
            <Route path='/UserCalendar'  element={<UserCalendar/>}/>
            
            </Routes>
            </BrowserRouter>
            );
    }
    
} 

