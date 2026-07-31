import { useState } from 'react';

// Keyboard / Calendar SVG
const KeyboardIcon = () => (
  <svg viewBox="0 0 32 22" width="20" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="1" y="1" width="30" height="20" rx="3" />
    <path d="M6 7h.01M11 7h.01M16 7h.01M21 7h.01M26 7h.01M6 12h.01M26 12h.01M9 16h14" />
  </svg>
);

const ListingCalendar = () => {
  const [selectedDates, setSelectedDates] = useState({ start: 18, end: 23 });

  // October 2026 days (1 to 31)
  const octDays = Array.from({ length: 31 }, (_, i) => i + 1);

  // November 2026 days (1 to 30)
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);

  // Booked / Unavailable days matching HTML _FXEbnd / _lIMKSn classes
  const isOctDisabled = (day) => day < 18;
  const isNovDisabled = (day) => (day >= 18 && day <= 24) || day >= 29;

  const clearDates = () => {
    setSelectedDates({ start: null, end: null });
  };

  const isSelected = (day) => {
    if (!selectedDates.start || !selectedDates.end) return false;
    return day >= selectedDates.start && day <= selectedDates.end;
  };

  return (
    <div className="py-10 border-b border-gray-200">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">5 nights in Candolim</h2>
        <div className="text-sm text-gray-500 mt-1">18 Oct 2026 - 23 Oct 2026</div>
      </div>

      {/* 2 Month Calendar Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">

        {/* ── October 2026 ── */}
        <div className="">
          <div className="text-center font-semibold text-gray-900 mb-4">October 2026</div>
          <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-2">
            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-center text-sm font-medium">
            {/* 4 empty offset slots for Sun, Mon, Tue, Wed */}
            <div /><div /><div /><div />

            {octDays.map((day) => {
              const disabled = isOctDisabled(day);
              const selected = isSelected(day);
              const isStart = day === selectedDates.start;
              const isEnd = day === selectedDates.end;

              return (
                <div
                  key={day}
                  onClick={() => {
                    if (disabled) return;
                    if (!selectedDates.start || selectedDates.end) {
                      setSelectedDates({ start: day, end: null });
                    } else {
                      setSelectedDates({ start: Math.min(selectedDates.start, day), end: Math.max(selectedDates.start, day) });
                    }
                  }}
                  className={`h-10 flex items-center justify-center transition-colors duration-150 ${disabled ? '_FXEbnd text-gray-300 line-through cursor-not-allowed' : 'cursor-pointer'} ${isStart && !disabled ? 'bg-gray-900 text-white rounded-full' : ''} ${isEnd && !disabled ? 'bg-gray-900 text-white rounded-full' : ''} ${selected && !isStart && !isEnd && !disabled ? 'bg-gray-100 text-gray-900' : ''} ${!selected && !disabled ? 'hover:bg-gray-100 rounded-full text-gray-800' : ''}`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── November 2026 ── */}
        <div className="">
          <div className="text-center font-semibold text-gray-900 mb-4">November 2026</div>
          <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-2">
            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-center text-sm font-medium">
            {novDays.map((day) => {
              const disabled = isNovDisabled(day);
              return (
                <div
                  key={day}
                  className={`h-10 flex items-center justify-center transition-colors ${disabled ? '_FXEbnd text-gray-300 line-through cursor-not-allowed' : 'cursor-pointer hover:bg-gray-100 rounded-full text-gray-800'}`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Footer controls: Keyboard icon + Clear dates */}
      <div className="flex items-center justify-between pt-4">
        <span className="text-gray-800" aria-hidden="true">
          <KeyboardIcon />
        </span>
        <button
          type="button"
          onClick={clearDates}
          className="text-sm font-semibold text-gray-900 underline hover:text-gray-700"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
};

export default ListingCalendar;
