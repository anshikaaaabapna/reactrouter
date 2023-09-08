import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-container">
        <div className="left">
        <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    <div>
                    <p>subash nagar,sevasharam</p>
                <p>udaipur</p>
                    </div>
                    </div>
                    <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />9351623237</h4>

                    </div>
                    <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />anshikabapna4@gmail.com</h4>
            
                
            </div>
        </div>
        <div className="right">
        <h4>Quote</h4>
            <p>
             "you're braver than you believe. Stronger than you seem,and smarter than you think"
            </p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />
            <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}} />
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />



            </div>
        </div>
        
        


            </div>
        </div>
    </>
    
    
  );
}

export default Footer