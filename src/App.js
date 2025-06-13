import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";
import Testimonials from "./components/Testimonial";

export default function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Hero />          
      <About />          
      <Skills />         
      <Experience />     
      <Portfolio />      
      <Testimonials />  
      <Hobbies />        
      <Contact />        
      <Footer />   
    </div>
  );
}
