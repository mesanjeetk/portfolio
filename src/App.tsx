import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import Sparkles from "./components/Sparkles";
import { Loader } from "./components/Loader";

// Lazy Load Pages for Performance
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Journey = lazy(() => import("./pages/Journey"));
const NotFound = lazy(() => import("./pages/NotFound"));

import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <Router>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <div className="bg-obsidian text-white pt-20 relative min-h-screen">
        <CustomCursor />
        <Sparkles rate={10} />

        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
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
