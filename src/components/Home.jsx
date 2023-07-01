
import React, { useEffect , useState } from 'react'
import logo from "../assets/spo.png"
import styled from "styled-components";
import bg from "../assets/spotify_md.png"



const Container=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${bg});
  background-size: cover;
  overflow: auto;
  
  li,.a{
    list-style: none;
    padding-right: 15px;
    color: white;
    text-decoration:none;

  }
  nav{
    display: flex;
    width: 100%;
    height: 10%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    align-items: center;
  }
  ul{
    display: flex;
    flex-direction: row;
    margin-left: auto;
  }
  img{
    width: 10%;
    height: 50%;
    margin-left: 10px;
  }
  .container2{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 40%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  flex-direction:column;
  align-items: center;
  }

  h1{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 650;
    font-size: 4rem;
    display: flex;
        
  }

  button{
    background-color: green;
    color: white;
    height: 30px;
    width: 100px;
    border-radius: 15px;
    border-style: hidden;
    margin-left: 20px;
  }
  h3{
    margin-left: 20px;
    font-size: 2em;
    font-weight: bold;
  }
  li:hover{
    color: #1db954;
  }
  .a:hover{

    color: rgb(29, 185, 84);
  }
  @media (max-width: 430px){
    h1{
        font-size: 40px;
    }
    ul{
        display:flex;
        flex-direction:column;
    }
    nav{
        height: 20%;
    }
    img{
        height:30%;
        width:35%
    }
  }


`



function Home() {
  const [val,setVal]=useState(0);
const incrementVal=()=>{
    setVal(val+1)
}
  return (
    <Container className='main'>
      <nav>
      <img src={logo} alt="" />
        <ul>
            <li>Premium</li>
            <li>Help</li>
            <li>Download</li>
            <li>|</li>
            <li>Sign up</li>
            <a className='a' href="https://spotifyreactresponsive.web.app/logincl">Login</a>
            
        </ul>
      </nav>
      <div className='container2'>
      <h1 className='centerItems'>Music for everyone.</h1>
      <h3 className='centerItems'>Count : {val}</h3>
      <button className='centerItems' onClick={incrementVal}>Increment</button>
      </div>
    </Container>
  )
}

export default Home