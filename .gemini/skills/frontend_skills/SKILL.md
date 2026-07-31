---
name: frontend_skills
description: Minimal AI Skills specification for the frontend vacation rental project (React, Tailwind, API, Testing, a11y, Performance, Security).
---

# Reusable AI Skills — Frontend Project

Minimal, focused guidelines that every subagent and developer must follow for this vacation rental marketplace codebase (**Vite + React + Tailwind CSS**). Integrated directly with the specifications in `docs/`.

---

## 1. ⚛️ React Skill
- **Functional Components Only**: No class components ever.
- **Hooks & Composition**: Use custom hooks to extract logic; prefer composition over deep prop drilling.
- **Strict Component Sizing**: Keep components under **~200 lines** where practical; extract sub-components when repeated.
- **Single Responsibility**: Each component owns one clear part of the UI.
- **Explicit Props & Types**: Strongly type all component interfaces and data structures.

---

## 2. 🎨 Tailwind Skill
- **Mobile-First Responsive**: Write base classes for mobile, then `sm:`, `md:`, `lg:`, `xl:` modifiers.
- **Design Tokens (`docs/design-system.md`)**:
  - **Font**: System UI / Airbnb Cereal fallback.
  - **Border Radius**: Cards (`rounded-2xl` / 14px), Buttons & Pills (`rounded-full`).
  - **Transitions**: 200ms `ease-in-out` (`transition-all duration-200`).
- **Zero Inline CSS**: Use Tailwind utility classes exclusively; avoid `style={{...}}` except for dynamic positional math.
- **Consistent Spacing**: Use standard spacing scale (`gap-2`, `gap-3`, `gap-4`, `p-4`, `p-6`).

---

## 3. 🌐 API & Data Skill
- **REST Conventions**: Standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
- **Separation of Concerns**: Data fetching lives inside `src/services/` or `src/hooks/`, never inside UI component bodies.
- **State Handling**: Cover all 4 states explicitly in UI: **Idle**, **Loading** (skeletons), **Success**, and **Error** (user-friendly messaging).
- **Resilience**: Implement error boundaries, mock network delays, fallback states, and retry handlers.

---

## 4. 🧪 Testing Skill
- **Behavior Over Implementation**: Test user-visible outcomes and interactions, not internal state or private functions.
- **Accessibility Queries First**: Prefer `getByRole`, `getByLabelText`, `getByText` over `getByTestId`.
- **High Business Logic Coverage**: Focus unit/integration tests on critical workflows (booking calculations, calendar availability, filter logic).
- **Mock Network Calls**: Intercept and mock API calls cleanly (Vitest / RTL).

---

## 5. ♿ Accessibility (a11y) Skill
- **Semantic HTML**: Use correct HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`).
- **Keyboard Navigation**: All interactive elements must be focusable (`tabIndex={0}`), operable via `Enter`/`Space`, and provide visible focus rings.
- **ARIA Attributes**: Use `aria-label`, `aria-expanded`, `aria-hidden`, and `role="dialog"` for modals and icon-only buttons.
- **Focus Management**: Modal dialogs must lock body scroll, trap focus while open, and restore focus upon closing (or `Escape` key).

---

## 6. ⚡ Performance Skill
- **Minimize Re-renders**: Avoid inline object/array allocations inside JSX props; use `useCallback` / `useMemo` where expensive computations exist.
- **Lazy Loading**: Use `loading="lazy"` on all gallery/listing images and `React.lazy` for heavy modals (`PhotoTourModal`, `LightboxModal`).
- **Image Optimization**: Apply `object-cover` and explicit aspect ratios (`aspect-square`, `aspect-[4/3]`) to prevent layout shifts (CLS).
- **Dom Optimization**: Keep DOM node trees clean and shallow.

---

## 7. 🔒 Security Skill
- **Input Sanitization**: Sanitize all user inputs (search queries, reviews, messages) to prevent XSS.
- **Zero Exposed Secrets**: Store API keys in `.env` variables prefixed with `VITE_`; never commit credentials to code.
- **Safe Rendering**: Avoid `dangerouslySetInnerHTML` unless content is sanitized via DOMPurify.
- **Response Validation**: Validate and transform incoming API payloads before passing them to application state.
