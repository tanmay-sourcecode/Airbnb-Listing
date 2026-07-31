# Airbnb Clone – Page Specification
# Source: https://airbnb-clone-umber-two.vercel.app/
# Reference: Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 (listing detail page)

---

## THIS IS A LISTING DETAIL PAGE — NOT A HOMEPAGE

There is NO hero search bar. There are NO category filters.
Both were hallucinated. Do not build them.

---

## Real Page Structure (Top → Bottom, per HTML)

```
<header id="siteHeader">         ← Navbar
<div id="_JXzroy">               ← Sticky sub-nav (Photos/Amenities/Reviews/Location + price + Reserve)
<main id="main">
  <div class="_zcNtKV">
    <section id="photos">        ← Title + Share + Save
    <section aria-label="Photos of this place">  ← 5-photo hero grid + "Show all photos"
    <div class="_lhKJir">        ← Two-column layout
      <div id="contentLeft">     ← LEFT COLUMN
        ._gRekoP                 → Apartment type + guest count
        ._NIsTQW                 → Guest favourite badge
        ._McRwJR                 → Host info (photo + name + years)
        ._ZOaIER                 → Highlights (3 items with SVG icons)
        ._QZaLue                 → Description
        ._QZaLue                 → Where you'll sleep (bedroom cards)
        ._QZaLue#amenities       → What this place offers (amenity grid)
      </div>
      <aside class="_iJTxKe">    ← RIGHT COLUMN (booking widget, sticky)
        ._bUsxCi#bookingSticky
          ._bJChEA               → Discount banner (10% off)
          ._ehfyuX               → Price + dates + guests + Reserve
    </aside>
  </div>
  <div id="wideSections">        ← FULL WIDTH SECTIONS
    <section id="reviews">       → Reviews (rating bars, review cards)
    <section id="location">      → Location map placeholder
</main>
```

---

## 1. Navbar (`<header id="siteHeader">`)

HTML classes: `._Ugwssa` (header), `._HaGluF` (inner wrapper)

### Logo
- `<a class="logo">` wrapping `<span class="_QEBUFh">`
- SVG: `viewBox="0 0 3490 1080"` — the full "airbnb" **wordmark** (not the bélo symbol)
- style: `height:32px; width:auto; fill:currentColor`
- Color: `#FF385C` (currentColor on red parent)

### Search pill (`<div class="_EnWgNg" role="search">`)
- Button `._LkdOyD`: `<img src="searchbar-house_Xpng.png">` + "Anywhere"
- `<span class="_tYfFja">` (divider)
- Button `._LkdOyD`: "Anytime"
- `<span class="_tYfFja">` (divider)
- Button `._LkdOyD ._finVTK`: "Add guests" (slightly different style — gray text)
- Button `._HEUMtF`: pink circle with search icon, `aria-label="Search"`

### Right nav (`<nav class="_PTMeKT">`)
- `<a class="_OubFgU">` "Become a host"
- `<button class="_CWDueY">` globe SVG, `aria-label="Choose a language and currency"`
- `<button class="_CWDueY _CDwKNg">` hamburger (3-line SVG), `aria-label="Main navigation menu"`
  - NOTE: NO avatar icon — just the hamburger lines SVG

---

## 2. Sticky Sub-Nav (`<div id="_JXzroy">`)

### Left: section tabs (`<nav class="_hCwPJL" aria-label="Listing sections">`)
- `<a href="#photos" data-target="photos" class="_KOWlKT">Photos</a>` (active)
- `<a href="#amenities">Amenities</a>`
- `<a href="#reviews">Reviews</a>`
- `<a href="#location">Location</a>`

### Right: price + Reserve
- `._KQgxsf`: `<span class="_aykCAY">₹28,499</span> <span class="_FVmwas">for 5 nights</span>`
- Rating line: ★ 4.95 · 19 reviews
- `<button class="_NhmiWB _jCniyC">Reserve</button>`

---

## 3. Main Content

### 3a. Title section (`<section id="photos">`)
- `<h1 class="_WQsVLm">Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>`
- Share button: upload SVG icon + "Share" text
- Save button: heart SVG (outline) + "Save" text

### 3b. Photo Grid (`<section aria-label="Photos of this place">`)
- `<div id="heroGrid">` — 5 buttons, each wrapping `<img>`
  - Image 1 (eager): `2367476f-..._Xpng.jpeg` — large, left half
  - Images 2-5 (lazy): `090d8b0b`, `9be71047`, `67c61c6f`, `c904e1ab`
- `<button id="showAllPhotos">` ··· icon + "Show all photos"

### 3c. Left Column (`<div id="contentLeft">`)

#### Apartment type + count
- `<h2>Entire serviced apartment in Candolim, India</h2>`
- `<div>3 guests · 1 bedroom · 1 bed · 1 bathroom</div>`

#### Guest Favourite badge
- Airbnb laurel SVG (left + right leaf paths)
- "Guest favourite" label
- "One of the most loved homes on Airbnb, according to guests"
- Rating: 4.95 (5 gold stars) | separator | 19 Reviews

#### Host info
- `<img src="host_Xpng.jpeg">` host avatar
- "Hosted by Mirashya Homes"
- "2 years hosting"

#### Highlights (3 items)
1. Outdoor entertainment — pool/fire SVG — "The pool and alfresco dining are great for summer trips."
2. Designed for staying cool — fan SVG — "Beat the heat with the A/C and ceiling fan."
3. Self check-in — door SVG — "You can check in with the building staff."

#### Description (collapsed with "Show more")
Full text from HTML

#### Where you'll sleep (2 cards)
- Bedroom: `67c61c6f` image + "Bedroom" + "1 double bed"
- Living room: `a9831aeb` image + "Living room" + "1 sofa"

#### Amenities grid (`<section id="amenities">`)
"What this place offers" — 6 shown:
- Kitchen, Wifi, Dedicated workspace, Free parking on premises, Pool, Hot tub, Pets allowed
- "Show all X amenities" button

### 3d. Right Column — Booking Widget (`<aside class="_iJTxKe">`)
Sticky card `<div id="bookingSticky">`:

#### Discount banner
- `<img src="discount_Xpng.svg">` tag icon
- "Get 10% off your next stay. Terms apply"
- "Claim" button

#### Price + booking form
- `₹28,499 for 5 nights`
- Grid: CHECK-IN `10/18/2026` | CHECKOUT `10/23/2026`
- GUESTS: `2 guests` (with chevron-down SVG)
- "Free cancellation before **17 October**"
- `<button id="reserveBtn">Reserve</button>`
- "You won't be charged yet"

#### Report link
- Flag icon + "Report this listing"

---

## 4. Reviews Section (`<section id="reviews">`)
- Laurel-left + 4.95 + Laurel-right header
- "Guest favourite"
- Rating bars (5→1 star, 95%/5%/0%/0%/0%)
- Category ratings: Cleanliness, Accuracy, Check-in, Communication, Location, Value (all ~5.0)
- 19 review cards (reviewer photo, name, date, text)

---

## 5. Location Section (`<section id="location">`)
- "Where you'll be" heading
- "Candolim, North Goa, India"
- Map placeholder

---

## Image Files (from reference/_files/)
All local: `reference/Romantic Jacuzzi 1BHK Candolim _ Mirashya UG10 .../`
- Hero: `2367476f-11c4-4a14-a7c6-267be62c1d59_Xpng.jpeg`
- Grid 2: `090d8b0b-b539-42c0-84f8-e1fb0cdf9a93_Xpng.jpeg`
- Grid 3: `9be71047-fc52-438a-9270-75cb470f6752_Xpng.jpeg`
- Grid 4: `67c61c6f-6260-4809-9510-0360e58a345d_Xpng.jpeg`
- Grid 5: `c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d_Xpng.jpeg`
- Host: `host_Xpng.jpeg`
- Discount: `discount_Xpng.svg`
- Laurel-left: `laurel-left_Xpng.png`
- Laurel-right: `laurel-right_Xpng.png`
- Searchbar house: `searchbar-house_Xpng.png`