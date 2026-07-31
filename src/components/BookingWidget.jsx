import { useState } from 'react';

// Chevron Down SVG
const ChevronDownSvg = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="M4 10l12 12 12-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Flag SVG for Report link
const FlagSvg = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor' }}>
    <path d="m7.5011 1c.5272 0 .9591.40794.99725.92537l.00275.07463v1h5.5c.31265 0 .5435.281645.4935.581075l-.01275.056285-.96125 3.36264.96125 3.36265c.08055.2818-.0967.5625-.36775.62465l-.0554.00945-.0576.00325h-5.5c-.5272 0-.9591-.40795-.99725-.92535l-.00275-.07465v-1h-5v6h-1v-14zm1 3h-1v4h1z" />
  </svg>
);

const BookingWidget = ({ price = "₹28,499", duration = "for 5 nights" }) => {
  const [claimed, setClaimed] = useState(false);
  const [checkIn, setCheckIn] = useState("2026-10-18");
  const [checkOut, setCheckOut] = useState("2026-10-23");
  const [guestsCount, setGuestsCount] = useState(2);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  return (
    <aside className="w-full lg:w-[370px] flex-shrink-0">
      <div className="sticky top-28 space-y-6" id="bookingSticky">

        {/* ── Discount Banner ── */}
        <div className="border border-gray-200 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm bg-white">
          <div className="flex items-center gap-3">
            <img className="w-8 h-8 object-contain" src="/assets/discount.svg" alt="" aria-hidden="true" />
            <div className="text-xs text-gray-800 leading-snug">
              {claimed ? (
                <span className="font-semibold text-emerald-600">10% discount applied!</span>
              ) : (
                <>
                  Get 10% off your next stay.<br />
                  <a href="#" className="underline font-semibold">Terms apply</a>
                </>
              )}
            </div>
          </div>
          <button
            type="button"
            className="text-xs font-semibold px-3 py-2 border border-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setClaimed(!claimed)}
          >
            {claimed ? 'Claimed' : 'Claim'}
          </button>
        </div>

        {/* ── Main Booking Card ── */}
        <div className="border border-gray-200 rounded-3xl p-6 shadow-xl bg-white space-y-6">
          {/* Price Heading */}
          <div className="flex items-baseline gap-1">
            <span className="text-xl underline font-semibold text-gray-900">{price}</span>
            <span className="text-base text-gray-600 font-normal">{duration}</span>
          </div>

          {/* Booking Inputs Box */}
          <div className="border border-gray-400 rounded-xl overflow-hidden">
            {/* Check-in / Checkout Row */}
            <div className="grid grid-cols-2 border-b border-gray-400 divide-x divide-gray-400">
              <div className="p-3">
                <div className="text-[10px] font-semibold tracking-wider text-gray-800 uppercase">CHECK-IN</div>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="text-sm font-normal text-gray-800 bg-transparent outline-none w-full cursor-pointer"
                />
              </div>
              <div className="p-3">
                <div className="text-[10px] font-semibold tracking-wider text-gray-800 uppercase">CHECKOUT</div>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="text-sm font-normal text-gray-800 bg-transparent outline-none w-full cursor-pointer"
                />
              </div>
            </div>

            {/* Guests Selector */}
            <div
              className="p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 relative"
              onClick={() => setIsGuestOpen(!isGuestOpen)}
            >
              <div>
                <div className="text-[10px] font-semibold tracking-wider text-gray-800 uppercase">GUESTS</div>
                <div className="text-sm font-normal text-gray-800">{guestsCount} guests</div>
              </div>
              <span className="text-gray-800">
                <ChevronDownSvg />
              </span>

              {/* Guest counter popover */}
              {isGuestOpen && (
                <div
                  className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">Guests</span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium hover:border-gray-900"
                        onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                      >
                        -
                      </button>
                      <span className="text-sm font-semibold">{guestsCount}</span>
                      <button
                        type="button"
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium hover:border-gray-900"
                        onClick={() => setGuestsCount(Math.min(3, guestsCount + 1))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Cancellation Info */}
          <div className="text-xs text-gray-600 text-center">
            Free cancellation before <b>17 October</b>
          </div>

          {/* Reserve Button */}
          <button
            type="button"
            id="reserveBtn"
            className="w-full bg-[#d61f40] hover:bg-[#E31C5F] text-white font-semibold text-base py-3.5 rounded-xl shadow transition-colors"
          >
            Reserve
          </button>

          {/* Subtext */}
          <div className="text-xs text-gray-500 text-center font-normal">
            You won't be charged yet
          </div>
        </div>

        {/* ── Report Link ── */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 hover:text-gray-900 underline">
          <span className="ico text-gray-500"><FlagSvg /></span>
          <a href="#">Report this listing</a>
        </div>

      </div>
    </aside>
  );
};

export default BookingWidget;
