// SVGs for Map & Host
const MapPinIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '48px', width: '48px', fill: '#FF385C' }}>
    <path d="M16 1C9.92 1 5 5.92 5 12c0 8.5 11 19 11 19s11-10.5 11-19c0-6.08-4.92-11-11-11zm0 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
  </svg>
);

const VerifiedBadgeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '14px', width: '14px', fill: '#ffffff' }}>
    <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z" />
  </svg>
);

const ShieldProtectionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm-1 3a22.2 22.2 0 0 1-9.65 3.15L5 6.97V17.5c0 6.56 4.35 11 10 11.46zm2 0v25.16c5.65-.47 10-4.9 10-11.46V6.97l-.35-.02A22.2 22.2 0 0 1 17 3.8z" />
  </svg>
);

const CakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z" />
  </svg>
);

const SchoolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="m31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z" />
  </svg>
);

const CO_HOSTS = [
  { type: 'img', name: 'Sharath', src: '/assets/co1.jpg' },
  { type: 'img', name: 'Aman Dev Pahwa', src: '/assets/co2.jpg' },
  { type: 'img', name: 'Maria Karen Priyanka', src: '/assets/co3.jpg' },
  { type: 'img', name: 'Simran', src: '/assets/rev5.jpeg' },
  { type: 'img', name: 'Pallavi', src: '/assets/rev1.jpeg' },
  { type: 'img', name: 'Sanyukta', src: '/assets/rev2.jpeg' },
  { type: 'text', name: 'Shruti', initial: 'S', bg: 'rgb(253, 231, 239)', color: 'rgb(212, 53, 110)' },
  { type: 'text', name: 'Amisha', initial: 'A', bg: 'rgb(231, 240, 253)', color: 'rgb(58, 110, 204)' },
];

const ListingLocationHost = () => {
  return (
    <div className="w-full">
      {/* ── Location Section ── */}
      <section className="py-[48px] border-t border-gray-200" id="location">
        <h2 className="text-[22px] leading-[26px] font-medium mb-[24px] text-[#222]">Where you'll be</h2>
        <div className="text-[16px] text-[#222] font-normal mb-[24px]">Candolim, Goa, India</div>

        {/* Map Container */}
        <div className="relative rounded-[12px] overflow-hidden h-[480px] bg-[#e8eef0] w-full flex items-center justify-center border border-gray-200">
          <div className="absolute inset-0 bg-[#e5e3df] opacity-80 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Map Pin */}
          <div className="relative z-10 flex flex-col items-center animate-bounce">
            <MapPinIcon />
          </div>

          {/* Map Controls */}
          <div className="absolute bottom-6 right-6 bg-white border border-gray-300 rounded-xl shadow-md flex flex-col divide-y divide-gray-200 overflow-hidden z-10">
            <button aria-label="Zoom in" className="p-3 hover:bg-gray-100 font-semibold text-gray-800 text-base">
              +
            </button>
            <button aria-label="Zoom out" className="p-3 hover:bg-gray-100 font-semibold text-gray-800 text-base">
              −
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-800 font-normal mt-4">
          Exact location will be provided after booking.
        </div>

        <div className="text-sm text-gray-600 max-w-3xl leading-relaxed mt-6">
          <div className="font-medium text-gray-900 mb-1">Neighbourhood highlights</div>
          <div className="text-gray-700 font-normal">
            Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
          </div>
        </div>
      </section>

      {/* ── Meet Your Host Section ── */}
      <section className="py-[48px] border-t border-gray-200">
        <h2 className="text-[22px] leading-[26px] font-medium mb-[24px] text-[#222]">Meet your host</h2>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-[48px] items-start">
          {/* ── Left Column: Host Profile Badge Card (_jdcHSj) & Highlights (_CTUlZl) ── */}
          <div className="w-full flex-shrink-0">
            
            {/* ── Exact Airbnb _jdcHSj Card (Grid based columns, shadow, borders) ── */}
            <div className="border border-gray-200/80 rounded-[20px] shadow-[0_6px_20px_rgba(0,0,0,0.12)] grid grid-cols-[1fr_100px] items-center p-[30px_24px] bg-white w-full">
              
              {/* Left Half: Avatar, Host Name & Subtitle (_FtSmek) */}
              <div className="text-center">
                <div className="relative w-[88px] h-[88px] mx-auto mb-[12px]">
                  <img
                    src="/assets/host.jpeg"
                    alt="Mirashya Homes"
                    className="w-full h-full rounded-full object-cover"
                  />
                  <span className="absolute right-0 bottom-[4px] w-[28px] h-[28px] rounded-full bg-[#FF385C] flex items-center justify-center border-2 border-white">
                    <VerifiedBadgeIcon />
                  </span>
                </div>
                <div className="text-[26px] font-medium text-[#222] leading-[30px]">Mirashya Homes</div>
                <div className="text-[13px] text-[#717171] mt-[4px]">Host</div>
              </div>

              {/* Right Half: 3 Stacked Stat Rows separated by dividers (_MgwXXd) */}
              <div className="border-l border-gray-200 pl-[20px] flex flex-col justify-between py-[2px] h-full">
                <div className="py-[10px] first:pt-0">
                  <div className="text-[20px] font-bold text-[#222] leading-none">1,463</div>
                  <div className="text-[12px] text-[#717171] font-normal mt-[2px]">Reviews</div>
                </div>

                <div className="py-[10px] border-t border-gray-200">
                  <div className="text-[20px] font-bold text-[#222] leading-none">4.68★</div>
                  <div className="text-[12px] text-[#717171] font-normal mt-[2px]">Rating</div>
                </div>

                <div className="py-[10px] border-t border-gray-200">
                  <div className="text-[20px] font-bold text-[#222] leading-none">2</div>
                  <div className="text-[12px] text-[#717171] font-normal mt-[2px]">Years hosting</div>
                </div>
              </div>

            </div>

            {/* Host Highlights List (_CTUlZl) */}
            <div className="mt-[22px] flex flex-col gap-[14px] px-2">
              <div className="flex items-center gap-[14px] text-[15px] text-[#222]">
                <span className="ico w-6 h-6 text-[#222] shrink-0"><CakeIcon /></span>
                <span>Born in the 80s</span>
              </div>
              <div className="flex items-center gap-[14px] text-[15px] text-[#222]">
                <span className="ico w-6 h-6 text-[#222] shrink-0"><SchoolIcon /></span>
                <span>Where I went to school: NICMAR GOA</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Co-Hosts (_eYdTlY), Details (_gOWKSk) & Protection Note (_ZOpPkY) ── */}
          <div className="w-full space-y-8">
            {/* Co-Hosts Section */}
            <div>
              <div className="text-[18px] font-medium mb-[16px] text-[#222]">Co-Hosts</div>
              <div className="grid grid-cols-3 gap-x-[8px] gap-y-[16px] mb-[30px]">
                {CO_HOSTS.map((co, idx) => (
                  <div key={idx} className="flex items-center gap-[10px] text-[14px] text-[#222]">
                    {co.type === 'img' ? (
                      <img src={co.src} alt={co.name} className="w-[34px] h-[34px] rounded-full object-cover shrink-0" />
                    ) : (
                      <div
                        className="w-[34px] h-[34px] rounded-full shrink-0 flex items-center justify-center text-[13px] font-medium"
                        style={{ background: co.bg, color: co.color }}
                      >
                        {co.initial}
                      </div>
                    )}
                    <span className="text-sm font-normal text-gray-900 leading-tight">{co.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Host details */}
            <div className="pt-6 border-t border-gray-200">
              <div className="text-[18px] font-medium mb-[16px] text-[#222]">Host details</div>
              <div className="text-[15px] leading-[1.6] text-[#222] mb-6">
                Response rate: 100%<br />
                Responds within an hour
              </div>

              <button
                type="button"
                className="bg-gray-100 hover:bg-gray-200 text-black rounded-[8px] px-[24px] py-[14px] text-[15px] font-medium mt-[18px] border-none cursor-pointer"
              >
                Message host
              </button>

              {/* Payment protection note */}
              <div className="flex gap-[10px] items-start text-[12px] text-[#717171] mt-[30px] pt-[24px] border-t border-gray-200 max-w-[400px]">
                <span className="ico w-6 h-6 text-[#222] shrink-0"><ShieldProtectionIcon /></span>
                <span>To help protect your payment, always use Airbnb to send money and communicate with hosts.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListingLocationHost;
