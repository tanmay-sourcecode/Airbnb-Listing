import { useEffect } from 'react';

// Close SVG (✕)
const CloseSvg = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5 }}>
    <path d="m6 6 20 20M26 6 6 26" />
  </svg>
);

const ALL_AMENITIES_CATEGORIES = [
  {
    category: 'Scenic views',
    items: [
      { label: 'Garden view', unavailable: false },
      { label: 'Pool view', unavailable: false },
    ],
  },
  {
    category: 'Bathroom',
    items: [
      { label: 'Hair dryer', unavailable: false },
      { label: 'Cleaning products', unavailable: false },
      { label: 'Hot water', unavailable: false },
      { label: 'Body soap', unavailable: false },
      { label: 'Shower gel', unavailable: false },
    ],
  },
  {
    category: 'Bedroom and laundry',
    items: [
      { label: 'Washing machine', unavailable: false },
      { label: 'Essentials (Towels, bed sheets, soap and toilet paper)', unavailable: false },
      { label: 'Hangers', unavailable: false },
      { label: 'Bed linen', unavailable: false },
      { label: 'Iron', unavailable: false },
      { label: 'Clothes storage', unavailable: false },
    ],
  },
  {
    category: 'Entertainment',
    items: [
      { label: 'TV with standard cable/satellite', unavailable: false },
      { label: 'Books and reading material', unavailable: false },
    ],
  },
  {
    category: 'Heating and cooling',
    items: [
      { label: 'Air conditioning', unavailable: false },
      { label: 'Ceiling fan', unavailable: false },
    ],
  },
  {
    category: 'Home safety',
    items: [
      { label: 'Smoke alarm', unavailable: true },
      { label: 'Carbon monoxide alarm', unavailable: true },
      { label: 'Fire extinguisher', unavailable: false },
      { label: 'First aid kit', unavailable: false },
    ],
  },
  {
    category: 'Internet and office',
    items: [
      { label: 'Wifi', unavailable: false },
      { label: 'Dedicated workspace', unavailable: false },
    ],
  },
  {
    category: 'Kitchen and dining',
    items: [
      { label: 'Kitchen', unavailable: false },
      { label: 'Refrigerator', unavailable: false },
      { label: 'Microwave', unavailable: false },
      { label: 'Cooking basics (Pots and pans, oil, salt and pepper)', unavailable: false },
      { label: 'Dishes and cutlery (Bowls, chopsticks, plates, cups, etc.)', unavailable: false },
      { label: 'Freezer', unavailable: false },
      { label: 'Stove', unavailable: false },
      { label: 'Hot water kettle', unavailable: false },
      { label: 'Dining table', unavailable: false },
    ],
  },
  {
    category: 'Outdoor',
    items: [
      { label: 'Private patio or balcony', unavailable: false },
      { label: 'Outdoor furniture', unavailable: false },
      { label: 'Outdoor dining area', unavailable: false },
    ],
  },
  {
    category: 'Parking and facilities',
    items: [
      { label: 'Free parking on premises', unavailable: false },
      { label: 'Shared outdoor pool – available all year, open 24 hours', unavailable: false },
      { label: 'Private hot tub', unavailable: false },
    ],
  },
  {
    category: 'Services',
    items: [
      { label: 'Pets allowed', unavailable: false },
      { label: 'Self check-in', unavailable: false },
      { label: 'Building staff available 24/7', unavailable: false },
      { label: 'Long-term stays allowed', unavailable: false },
    ],
  },
];

const AmenitiesModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="What this place offers"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <header className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close amenities modal"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-800 transition-colors"
          >
            <CloseSvg />
          </button>
          <h2 className="text-lg font-bold text-gray-900">What this place offers</h2>
          <div className="w-9" />
        </header>

        {/* Scrollable Amenities Content */}
        <div className="p-8 overflow-y-auto space-y-8 flex-1">
          {ALL_AMENITIES_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">
                {cat.category}
              </h3>
              <div className="space-y-3">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <span className={`text-base ${item.unavailable ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                      {item.label}
                    </span>
                    {item.unavailable && (
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Not included
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;
