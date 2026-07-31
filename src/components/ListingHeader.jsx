import { useState } from 'react';

// SVG Icons from HTML
const ShareIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none" />
  </svg>
);

const HeartIcon = ({ saved }) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: saved ? '#FF385C' : 'none', stroke: saved ? '#FF385C' : 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '14px', width: '14px', fill: 'currentColor' }}>
    <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
  </svg>
);

const ListingHeader = ({ title = "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10" }) => {
  const [saved, setSaved] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section className="flex flex-col pt-8 pb-1" id="photos">
      {/* Listing Title */}
      <div className="flex flex-row sm:flex-row sm:items-center justify-between text-2xl m-0 p-0 md:text-[26px] font-semibold text-gray-900 tracking-tight leading-snug">
        {title}
        <div className="gap-4 text-sm">
        
        

        {/* Share & Save action buttons */}
        <div className="flex items-center">
          <button
            type="button"
            id="shareBtn"
            onClick={handleShare}
            className="flex items-center gap-2 tracking-normal text-sm font-medium text-gray-800 hover:bg-gray-100 px-2 py-2 rounded-lg transition-colors underline-offset-4 hover:underline"
          >
            <span className=""><ShareIcon /></span>
            <span className="underline">Share</span>
          </button>

          <button
            type="button"
            id="saveBtn"
            onClick={() => setSaved((prev) => !prev)}
            className="flex items-center gap-2 tracking-normal text-sm font-medium text-gray-800 hover:bg-gray-100 px-2 py-2 rounded-lg transition-colors underline-offset-4 hover:underline"
          >
            <span className=""><HeartIcon saved={saved} /></span>
            <span className="underline">{saved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
      </div>

      {/* Sub-header row: Rating summary + Location + Share & Save buttons */}
      
    </section>
  );
};

export default ListingHeader;
