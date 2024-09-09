import React, { useEffect, useState } from 'react';
import { categoryDetails } from "../utils/categories_utils";
import './LandingPage.css';
import Group_1 from '../assets/bgimages/Group_1.png';
import Group_2 from '../assets/bgimages/Group_2.png';
import Group_3 from '../assets/bgimages/Group_3.png';
import bluebox from '../assets/reasons/bluebox.png';
import leaf from '../assets/reasons/leaf.png';
import local_shipping from '../assets/reasons/local_shipping.png';
import {useNavigate} from "react-router-dom"

function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    Group_1,
    Group_2,
    Group_3
  ];
const navigate  = useNavigate()
  // Change the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const naviagteToShop = () => {
    navigate("/Product")
  }

  return (
    <div className="landing-page">
      {/* Hero Section with Sliding Background */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <h1 className="hero-title">
        <span className="supply">Supply</span>
          <span className="city">City</span>
        </h1>
        <p className="hero-subtitle">Your one-stop shop for everything you need</p>
        <button className="hero-button" onClick={naviagteToShop}>Shop Now</button>
      </div>

      {/* Categories Section */}
      <div className="grid-container">
        {categoryDetails.map((category, index) => (
          <div key={index} className="grid-item">
            <img src={category.image} alt={category.text} />
            <p>{category.text}</p>
          </div>
        ))}
      </div>

       {/* Reasons to Choose SupplyCity Section */}
       <div className="reasons-section">
        <h2 className="reasons-title">Why Choose SupplyCity?</h2>
        <div className="reasons-cards">
          <div className="card">
            <img src={leaf} alt="Variety Icon" />
            <h3>Smart Choice Products</h3>
            <p>Make informed, sustainable choices with our Green Leaf certified products, designed to minimize environmental impact. We're committed to providing reliable information on eco-friendly options across our product range</p>
          </div>
          <div className="card">
            <img src={leaf} alt="Best Prices Icon" />
            <h3>Best Prices</h3>
            <p>Make informed, sustainable choices with our Green Leaf certified products, designed to minimize environmental impact. We're committed to providing reliable information on eco-friendly options across our product range.</p>
          </div>
          <div className="card">
            <img src={local_shipping} alt="Fast Shipping Icon" />
            <h3>Local and Reliable Shipping</h3>
            <p>We prioritize fast and reliable shipping to ensure your supplies arrive quickly and safely. With real-time tracking, multiple delivery options, and dedicated support, you can trust that 
your order will reach you on time, every time</p>
          </div>
        </div>
      </div>


      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <h4>SupplyCity</h4>
          <p>&copy; 2024 SupplyCity. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

