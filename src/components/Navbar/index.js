import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import { BiCartAlt } from 'react-icons/bi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from '../Cart'

const Navbar = ({ toggle }) => {

  const btnStyle ={
    position: 'absolute',
    left: 10,
    top: 10,
    color: 'white',
    padding: "10px",
    fontSize: "35px",
    cursor: "pointer"

  }

  return (

    <Router>
      <Nav>
        <a href="/cart" style={btnStyle}>
          <BiCartAlt />
        </a>
        <NavLink to='/'>Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </Router>
  );
};

export default Navbar;