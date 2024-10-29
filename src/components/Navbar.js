import React from 'react';
import PropTypes from 'prop-types';
import {Link} from'react-router-dom';




export default function Navbar1(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  {/* <div className="container"> */}
 
    <ul>
    <strong><Link className="navbar-brand ms-3" to="/" >{props.title}</Link> </strong>
    <Link className="navbar-brand ms-3" to="/about">About Us</Link>
    <Link className="navbar-brand ms-3" to="/">Form</Link>
    
    {/* <a className="navbar-brand">Navbar</a> */}
    </ul>
     
    {/* <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary me-5" type="submit">Search</button>
    </form>
     */}

      

<div className={`form-check form-switch text-${props.mode==='dark'?'white':'grey'}`}>
  <input className="form-check-input" onClick={props.Mode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label me-4" htmlFor="flexSwitchCheckDefault">enable dark mode</label>
</div>

     
    {/* </div> */}

</nav>


  )
}

Navbar1.propTypes = {title: PropTypes.string}