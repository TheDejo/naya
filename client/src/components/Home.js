import React from 'react';
import styled from 'styled-components';
import img from '../images/header.png'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Main = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  .text-box {
    position: absolute;
    top: 45%;
    left: 30%;
    transform: translate(-50%, -50%);
    text-align: left;
    align-items: center;
    justify-content: center; 
  }
  
  h1{
    font-size: 70px;
    font-weight: 300;
    text-transform: capitalize;
    font-family: Bebas Neue;
  }

  button {
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 80px;
    display: inline-block;
    transition: all .2s;
    position: relative;
    background-color: #000;
    color: #fff;
    z-index: 0;
  }
  
`;


const Home = () => {
  return (
    <Main>
      <div className="text-box">
        <h1>Get </h1>
        <h1>Awesome</h1>
        <h1>Quality</h1>
        <h1>Shorts</h1>
        <button className="btn btn-green btn-animated">
          Shop Now
        </button>
      </div>
      
    </Main>
  );
};

export default Home;