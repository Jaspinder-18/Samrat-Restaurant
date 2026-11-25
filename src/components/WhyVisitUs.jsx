import React from 'react';
import { MapPin, Sunrise, Utensils, PhoneCall } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

const iconMap = {
  MapPin,
  Sunrise,
  Utensils,
  PhoneCall,
};

export default function WhyVisitUs() {
  const { whyVisitUs } = RESTAURANT_INFO;

  return (
    <section id="why-us" className="section-padding section-dark">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Pink City Experience</div>
          <h2 className="section-title">Why Visit Samrat Restaurant</h2>
          <p className="section-subtitle">
            Authentic culinary traditions, convenient location, and welcoming hospitality in Jaipur.
          </p>
        </div>

        <div className="features-grid">
          {whyVisitUs.map((feature) => {
            const Icon = iconMap[feature.icon] || Utensils;
            return (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon size={26} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
