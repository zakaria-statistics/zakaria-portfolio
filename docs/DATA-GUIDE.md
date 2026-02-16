# Data Editing Guide

All portfolio content is stored in JSON files at `src/data/json/`. Edit these files to update your portfolio — no need to touch component code.

## Quick Reference

| What to change | File to edit |
|---------------|-------------|
| Name, role, location, status | `site.config.json` |
| Email, GitHub, LinkedIn URLs | `site.config.json` → `socials` |
| Navigation links | `nav.json` |
| Boot sequence text | `boot-sequence.json` |
| Hero terminal title/command | `hero.json` |
| About me text | `about.json` |
| Skills | `skills.json` |
| Work experience | `experience.json` |
| Projects | `projects.json` |
| Education & certifications | `education.json` |

## Common Tasks

### Update Contact Info

Edit `src/data/json/site.config.json`. This is the single source of truth — Hero, Contact, and Footer all read from here.

```json
{
  "email": "newemail@example.com",
  "socials": [
    {
      "platform": "github",
      "label": "@your-username",
      "url": "https://github.com/your-username",
      "icon": "github"
    }
  ]
}
```

### Add a New Project

Edit `src/data/json/projects.json` and add an object to the array:

```json
{
  "name": "my-new-project",
  "description": "Short one-line description",
  "tech": ["Docker", "Python", "FastAPI"],
  "details": "Longer description shown when the card is expanded.",
  "link": "https://github.com/you/my-new-project"
}
```

### Add a New Job

Edit `src/data/json/experience.json` and add to the beginning of the array (newest first):

```json
{
  "date": "2025 — Present",
  "role": "Senior DevOps Engineer",
  "company": "New Company",
  "description": [
    "First bullet point",
    "Second bullet point"
  ],
  "tech": ["Kubernetes", "AWS", "Terraform"]
}
```

### Add a Skill Category

Edit `src/data/json/skills.json` and add to the array:

```json
{
  "name": "databases/",
  "color": "text-orange",
  "items": ["PostgreSQL", "Redis", "MongoDB"]
}
```

Available colors: `text-blue`, `text-green`, `text-yellow`, `text-orange`, `text-purple`, `text-cyan`, `text-red`.

### Add a Certification

Edit `src/data/json/education.json` and add to the `certs` array:

```json
{
  "name": "CKA: Certified Kubernetes Administrator",
  "issuer": "CNCF",
  "year": "2025",
  "badge": "CKA"
}
```

### Update About Me

Edit `src/data/json/about.json`. The `introParagraphs` array supports HTML tags for colored text:

```json
{
  "introParagraphs": [
    "Plain text or <span class=\"text-green\">colored text</span>"
  ]
}
```

### Change Boot Sequence

Edit `src/data/json/boot-sequence.json`. Each line has:
- `text`: What's displayed (empty string = blank line)
- `delay`: Milliseconds from start before showing
- `color`: Tailwind text color class

Keep `totalDuration` higher than the last line's delay + ~700ms for the fade effect.
