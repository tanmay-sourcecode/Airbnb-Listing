import { useState } from 'react';
import LightboxModal from './LightboxModal';
import PhotoTourModal from './PhotoTourModal';

// ── "Show all photos" button icon (3×3 dots from reference HTML)
const ShowAllSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path fillRule="evenodd" d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
  </svg>
);

// ── Full Listing Photo Gallery (22 photos)
const ALL_PHOTOS = [
  // ── Initial 5 visible on hero grid collage ──
  { src: '/assets/photo1.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Terrace View', category: 'Living room 2', loading: 'eager' },
  { src: '/assets/living2-main.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Hot Tub Room', category: 'Living room 2', loading: 'lazy' },
  { src: '/assets/photo3.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Living & Dining Area', category: 'Living room 2', loading: 'lazy' },
  { src: '/assets/bedroom-main.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Master Bedroom', category: 'Bedroom', loading: 'lazy' },
  { src: '/assets/photo5.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Balcony Seating', category: 'Bedroom', loading: 'lazy' },

  // ── Additional listing photos for Lightbox & Full Photo Tour ──
  { src: '/assets/living1-main.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Living Room Lounge', category: 'Living room 1', loading: 'lazy' },
  { src: '/assets/living1-b.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Living Room TV Decor', category: 'Living room 1', loading: 'lazy' },
  { src: '/assets/living1-c.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Living Room Perspective', category: 'Living room 1', loading: 'lazy' },
  { src: '/assets/kitchen-main.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Fully Equipped Kitchen', category: 'Full kitchen', loading: 'lazy' },
  { src: '/assets/photo4.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Bedroom Wardrobe Area', category: 'Bedroom', loading: 'lazy' },
  { src: '/assets/bathroom-main.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Full Bathroom with Shower', category: 'Full bathroom', loading: 'lazy' },
  { src: '/assets/pool-main.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Shared Swimming Pool', category: 'Pool', loading: 'lazy' },
  { src: '/assets/exterior-main.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Property Exterior', category: 'Exterior', loading: 'lazy' },
  { src: '/assets/gym-main.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Fitness Gym Area', category: 'Gym', loading: 'lazy' },
  { src: '/assets/additional-main.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Entrance & Gardens', category: 'Additional photos', loading: 'lazy' },
  { src: '/assets/photo2.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Jacuzzi Jet Controls', category: 'Living room 2', loading: 'lazy' },
  { src: '/assets/stay1.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Poolside Sun loungers', category: 'Pool', loading: 'lazy' },
  { src: '/assets/stay2.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Private Pool Suite', category: 'Exterior', loading: 'lazy' },
  { src: '/assets/stay3.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Luxury Terrace Flat', category: 'Full kitchen', loading: 'lazy' },
  { src: '/assets/stay4.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Studio Atmosphere', category: 'Living room 1', loading: 'lazy' },
  { src: '/assets/stay5.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Sunset Deck', category: 'Exterior', loading: 'lazy' },
  { src: '/assets/stay6.jpeg', alt: 'Romantic Jacuzzi 1BHK Candolim | Tropical Surroundings', category: 'Additional photos', loading: 'lazy' },
];

// Initial 5 photos for hero collage display
const HERO_PHOTOS = ALL_PHOTOS.slice(0, 5);

const HeroGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [tourOpen, setTourOpen] = useState(false);
  const [tourCategoryIndex, setTourCategoryIndex] = useState(0);

  // Click in Hero Gallery opens Photo Tour at corresponding category section
  const openPhotoTour = (catIdx = 0) => {
    setTourCategoryIndex(catIdx);
    setTourOpen(true);
  };

  // Click inside Photo Tour opens LightboxModal at that photo
  const handlePhotoClickFromTour = (photoSrc) => {
    const foundIdx = ALL_PHOTOS.findIndex((p) => p.src === photoSrc);
    if (foundIdx !== -1) {
      setLightboxIndex(foundIdx);
    } else {
      setLightboxIndex(0);
    }
    setLightboxOpen(true);
  };

  return (
    <>
      <section
        className="hidden md:block relative my-4"
        aria-label="Photos of this place"
      >
        <div
          id="heroGrid"
          className="grid grid-cols-2 gap-2 w-full rounded-2xl overflow-hidden shadow-sm"
          style={{ height: '480px' }}
        >
          {/* ── Left Column: Main Image 1 (Click opens PhotoTour at Living room 2) ── */}
          <button
            type="button"
            className="relative overflow-hidden group w-full h-full rounded-l-2xl"
            aria-label={HERO_PHOTOS[0].alt}
            onClick={() => openPhotoTour(1)}
          >
            <img
              src={HERO_PHOTOS[0].src}
              alt={HERO_PHOTOS[0].alt}
              decoding="async"
              loading={HERO_PHOTOS[0].loading}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer"
            />
          </button>

          {/* ── Right Column: 2×2 Sub-Grid (4 Images) ── */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full">
            {/* Image 2 (Click opens PhotoTour at Living room 2) */}
            <button
              type="button"
              className="relative overflow-hidden group w-full h-full"
              aria-label={HERO_PHOTOS[1].alt}
              onClick={() => openPhotoTour(1)}
            >
              <img
                src={HERO_PHOTOS[1].src}
                alt={HERO_PHOTOS[1].alt}
                decoding="async"
                loading={HERO_PHOTOS[1].loading}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer"
              />
            </button>

            {/* Image 3 (Click opens PhotoTour at Living room 2) */}
            <button
              type="button"
              className="relative overflow-hidden group w-full h-full rounded-tr-2xl"
              aria-label={HERO_PHOTOS[2].alt}
              onClick={() => openPhotoTour(1)}
            >
              <img
                src={HERO_PHOTOS[2].src}
                alt={HERO_PHOTOS[2].alt}
                decoding="async"
                loading={HERO_PHOTOS[2].loading}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer"
              />
            </button>

            {/* Image 4 (Click opens PhotoTour at Bedroom) */}
            <button
              type="button"
              className="relative overflow-hidden group w-full h-full"
              aria-label={HERO_PHOTOS[3].alt}
              onClick={() => openPhotoTour(3)}
            >
              <img
                src={HERO_PHOTOS[3].src}
                alt={HERO_PHOTOS[3].alt}
                decoding="async"
                loading={HERO_PHOTOS[3].loading}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer"
              />
            </button>

            {/* Image 5 (Click opens PhotoTour at Bedroom) */}
            <button
              type="button"
              className="relative overflow-hidden group w-full h-full rounded-br-2xl"
              aria-label={HERO_PHOTOS[4].alt}
              onClick={() => openPhotoTour(3)}
            >
              <img
                src={HERO_PHOTOS[4].src}
                alt={HERO_PHOTOS[4].alt}
                decoding="async"
                loading={HERO_PHOTOS[4].loading}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer"
              />
            </button>
          </div>
        </div>

        {/* ── "Show all photos" button ── */}
        <button
          type="button"
          id="showAllPhotos"
          onClick={() => openPhotoTour(0)}
          className="absolute bottom-4 right-4 flex items-center gap-2 bg-white text-gray-900 text-sm font-medium border border-gray-900 rounded-lg px-3.5 py-2 hover:bg-gray-100 transition-colors duration-200 shadow-sm z-10"
        >
          <span className="w-4 h-4 flex-shrink-0">
            <ShowAllSvg />
          </span>
          Show all photos
        </button>
      </section>

      {/* ── Lightbox Single-Photo Viewer Modal (Full 22 photos) ── */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onOpenTour={() => {
          setLightboxOpen(false);
          setTourOpen(true);
        }}
        photos={ALL_PHOTOS}
        initialIndex={lightboxIndex}
      />

      {/* ── Full Photo Tour Categorized Modal ── */}
      <PhotoTourModal
        isOpen={tourOpen}
        onClose={() => setTourOpen(false)}
        initialCategory={tourCategoryIndex}
        onPhotoClick={handlePhotoClickFromTour}
      />
    </>
  );
};

export default HeroGallery;
