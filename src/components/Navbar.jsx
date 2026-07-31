import { useState, useRef, useEffect } from 'react';
import {
  AirbnbWordmark,
  GlobeSvg,
  HamburgerSvg,
  SearchBtnSvg,
  DROPDOWN_ITEMS_TOP,
} from './NavbarData';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      id="siteHeader"
      className="relative z-30 pb-2 bg-white border-b border-gray-100"
      role="banner"
    >
      <div className="max-w-[1760px] mx-auto px-6 lg:px-20 h-[88px] grid grid-cols-[1fr_auto_1fr] items-center relative">

        {/* ── Logo: exact airbnb wordmark SVG, color #FF385C ── */}
        <a
          className="logo inline-flex justify-self-start text-[#FF385C]"
          href="#"
          aria-label="Airbnb homepage"
        >
          <span>
            <AirbnbWordmark />
          </span>
        </a>

        {/* ── Search pill — centered in middle column ── */}
        <div className="justify-self-center h-12 flex items-center" role="search">
          <div className="flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer bg-white overflow-hidden">

            {/* "Anywhere" button with house image */}
            <button
              type="button"
              className="flex items-center gap-2 px-3 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            >
              <img
                src="/assets/searchbar-house.png"
                alt=""
                aria-hidden="true"
                className="w-13 h-12 px-1"
                loading="eager"
              />
              Anywhere
            </button>

            {/* divider */}
            <span className="w-px h-5 bg-gray-300 flex-shrink-0" aria-hidden="true" />

            {/* "Anytime" button */}
            <button
              type="button"
              className="px-4 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-full transition-colors whitespace-nowrap"
            >
              Anytime
            </button>

            {/* divider */}
            <span className="w-px h-5 bg-gray-300 flex-shrink-0 hidden sm:block" aria-hidden="true" />

            {/* "Add guests" button */}
            <button
              type="button"
              className="px-4 py-1 text-sm text-gray-500 font-normal hover:bg-gray-100 rounded-full transition-colors hidden sm:block whitespace-nowrap"
            >
              Add guests
            </button>

            {/* Pink search circle button */}
            <button
              type="button"
              className="m-2 w-8 h-8 bg-[#FF385C] hover:bg-[#E31C5F] rounded-full flex items-center justify-center text-white transition-colors duration-200 flex-shrink-0"
              aria-label="Search"
            >
              <SearchBtnSvg />
            </button>
          </div>
        </div>

        {/* ── Right nav (_PTMeKT) ── */}
        <nav className="justify-self-end inline-flex items-center gap-[8px]" aria-label="Site navigation">

          {/* "Become a host" link (_OubFgU) */}
          <a
            href="#"
            className="hidden md:block text-[14px] font-medium text-[#222] px-[14px] py-[12px] rounded-[22px] transition-all duration-180 hover:bg-[#F7F7F7] whitespace-nowrap"
            aria-label="Become a host on Airbnb"
          >
            Become a host
          </a>

          {/* Globe button (_CWDueY) */}
          <button
            type="button"
            className="hidden md:inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#F2F2F2] border-none text-[#222] transition-all duration-180 hover:bg-[#EBEBEB] cursor-pointer"
            aria-label="Choose a language and currency"
          >
            <span className="w-4 h-4 block">
              <GlobeSvg />
            </span>
          </button>

          {/* Hamburger menu button (_CWDueY _CDwKNg) */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              id="navbar-menu-btn"
              className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#F2F2F2] border-none text-[#222] transition-all duration-180 hover:bg-[#EBEBEB] cursor-pointer"
              aria-label="Main navigation menu"
              aria-haspopup="true"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="w-4 h-4 block">
                <HamburgerSvg />
              </span>
            </button>

            {/* Dropdown */}
            {menuOpen && (
              <div
                className="dropdown-menu"
                role="menu"
                aria-label="User menu"
              >
                <div className="py-1">
                  {DROPDOWN_ITEMS_TOP.map((item) => (
                    <button
                      key={item.label}
                      role="menuitem"
                      className={`dropdown-item ${item.bold ? 'font-semibold' : ''}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <hr className="border-gray-100" />
                <div className="py-1">
                  {DROPDOWN_ITEMS_BOTTOM.map((item) => (
                    <button
                      key={item.label}
                      role="menuitem"
                      className="dropdown-item"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
