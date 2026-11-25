import React from 'react';
import { FOOD_SHOWCASE_ITEMS } from '../data/galleryData';
import { ArrowUpRight } from 'lucide-react';

export default function FoodShowcase({ onSelectCategory }) {
  const handleClick = (anchor) => {
    if (onSelectCategory && anchor) {
      onSelectCategory(anchor);
    }
  };

  return (
    <section id="showcase" className="section-padding" style={{ backgroundColor: 'var(--cream-light)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Visual Culinary Journey</div>
          <h2 className="section-title">A Taste of Jaipur</h2>
          <p className="section-subtitle">
            Exploring the rich culinary traditions and beloved flavours of the Pink City.
          </p>
        </div>

        <div className="showcase-grid">
          {FOOD_SHOWCASE_ITEMS.map((item) => (
            <a
              key={item.id}
              href="#menu"
              className="showcase-card"
              onClick={() => handleClick(item.anchor)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="showcase-img"
                loading="lazy"
              />
              <div className="showcase-overlay">
                <span className="showcase-tag">{item.category}</span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h3 className="showcase-title">{item.title}</h3>
                    <p className="showcase-subtitle">{item.subtitle}</p>
                  </div>
                  <div style={{ color: 'var(--gold-primary)' }}>
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
