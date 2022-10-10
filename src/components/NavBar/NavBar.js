import React from "react";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return(
    <div>
      <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Home</NavLink> 
      <NavLink to="/hourly" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Hourly</NavLink>
      <NavLink to="/daily" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Daily</NavLink>
    </div>
  )
}