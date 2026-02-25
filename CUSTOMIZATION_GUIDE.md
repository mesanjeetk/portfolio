# Portfolio Customization Guide

This guide helps you customize the portfolio features with your own data.

## 1. Update Certifications

**File:** `src/components/Certifications.tsx`

Replace the `certifications` array with your actual credentials:

```tsx
const certifications: Certification[] = [
  {
    title: "Your Certification Title",
    issuer: "Issuing Organization",
    date: "2024",
    icon: "📜",
    credentialUrl: "https://link-to-credential.com",
    credentialId: "Optional ID",
  },
  // ... add more
];
```

## 2. Update Awards

**File:** `src/components/Awards.tsx`

Replace awards with your achievements:

```tsx
const awards: Award[] = [
  {
    title: "Your Award Title",
    organization: "Organization Name",
    date: "2024",
    description: "What you won and why",
    category: "Award Type",
  },
  // ... add more
];
```

## 3. Update Case Studies

**File:** `src/components/CaseStudy.tsx`

Add your real projects:

```tsx
const caseStudies = [
  {
    title: "Project Name",
    problem: "Challenge faced by client",
    solution: "How you solved it",
    results: "Measurable outcomes",
    metrics: ["Metric 1", "Metric 2"],
    image: "https://your-image-url.com",
  },
  // ... add more
];
```

## 4. Update Reading List

**File:** `src/components/ReadingList.tsx`

Share your favorite resources:

```tsx
const readingList: ReadingItem[] = [
  {
    title: "Book or Article Title",
    author: "Author Name",
    type: "Book", // or "Article"
    link: "https://link-to-resource.com",
  },
  // ... add more
];
```

## 5. Update FAQ

**File:** `src/components/FAQ.tsx`

Answer your actual client questions:

```tsx
const faqItems: FAQItem[] = [
  {
    question: "What's your typical project timeline?",
    answer: "Here's how long different project types take...",
  },
  // ... add more
];
```

## 6. Update Featured Projects (GitHub Stats)

**File:** `src/components/GitHubStats.tsx`

Add your real repositories:

```tsx
const repos: GitHubRepo[] = [
  {
    name: "Project Name",
    description: "What the project does",
    stars: 150,
    forks: 45,
    language: "TypeScript",
    link: "https://github.com/username/repo",
  },
  // ... add more
];
```

## 7. Add Blog Posts

**File:** `src/components/BlogList.tsx`

Replace sample blog posts:

```tsx
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Your Blog Post Title",
    excerpt: "Short summary of the post",
    author: "Your Name",
    date: "Month Year",
    category: "Topic",
    readTime: "5 min read",
    image: "https://your-image-url.com",
    slug: "post-url-slug",
  },
  // ... add more
];
```

## 8. Update Project Filters

**File:** `src/pages/Projects.tsx`

Ensure your projects have the right categories:

```tsx
const projects: Project[] = [
  {
    title: "Project Name",
    description: "What it does",
    techStack: ["React", "TypeScript", "Tailwind"],
    imageUrl: "https://image-url.com",
    projectLink: "https://project-demo.com",
    githubLink: "https://github.com/link",
    category: "Full Stack", // Used for filtering
  },
  // ... add more
];
```

## 9. Add Resume File

1. **Create** or convert your resume to PDF
2. **Place** the file in `public/resume.pdf`
3. **Alternative:** Replace the href in Navbar.tsx with a direct URL:

```tsx
// In Navbar.tsx, modify the Resume button:
link.href = "https://your-resume-url.com";
```

## 10. Update Newsletter Integration

**File:** `src/components/Newsletter.tsx`

Connect to your email service:

```tsx
const handleSubmit = (e: React.FormEvent) => {
  // Replace this with your actual backend call:
  // fetch('/api/subscribe', { method: 'POST', body: ... })
};
```

## 11. Update Support Links

**File:** `src/components/Support.tsx`

Add your Ko-fi or sponsorship links:

```tsx
href="https://ko-fi.com/your-username"
href="https://github.com/sponsors/your-username"
```

## 12. Update Social Links

**File:** `src/components/Footer.tsx` and `src/components/Navbar.tsx`

Replace with your actual social profiles:

```tsx
{
  name: "GitHub",
  url: "https://github.com/your-username",
  icon: Github,
},
// ... update all social links
```

## 13. FAQ Customization Tips

- Add 6-10 questions your clients actually ask
- Cover pricing, timeline, process, technologies
- Use conversational language
- Address objections and concerns
- Include a CTA at the end

## 14. Blog Content Strategy

**Topics to cover:**
- Technical tutorials in your specialty
- Project breakdowns and case studies
- Industry insights and trends
- Career advice
- Tools and tips you've learned
- Development processes

**SEO Tips:**
- Use keywords naturally
- Add internal links to projects
- Include meta descriptions
- Add relevant images
- Use clear headings

## 15. Meta Tags & SEO

**File:** `src/components/Meta.tsx`

Update site URL and images:

```tsx
const siteUrl = "https://your-domain.com";
const siteImage = "https://your-domain.com/preview.png";
```

## Quick Checklist

- [ ] Update Certifications with real credentials
- [ ] Add your awards and achievements
- [ ] Create 3-5 detailed case studies
- [ ] Add 10+ reading recommendations
- [ ] Write FAQ section
- [ ] Add GitHub projects/repositories
- [ ] Write 6+ blog posts
- [ ] Update all social media links
- [ ] Add resume PDF
- [ ] Update newsletter service
- [ ] Set up Ko-fi/sponsorship
- [ ] Customize meta tags
- [ ] Test all filters and links
- [ ] Mobile responsiveness check

## Deployment Notes

After customizing:
1. Test all filters and links locally
2. Run `npm run build` to check for errors
3. Deploy to your hosting (Vercel, Netlify, etc.)
4. Test all features in production
5. Monitor analytics for clicks/conversions

---

**Your portfolio is now ready to be personalized with your unique story and achievements!**
