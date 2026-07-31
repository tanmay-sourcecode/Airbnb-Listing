import { useState } from 'react';
import {
  CleanlinessIcon,
  AccuracyIcon,
  CheckinIcon,
  CommunicationIcon,
  LocationIcon,
  ValueIcon,
  FiveStars,
  CATEGORY_PILLS,
  REVIEWS
} from './ListingReviewsData';

const ListingReviews = () => {
  const [activePill, setActivePill] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleShowMore = (id) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-12 border-t border-gray-200" id="reviews">
      {/* ── 1. Hero Guest Favourite Rating Header ── */}
      <div className="text-center pt-[8px] pb-[40px] mb-6">
        <div className="flex items-center justify-center gap-2">
          <img src="/assets/laurel-left.png" alt="" className="h-[110px]" />
          <div className="text-[100px] font-medium tracking-[-0.03em] leading-none text-[#222]">
            4.95
          </div>
          <img src="/assets/laurel-right.png" alt="" className="h-[110px]" />
        </div>
        <div className="text-[22px] font-medium mt-2 text-[#222] leading-[26px]">Guest favourite</div>
        <div className="text-[15px] font-normal leading-[1.35] max-w-[420px] mx-auto mt-2 text-[#222]">
          This home is a guest favourite based on ratings, reviews and reliability
        </div>
        <button type="button" className="mt-3.5 text-[14px] font-medium underline text-[#222] bg-transparent border-none cursor-pointer p-0 hover:text-gray-700">
          How reviews work
        </button>
      </div>

      {/* ── 2. Category Sub-ratings Bar (_AiEzWi) ── */}
      <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_repeat(6,_1fr)] gap-y-7 lg:gap-0 py-2.5 lg:py-2 lg:pb-8 border-gray-200 mb-6">
        {/* Overall rating bar chart */}
        <div className="px-0 lg:px-6 pb-2 lg:pb-0">
          <div className="text-[14px] font-medium text-[#222] mb-3 leading-4">Overall rating</div>
          <div className="flex flex-col gap-[8px]">
            {[
              { star: 5, pct: '95%' },
              { star: 4, pct: '5%' },
              { star: 3, pct: '0%' },
              { star: 2, pct: '0%' },
              { star: 1, pct: '0%' },
            ].map(({ star, pct }) => (
              <div key={star} className="grid grid-cols-[8px_1fr] gap-[10px] items-center">
                <span className="text-[12px] text-[#222] leading-3 font-normal w-2">{star}</span>
                <div className="h-1 bg-[#EBEBEB] rounded-sm overflow-hidden flex-1">
                  <div className="h-full bg-[#222] rounded-sm" style={{ width: pct }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cleanliness */}
        <div className="px-0 lg:px-6 py-[10px] lg:py-0 border-l-0 lg:border-l border-gray-200 flex flex-col justify-between">
          <div className="text-[14px] font-medium text-[#222] mb-3 leading-4">Cleanliness</div>
          <div className="text-[18px] font-medium text-[#222] mb-2 leading-[22px]">5.0</div>
          <div className="ico w-8 h-8 text-[#222]"><CleanlinessIcon /></div>
        </div>

        {/* Accuracy */}
        <div className="px-0 lg:px-6 py-[10px] lg:py-0 border-l-0 lg:border-l border-gray-200 flex flex-col justify-between">
          <div className="text-[14px] font-medium text-[#222] mb-3 leading-4">Accuracy</div>
          <div className="text-[18px] font-medium text-[#222] mb-2 leading-[22px]">5.0</div>
          <div className="ico w-8 h-8 text-[#222]"><AccuracyIcon /></div>
        </div>

        {/* Check-in */}
        <div className="px-0 lg:px-6 py-[10px] lg:py-0 border-l-0 lg:border-l border-gray-200 flex flex-col justify-between">
          <div className="text-[14px] font-medium text-[#222] mb-3 leading-4">Check-in</div>
          <div className="text-[18px] font-medium text-[#222] mb-2 leading-[22px]">5.0</div>
          <div className="ico w-8 h-8 text-[#222]"><CheckinIcon /></div>
        </div>

        {/* Communication */}
        <div className="px-0 lg:px-6 py-[10px] lg:py-0 border-l-0 lg:border-l border-gray-200 flex flex-col justify-between">
          <div className="text-[14px] font-medium text-[#222] mb-3 leading-4">Communication</div>
          <div className="text-[18px] font-medium text-[#222] mb-2 leading-[22px]">5.0</div>
          <div className="ico w-8 h-8 text-[#222]"><CommunicationIcon /></div>
        </div>

        {/* Location */}
        <div className="px-0 lg:px-6 py-[10px] lg:py-0 border-l-0 lg:border-l border-gray-200 flex flex-col justify-between">
          <div className="text-[14px] font-medium text-[#222] mb-3 leading-4">Location</div>
          <div className="text-[18px] font-medium text-[#222] mb-2 leading-[22px]">4.8</div>
          <div className="ico w-8 h-8 text-[#222]"><LocationIcon /></div>
        </div>

        {/* Value */}
        <div className="px-0 lg:px-6 py-[10px] lg:py-0 border-l-0 lg:border-l border-gray-200 flex flex-col justify-between">
          <div className="text-[14px] font-medium text-[#222] mb-3 leading-4">Value</div>
          <div className="text-[18px] font-medium text-[#222] mb-2 leading-[22px]">4.8</div>
          <div className="ico w-8 h-8 text-[#222]"><ValueIcon /></div>
        </div>
      </div>

      {/* ── 3. Category Pill Buttons (_rDgNVk) matching exact HTML ── */}
      <div className="flex gap-[12px] overflow-x-auto pt-1 pb-[30px] mb-8 scrollbar-none">
        {CATEGORY_PILLS.map((pill, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActivePill(activePill === pill.label ? null : pill.label)}
            className={`shrink-0 flex items-center gap-2 border rounded-[16px] pt-[13px] pb-[13px] pl-[14px] pr-[18px] text-[14px] font-medium whitespace-nowrap transition-all ${activePill === pill.label ? 'border-[#222] bg-[#222] text-white' : 'border-[#EBEBEB] bg-white text-[#222] hover:border-[#222]' }`}
          >
            <img src={pill.img} alt="" aria-hidden="true" className="w-[20px] h-[20px] object-contain block shrink-0" />
            <span>{pill.label}</span>
            <span className={`text-[14px] font-normal pl-0.5 ${activePill === pill.label ? 'text-gray-300' : 'text-[#717171]'}`}>
              {pill.count}
            </span>
          </button>
        ))}
      </div>

      {/* ── 4. Reviews Cards Track (_RRsDBp & _OxFhJw) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {REVIEWS.map((rev) => (
          <div key={rev.id} className="space-y-3">
            {/* User Header */}
            <div className="head flex items-center gap-3">
              {rev.avatarType === 'img' ? (
                <img className="w-12 h-12 rounded-full object-cover" src={rev.src} alt={rev.name} />
              ) : (
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-medium text-base"
                  style={{ background: rev.bg, color: rev.color }}
                >
                  {rev.initial}
                </div>
              )}
              <div>
                <div className="font-medium text-gray-900 text-base">{rev.name}</div>
                <div className="text-xs text-gray-500 font-normal">{rev.tenure}</div>
              </div>
            </div>

            {/* Stars & Date */}
            <div className="flex items-center gap-2 text-xs text-gray-700 font-normal">
              <FiveStars />
              <span>·</span>
              <span>{rev.date}</span>
            </div>

            {/* Comment Text */}
            <div className="text-sm text-gray-800 font-normal leading-relaxed whitespace-pre-line">
              {rev.hasShowMore && !expandedReviews[rev.id]
                ? `${rev.comment.slice(0, 160)}...`
                : rev.comment}
            </div>

            {rev.hasShowMore && (
              <button
                type="button"
                onClick={() => toggleShowMore(rev.id)}
                className="text-sm font-medium underline text-gray-900 block"
              >
                {expandedReviews[rev.id] ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Show All Reviews Button */}
      <button
        type="button"
        className="border border-[#222] bg-white rounded-[12px] py-[13px] px-[23px] text-[16px] font-medium text-[#222] transition-all duration-150 hover:bg-[#F7F7F7] active:scale-[0.98] cursor-pointer"
      >
        Show all 19 reviews
      </button>
    </section>
  );
};

export default ListingReviews;
