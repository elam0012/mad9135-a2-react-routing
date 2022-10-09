import React from "react"
import logo from '../../logo.svg';
import "./Header.css"

export default function Header() {
  return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>mad9135-a2-react-routing</p>
    </header>
  )
}