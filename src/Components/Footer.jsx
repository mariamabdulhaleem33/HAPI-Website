import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/LOGOFILLED.png';
import git from '../images/github (2).png';
import facebook from '../images/facebook (1).png';
import x from '../images/X.png';
import email from "../images/email (1).png";
import num from "../images/call (1).png";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

const navigate = useNavigate();
    
const handleButtonClick = () => {
    navigate('/About#con');
}
    
const handleFAQClick = () => {
    navigate('/About#FAQ');
}

  return (
    <div className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li><Link style={{textDecoration:"none" , color:""}} to="/About">About us</Link></li>
          <li onClick={handleButtonClick}>Contact us</li>
          <li onClick={handleFAQClick}>FAQ</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className="footer-right">
        <div className="footer-right-top">
          <h3>Follow For More</h3>
          <div className="ico">
            <img src={git} alt="GitHub" />
            <img src={facebook} alt="Facebook" />
            <img src={x} alt="X" />
          </div>
        </div>
        <div className="footer-right-bottom">
          <h3>Contact Us</h3>
          <div class="em">
            <img src={email}/>
            <a href="mailto:Hapi.Help@gmail.com">Hapi.Help@gmail.com</a>
          </div>
          <div class="num">
            <img src={num}/>
            <p>+2 000 000 000 00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
