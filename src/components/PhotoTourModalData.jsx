// ── Back chevron SVG (exact from reference HTML)
export const BackSvg = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Share SVG
export const ShareSvg = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none" />
  </svg>
);

// ── Heart SVG
export const HeartSvg = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
  </svg>
);

// ── Photo tour category data matching reference HTML layout & user image
export const TOUR_CATEGORIES = [
  {
    id: 'living1',
    label: 'Living room 1',
    navImg: '/assets/living1-main.jpeg',
    amenities: 'Sofa · Air conditioning · Ceiling fan · TV',
    blocks: [
      { type: 'full', src: '/assets/living1-main.jpeg', alt: 'Living room 1 main view' },
      {
        type: 'pair',
        items: [
          { src: '/assets/living1-b.jpeg', alt: 'Living room 1 TV area' },
          { src: '/assets/living1-c.jpeg', alt: 'Living room 1 seating angle' }
        ]
      }
    ]
  },
  {
    id: 'living2',
    label: 'Living room 2',
    navImg: '/assets/living2-main.jpeg',
    amenities: 'Ceiling fan · Hot tub',
    blocks: [
      { type: 'full', src: '/assets/living2-main.jpeg', alt: 'Living room 2 seating & hot tub' },
      {
        type: 'pair',
        items: [
          { src: '/assets/photo3.jpeg', alt: 'Hot tub closeup view' },
          { src: '/assets/photo2.jpeg', alt: 'Living room 2 overview angle' }
        ]
      },
      { type: 'full', src: '/assets/photo1.jpeg', alt: 'Living room 2 terrace view' }
    ]
  },
  {
    id: 'kitchen',
    label: 'Full kitchen',
    navImg: '/assets/kitchen-main.jpeg',
    amenities: 'Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery',
    blocks: [
      { type: 'full', src: '/assets/kitchen-main.jpeg', alt: 'Full kitchen main view' },
      {
        type: 'pair',
        items: [
          { src: '/assets/stay3.jpeg', alt: 'Kitchen counter & appliances' },
          { src: '/assets/kitchen-main.jpeg', alt: 'Kitchen cabinets view' }
        ]
      }
    ]
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    navImg: '/assets/bedroom-main.jpeg',
    amenities: 'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi',
    blocks: [
      { type: 'full', src: '/assets/bedroom-main.jpeg', alt: 'Master Bedroom main view' },
      {
        type: 'pair',
        items: [
          { src: '/assets/photo5.jpeg', alt: 'Bedroom balcony view' },
          { src: '/assets/photo4.jpeg', alt: 'Bedroom wardrobe & vanity' }
        ]
      }
    ]
  },
  {
    id: 'bathroom',
    label: 'Full bathroom',
    navImg: '/assets/bathroom-main.jpeg',
    amenities: 'Hairdryer · Hot water · Shampoo · Shower gel',
    blocks: [
      { type: 'full', src: '/assets/bathroom-main.jpeg', alt: 'Full bathroom with shower' }
    ]
  },
  {
    id: 'gym',
    label: 'Gym',
    navImg: '/assets/gym-main.jpeg',
    amenities: 'Air conditioning · Gym · Exercise equipment · Ceiling fan',
    blocks: [
      { type: 'full', src: '/assets/gym-main.jpeg', alt: 'Fitness Gym' }
    ]
  },
  {
    id: 'exterior',
    label: 'Exterior',
    navImg: '/assets/exterior-main.jpeg',
    amenities: '',
    blocks: [
      { type: 'full', src: '/assets/exterior-main.jpeg', alt: 'Property Exterior' },
      {
        type: 'pair',
        items: [
          { src: '/assets/stay2.jpeg', alt: 'Building facade' },
          { src: '/assets/stay5.jpeg', alt: 'Surrounding gardens' }
        ]
      }
    ]
  },
  {
    id: 'pool',
    label: 'Pool',
    navImg: '/assets/pool-main.jpeg',
    amenities: 'Pool',
    blocks: [
      { type: 'full', src: '/assets/pool-main.jpeg', alt: 'Shared Swimming Pool' },
      {
        type: 'pair',
        items: [
          { src: '/assets/stay1.jpeg', alt: 'Poolside sunbeds' },
          { src: '/assets/pool-main.jpeg', alt: 'Pool deck view' }
        ]
      }
    ]
  },
  {
    id: 'additional',
    label: 'Additional photos',
    navImg: '/assets/photo1.jpeg',
    amenities: '',
    blocks: [
      { type: 'full', src: '/assets/additional-main.jpeg', alt: 'Additional property photos' }
    ]
  }
];
