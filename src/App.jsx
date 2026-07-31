import Navbar from './components/Navbar';
import ListingHeader from './components/ListingHeader';
import HeroGallery from './components/HeroGallery';
import ListingSubNav from './components/ListingSubNav';
import ListingDetails from './components/ListingDetails';
import BookingWidget from './components/BookingWidget';
import ListingReviews from './components/ListingReviews';
import ListingLocationHost from './components/ListingLocationHost';
import ThingsToKnow from './components/ThingsToKnow';
import MoreStaysNearby from './components/MoreStaysNearby';

function App() {
  return (
    <div className="bg-white">
      {/* ── 1. Top Navbar ── */}
      <Navbar />

      {/* ── 2. Sticky Sub-Nav (appears on scroll) ── */}
      <ListingSubNav />

      {/* ── 3. Main Content Container ── */}
      <main id="main" className="max-w-[1120px] mx-auto">
        <div className="">
          {/* ── Title & Action Buttons ── */}
          <ListingHeader title="Romantic Jacuzzi 1BHK Candolim | Mirashya UG10" />

          {/* ── Hero Photo Gallery ── */}
          <HeroGallery />

          {/* ── Two-Column Details & Booking Section (_lhKJir) ── */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 mt-12">
            {/* Left Column: Details, Highlights, Sleep, Amenities */}
            <ListingDetails />

            {/* Right Column: Sticky Booking Card */}
            <BookingWidget />
          </div>
        </div>

        {/* ── Wide Sections (id="wideSections") ── */}
        <div className="" id="wideSections">
          {/* Reviews Section */}
          <ListingReviews />

          {/* Location & Host Section */}
          <ListingLocationHost />

          {/* Things to know Section */}
          <ThingsToKnow />

          {/* More Stays Nearby Section */}
          <MoreStaysNearby />
        </div>
      </main>
    </div>
  );
}

export default App;
