import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


export default function Contact(){
    return(
    <div>
        <h2>Welcome to Contact Page</h2>
        <button><Link to="contactus">Contact Us</Link></button>
        <button><Link to ="address">Address here</Link></button>    
       <Outlet/>
    </div>
    )
}