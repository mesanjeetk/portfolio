import { Hero } from "../components/Hero"
import { AboutMe } from "../components/AboutMe"
import { Projects } from "../components/Project"
import { Skills } from "../components/Skills"
import { Journey } from "../components/Journey"
import { Certifications } from "../components/Certifications"
import { Awards } from "../components/Awards"
import { GitHubStats } from "../components/GitHubStats"
import { ReadingList } from "../components/ReadingList"
import { CaseStudy } from "../components/CaseStudy"
import { FAQ } from "../components/FAQ"
import { Newsletter } from "../components/Newsletter"
import { Support } from "../components/Support"
import { Contact } from "../components/Contact"

const HomePage = () => {
  return (
    <section className="w-full bg-slate-950 text-slate-200 px-6 lg:px-16 py-10 font-inter min-h-screen flex flex-col space-y-10">
      <Hero />
      <AboutMe className="mb-10" />
      <Projects />
      <Skills />
      <Certifications />
      <Awards />
      <CaseStudy />
      <GitHubStats />
      <ReadingList />
      <FAQ />
      <Newsletter />
      <Support />
      <Journey />
      <Contact />
    </section>
  );
};

export default HomePage;