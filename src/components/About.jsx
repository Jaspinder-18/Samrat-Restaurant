import React from 'react';
import { CheckCircle2, MapPin, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function About() {
  const { about } = RESTAURANT_INFO;

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--cream-base)' }}>
      <div className="container">
        <div className="about-grid">
          {/* Left: Traditional Heritage Visual */}
          <div className="about-image-wrapper">
            <img
              src={RESTAURANT_INFO.images.aboutDining}
              alt="Traditional Dining at Samrat Restaurant Jaipur"
              className="about-image"
              loading="lazy"
            />
            <div className="about-badge">
              <span>CHOURA RASTA &bull; PINK CITY</span>
            </div>
          </div>

          {/* Right: Authentic Story & Highlights */}
          <div className="about-content">
            <div className="section-eyebrow">Discover Samrat</div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              {about.heading}
            </h2>

            <p className="about-description">
              {about.description}
            </p>

            {/* Three Location & Dining Highlights */}
            <div className="about-highlights">
              {about.highlights.map((h) => (
                <div key={h.id} className="highlight-card">
                  <div className="highlight-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="highlight-title">{h.title}</h3>
                  <p className="highlight-desc">{h.description}</p>
                </div>
              ))}
            </div>

            <div>
              <a href="#location" className="btn btn-outline-maroon">
                <MapPin size={16} /> View Location on Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
