import React from 'react';
import { MapPin, ArrowRight, Utensils, Sparkles, Coffee } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero() {
  return (
    <header
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url("${RESTAURANT_INFO.images.heroBg}")`,
      }}
    >
      <div className="hero-overlay" />

      <div className="container hero-content">
        {/* Location Label Badge */}
        <div className="hero-badge">
          <MapPin size={15} color="var(--gold-primary)" />
          <span>{RESTAURANT_INFO.locationBadge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Authentic Flavours. <span className="gold-text">Memorable Moments.</span>
        </h1>

        {/* Supporting Text */}
        <p className="hero-subheading">
          {RESTAURANT_INFO.subheading}
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#menu" className="btn btn-primary">
            <Utensils size={18} />
            <span>Explore Our Menu</span>
          </a>
          <a href="#location" className="btn btn-secondary">
            <span>Find Our Location</span>
            <ArrowRight size={17} />
          </a>
        </div>

        {/* Verified Attributes */}
        <div className="hero-features">
          <div className="hero-feature-item">
            <Sparkles size={16} />
            <span>Rajasthani Flavours</span>
          </div>
          <div className="hero-feature-item">
            <div className="veg-indicator">
              <div className="veg-indicator-dot" />
            </div>
            <span>Pure Vegetarian Offerings</span>
          </div>
          <div className="hero-feature-item">
            <Coffee size={16} />
            <span>Breakfast & Traditional Snacks</span>
          </div>
        </div>
      </div>
    </header>
  );
}
