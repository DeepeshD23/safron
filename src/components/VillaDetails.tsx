import React from 'react';
import { Bed, Users, Car, Wind } from 'lucide-react';

export default function VillaDetails() {
  return (
    <section className="villa-details">
      <div className="about">
        <h2>About</h2>
        <p>
          Tucked away cosily in the lap of nature, this is the perfect destination 
          getaway for a vacation trip near Delhi and Chandigarh.
        </p>
        <p>
          The tourist-favourite Bhimtal Lake is only a stone's throw away.
          <button className="read-more">Read more</button>
        </p>
      </div>

      <div className="quick-links">
        <button className="link-btn">House Rules</button>
        <button className="link-btn">Cancellation Policy</button>
        <button className="link-btn">Things you need to know</button>
        <button className="link-btn">Things to do</button>
      </div>

      <div className="amenities">
        <h2>Amenities</h2>
        <div className="amenities-grid">
          <div className="amenity">
            <Bed />
            <span>4 Bedrooms</span>
          </div>
          <div className="amenity">
            <Users />
            <span>12 Guests</span>
          </div>
          <div className="amenity">
            <Car />
            <span>Free parking</span>
          </div>
          <div className="amenity">
            <Wind />
            <span>Air conditioning</span>
          </div>
        </div>
        <button className="view-all">View all Amenities</button>
      </div>
    </section>
  );
}