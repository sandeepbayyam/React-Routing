import React from "react";
import "./style.css";
import Home from './Home.js';
import About from './About.js';
import Services from './Services.js';
import Contact from './Contact.js';
import {BrowserRouter ,Link,Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <div className="betterview">
      <Link to ='/home'>Home</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to ='/about'>About</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to ='/services'>Services</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to ='/contact'>Contact</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Routes>
        <Route path='home' element={<Home/>}>
                <Route path='about' element={<About/>}></Route>
                <Route path='services' element={<Services/>}></Route>
                <Route path='Contact' element={<Contact/>}></Route>
        </Route>
        <Route path='about' element={<About/>}>
        </Route>
        <Route path='services' element={<Services/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
