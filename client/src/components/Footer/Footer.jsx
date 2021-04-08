import React from 'react';
import "../Footer/Footer.css"
import NavLogo from "../../assets/images/food-truck-chasers-logo-250.png"

const Footer = () => {
    return (
        <div>
           <footer>
           
           <img style={{textAlign: "center",}}src={NavLogo} className="logo" alt="logo" />
           <img style={{float: "left"}} src="https://img.icons8.com/cute-clipart/64/000000/youtube.png"/>  
           <img style={{float: "left",}} src="https://img.icons8.com/wired/64/000000/pinterest.png"/>
           <img style={{float: "left",}} src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"/>
           <img style={{float: "left",}} src="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png"/> 
          
         </footer>
         </div>   
    );
};

export default Footer;