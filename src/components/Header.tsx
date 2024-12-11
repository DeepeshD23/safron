import React from 'react';
import { Search, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>XSERIES</h1>
      </div>
      
      <div className="search-bar">
        <Search className="search-icon" />
        <input 
          type="text" 
          placeholder="search for location, villa, facilities" 
          className="search-input"
        />
      </div>

      <div className="header-right">
        <div className="brand">
          <div className="brand-logo"></div>
          <span>SaffronStays</span>
        </div>
        
        <div className="contact">
          <Phone className="phone-icon" />
          <span>08069160000</span>
        </div>

        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}