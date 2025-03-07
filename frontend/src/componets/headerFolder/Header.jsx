// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./header.css";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({isAuth}) => {
  return (
    <header>
        <div className="logo">Practice Website</div>
        <div className="link">
            <Link to={'/'} >Home</Link>
            <Link to={'/course'} >Course</Link>
            <Link to={'/about'} >About</Link>
            {isAuth?(<Link to={'/account'} >Account</Link> ):
              (
                <Link to={'/login'} >Login</Link>
              )
            }
        </div>
    </header>
  );
};

export default Header