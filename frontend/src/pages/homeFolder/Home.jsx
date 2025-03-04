// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useNavigate} from "react-router-dom";
import "./homeCss.css";
import Testimonials from '../../componets/testMonials/Testimonials';
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
    <div className='home'>
      <div className="home-content">
        <h1>Welcome to Pactice Website Platform</h1>
        <p>Learn , Grow, Networking</p>
        <button onClick={()=> navigate('/courses')} className='comn-btn' >
          Get Started
        </button>
      </div>
    </div>
    <Testimonials />
    </div>
  );
};

export default Home