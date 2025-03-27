import React from 'react';
import '../ProductList/productlist.css';
import Product from '../Product/Product';
import TheDailyBugle from '../../images/TheDailyBugle.png';
import AppleArrow from '../../images/AppleArrow.png';
import CozyCrest from '../../images/CozyCrest.png';
import Portfolio from '../../images/Intro.png';
import CloudVendor from '../../images/CloudVendorAPIExpanded.png';
import StockVision from '../../images/StockVision.png';

export default function ProductList() {
  const products = [
    {
      image: TheDailyBugle,
      GithubRepo: "https://github.com/Swapnaroop2001/TheDailyBugle",
      title: "The Daily Bugle",
      description: "A dynamic news and weather app delivering real-time updates from trusted sources. Built using React, Node.js, and CSS for a smooth and responsive experience.",
      techStack: ['React', 'Node.js', 'CSS']
    },
    {
      image: CozyCrest,
      GithubRepo: "https://github.com/Swapnaroop2001/BookingApp",
      title: "CozyCrest",
      description: "A seamless hotel booking platform with intuitive search, listings, and user management. Developed with React, JavaScript, and CSS for a clean UI.",
      techStack: ['React', 'JavaScript', 'CSS']
    },
    {
      image: Portfolio,
      GithubRepo: "https://github.com/Swapnaroop2001/Portfolio-Website",
      title: "The Portfolio",
      description: "A responsive React-based portfolio showcasing my work and expertise. Built using React, CSS, and HTML for a modern and engaging design.",
      techStack: ['React', 'CSS', 'HTML']
    },
    {
      image: AppleArrow,
      GithubRepo: "https://github.com/Swapnaroop2001/AppleArrow",
      title: "The Apple Sniper",
      description: "A physics-driven Java game integrating motion equations and projectile principles. Developed using Java and Swing for the game mechanics.",
      techStack: ['Java', 'Physics', 'Swing']
    },
    {
      image: CloudVendor,
      GithubRepo: "https://github.com/Swapnaroop2001/CloudVendorProject",
      title: "Cloud Vendor API",
      description: "A RESTful CRUD API for managing cloud vendor data efficiently. Built with Node.js, Express, and MongoDB for seamless backend functionality.",
      techStack: ['Node.js', 'Express', 'MongoDB']
    },
    {
      image: StockVision,
      GithubRepo: "https://github.com/Swapnaroop2001/StockVision",
      title: "Stock Vision",
      description: "A real-time stock market insights platform using TickerTick API for latest news and trends. Developed using React and Node.js with API integration.",
      techStack: ['React', 'Node.js', 'API Integration']
    }
  ];

  return (
    <section id="Projects">
      <div className='pl'>
        <div className="pl-text">
          <h1 className="pl-title">Project Gallery</h1>
          <p className="pl-desc">
            Explore my diverse range of projects showcasing my skills and passion.  
            <br />
            <small>APIs Used: TickerTick API, Custom Flask API, Stock News API</small>
          </p>
        </div>
        <div className="pl-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Product 
              key={index} 
              image={product.image} 
              GithubRepo={product.GithubRepo} 
              title={product.title} 
              description={product.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
