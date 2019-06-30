import React from 'react';
import {Animated} from "react-animated-css";
import 'bootstrap/dist/css/bootstrap.css';
//import { Link } from 'react-router-dom';
import "./Header.css";
import Button from 'react-bootstrap/Button';
 
 function Header(props) {
    return (
      <div className="header text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
      </div>
    );
  }

export default Header;
