# Roadmap

## Completed

- [x] Terminal-themed portfolio with boot sequence
- [x] All sections: Hero, About, Skills, Experience, Projects, Education, Contact
- [x] Responsive design (mobile hamburger menu)
- [x] Scroll-triggered animations
- [x] Typed command effect in terminal windows
- [x] Centralized data layer (JSON files + typed loaders)
- [x] TypeScript types for all data structures
- [x] Error boundaries (React + App Router)
- [x] 404 page (terminal-themed)
- [x] Loading state
- [x] Skip button on boot sequence
- [x] Fixed LinkedIn URL typo (single source of truth)
- [x] Fixed duplicate `id="contact"` on Footer

## Future Ideas

### Contact Form Backend
- Wire the contact form to an actual email service (Resend, SendGrid, or Formspree)
- Add server action or API route at `src/app/api/contact/route.ts`

### SEO Improvements
- Add `robots.txt` and `sitemap.xml`
- Add OpenGraph meta tags for social sharing previews
- Add structured data (JSON-LD) for better search results

### Blog Section
- Add `/blog` route with markdown-based posts
- Use `gray-matter` + `remark` for markdown parsing
- Add blog post listing and individual post pages

### Internationalization (i18n)
- Support English and French versions
- Use Next.js middleware for locale detection
- Separate JSON data files per locale

### Performance
- Optimize font loading (self-host JetBrains Mono)
- Add `next/image` for any future images
- Consider static export (`output: 'export'`) for CDN hosting

### Analytics
- Add Vercel Analytics or Plausible for privacy-friendly tracking
