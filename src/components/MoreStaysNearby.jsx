import { useRef, useState, useEffect } from 'react';

const HeartOutlineSvg = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '20px', width: '20px', fill: 'rgba(0,0,0,0.3)', stroke: '#ffffff', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m16 28c7-4.8 14-10.8 14-18 0-1.8-.7-3.7-2.1-5.1-1.4-1.4-3.2-2.1-5.1-2.1-1.8 0-3.7.7-5.1 2.1l-1.8 1.8-1.8-1.8c-1.4-1.4-3.2-2.1-5.1-2.1-1.8 0-3.7.7-5.1 2.1-1.4 1.4-2.1 3.2-2.1 5.1 0 7.2 7 13.2 14 18z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '10px', width: '10px', fill: 'currentColor' }}>
    <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
  </svg>
);

const NEARBY_STAYS = [
  { id: 1, img: '/assets/stay1.jpeg', title: 'Beautiful Studio with a view to die for', price: '₹23,600', rating: '4.91' },
  { id: 2, img: '/assets/stay2.jpeg', title: 'NAQAB - 1bhk with private pool', price: '₹42,218', rating: '4.95' },
  { id: 3, img: '/assets/stay3.jpeg', title: 'Greentique Luxury Flat with plunge pool', price: '₹44,506', rating: '4.94' },
  { id: 4, img: '/assets/stay4.jpeg', title: 'The Tropical Studio | 5 mins to Beach', price: '₹22,824', rating: '4.96' },
  { id: 5, img: '/assets/stay5.jpeg', title: 'Luxury Casa Bella 1BHK with plunge pool', price: '₹39,942', rating: '4.95' },
  { id: 6, img: '/assets/stay6.jpeg', title: 'Kanso by Earthen Window | Jacuzzi | Terrace', price: '₹45,648', rating: '5.0' },
  { id: 7, img: '/assets/stay2.jpeg', title: 'Luxury Apt | Private Pool | 6 Mins from Beach', price: '₹48,786', rating: '4.93' },
  { id: 8, img: '/assets/stay4.jpeg', title: 'Serendipity Cottage - Calm Stay in Calangute', price: '₹22,824', rating: '4.92' },
];

const MoreStaysNearby = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const handleScroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 240, behavior: 'smooth' });
  };

  return (
    <section className="py-12 border-t border-gray-200">
      {/* ── Section Header + Scroll Controls ── */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">More stays nearby</h2>

        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-800">
            {canScrollLeft ? (canScrollRight ? '1 / 2' : '2 / 2') : '1 / 2'}
          </span>

          <button
            type="button"
            id="simPrev"
            disabled={!canScrollLeft}
            onClick={() => handleScroll(-1)}
            className="w-8 h-8 text-xl rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Scroll left"
          >
            ‹
          </button>

          <button
            type="button"
            id="simNext"
            disabled={!canScrollRight}
            onClick={() => handleScroll(1)}
            className="w-8 h-8 rounded-full text-xl border border-gray-300 flex items-center justify-center text-gray-800 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>

      {/* ── Horizontal Scrollable Cards Track (208px Square Images) ── */}
      <div
        ref={scrollRef}
        id="simTrack"
        className="flex gap-4 overflow-x-auto category-scroll scroll-smooth py-2"
      >
        {NEARBY_STAYS.map((stay) => (
          <div
            key={stay.id}
            className="group cursor-pointer space-y-2 w-[208px] min-w-[208px] flex-shrink-0"
          >
            {/* 208px Square Image Container */}
            <div className="relative w-[208px] h-[208px] min-w-[208px] min-h-[208px] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={stay.img}
                alt={stay.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                type="button"
                className="absolute top-2.5 right-2.5 p-1 rounded-full hover:scale-110 transition-transform"
                aria-label="Save to wishlist"
              >
                <HeartOutlineSvg />
              </button>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 line-clamp-1 group-hover:underline">
                {stay.title}
              </h3>
              <div className="flex items-center gap-2 text-xs mt-1">
                <span className="font-normal text-sm text-gray-900">{stay.price} <span className="font-normal text-gray-500 text-[11px]"></span></span>
                <span className="flex items-center gap-1 font-normal text-gray-800 text-sm">
                  <StarIcon />
                  {stay.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreStaysNearby;
