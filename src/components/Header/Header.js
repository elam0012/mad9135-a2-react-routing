import React from "react"
import logo from '../../logo.png';
import "./Header.css"

export default function Header() {
  return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>The Best Weather App</h1>
    </header>
  )
}