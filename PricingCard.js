import "./PricingCardStyles.css";
import React from 'react';
import { Link } from "react-router-dom";

const PricingCard = () => {
    return (
        <div className="pricing-container">
            <div className="card-container">
                <div className="card">
                    <h3>--Basic--</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>-3 Days-</p>
                    <p>-3 pages-</p>
                    <p>-Featured-</p>
                    <p>-Responsive design-</p>
                    <Link to="/contact" className="btn">PURCHASE</Link>
                </div>

                <div className="card">
                    <h3>--Basic--</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>-3 Days-</p>
                    <p>-3 pages-</p>
                    <p>-Featured-</p>
                    <p>-Responsive design-</p>
                    <Link to="/contact" className="btn">PURCHASE</Link>
                </div>
                
                <div className="card">
                    <h3>--Basic--</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>-3 Days-</p>
                    <p>-3 pages-</p>
                    <p>-Featured-</p>
                    <p>-Responsive design-</p>
                    <Link to="/contact" className="btn">PURCHASE</Link>
                </div>
            </div>
        </div>
    )
}

export default PricingCard;
