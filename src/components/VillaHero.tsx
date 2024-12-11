import React from 'react';
import { Share2, Heart } from 'lucide-react';

export default function VillaHero() {
  return (
    <section className="villa-hero">
      <div className="villa-hero-content">
        <h1>Sea La Vie</h1>
        <p>Alibaug, Maharashtra</p>
        
        <div className="villa-stats">
          <div className="rating">
            <span className="star">★</span>
            <span>4.5 /5</span>
            <a href="#reviews">105 reviews</a>
          </div>
          
          <div className="actions">
            <button className="action-btn">
              <Share2 />
            </button>
            <button className="action-btn">
              <Heart />
            </button>
          </div>
        </div>

        <div className="villa-features">
          <span className="feature">Entire Villa</span>
          <span className="feature">6-12 Guests</span>
          <span className="feature">8 Bedrooms</span>
          <span className="feature">Pet-Friendly</span>
        </div>
      </div>
    </section>
  );
}