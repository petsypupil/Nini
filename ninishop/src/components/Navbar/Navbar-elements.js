import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';



export const Nav = styled.nav`
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 2px;
  z-index: 99;
  position: relative;
  top: 0%;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

`;

export const NavLink = styled(Link)`
  color: grey;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 50px;

`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ;
  text-decoration: none;
  /* segundaojo Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;