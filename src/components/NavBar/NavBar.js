import React from "react";
import "./NavBar.css"
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return(
    <div className="navBar">
      {/* <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Home</NavLink>  */}
      <NavLink to="/current" style={({ isActive }) => ({ color: isActive ? '#FF9102' : 'black' })}>Current</NavLink> 
      <NavLink to="/hourly" style={({ isActive }) => ({ color: isActive ? '#FF9102' : 'black' })}>Hourly</NavLink>
      <NavLink to="/daily" style={({ isActive }) => ({ color: isActive ? '#FF9102' : 'black' })}>Daily</NavLink>
    </div>
  )
}