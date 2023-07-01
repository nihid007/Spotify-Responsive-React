import React from 'react'
import styled from 'styled-components'

const Cont2=styled.div`
  position: fixed;
  background-color: rgb(42, 139, 161);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;


body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

  }
  
.box{
  background-color: #ffffff;
  border-radius: 11px;
  padding: 30px;
  height: 600px;
  margin-top: 50p;
  display:flex;
  flex-direction: column;
  width: 35%;
  
}
header{
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 40px;
  padding-top:1%;
  margin: 40px;
  
}

#em{
  height: 50px;
  width: 95%;
  border: 1px solid gainsboro;
  padding-left: 20px;
  margin-top: 5px;
}

.but{
  margin-top: 0;
  height: 48px;
  width: 90%;
  border: none;
  background-color: rgb(42, 139, 161) ;
  color: white;
  margin-top: 15px;
  margin-left: 18px;
}
.t1,.t2{
  margin-top: 35px;
  font-size: small;
  text-align: center;
}
.t1{
  margin-bottom: -29px;
}

.l2{
  margin-top: 35px;
  width:100%;
}
.ck{
   display: flex;
   width:1
   padding-left: 60px;
   padding-top: 10px;

   
}
@media screen and (max-width: 700px) {
    
    .box{
    width: 400px;
    height: 530px;
    }
      
}
@media (max-width: 550px){
    .box{
      width: 200px;
      height: 480px;
    }
}
@media (max-height: 710px){

    .box{
      height: 500px;
    }
@media (max-height : 585px){
    .box{
      padding: 27px;
      padding-top: 1%;
      padding-bottom: 1px;

    }
}    
}

`
const Login = () => {

  return (
    <Cont2>
     <div className='box'>
      
      <form>
      <header>Login</header>
        <div className='l1' >
        <label for="email">Email : <br /></label>
        <input type="email" onChange={(e)=>console.log(e.target.value)} id="em" name="email" placeholder="Enter email" required />
        </div>
        <div className='l2'>
        <label for="password">Password : <br /></label>
        <input type="text" onChange={(e)=>console.log(e.target.value)} id='em' placeholder='Enter Password'/>
        </div>
        <div className='ck'>
          <input type="checkbox" id="checkbox" />
          <label>Show Password</label>
        </div>
        <button className='but'>SIGN IN</button>
        <div className='t1'>
          <span>Forgot <a href="" className='user'>Username</a> / <a href="">Password</a>?</span>
        </div>
        <div className='t2'>
        <span>Don't have an account? <a href="">Sign up</a></span>
        </div>
      </form>
     </div>
    </Cont2>
  )
}

export default Login