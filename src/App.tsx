import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Loader } from "./components/Loader";

// Lazy Load Pages for Performance
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Journey = lazy(() => import("./pages/Journey"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy Load Global Components
const CustomCursor = lazy(() => import("./components/CustomCursor"));
const Sparkles = lazy(() => import("./components/Sparkles"));
const ScrollProgress = lazy(() => import("./components/ScrollProgress"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <ScrollProgress />
        <CustomCursor />
        <Sparkles rate={5} />
      </Suspense>
      <ScrollToTop />
      <Navbar />
      <div className="bg-obsidian text-white pt-20 relative min-h-screen">
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      
    </Router>
  );
}
