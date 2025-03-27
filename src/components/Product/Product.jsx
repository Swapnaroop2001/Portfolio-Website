import React from 'react';
import '../Product/Product.css';

export default function Product({ image, GithubRepo, title, description }) {
  return (
    <div className='p-card'>
      <div className='p-card-img-container'>
        <img src={image} alt={title} className='p-card-img' />
      </div>
      <div className='p-card-content'>
        <h2 className='p-card-title'>{title}</h2>
        <p className='p-card-desc'>{description}</p>
        <a href={GithubRepo} target='_blank' rel='noopener noreferrer' className='p-card-button'>View Repository</a>
      </div>
    </div>
  );
}