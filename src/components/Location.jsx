import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Location() {
  const { address, maps } = RESTAURANT_INFO;

  return (
    <section id="location" className="section-padding" style={{ backgroundColor: 'var(--cream-base)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Pink City Destination</div>
          <h2 className="section-title">Find Us in Jaipur</h2>
          <p className="section-subtitle">
            Easily accessible in the bustling heritage center of Jaipur at Choura Rasta.
          </p>
        </div>

        <div className="location-grid">
          {/* Left: Location Details Card */}
          <div className="location-info-card">
            <div className="location-badge-pill">
              <Compass size={14} /> Historic Pink City
            </div>

            <div>
              <h3 className="location-title">Samrat Restaurant</h3>
              <p style={{ color: 'var(--gold-dark)', fontWeight: '600', fontSize: '0.9rem', marginTop: '2px' }}>
                Choura Rasta, Jaipur
              </p>
            </div>

            <div className="location-address-text">
              <strong>{address.shop}</strong>, {address.street}
              <br />
              {address.city}, {address.state} {address.pincode}, India
            </div>

            <div style={{ padding: '14px', backgroundColor: 'var(--cream-base)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(197, 155, 39, 0.2)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <strong>Landmark Area:</strong> Situated near Bapu Bazar & Biseswarji in the heart of traditional Jaipur's market network.
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
              <a
                href={maps.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Navigation size={16} /> Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Right: Google Maps Embed */}
          <div className="map-wrapper">
            <iframe
              title="Samrat Restaurant Location Map"
              src={maps.embedUrl}
              className="map-frame"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div
              style={{
                padding: '14px 20px',
                backgroundColor: 'var(--maroon-dark)',
                color: 'var(--cream-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div>
                <span style={{ fontSize: '0.82rem', color: 'var(--gold-light)' }}>
                  Shop 273, Choura Rasta
                </span>
                <div style={{ fontSize: '0.92rem', fontWeight: '600' }}>
                  Jaipur, Rajasthan 302003
                </div>
              </div>
              <a
                href={maps.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <ExternalLink size={13} /> Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
