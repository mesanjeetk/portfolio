export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building High-Performance React Applications",
    excerpt:
      "Learn advanced techniques to optimize your React apps including code splitting, lazy loading, and memoization strategies.",
    author: "Sanjeet Kumar",
    date: "February 2024",
    category: "React",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
    slug: "high-performance-react",
    tags: ["React", "Performance", "Optimization"],
    content: `
# Building High-Performance React Applications

Performance is crucial in modern web development. Users expect fast, responsive applications, and search engines reward sites with good Core Web Vitals. In this comprehensive guide, we'll explore advanced techniques to optimize your React applications.

## Understanding React Performance

Before we dive into optimization techniques, it's important to understand what causes performance issues in React. The main culprits are:

- **Unnecessary re-renders**: Components re-rendering when their props or state haven't actually changed
- **Large bundle sizes**: Shipping too much JavaScript to the browser
- **Memory leaks**: Subscriptions and timers not being properly cleaned up
- **Slow initial load times**: Poor code splitting and lazy loading strategies

## Code Splitting with React.lazy()

Code splitting is one of the most effective ways to improve initial load times. React provides the \`lazy()\` function for dynamic imports:

\`\`\`typescript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

This approach ensures that the HeavyComponent is only loaded when actually needed.

## Memoization Strategies

### React.memo()

React.memo prevents re-renders when props haven't changed:

\`\`\`typescript
const MyComponent = React.memo(({ data, onClick }) => {
  return <div onClick={onClick}>{data}</div>;
});
\`\`\`

### useMemo Hook

Use useMemo to memoize expensive computations:

\`\`\`typescript
const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);
\`\`\`

### useCallback Hook

useCallback memoizes function references:

\`\`\`typescript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## Virtual Scrolling

For lists with thousands of items, implement virtual scrolling to render only visible items:

\`\`\`typescript
import { FixedSizeList } from 'react-window';

function ItemList({ items }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={35}
      width='100%'
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </FixedSizeList>
  );
}
\`\`\`

## Image Optimization

Images often account for the majority of page load. Optimize them using:

- WebP format with fallbacks
- Responsive images with srcset
- Lazy loading with native \`loading='lazy'\`
- CDN with automatic optimization

\`\`\`tsx
<img
  src="image.jpg"
  srcSet="image-mobile.jpg 480w, image.jpg 1024w"
  loading="lazy"
  alt="description"
/>
\`\`\`

## Bundle Analysis

Use tools like webpack-bundle-analyzer to understand what's in your bundle:

\`\`\`bash
npm install --save-dev webpack-bundle-analyzer
\`\`\`

Then visualize your bundle to identify bloated packages that can be replaced or removed.

## Profiling with React DevTools

The React DevTools Profiler is invaluable for identifying performance bottlenecks:

1. Open React DevTools
2. Click the Profiler tab
3. Record interactions
4. Analyze which components are re-rendering unnecessarily

## Best Practices Summary

- ✅ Use code splitting for route-based components
- ✅ Implement memoization strategically
- ✅ Monitor bundle size
- ✅ Lazy load images
- ✅ Use virtual scrolling for large lists
- ✅ Profile regularly with the Profiler

Performance optimization is an ongoing process. Keep monitoring and iterating to provide the best experience for your users.
    `,
  },
  {
    id: 2,
    title: "Modern CSS: Mastering Grid and Flexbox",
    excerpt:
      "A comprehensive guide to CSS Grid and Flexbox layouts. Discover practical examples and real-world use cases.",
    author: "Sanjeet Kumar",
    date: "January 2024",
    category: "CSS",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg",
    slug: "modern-css-guide",
    tags: ["CSS", "Layout", "Grid", "Flexbox"],
    content: `
# Modern CSS: Mastering Grid and Flexbox

CSS Grid and Flexbox have revolutionized how we create layouts. Together, they provide powerful tools for building responsive, elegant designs without resorting to hacks or complex frameworks.

## Understanding Flexbox

Flexbox is perfect for one-dimensional layouts—elements distributed in a single row or column.

### The Container

\`\`\`css
.flex-container {
  display: flex;
  justify-content: center;      /* Horizontal alignment */
  align-items: center;          /* Vertical alignment */
  gap: 1rem;                    /* Space between items */
  flex-wrap: wrap;              /* Allow wrapping */
}
\`\`\`

### Flex Items

\`\`\`css
.flex-item {
  flex: 1;                      /* Equal growth */
  flex-basis: 200px;            /* Base width */
  flex-grow: 1;                 /* Growth factor */
  flex-shrink: 0;               /* Don't shrink */
}
\`\`\`

## CSS Grid Fundamentals

Grid excels at two-dimensional layouts—organizing content in rows AND columns.

### Setting Up a Grid

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
  grid-auto-flow: dense;        /* Fill gaps intelligently */
}
\`\`\`

### Named Grid Areas

\`\`\`css
.grid-container {
  grid-template-areas:
    'header header header'
    'sidebar main main'
    'footer footer footer';
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Comparing Flexbox vs Grid

| Aspect | Flexbox | Grid |
|--------|---------|------|
| Dimensions | 1D | 2D |
| Best for | Navigation, buttons | Page layouts |
| Alignment | Single axis | Both axes |
| Complexity | Simple | Moderate |

## Real-World Examples

### Responsive Navigation

\`\`\`css
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
}
\`\`\`

### Masonry Layout

\`\`\`css
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
}

.masonry-item:nth-child(3n) {
  grid-column: span 2;
  grid-row: span 2;
}
\`\`\`

### Holy Grail Layout

\`\`\`css
body {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 1rem;
}

header { grid-column: 1 / -1; }
footer { grid-column: 1 / -1; }
\`\`\`

## Advanced Techniques

### auto-fit vs auto-fill

\`\`\`css
/* auto-fit: collapses empty tracks */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

/* auto-fill: keeps empty tracks */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
\`\`\`

### Subgrid (Modern Feature)

\`\`\`css
.grid-item {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: span 2;
}
\`\`\`

## Performance Considerations

- ✅ Grid and Flexbox have excellent browser support
- ✅ Minimal performance impact compared to older layout methods
- ✅ Much cleaner code than float-based layouts
- ✅ Responsive design becomes straightforward

## Browser Compatibility

Modern browsers fully support both Grid and Flexbox. For older browser support, use CSS Fallbacks:

\`\`\`css
.container {
  display: flex;           /* Fallback */
  display: grid;           /* Modern */
  grid-template-columns: repeat(3, 1fr);
}
\`\`\`

Master these tools and you'll write cleaner, more maintainable CSS that works beautifully across all device sizes.
    `,
  },
  {
    id: 3,
    title: "Database Design Best Practices",
    excerpt:
      "Explore normalization, indexing strategies, and query optimization to build efficient and scalable databases.",
    author: "Sanjeet Kumar",
    date: "December 2023",
    category: "Database",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/8439048/pexels-photo-8439048.jpeg",
    slug: "database-best-practices",
    tags: ["Database", "SQL", "Optimization", "Design"],
    content: `
# Database Design Best Practices

A well-designed database is the foundation of any scalable application. Poor database design leads to performance issues, maintenance nightmares, and costly refactoring later. Let's explore proven practices for building robust, efficient databases.

## Understanding Normalization

Normalization is the process of organizing data to minimize redundancy and improve data integrity.

### First Normal Form (1NF)

- All table values must be atomic (indivisible)
- No repeating groups

❌ Bad:
\`\`\`
User(id, name, phone_numbers: [123, 456, 789])
\`\`\`

✅ Good:
\`\`\`
User(id, name)
PhoneNumber(user_id, phone_number)
\`\`\`

### Second Normal Form (2NF)

- Must be in 1NF
- All non-key attributes must depend on the entire primary key

### Third Normal Form (3NF)

- Must be in 2NF
- No transitive dependencies (non-key attributes depending on other non-key attributes)

❌ Bad:
\`\`\`sql
CREATE TABLE Employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  department_id INT,
  department_name VARCHAR(100)
);
\`\`\`

✅ Good:
\`\`\`sql
CREATE TABLE Employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES Departments(id)
);

CREATE TABLE Departments (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);
\`\`\`

## Indexing Strategies

Indexes dramatically improve query performance but come with trade-offs in write performance and storage.

### Types of Indexes

\`\`\`sql
-- Single Column Index
CREATE INDEX idx_email ON users(email);

-- Composite Index (Order matters!)
CREATE INDEX idx_user_status ON users(status, created_at);

-- Unique Index
CREATE UNIQUE INDEX idx_username ON users(username);

-- Full-text Index
CREATE FULLTEXT INDEX idx_content ON articles(title, body);
\`\`\`

### Index Best Practices

- ✅ Index columns frequently used in WHERE clauses
- ✅ Index columns used in ORDER BY
- ✅ Create composite indexes logically
- ✅ Avoid over-indexing (slows writes)
- ✅ Monitor index usage and remove unused ones

## Query Optimization

### Use EXPLAIN to Analyze Queries

\`\`\`sql
EXPLAIN ANALYZE
SELECT u.name, COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id
ORDER BY post_count DESC;
\`\`\`

### Avoid N+1 Queries

❌ Bad (N+1 problem):
\`\`\`typescript
const users = await db.query('SELECT * FROM users');
for (const user of users) {
  user.posts = await db.query('SELECT * FROM posts WHERE user_id = ?', [user.id]);
}
\`\`\`

✅ Good (Join):
\`\`\`sql
SELECT u.*, p.*
FROM users u
LEFT JOIN posts p ON u.id = p.user_id;
\`\`\`

### Use WHERE Before GROUP BY

❌ Less Efficient:
\`\`\`sql
SELECT status, COUNT(*)
FROM orders
GROUP BY status
HAVING total > 1000;
\`\`\`

✅ More Efficient:
\`\`\`sql
SELECT status, COUNT(*)
FROM orders
WHERE total > 1000
GROUP BY status;
\`\`\`

## Denormalization When Needed

Sometimes 3NF isn't optimal. Strategic denormalization can improve read performance significantly.

\`\`\`sql
-- Storing computed values
CREATE TABLE OrderSummary (
  order_id INT PRIMARY KEY,
  total_items INT,
  total_amount DECIMAL,
  last_updated TIMESTAMP
);
\`\`\`

Use denormalization for:
- Frequently accessed computed values
- Aggregate data that's read much more than written
- Optimizing critical query paths

## Backup and Recovery

Always have a comprehensive backup strategy:

\`\`\`sql
-- Full backup
BACKUP DATABASE mydb
TO DISK = '/backup/mydb_full.bak';

-- Incremental backup
BACKUP DATABASE mydb
TO DISK = '/backup/mydb_incremental.bak'
WITH INCREMENTAL;
\`\`\`

## Scalability Considerations

### Horizontal Scaling (Sharding)

Distribute data across multiple databases based on a key:

\`\`\`
users table:
- Shard 1: id % 3 = 0
- Shard 2: id % 3 = 1
- Shard 3: id % 3 = 2
\`\`\`

### Read Replicas

Use read-only replicas to distribute query load:

\`\`\`
Primary (Write) → Replica 1 (Read-only)
               → Replica 2 (Read-only)
               → Replica 3 (Read-only)
\`\`\`

## Database Normalization Levels

| Level | Requirements |
|-------|--------------|
| 1NF | Atomic values |
| 2NF | 1NF + depends on entire primary key |
| 3NF | 2NF + no transitive dependencies |
| BCNF | 3NF + stricter functional dependencies |

## Essential Practices Checklist

- ✅ Design schemas before implementation
- ✅ Use appropriate data types
- ✅ Set NOT NULL constraints where applicable
- ✅ Use foreign keys to maintain referential integrity
- ✅ Create meaningful indexes
- ✅ Regularly analyze query performance
- ✅ Document your schema
- ✅ Plan for backup and recovery
- ✅ Monitor database health

A well-designed database reduces bugs, improves performance, and makes your application more maintainable and scalable.
    `,
  },
  {
    id: 4,
    title: "TypeScript Tips for Better Code Quality",
    excerpt:
      "Discover advanced TypeScript features that can improve your code quality and make debugging easier.",
    author: "Sanjeet Kumar",
    date: "November 2023",
    category: "TypeScript",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/3945696/pexels-photo-3945696.jpeg",
    slug: "typescript-tips",
    tags: ["TypeScript", "JavaScript", "Type Safety"],
    content: `
# TypeScript Tips for Better Code Quality

TypeScript transforms JavaScript by adding static type checking. But it's not just about catching bugs at compile time—it's about writing clearer, more maintainable code. Let's explore advanced TypeScript techniques.

## Strict Mode Configuration

Always enable strict mode in your tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictObjectInitializationCheck": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  }
}
\`\`\`

## Utility Types

TypeScript provides powerful utility types to manipulate existing types:

### Partial<T>

Makes all properties optional:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(id: number, updates: Partial<User>) {
  // updates can have any combination of properties
}
\`\`\`

### Required<T>

Makes all properties required:

\`\`\`typescript
type UserRequired = Required<User>;
// All properties are now required
\`\`\`

### Pick<T, K>

Select specific properties:

\`\`\`typescript
type UserPreview = Pick<User, 'id' | 'name'>;
// Only id and name are included
\`\`\`

### Omit<T, K>

Exclude specific properties:

\`\`\`typescript
type UserWithoutPassword = Omit<User, 'password'>;
\`\`\`

### Record<K, T>

Create an object type with specific keys:

\`\`\`typescript
type UserRole = 'admin' | 'user' | 'guest';
type Permissions = Record<UserRole, string[]>;

const permissions: Permissions = {
  admin: ['read', 'write', 'delete'],
  user: ['read', 'write'],
  guest: ['read']
};
\`\`\`

## Generic Constraints

Generics become powerful when constrained properly:

\`\`\`typescript
// Constrain to objects with specific properties
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Constrain to array-like objects
function getLength<T extends { length: number }>(obj: T): number {
  return obj.length;
}

// Constrain to function types
function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map();
  return ((...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}
\`\`\`

## Advanced Types

### Type Guards

\`\`\`typescript
function isFish(animal: Cat | Fish): animal is Fish {
  return 'swim' in animal;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.meow();
}
\`\`\`

### Conditional Types

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>;  // true
type B = IsString<number>;   // false
\`\`\`

### Mapped Types

\`\`\`typescript
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type MyType = Nullable<User>;
// All properties can now be null
\`\`\`

## Discriminated Unions

Create type-safe patterns with discriminated unions:

\`\`\`typescript
type Success<T> = { kind: 'success'; value: T };
type Error = { kind: 'error'; message: string };
type Result<T> = Success<T> | Error;

function handleResult<T>(result: Result<T>) {
  if (result.kind === 'success') {
    return result.value;
  } else {
    console.error(result.message);
  }
}
\`\`\`

## as const Assertions

Use \`as const\` for literal types:

\`\`\`typescript
const roles = ['admin', 'user', 'guest'] as const;
type Role = (typeof roles)[number];  // 'admin' | 'user' | 'guest'

const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
} as const;
\`\`\`

## Decorators

Decorators provide a powerful way to modify classes and methods:

\`\`\`typescript
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = async function(...args: any[]) {
    console.log(\`Calling \${propertyKey} with args:\`, args);
    const result = await originalMethod.apply(this, args);
    console.log(\`Result:\`, result);
    return result;
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}
\`\`\`

## Type Narrowing

Help TypeScript understand type refinement:

\`\`\`typescript
function printLength(str: string | number) {
  // TypeScript narrows the type
  if (typeof str === 'string') {
    console.log(str.length);  // string properties available
  } else {
    console.log(str.toFixed(2));  // number properties available
  }
}
\`\`\`

## Never Type

Use \`never\` for exhaustive checking:

\`\`\`typescript
type Status = 'pending' | 'success' | 'error';

function handleStatus(status: Status): string {
  switch (status) {
    case 'pending':
      return 'Loading...';
    case 'success':
      return 'Done!';
    case 'error':
      return 'Failed!';
    default:
      const unreachable: never = status;
      return unreachable;
  }
}
\`\`\`

## Best Practices

- ✅ Enable strict mode
- ✅ Use utility types to reduce boilerplate
- ✅ Leverage generics with constraints
- ✅ Use discriminated unions for complex states
- ✅ Enable noUnusedLocals and noUnusedParameters
- ✅ Use as const for literal types
- ✅ Document complex types with comments

TypeScript's power lies in preventing runtime errors before they happen. Master these concepts and write more robust, maintainable code.
    `,
  },
  {
    id: 5,
    title: "Web Performance Optimization Guide",
    excerpt:
      "Master techniques to improve Core Web Vitals, reduce bundle size, and enhance user experience.",
    author: "Sanjeet Kumar",
    date: "October 2023",
    category: "Performance",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/8606991/pexels-photo-8606991.jpeg",
    slug: "web-performance",
    tags: ["Performance", "Web Vitals", "Optimization"],
    content: `
# Web Performance Optimization Guide

In today's web, performance is a feature. Users expect fast loading times, and search engines reward sites that deliver. Let's explore comprehensive strategies to optimize your web applications.

## Core Web Vitals

Google's Core Web Vitals are critical metrics for user experience:

### Largest Contentful Paint (LCP)

Measures when the largest element becomes visible. Target: **≤ 2.5 seconds**

Optimization strategies:
- Optimize images
- Remove render-blocking resources
- Use a CDN
- Preload critical resources

\`\`\`html
<!-- Preload critical images -->
<link rel="preload" as="image" href="/hero.jpg">

<!-- Prefetch DNS -->
<link rel="dns-prefetch" href="//cdn.example.com">

<!-- Preconnect to critical origins -->
<link rel="preconnect" href="https://api.example.com">
\`\`\`

### First Input Delay (FID) / Interaction to Next Paint (INP)

Measures responsiveness to user interactions. Target: **≤ 100ms**

Solutions:
- Break up long JavaScript tasks
- Use web workers for heavy computations
- Defer non-critical JavaScript

\`\`\`javascript
// Break long tasks into chunks
function* processLargeList(items) {
  for (let i = 0; i < items.length; i += 100) {
    yield items.slice(i, i + 100);
  }
}

for (const chunk of processLargeList(largeArray)) {
  await scheduler.yield(); // Let browser handle other tasks
  processChunk(chunk);
}
\`\`\`

### Cumulative Layout Shift (CLS)

Measures visual stability. Target: **≤ 0.1**

Prevention:
- Reserve space for images
- Avoid inserting content above existing content
- Use transform animations instead of altering DOM

\`\`\`css
/* Reserve space for images */
img {
  aspect-ratio: 16 / 9;
  width: 100%;
}

/* Use transform for animations */
.animate-element {
  animation: slide 1s ease;
}

@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
\`\`\`

## Bundle Size Optimization

### Analyze Your Bundle

\`\`\`bash
npm install --save-dev webpack-bundle-analyzer
\`\`\`

In webpack config:

\`\`\`javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};
\`\`\`

### Tree Shaking

Ensure unused code is eliminated:

\`\`\`javascript
// ✅ Good - named exports support tree shaking
export function usedFunction() { }
export function unusedFunction() { }

// ❌ Poor - default export
export default { usedFunction, unusedFunction };
\`\`\`

### Dynamic Imports

Load code only when needed:

\`\`\`javascript
// Load modal code only when modal is opened
button.addEventListener('click', async () => {
  const { Modal } = await import('./modal.js');
  Modal.show();
});
\`\`\`

## Image Optimization

Images typically dominate page weight:

\`\`\`html
<!-- Use modern formats with fallbacks -->
<picture>
  <source type="image/webp" srcset="image.webp">
  <source type="image/avif" srcset="image.avif">
  <img src="image.jpg" alt="description">
</picture>

<!-- Responsive images -->
<img
  src="image.jpg"
  srcset="image-small.jpg 480w, image-medium.jpg 960w, image.jpg 1920w"
  sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw, 33vw"
  alt="description"
>

<!-- Native lazy loading -->
<img src="image.jpg" loading="lazy" alt="description">
\`\`\`

## Caching Strategies

### Browser Caching

\`\`\`javascript
// Service Worker caching
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
\`\`\`

### CDN Configuration

\`\`\`
Cache-Control: public, max-age=31536000
(1 year for immutable assets)

Cache-Control: public, max-age=3600, must-revalidate
(1 hour for HTML with revalidation)
\`\`\`

## Font Optimization

Fonts can significantly impact LCP:

\`\`\`css
@font-face {
  font-family: 'CustomFont';
  src: url('/font.woff2') format('woff2');
  font-display: swap; /* Show fallback while loading */
}
\`\`\`

\`\`\`html
<!-- Preload fonts -->
<link rel="preload" href="/font.woff2" as="font" type="font/woff2" crossorigin>

<!-- DNS Prefetch to font CDN -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
\`\`\`

## Monitoring Performance

Use the Performance API:

\`\`\`javascript
// Measure custom operations
performance.mark('process-start');
processLargeData();
performance.mark('process-end');
performance.measure('process', 'process-start', 'process-end');

const measure = performance.getEntriesByName('process')[0];
console.log(\`Processing took \${measure.duration}ms\`);

// Monitor Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
\`\`\`

## Performance Checklist

- ✅ Analyze bundle size regularly
- ✅ Implement code splitting
- ✅ Optimize images (format, size, lazy loading)
- ✅ Preload critical resources
- ✅ Defer non-critical JavaScript
- ✅ Use a CDN
- ✅ Enable compression (gzip, brotli)
- ✅ Monitor Core Web Vitals
- ✅ Set up service workers
- ✅ Optimize fonts

Performance optimization is continuous. Keep measuring, analyzing, and improving to deliver the best user experience.
    `,
  },
  {
    id: 6,
    title: "Building API with Node.js and Express",
    excerpt:
      "Learn how to build scalable REST APIs with proper error handling, validation, and authentication.",
    author: "Sanjeet Kumar",
    date: "September 2023",
    category: "Backend",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/8239266/pexels-photo-8239266.jpeg",
    slug: "nodejs-api-guide",
    tags: ["Node.js", "Express", "API", "Backend"],
    content: `
# Building API with Node.js and Express

Node.js and Express have become the go-to stack for building scalable REST APIs. In this guide, we'll explore best practices for creating production-ready APIs with proper architecture, error handling, and security.

## Setting Up Express

Initialize your project:

\`\`\`bash
npm init -y
npm install express cors dotenv mongoose
npm install --save-dev nodemon typescript @types/express @types/node
\`\`\`

Basic Express server:

\`\`\`typescript
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Routing and Controllers

Separate concerns with controllers:

\`\`\`typescript
// routes/users.ts
import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
\`\`\`

\`\`\`typescript
// controllers/userController.ts
import { Request, Response, NextFunction } from 'express';
import User from '../models/User';

export async function getUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

export async function getUserById(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
}

export async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(req: Request, res: Response, next: NextFunction) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
\`\`\`

## Input Validation

Use express-validator for robust validation:

\`\`\`bash
npm install express-validator
\`\`\`

\`\`\`typescript
import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateUser = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  body('name').notEmpty().trim().escape(),
];

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post('/users', validateUser, handleValidationErrors, userController.createUser);
\`\`\`

## Authentication

Implement JWT-based authentication:

\`\`\`bash
npm install jsonwebtoken bcrypt
npm install --save-dev @types/jsonwebtoken @types/bcrypt
\`\`\`

\`\`\`typescript
// middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
  userId?: string;
}

export function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, user: any) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.userId = user.id;
    next();
  });
}
\`\`\`

\`\`\`typescript
// services/authService.ts
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export async function login(email: string, password: string) {
  const user = await User.findOne({ email });
  
  if (!user) {
    throw new Error('User not found');
  }

  const validPassword = await bcrypt.compare(password, user.password);
  
  if (!validPassword) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: '24h' }
  );

  return { token, user };
}

export async function register(email: string, password: string, name: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = new User({
    email,
    password: hashedPassword,
    name
  });

  await user.save();
  
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: '24h' }
  );

  return { token, user };
}
\`\`\`

## Error Handling

Create a centralized error handler:

\`\`\`typescript
// errorHandler.ts
class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  res.status(500).json({ error: 'Internal Server Error' });
}

export { ApiError };
\`\`\`

## Rate Limiting

Protect your API from abuse:

\`\`\`bash
npm install express-rate-limit
\`\`\`

\`\`\`typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);
\`\`\`

## Environment Configuration

\`\`\`
# .env
PORT=3000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/mydb
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:3000
\`\`\`

## Production Checklist

- ✅ Input validation and sanitization
- ✅ Authentication and authorization
- ✅ Rate limiting
- ✅ CORS configuration
- ✅ Error handling and logging
- ✅ Environment variables
- ✅ HTTPS only in production
- ✅ Database connection pooling
- ✅ Monitoring and alerting
- ✅ API versioning

A well-built API is the foundation of reliable applications. Follow these patterns and your APIs will be scalable, secure, and maintainable.
    `,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getAllBlogs(): BlogPost[] {
  return blogPosts;
}
