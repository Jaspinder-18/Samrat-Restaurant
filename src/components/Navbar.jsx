import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, MapPin, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Menu', href: '#menu' },
    { label: 'Why Visit Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="navbar-wrapper">
      {/* Top Notification Bar */}
      <div className="top-notice-bar">
        <span>
          <MapPin size={13} /> {RESTAURANT_INFO.locationBadge} &bull; Pink City
        </span>
        <span>
          <Phone size={13} /> {RESTAURANT_INFO.contact.phone}
        </span>
      </div>

      {/* Main Responsive Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Custom Typographic Brand Logo */}
          <a href="#home" className="nav-brand" onClick={closeMobileMenu}>
            <div className="brand-symbol">S</div>
            <div className="brand-text">
              <span className="brand-title">
                SAM<span>RAT</span>
              </span>
              <span className="brand-tagline">Restaurant &bull; Jaipur</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Action CTA */}
          <div className="nav-cta">
            <a href="#menu" className="btn btn-primary btn-sm">
              <Utensils size={15} /> Explore Menu
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Drawer Menu */}
      <aside className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="nav-brand">
            <div className="brand-symbol">S</div>
            <div className="brand-text">
              <span className="brand-title">
                SAM<span>RAT</span>
              </span>
              <span className="brand-tagline">Restaurant &bull; Jaipur</span>
            </div>
          </div>
          <button
            className="drawer-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                <span>{link.label}</span>
                <span style={{ color: 'var(--gold-primary)', fontSize: '0.8rem' }}>→</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <a
            href="#menu"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={closeMobileMenu}
          >
            <Utensils size={16} /> Explore Menu
          </a>
          <a
            href={RESTAURANT_INFO.contact.phoneTel}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <Phone size={16} /> Call Restaurant
          </a>
        </div>
      </aside>
    </div>
  );
}
