# Components

## Navbar ✅ DONE

Props: logo | search | profile  
States: default | sticky (scrolled shadow) | mobile  
File: `src/components/Navbar.jsx`

---

## Hero Search Bar

File: `src/components/HeroSearch.jsx`

Props: none (self-contained state)

### Sub-components:
- `WhereInput` – text input with location icon
- `DateField` – label + date display (opens calendar on click)
- `GuestSelector` – label + count display (opens dropdown)
- `SearchButton` – pink rounded-full, FiSearch icon

### States:
- `collapsed` – compact pill (mobile/default on scroll)
- `expanded` – full 4-section bar (desktop default)
- `where-active` – location input focused
- `checkin-active` – check-in date picker open
- `checkout-active` – check-out date picker open  
- `guests-active` – guest dropdown open

### Layout:
- Desktop: single row, border rounded-pill, shadow-search-hover
- Mobile: stacked full-width pill → tap to expand overlay

---

## Category Bar

File: `src/components/CategoryBar.jsx`

Props: categories[] | activeCategory | onCategoryChange

### Each Category item:
- `id` – unique string slug
- `label` – display name
- `icon` – React Icon component

### States:
- default – gray icon + gray label
- active – dark icon + dark label + border-b-2 border-gray-800
- hover – darkens icon and label

### Scroll behavior:
- overflow-x: auto, scrollbar hidden
- Scroll arrows (left/right) appear on desktop when content overflows
- Active item scrolled into view on selection

### Filters button:
- Right-aligned in same row
- Border rounded-xl, text-sm
- Has a slider icon (LuSlidersHorizontal or similar)

---

## Property Card

File: `src/components/PropertyCard.jsx`

Props:
- `images[]` – array of image URLs
- `location` – string "City, Country"
- `host` – string "Hosted by Name"
- `dates` – string "Jul 1–7"
- `price` – number (per night)
- `rating` – number (e.g. 4.95)
- `isNew` – boolean

States:
- `wishlisted` – heart icon filled red
- `hovered` – slight elevation shadow

### Layout:
- Image: aspect-square, object-cover, rounded-card 14px
- Heart: absolute top-3 right-3, white fill / red when wishlisted
- Rating: top-right of text area, star icon + number
- Title: location bold
- Subtitle: host muted
- Dates: muted
- Price: bold ₹X,XXX/night

---

## Footer

File: `src/components/Footer.jsx`

Props: none

Sections: Support | Community | Hosting | Airbnb  
Bottom bar: © 2026 Airbnb, Inc. · Privacy · Terms · Sitemap