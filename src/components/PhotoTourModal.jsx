import { useEffect, useRef, useState } from 'react';
import { BackSvg, ShareSvg, HeartSvg, TOUR_CATEGORIES } from './PhotoTourModalData';

const PhotoTourModal = ({ isOpen, onClose, onPhotoClick, initialCategory = 0 }) => {
  const [activeIdx, setActiveIdx] = useState(initialCategory);
  const scrollRef = useRef(null);

  // Lock body scroll when open & handle initial category scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveIdx(initialCategory);
      setTimeout(() => {
        const el = document.getElementById(`tour-room-${initialCategory}`);
        if (el && scrollRef.current) {
          scrollRef.current.scrollTo({ top: el.offsetTop - 80, behavior: 'auto' });
        }
      }, 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, initialCategory]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Scroll room section into view when category clicked
  const handleNavClick = (idx) => {
    setActiveIdx(idx);
    const el = document.getElementById(`tour-room-${idx}`);
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-white flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      id="_KpcKWX"
    >
      {/* ── Tour header bar ── */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0" id="tourBar">
        <button
          type="button"
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Back"
          id="tourBack"
          onClick={onClose}
        >
          <span className="w-4 h-4 text-gray-800"><BackSvg /></span>
        </button>

        <h2 className="text-base font-semibold text-gray-900">Photo tour</h2>

        <div className="flex items-center gap-1">
          <button type="button" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors" aria-label="Share">
            <span className="w-4 h-4 text-gray-800"><ShareSvg /></span>
          </button>
          <button type="button" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors" aria-label="Save">
            <span className="w-4 h-4 text-gray-800"><HeartSvg /></span>
          </button>
        </div>
      </header>

      {/* ── Main scrollable content ── */}
      <div className="flex-1 overflow-y-auto" ref={scrollRef} id="tourScroll">
        <div className="max-w-6xl mx-auto px-8 py-8">

          {/* ── Category thumbnail nav matching reference ── */}
          <nav
            className="flex flex-wrap gap-x-4 gap-y-6 mb-12"
            id="tourNav"
            aria-label="Photo categories"
          >
            {TOUR_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                type="button"
                className="flex flex-col items-start gap-1.5 group cursor-pointer"
                aria-label={cat.label}
                onClick={() => handleNavClick(idx)}
              >
                <div className={`w-[116px] h-[90px] rounded-2xl overflow-hidden transition-all duration-200 ${ activeIdx === idx ? 'ring-2 ring-gray-900' : 'group-hover:opacity-90' }`}>
                  <img
                    loading="lazy"
                    alt={cat.label}
                    src={cat.navImg}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <span className="text-xs font-normal text-gray-700 text-left leading-snug max-w-[116px]">
                  {cat.label}
                </span>
              </button>
            ))}
          </nav>

          {/* ── Room sections ── */}
          <div className="tour-rooms space-y-20" id="tourRooms">
            {TOUR_CATEGORIES.map((cat, idx) => (
              <section
                key={cat.id}
                id={`tour-room-${idx}`}
                className="scroll-mt-28 flex flex-col md:flex-row justify-between items-start w-full"
              >
                {/* Left Column: Room Title & Photo Caption ONLY */}
                <div className="w-full md:w-[480px] flex-shrink-0 md:sticky md:top-28 pr-6">
                  <h3 className="text-[32px] leading-[38px] font-bold text-gray-900">{cat.label}</h3>
                  {cat.amenities && (
                    <div className="text-[15px] leading-[22px] text-gray-600 font-normal mt-3">
                      {cat.amenities}
                    </div>
                  )}
                </div>

                {/* Right Column: Fixed 458px Width Image Blocks Aligned to Right */}
                <div className="w-[458px] flex-shrink-0 space-y-3 ml-auto">
                  {cat.blocks.map((block, bIdx) => {
                    if (block.type === 'full') {
                      return (
                        <div
                          key={bIdx}
                          onClick={() => onPhotoClick && onPhotoClick(block.src, cat.label)}
                          className="w-[458px] h-[305px] rounded-2xl overflow-hidden shadow-sm flex-shrink-0 cursor-pointer group"
                        >
                          <img
                            loading="lazy"
                            alt={block.alt || cat.label}
                            src={block.src}
                            className="w-full h-full object-cover group-hover:opacity-95 transition-opacity duration-200 cursor-pointer rounded-2xl"
                          />
                        </div>
                      );
                    } else if (block.type === 'pair') {
                      return (
                        <div key={bIdx} className="flex gap-[12px] w-[458px]">
                          {block.items.map((item, iIdx) => (
                            <div
                              key={iIdx}
                              onClick={() => onPhotoClick && onPhotoClick(item.src, cat.label)}
                              className="w-[223px] h-[148px] rounded-2xl overflow-hidden shadow-sm flex-shrink-0 cursor-pointer group"
                            >
                              <img
                                loading="lazy"
                                alt={item.alt || cat.label}
                                src={item.src}
                                className="w-full h-full object-cover group-hover:opacity-95 transition-opacity duration-200 cursor-pointer rounded-2xl"
                              />
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoTourModal;
