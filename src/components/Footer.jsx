import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Restaurant Info */}
          <div>
            <div className="nav-brand" style={{ marginBottom: '18px' }}>
              <div className="brand-symbol">S</div>
              <div className="brand-text">
                <span className="brand-title">
                  SAM<span>RAT</span>
                </span>
                <span className="brand-tagline">Restaurant &bull; Jaipur</span>
              </div>
            </div>
            <p
              style={{
                color: 'var(--text-light-muted)',
                fontSize: '0.92rem',
                lineHeight: '1.7',
                marginBottom: '20px',
              }}
            >
              Enjoy authentic flavours and traditional hospitality at Samrat Restaurant, situated in the heart of the historic Pink City at Choura Rasta, Jaipur.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span className="veg-indicator">
                <span className="veg-indicator-dot" />
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>
                Traditional Vegetarian Cuisine
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Samrat</a>
              </li>
              <li>
                <a href="#showcase">A Taste of Jaipur</a>
              </li>
              <li>
                <a href="#menu">Digital Menu</a>
              </li>
              <li>
                <a href="#why-us">Why Visit Us</a>
              </li>
              <li>
                <a href="#gallery">Photo Gallery</a>
              </li>
              <li>
                <a href="#location">Find Us on Map</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div>
            <h4 className="footer-col-title">Visit & Connect</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>
                  {RESTAURANT_INFO.address.shop}, {RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.city}, Rajasthan {RESTAURANT_INFO.address.pincode}
                </span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <a href={RESTAURANT_INFO.contact.phoneTel}>
                  {RESTAURANT_INFO.contact.phone}
                </a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Clock size={18} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>
                  {RESTAURANT_INFO.timing.display}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="footer-bottom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              &copy; {currentYear} <strong>Samrat Restaurant</strong>. All rights reserved. Choura Rasta, Jaipur, Rajasthan.
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--gold-light)' }}>
              Authentic Flavours &bull; Memorable Moments
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
