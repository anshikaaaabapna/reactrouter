import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'
import img3 from '../assets/img3.png';
import img4 from '../assets/img5.png';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am i?</h1>
            <p>i am a react front-end developer
                 i create responsive website for my clients</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={img3} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={img4} className="img" alt="true" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutContent