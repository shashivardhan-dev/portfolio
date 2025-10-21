import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
