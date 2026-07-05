import Hero from "../../components/Hero";
import About from "../../components/About";
import Services from "../../components/Services";
import Projects from "../../components/Projects";
import Experience from "../../components/Experience";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Experience />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}
