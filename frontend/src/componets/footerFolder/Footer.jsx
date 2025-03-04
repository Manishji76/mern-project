// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// import "./footer.css";
// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer

// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 Your Practical Website. All rights reserved. <br /> Made
          with ❤️ <a href="">Manish Kumar</a>
        </p>
        <div className="social-links">
          <a href="">
            <AiFillFacebook />
          </a>
          <a href="">
            <AiFillTwitterSquare />
          </a>
          <a href="">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
