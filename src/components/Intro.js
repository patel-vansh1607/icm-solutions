import React from 'react';
import '../styles/Intro.css';

const IntroComponent = () => {
  return (
   <div className='main-div'>
     <section className="hero">
      <div className="hero-content">
        <h1>
          Grow Your <span className="highlight">Perfect Garden</span> With <br />Premium Seeds
        </h1>
        <p>
          Discover our curated collection of high-quality seeds <br></br> for beautiful flowers, nutritious vegetables, and<br></br>  aromatic herbs.
        </p>
        <div className="hero-buttons">
          <button className="shop-btn">Shop Our Collection →</button>
          <button className="guide-btn">Growing Guides</button>
        </div>
        <div className="hero-rating">
          <div className="avatars">
            <img src="https://i.pravatar.cc/40?img=1" alt="User1" />
            <img src="https://i.pravatar.cc/40?img=2" alt="User2" />
            <img src="https://i.pravatar.cc/40?img=3" alt="User3" />
          </div>
          <div>
            <p>Trusted by 10,000+ gardeners</p>
            <p>⭐ 4.9/5</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="main-img">
          <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb" alt="Main Gardening" />
        </div>
      </div>
    </section>
    
    <section className="premium-seeds-section">
      <div className="content-container">
        <h2 className="title">Discover Our Premium Seeds</h2>
        <p className="description">
          Carefully selected varieties for both beginner and expert gardeners. All seeds are non-GMO and grown with sustainable practices.
        </p>
      </div>
    </section>
   </div>

    
  );
};

export default IntroComponent;
