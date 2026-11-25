import React from 'react';
import { Phone, MapPin, Navigation, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Contact() {
  const { contact, address, timing, maps } = RESTAURANT_INFO;

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--cream-light)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Connect With Us</div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Contact us for dining queries, takeaway requests, and directions to our shop at Choura Rasta.
          </p>
        </div>

        <div className="contact-cards-grid">
          {/* Phone Contact Card */}
          <div className="contact-card">
            <div className="contact-card-icon">
              <Phone size={26} />
            </div>
            <div>
              <h3 className="contact-card-title">Direct Telephone</h3>
              <p className="contact-card-text">
                Speak directly with restaurant staff for daily food availability, orders, or assistance:
              </p>
              <div style={{ marginTop: '10px', fontSize: '1.25rem', fontWeight: '700', color: 'var(--maroon-primary)' }}>
                {contact.phone}
              </div>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
              <a href={contact.phoneTel} className="btn btn-primary" style={{ width: '100%' }}>
                <Phone size={16} /> Call Now (+91 98286 01904)
              </a>
            </div>
          </div>

          {/* Location & Directions Card */}
          <div className="contact-card">
            <div className="contact-card-icon">
              <MapPin size={26} />
            </div>
            <div>
              <h3 className="contact-card-title">Visit Our Location</h3>
              <p className="contact-card-text">
                <strong>{RESTAURANT_INFO.name}</strong>
                <br />
                {address.shop}, {address.street}
                <br />
                {address.city}, {address.state} {address.pincode}
              </p>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
              <a
                href={maps.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-maroon"
                style={{ width: '100%' }}
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Operating Hours Note */}
        <div
          style={{
            maxWidth: '680px',
            margin: '36px auto 0 auto',
            textAlign: 'center',
            padding: '16px 20px',
            backgroundColor: 'var(--cream-base)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(197, 155, 39, 0.25)',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--maroon-primary)', fontWeight: '600', marginBottom: '4px' }}>
            <Clock size={16} /> Operating Hours
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            {timing.note} Please call <a href={contact.phoneTel} style={{ color: 'var(--maroon-primary)', fontWeight: '600' }}>{contact.phone}</a> for current morning breakfast and evening dining hours.
          </p>
        </div>
      </div>
    </section>
  );
}
