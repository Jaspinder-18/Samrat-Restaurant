import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  AlertCircle,
  Phone,
  Utensils,
  Sunrise,
  Sparkles,
  Cookie,
  Coffee,
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MENU_UPDATE_NOTE } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantData';

const iconMap = {
  Utensils,
  Sunrise,
  Sparkles,
  Cookie,
  Coffee,
};

export default function Menu({ selectedCategory, onSelectCategory }) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.note && item.note.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getCategoryCount = (catId) => {
    if (catId === 'all') return MENU_ITEMS.length;
    return MENU_ITEMS.filter((i) => i.category === catId).length;
  };

  return (
    <section id="menu" className="section-padding" style={{ backgroundColor: 'var(--cream-base)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Interactive Selections</div>
          <h2 className="section-title">Explore Our Menu</h2>
          <p className="section-subtitle">
            Discover food options available at Samrat Restaurant.
          </p>
        </div>

        {/* Menu Controls */}
        <div className="menu-controls">
          {/* Live Search Input */}
          <div className="menu-search-wrapper">
            <Search className="menu-search-icon" size={20} />
            <input
              type="text"
              placeholder="Search items (e.g. Poha, Kachori, Dal Baati, Chai)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
              aria-label="Search food items"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="category-tabs-container">
            <div className="category-tabs">
              {MENU_CATEGORIES.map((cat) => {
                const IconComponent = iconMap[cat.icon] || Utensils;
                const isActive = activeCategory === cat.id;
                const count = getCategoryCount(cat.id);

                return (
                  <button
                    key={cat.id}
                    className={`category-tab ${isActive ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    <IconComponent size={15} />
                    <span>{cat.name}</span>
                    <span className="tab-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Menu Status Toolbar */}
          <div className="menu-toolbar">
            <span className="menu-counter-badge">
              Showing {filteredItems.length} items
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="demo-content-badge">
                DEMO PLACEHOLDERS
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem' }}>
                <span className="veg-indicator">
                  <span className="veg-indicator-dot" />
                </span>
                <span>Vegetarian</span>
              </span>
            </div>
          </div>
        </div>

        {/* Mandatory Menu Verification Notice Banner */}
        <div className="menu-notice-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <AlertCircle size={22} color="var(--gold-dark)" style={{ flexShrink: 0 }} />
            <div>
              <strong>Menu Notice:</strong> {MENU_UPDATE_NOTE}
            </div>
          </div>
          <a
            href={RESTAURANT_INFO.contact.phoneTel}
            className="btn btn-outline-maroon btn-sm"
            style={{ flexShrink: 0 }}
          >
            <Phone size={13} /> Call +91 98286 01904
          </a>
        </div>

        {/* Compact 2-Column Responsive Card Grid */}
        {filteredItems.length > 0 ? (
          <div className="menu-grid-compact">
            {filteredItems.map((dish) => (
              <div key={dish.id} className="menu-card-compact">
                <div>
                  <div className="dish-info-top">
                    <div className="veg-indicator" title="Pure Vegetarian">
                      <div className="veg-indicator-dot" />
                    </div>
                    <div>
                      <h4 className="dish-title-compact">{dish.name}</h4>
                      {dish.note && (
                        <p className="dish-note-text">{dish.note}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="dish-footer-row">
                  <span className="sample-badge">Sample Item</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Call to confirm
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '50px 20px',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid rgba(197, 155, 39, 0.2)',
            }}
          >
            <Search size={36} color="var(--gold-dark)" style={{ marginBottom: '12px' }} />
            <h3 style={{ marginBottom: '6px', color: 'var(--maroon-dark)' }}>
              No dishes found matching "{searchQuery}"
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '18px' }}>
              Please contact the restaurant directly to check today's live food availability.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="btn btn-primary btn-sm"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
