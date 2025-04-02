import Contact from './components/Contact';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function Home() {
  return (
    <div>
      <Hero />
      <Expertise />
      <Projects />
      <Experience />
      <Contact />

    </div>
  );
}
