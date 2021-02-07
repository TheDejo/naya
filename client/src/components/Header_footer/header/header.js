import React, { Component } from 'react';
import styled from 'styled-components';
import { FiShoppingCart } from "react-icons/fi";

import Burger from './burger'



const Nav = styled.nav`
  width: 100%;
  height:65px;
  background: transparent;
  border-bottom: 2px solid transparent;
  padding: 0 20px;
  position: fixed;
  display: flex;
  justify-content: space-between; 

  .logo {
    padding: 15px 0 ;
    color: #121212;
    font-size: 40px;
    font-weight: 700;
    font-family: Arizonia;
  }

  .right-icon {
   display: flex; 
  }

.icon {
  font-size: 30px;
  top: 17px;
  right: 60px;
  position: fixed;
  z-index: 20;
}
 
`;

class Header extends Component {
  render() {
    return (
      <Nav >
      <div className="logo">
        Dveon
      </div>
      <div className="right-icon">
        <i className="shopping basket icon" />
        <Burger />
      </div>
    </Nav>
    );
  }
}

export default Header;