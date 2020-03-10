import React from 'react'
import logo from "../../logo.svg";
import './Header.sass'

export default function Header () {
  return (
    <header className="Header">
      <img src={logo} className="Header__Logo" alt="logo" />
    </header>
  )
}