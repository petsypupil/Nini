import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Navbar-elements';
import { Iconito } from '../CartWidjet';

const Navbar = () => {
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
            contacto
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/donate'>Donate</NavBtnLink>
        </NavBtn>
        <Iconito />
      </Nav>
  );
};

export default Navbar;
