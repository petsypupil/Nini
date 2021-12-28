import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbar-elements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src='#aun-no#' alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            nosotros
          </NavLink>
          <NavLink to='/' activeStyle>
            productos
          </NavLink>
          <NavLink to='/' activeStyle>
            contacto
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Donate</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
