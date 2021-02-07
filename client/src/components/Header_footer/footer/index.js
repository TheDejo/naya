import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    
  max-width: 100vw;
  display: block;
  overflow: hidden;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: #fff;
  position: absolute;
  

  .inner-footer{
    display: block;
    margin: 0 auto;
    width: 100vw;
    height:100%;
  }

  .inner-footer .copy p {
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    position: relative;
    text-align: center;
    color: #000;
  }

`;


const Footer = () => {
  const year = new Date().getFullYear()


  return(
    <Div>
      <div className="inner-footer">
        <div className="copy">
          <p>© {year} Dveon</p>
        </div>
      </div>
    </Div>
  )
}

export default Footer;