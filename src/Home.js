import React from "react";
import "./style.css";
import {Link,Outlet} from 'react-router-dom'

const Home = ()=>{
  return (
    <div className='Homediv betterview'> 
      <h1>Home</h1>
      <Link to ='about'>About</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to ='services'>Services</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to ='contact'>Contact</Link>
      <Outlet></Outlet>
    </div>
  );
}
export default Home;
