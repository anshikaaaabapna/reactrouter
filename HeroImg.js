import "./HeroImgStyles.css";
import React from 'react'
import Img1 from '../assets/img1.jpg'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={Img1} alt="img1" />
        </div>
        <div className="content">
            <p>heyy,I am web developer</p>
            <h1>react developer</h1>
            <div>
                <Link to="/project" className="btn">projects</Link>
                <Link to="/contact" className="btn btn-light">contact</Link>
            </div>

        </div>
    </div>
  )
}

export default HeroImg