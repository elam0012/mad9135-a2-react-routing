import React from "react";
import "./NavBar.css"
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return(
    <div className="navBar">
      <NavLink to="/Home" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Home</NavLink> 
      <NavLink to="/current" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Current</NavLink> 
      <NavLink to="/hourly" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Hourly</NavLink>
      <NavLink to="/daily" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Daily</NavLink>
    </div>
  )
}