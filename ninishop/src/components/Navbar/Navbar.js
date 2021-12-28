import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbar-elements';

const Navbar = () => {
  const miVariable = 4;
  return (
      <Nav>
        <NavLink to='/'>
          <img src='#aun-no#' alt='logo' />
        </NavLink>
        <NavMenu>
          <NavLink to='/about' >
            nosotros
          </NavLink>
          <NavLink to='/products' >
            productos
          </NavLink>
          <NavLink to='/contacts' >
            CONTACTO
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/donate'>Donate</NavBtnLink>
        </NavBtn>
      </Nav>
  );
};

export default Navbar;
