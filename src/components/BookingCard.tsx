import React from 'react';
import { Calendar, Users } from 'lucide-react';

export default function BookingCard() {
  return (
    <div className="booking-card">
      <div className="price">
        <span className="original">₹1,49,086</span>
        <span className="current">₹1,00,086</span>
        <span className="per-night">/Night</span>
      </div>

      <div className="special-offer">
        Special discounts available!!
        <button className="unlock-btn">Unlock Price</button>
      </div>

      <div className="booking-inputs">
        <div className="date-picker">
          <Calendar className="input-icon" />
          <input type="text" placeholder="Check in - Check out" />
        </div>

        <div className="guest-picker">
          <Users className="input-icon" />
          <input type="text" placeholder="2 Guests" />
        </div>
      </div>

      <button className="check-availability">
        Check Availability
      </button>
    </div>
  );
}