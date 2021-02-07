import React from 'react';
import styled from 'styled-components';



import {Link} from "react-router-dom";

const Ul = styled.ul`
  
    align-items: center;
    list-style: none;
    display: flex; 
    flex-flow: column nowrap;
    background: #faf3dd;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
    position: fixed;
    transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)' )};  
    /* opacity: ${({open}) => (open ? '100%' : '0')};
    top: ${({open}) => (open ? '0' : '-100%')};  */
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    
   li {
      text-decoration: none;
      list-style: none;
      color: #000;
      font-size: 20px;
      font-weight: 400;
      padding: 18px 10px;
    }
  
`;

const Content = ({open}) => {
  return (
    <div>
      <Ul open={open}>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/">Contact us</Link></li>
        <li><Link to="/">Log In</Link></li>
    </Ul>
    </div>
  );
};

export default Content;