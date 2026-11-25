import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ items, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const currentItem = items[currentIndex];
  if (!currentItem) return null;

  return (
    <div
      className="lightbox-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      <div className="lightbox-content">
        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X size={28} />
        </button>

        <button
          className="lightbox-prev-btn"
          onClick={onPrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>

        <img
          src={currentItem.url}
          alt={currentItem.title}
          className="lightbox-image"
        />

        <button
          className="lightbox-next-btn"
          onClick={onNext}
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>

        <div className="lightbox-caption">
          <div className="lightbox-title">{currentItem.title}</div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-light-muted)', marginTop: '4px' }}>
            {currentItem.description}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--gold-primary)', marginTop: '6px' }}>
            {currentIndex + 1} of {items.length} &bull; {currentItem.category} (Demo Image)
          </div>
        </div>
      </div>
    </div>
  );
}
