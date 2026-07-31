import { useState, useEffect } from 'react';

// ── SVG Icons
const CloseSvg = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5 }}>
    <path d="m6 6 20 20M26 6 6 26" />
  </svg>
);

const ChevronLeftSvg = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '18px', width: '18px', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5 }}>
    <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" />
  </svg>
);

const ChevronRightSvg = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '18px', width: '18px', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5 }}>
    <path d="M12 4l11.3 11.3a1 1 0 0 1 0 1.4L12 28" />
  </svg>
);

const GridSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor' }}>
    <path fillRule="evenodd" d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </svg>
);

const LightboxModal = ({ isOpen, onClose, onOpenTour, photos = [], initialIndex = 0 }) => {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setIndex(initialIndex);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialIndex]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, photos.length, onClose]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[index];

  return (
    <div
      className="fixed inset-0 z-[110] bg-white flex flex-col justify-between animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
    >
      {/* ── Top Bar Header (Matching User Screenshot & Reference HTML) ── */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white z-20">
        {/* Left: 3x3 dots grid icon button */}
        <button
          type="button"
          onClick={() => {
            if (onOpenTour) onOpenTour();
            else onClose();
          }}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-800 transition-colors"
          aria-label="View photo grid tour"
        >
          <GridSvg />
        </button>

        {/* Center: Category or Room Label */}
        <div className="text-sm font-medium text-gray-900">
          {currentPhoto.category || 'Living room 1'}
        </div>

        {/* Right: Counter + Close button */}
        <div className="flex items-center gap-4 text-sm text-gray-900">
          <span className="font-normal">{index + 1} of {photos.length}</span>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-900 transition-colors"
            aria-label="Close Lightbox"
          >
            <CloseSvg />
          </button>
        </div>
      </header>

      {/* ── Center Stage: Image + Prev/Next Controls ── */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden px-4 md:px-12 bg-white">
        {/* Prev Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-4 md:left-8 z-20 w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 flex items-center justify-center transition-all duration-150 shadow-sm"
          aria-label="Previous photo (Left arrow key)"
        >
          <ChevronLeftSvg />
        </button>

        {/* Current Displayed Image */}
        <div className="max-w-5xl max-h-[78vh] w-full h-full flex items-center justify-center p-2">
          <img
            key={index}
            src={currentPhoto.src}
            alt={currentPhoto.alt || `Photo ${index + 1}`}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-sm transition-all duration-300"
          />
        </div>

        {/* Next Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-4 md:right-8 z-20 w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 flex items-center justify-center transition-all duration-150 shadow-sm"
          aria-label="Next photo (Right arrow key)"
        >
          <ChevronRightSvg />
        </button>
      </div>

      {/* ── Bottom Caption ── */}
      <div className="text-center text-xs text-gray-500 font-normal z-20 pb-4 bg-white">
        {currentPhoto.alt || 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10'}
      </div>
    </div>
  );
};

export default LightboxModal;
