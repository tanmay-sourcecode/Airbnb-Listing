import { useState } from 'react';
import ListingCalendar from './ListingCalendar';
import AmenitiesModal from './AmenitiesModal';
import { OutdoorIcon, CoolIcon, CheckinIcon, AMENITIES } from './ListingDetailsData';
const ListingDetails = () => {
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  return (
    <div className="w-full pr-0 lg:pr-12" id="contentLeft">
      {/* ── Heading section ── */}
      <div className="pb-[24px]">
        <h2 className="text-[22px] leading-[26px] font-medium text-gray-900">
          Entire serviced apartment in Candolim, India
        </h2>
        <div className="text-[16px] text-gray-700 mt-[6px] font-normal">
          3 guests · 1 bedroom · 1 bed · 1 bathroom
        </div>
      </div>

      {/* ── _NIsTQW: Guest Favourite Banner (exact reference HTML) ── */}
      <div className="border border-gray-200 rounded-[16px] flex items-center gap-[22px] p-[16px_28px] mt-[8px] mb-6 bg-white shadow-sm">

        {/* _pHrBSW: laurel left | "Guest favourite" | laurel right */}
        <div className="flex items-center gap-[4px] shrink-0 text-[#222]">
          {/* Left laurel — exact SVG from reference */}
          <span className="" style={{ display: 'block', height: '35px', width: 'auto' }}>
            <svg style={{ display: 'block', height: '100%', width: 'auto' }} viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.4895 25.417L14.8276 24.4547L16.5303 23.6492L17.1923 24.6116L16.3409 25.0143L17.1923 24.6116C18.6638 26.751 17.9509 29.3868 15.5999 30.4989C14.8548 30.8513 14.0005 31.0196 13.1221 30.987L12.8044 30.9752L12.7297 29.2305L13.0474 29.2423C13.5744 29.2618 14.0871 29.1608 14.5341 28.9494C15.9447 28.2821 16.3725 26.7007 15.4895 25.417Z" fill="#222222" />
              <path fillRule="evenodd" clipRule="evenodd" d="M8.32441 10.235C10.0819 8.96204 10.9247 7.4878 10.853 5.81232C10.7813 4.13685 9.80929 2.59524 7.93708 1.18749C6.17964 2.46049 5.33678 3.93473 5.40851 5.6102C5.48024 7.28568 6.45221 8.82729 8.32441 10.235Z" fill="#F7F7F7" />
              <path fillRule="evenodd" clipRule="evenodd" d="M7.19425 0.489275C7.55718 0.226387 8.10753 0.246818 8.49416 0.537533C10.5385 2.07473 11.7071 3.84975 11.7923 5.84026C11.8775 7.83076 10.8574 9.52453 8.93841 10.9146C8.57548 11.1775 8.02513 11.157 7.6385 10.8663C5.59415 9.32914 4.4256 7.55411 4.34039 5.56361C4.25517 3.57311 5.27521 1.87933 7.19425 0.489275ZM7.92362 2.3684C6.77985 3.38355 6.29788 4.47199 6.3478 5.63813C6.39772 6.80428 6.97457 7.93203 8.20904 9.03547C9.35281 8.02032 9.83478 6.93187 9.78486 5.76573C9.73493 4.59959 9.15809 3.47184 7.92362 2.3684Z" fill="#222222" />
              <path fillRule="evenodd" clipRule="evenodd" d="M15.6806 24.0529C14.1314 22.353 12.4326 21.4688 10.5842 21.4001C8.73575 21.3315 7.10737 22.0923 5.69905 23.6824C7.24822 25.3823 8.94702 26.2666 10.7955 26.3352C12.6439 26.4038 14.2723 25.6431 15.6806 24.0529Z" fill="#F7F7F7" />
              <path fillRule="evenodd" clipRule="evenodd" d="M4.90529 24.1787C4.60807 23.8526 4.58911 23.4097 4.8593 23.1046C6.38985 21.3765 8.27538 20.4331 10.521 20.5164C12.7666 20.5998 14.7391 21.6864 16.4227 23.5339C16.7199 23.86 16.7389 24.303 16.4687 24.608C14.9381 26.3361 13.0526 27.2795 10.807 27.1962C8.56134 27.1128 6.5889 26.0262 4.90529 24.1787ZM6.98781 23.7198C8.22307 24.8808 9.46778 25.4045 10.7323 25.4515C11.9968 25.4984 13.2005 25.0656 14.3402 23.9928C13.1049 22.8318 11.8602 22.3081 10.5957 22.2611C9.3312 22.2142 8.12744 22.6471 6.98781 23.7198Z" fill="#222222" />
              <path fillRule="evenodd" clipRule="evenodd" d="M10.6766 20.7043C10.2137 18.5957 9.16392 17.0928 7.52727 16.1956C5.89062 15.2984 3.99442 15.1864 1.83867 15.8596C2.30157 17.9683 3.35135 19.4712 4.988 20.3684C6.62465 21.2656 8.52085 21.3775 10.6766 20.7043Z" fill="#F7F7F7" />
              <path fillRule="evenodd" clipRule="evenodd" d="M0.791956 15.9443C0.703053 15.5393 0.94431 15.1569 1.37329 15.023C3.7337 14.2859 5.9714 14.3695 7.95247 15.4554C9.92449 16.5364 11.1013 18.3139 11.6022 20.5956C11.6911 21.0006 11.4499 21.3829 11.0209 21.5169C8.66048 22.254 6.42277 22.1704 4.4417 21.0844C2.46969 20.0034 1.29285 18.226 0.791956 15.9443ZM2.95349 16.4656C3.43375 17.9951 4.27991 19.007 5.41321 19.6282C6.5306 20.2407 7.84423 20.4286 9.44069 20.0743C8.96043 18.5448 8.11427 17.5329 6.98097 16.9116C5.86358 16.2991 4.54995 16.1113 2.95349 16.4656Z" fill="#222222" />
              <path fillRule="evenodd" clipRule="evenodd" d="M7.90911 15.6267C8.65652 13.6743 8.53705 11.9555 7.55072 10.4702C6.56438 8.98484 4.90844 8.03014 2.58291 7.60605C1.8355 9.55846 1.95497 11.2773 2.9413 12.7626C3.92764 14.2479 5.58357 15.2026 7.90911 15.6267Z" fill="#F7F7F7" />
              <path fillRule="evenodd" clipRule="evenodd" d="M1.66037 7.28295C1.80927 6.89397 2.26578 6.67525 2.74598 6.76282C5.29848 7.22831 7.26368 8.31371 8.44396 10.0911C9.61955 11.8614 9.70866 13.854 8.89805 15.9715C8.74915 16.3605 8.29264 16.5792 7.81244 16.4916C5.25994 16.0261 3.29474 14.9407 2.11446 13.1634C0.938866 11.393 0.849755 9.40048 1.66037 7.28295ZM3.3385 8.6613C2.94038 10.1267 3.14588 11.3465 3.83454 12.3835C4.51397 13.4067 5.60091 14.1584 7.21992 14.5931C7.61804 13.1278 7.41254 11.9079 6.72388 10.8709C6.04445 9.84774 4.95751 9.09607 3.3385 8.6613Z" fill="#222222" />
            </svg>
          </span>

          {/* "Guest favourite" text */}
          <span className="text-[15px] font-medium leading-[1.15] text-center text-[#222]">
            Guest<br />favourite
          </span>

          {/* Right laurel — mirrored (transform scaleX -1) */}
          <span className="" style={{ display: 'block', height: '35px', width: 'auto', transform: 'scaleX(-1)' }}>
            <svg style={{ display: 'block', height: '100%', width: 'auto' }} viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.4895 25.417L14.8276 24.4547L16.5303 23.6492L17.1923 24.6116L16.3409 25.0143L17.1923 24.6116C18.6638 26.751 17.9509 29.3868 15.5999 30.4989C14.8548 30.8513 14.0005 31.0196 13.1221 30.987L12.8044 30.9752L12.7297 29.2305L13.0474 29.2423C13.5744 29.2618 14.0871 29.1608 14.5341 28.9494C15.9447 28.2821 16.3725 26.7007 15.4895 25.417Z" fill="#222222" />
              <path fillRule="evenodd" clipRule="evenodd" d="M8.32441 10.235C10.0819 8.96204 10.9247 7.4878 10.853 5.81232C10.7813 4.13685 9.80929 2.59524 7.93708 1.18749C6.17964 2.46049 5.33678 3.93473 5.40851 5.6102C5.48024 7.28568 6.45221 8.82729 8.32441 10.235Z" fill="#F7F7F7" />
              <path fillRule="evenodd" clipRule="evenodd" d="M7.19425 0.489275C7.55718 0.226387 8.10753 0.246818 8.49416 0.537533C10.5385 2.07473 11.7071 3.84975 11.7923 5.84026C11.8775 7.83076 10.8574 9.52453 8.93841 10.9146C8.57548 11.1775 8.02513 11.157 7.6385 10.8663C5.59415 9.32914 4.4256 7.55411 4.34039 5.56361C4.25517 3.57311 5.27521 1.87933 7.19425 0.489275ZM7.92362 2.3684C6.77985 3.38355 6.29788 4.47199 6.3478 5.63813C6.39772 6.80428 6.97457 7.93203 8.20904 9.03547C9.35281 8.02032 9.83478 6.93187 9.78486 5.76573C9.73493 4.59959 9.15809 3.47184 7.92362 2.3684Z" fill="#222222" />
              <path fillRule="evenodd" clipRule="evenodd" d="M15.6806 24.0529C14.1314 22.353 12.4326 21.4688 10.5842 21.4001C8.73575 21.3315 7.10737 22.0923 5.69905 23.6824C7.24822 25.3823 8.94702 26.2666 10.7955 26.3352C12.6439 26.4038 14.2723 25.6431 15.6806 24.0529Z" fill="#F7F7F7" />
              <path fillRule="evenodd" clipRule="evenodd" d="M4.90529 24.1787C4.60807 23.8526 4.58911 23.4097 4.8593 23.1046C6.38985 21.3765 8.27538 20.4331 10.521 20.5164C12.7666 20.5998 14.7391 21.6864 16.4227 23.5339C16.7199 23.86 16.7389 24.303 16.4687 24.608C14.9381 26.3361 13.0526 27.2795 10.807 27.1962C8.56134 27.1128 6.5889 26.0262 4.90529 24.1787ZM6.98781 23.7198C8.22307 24.8808 9.46778 25.4045 10.7323 25.4515C11.9968 25.4984 13.2005 25.0656 14.3402 23.9928C13.1049 22.8318 11.8602 22.3081 10.5957 22.2611C9.3312 22.2142 8.12744 22.6471 6.98781 23.7198Z" fill="#222222" />
              <path fillRule="evenodd" clipRule="evenodd" d="M10.6766 20.7043C10.2137 18.5957 9.16392 17.0928 7.52727 16.1956C5.89062 15.2984 3.99442 15.1864 1.83867 15.8596C2.30157 17.9683 3.35135 19.4712 4.988 20.3684C6.62465 21.2656 8.52085 21.3775 10.6766 20.7043Z" fill="#F7F7F7" />
              <path fillRule="evenodd" clipRule="evenodd" d="M0.791956 15.9443C0.703053 15.5393 0.94431 15.1569 1.37329 15.023C3.7337 14.2859 5.9714 14.3695 7.95247 15.4554C9.92449 16.5364 11.1013 18.3139 11.6022 20.5956C11.6911 21.0006 11.4499 21.3829 11.0209 21.5169C8.66048 22.254 6.42277 22.1704 4.4417 21.0844C2.46969 20.0034 1.29285 18.226 0.791956 15.9443ZM2.95349 16.4656C3.43375 17.9951 4.27991 19.007 5.41321 19.6282C6.5306 20.2407 7.84423 20.4286 9.44069 20.0743C8.96043 18.5448 8.11427 17.5329 6.98097 16.9116C5.86358 16.2991 4.54995 16.1113 2.95349 16.4656Z" fill="#222222" />
              <path fillRule="evenodd" clipRule="evenodd" d="M7.90911 15.6267C8.65652 13.6743 8.53705 11.9555 7.55072 10.4702C6.56438 8.98484 4.90844 8.03014 2.58291 7.60605C1.8355 9.55846 1.95497 11.2773 2.9413 12.7626C3.92764 14.2479 5.58357 15.2026 7.90911 15.6267Z" fill="#F7F7F7" />
              <path fillRule="evenodd" clipRule="evenodd" d="M1.66037 7.28295C1.80927 6.89397 2.26578 6.67525 2.74598 6.76282C5.29848 7.22831 7.26368 8.31371 8.44396 10.0911C9.61955 11.8614 9.70866 13.854 8.89805 15.9715C8.74915 16.3605 8.29264 16.5792 7.81244 16.4916C5.25994 16.0261 3.29474 14.9407 2.11446 13.1634C0.938866 11.393 0.849755 9.40048 1.66037 7.28295ZM3.3385 8.6613C2.94038 10.1267 3.14588 11.3465 3.83454 12.3835C4.51397 13.4067 5.60091 14.1584 7.21992 14.5931C7.61804 13.1278 7.41254 11.9079 6.72388 10.8709C6.04445 9.84774 4.95751 9.09607 3.3385 8.6613Z" fill="#222222" />
            </svg>
          </span>
        </div>

        {/* _XofkZZ: subtitle text */}
        <div className="text-sm items-center text-black text-sans font-sans">
          One of the most loved homes on Airbnb, according to guests
        </div>

        {/* _HxhaNo: rating strip — score + stars | divider | reviews count */}
        <div className="flex items-center gap-[22px] shrink-0">
          {/* Score + Stars */}
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900 leading-none">4.95</div>
            <div className="flex items-center gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '10px', width: '10px', fill: 'currentColor' }}>
                  <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
                </svg>
              ))}
            </div>
          </div>

          {/* _ZOPyus: vertical divider */}
          <div className="w-[1px] h-[34px] bg-gray-200" />

          {/* Reviews count */}
          <div className="text-center">
            <div className="text-xl font-semibold text-gray-900 leading-none">19</div>
            <div className="text-xs text-gray-900 font-normal mt-1">Reviews</div>
          </div>
        </div>

      </div>

      {/* ── Host Row ── */}
      <div className="flex border-b-2 items-center gap-[16px] py-[26px]">
        <img
          className="w-[46px] h-[46px] rounded-full object-cover shrink-0"
          src="/assets/host.jpeg"
          alt="Mirashya Homes"
        />
        <div>
          <div className="text-[16px] font-medium text-[#222]">Hosted by Mirashya Homes</div>
          <div className="meta text-[14px] text-[#717171] font-normal mt-[2px]">2 years hosting</div>
        </div>
      </div>

      {/* ── Highlights ── */}
      <div className="pt-[30px] pb-[32px] border-b border-gray-200 flex flex-col gap-[24px]">
        <div className="flex gap-[24px] items-start">
          <div className="w-[24px] h-[24px] shrink-0 text-[#222]"><OutdoorIcon /></div>
          <div className="">
            <div className="text-[16px] font-medium text-gray-900 mb-[4px]">Outdoor entertainment</div>
            <div className="text-sm text-gray-500 font-normal">The pool and alfresco dining are great for summer trips.</div>
          </div>
        </div>

        <div className="flex gap-[24px] items-start">
          <div className="w-[24px] h-[24px] shrink-0 text-[#222]"><CoolIcon /></div>
          <div className="">
            <div className="text-[16px] font-medium text-gray-900 mb-[4px]">Designed for staying cool</div>
            <div className="text-sm text-gray-500 font-normal">Beat the heat with the A/C and ceiling fan.</div>
          </div>
        </div>

        <div className="flex gap-[24px] items-start">
          <div className="w-[24px] h-[24px] shrink-0 text-[#222]"><CheckinIcon /></div>
          <div className="">
            <div className="text-[16px] font-medium text-gray-900 mb-[4px]">Self check-in</div>
            <div className="text-sm text-gray-500 font-normal">You can check in with the building staff.</div>
          </div>
        </div>
      </div>

      {/* ── Description ── */}
      <div className="py-0 pt-[26px] pb-[32px] border-t border-gray-200">
        {/* Translation disclaimer */}
        <div className="flex items-center gap-[10px] bg-[#F7F7F7] rounded-[12px] p-[16px_18px] text-[14px] text-[#222] mb-[24px]">
          <span>
            Some info has been automatically translated. <a href="#" className="underline font-medium hover:text-gray-700">Show original</a>
          </span>
        </div>

        {/* Description text with optional collapse mask */}
        <p
          id="descText"
          className="text-[16px] text-[#222] font-normal leading-relaxed"
          style={
            isDescExpanded
              ? {}
              : {
                  maxHeight: '6.2em',
                  overflow: 'hidden',
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 62%, transparent)',
                  maskImage: 'linear-gradient(to bottom, #000 62%, transparent)',
                }
          }
        >
          🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴
        </p>

        <button
          type="button"
          id="descMore"
          onClick={() => setIsDescExpanded(!isDescExpanded)}
          className="bg-none border-none p-0 mt-[14px] text-[16px] font-medium text-[#222] underline underline-offset-[3px] inline-flex items-center gap-[6px] cursor-pointer"
        >
          <span>{isDescExpanded ? 'Show less' : 'Show more'}</span>
          <span className={`w-[14px] h-[14px] transition-transform duration-200 ${isDescExpanded ? 'rotate-180' : ''}`}>
            <svg
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}
            >
              <path
                fillRule="evenodd"
                d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* ── Where you'll sleep ── */}
      <div className="py-[32px] border-t border-gray-200">
        <h2 className="text-[22px] leading-[26px] font-medium mb-[24px] text-[#222]">Where you'll sleep</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <img src="/assets/photo4.jpeg" alt="Bedroom" className="w-full aspect-[3/2] object-cover rounded-[8px] border border-gray-200 block" />
            <div className="text-[15px] font-medium text-[#222] mt-[14px] leading-tight">Bedroom</div>
            <div className="text-[14px] text-[#717171] font-normal mt-[2px] leading-snug">1 double bed</div>
          </div>
          <div className="">
            <img src="/assets/living-room.jpeg" alt="Living room" className="w-full aspect-[3/2] object-cover rounded-[8px] border border-gray-200 block" />
            <div className="text-[15px] font-medium text-[#222] mt-[14px] leading-tight">Living room</div>
            <div className="text-[14px] text-[#717171] font-normal mt-[2px] leading-snug">1 sofa</div>
          </div>
        </div>
      </div>

      {/* ── What this place offers ── */}
      <div className="py-[32px] border-t border-gray-200" id="amenities">
        <h2 className="text-[22px] leading-[26px] font-medium mb-[24px] text-[#222]">What this place offers</h2>
        <div className="grid grid-cols-2 gap-x-[8px] gap-y-[16px] mb-[24px]">
          {AMENITIES.map((amenity, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-[16px] py-[4px] ${ amenity.unavailable ? '_LJqhqA line-through text-gray-400 opacity-60' : 'text-gray-800' }`}
            >
              <span className="ico w-6 h-6 shrink-0 text-[#222]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
                  <path d={amenity.icon} />
                </svg>
              </span>
              <span className="label text-[16px] font-normal text-[#222]">{amenity.label}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          id="showAmen"
          onClick={() => setIsAmenitiesOpen(true)}
          className="mt-8 border border-gray-900 rounded-xl px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors"
        >
          Show all 50 amenities
        </button>
      </div>

      {/* ── 5 nights in Candolim Calendar Section ── */}
      <ListingCalendar />

      {/* ── Amenities Popup Modal ── */}
      <AmenitiesModal
        isOpen={isAmenitiesOpen}
        onClose={() => setIsAmenitiesOpen(false)}
      />
    </div>
  );
};

export default ListingDetails;
