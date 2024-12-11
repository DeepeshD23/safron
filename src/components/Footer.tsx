import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">SaffronStays</a></li>
            <li><a href="#">Signature</a></li>
            <li><a href="#">XSeries</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:mail@saffronstays.com">mail@saffronstays.com</a></li>
            <li><a href="tel:+913728253727">+91 3728253727</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Contact to Partner</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Partner with us</h3>
          <ul>
            <li><a href="#">List a home</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Policies</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Cancellation Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2021 SaffronStays. All rights reserved</p>
      </div>
    </footer>
  );
}