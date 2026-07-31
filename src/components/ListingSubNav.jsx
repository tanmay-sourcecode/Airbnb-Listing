import { useState, useEffect } from 'react';

// Star icon SVG
const StarIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentColor' }}>
    <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
  </svg>
);

const TABS = [
  { id: 'photos', label: 'Photos' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'location', label: 'Location' },
];

const ListingSubNav = ({ price = "₹28,499", duration = "for 5 nights", rating = "4.95", reviewsCount = 19 }) => {
  const [activeTab, setActiveTab] = useState('photos');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 550);

      const sections = TABS.map((tab) => document.getElementById(tab.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.getBoundingClientRect().top <= 100) {
          setActiveTab(TABS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
    const target = document.getElementById(id);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const handleReserveClick = () => {
    const bookingWidget = document.getElementById('bookingSticky');
    if (bookingWidget) {
      bookingWidget.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div
      id="_JXzroy"
      className={`top-0 z-40 bg-white border-b border-gray-200 transition-all duration-300 ${ isVisible ? 'sticky translate-y-0 opacity-100 shadow-sm' : ' opacity-0 fixed top-0 pointer-events-none translate-y-[-100%]' }`}
      aria-hidden={!isVisible}
    >
      <div className="max-w-[1120px] mx-auto 1 h-14 flex items-center justify-between">

        {/* ── Left tabs ── */}
        <nav className="flex items-center gap-5 h-full" aria-label="Listing sections">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              data-target={tab.id}
              onClick={(e) => handleTabClick(e, tab.id)}
              className={`flex items-center text-black h-9 text-sm font-normal border-b-2 duration-200 ${activeTab === tab.id ? '_KOWlKT border-gray-900' : 'border-transparent hover:text-gray-990' }`}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        {/* ── Right side price + reserve snippet ── */}
        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
            <div>
              <span className="font-semibold text-gray-900 text-sm">{price}</span>{' '}
              <span className="text-xs text-gray-600 font-normal">{duration}</span>
            </div>
            <div className="flex items-center justify-end gap-1 text-[11px] text-gray-800 font-semibold">
              <span className="text-gray-900" aria-hidden="true">
                <StarIcon />
              </span>
              <span>{rating}</span>
              <span className="text-gray-400">·</span>
              <span className="sn-reviews underline text-gray-600">{reviewsCount} reviews</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReserveClick}
            className="bg-[#d61f40] hover:bg-[#E31C5F] text-white text-sm font-semibold px-5 py-2.5 rounded-3xl shadow transition-colors duration-200"
          >
            Reserve
          </button>
        </div>

      </div>
    </div>
  );
};

export default ListingSubNav;
