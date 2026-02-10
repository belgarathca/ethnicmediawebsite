import { useEffect } from 'react';
import gsap from 'gsap';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Campaigns from './components/Campaigns';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    gsap.from('.fade-in', {
      opacity: 0,
      y: 24,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, []);

  return (
    <div className="bg-white text-slate-900">
      <Header />
      <main>
        <div className="fade-in">
          <Hero />
        </div>
        <div className="fade-in">
          <Services />
        </div>
        <div className="fade-in">
          <Campaigns />
        </div>
        <div className="fade-in">
          <WhyUs />
        </div>
        <div className="fade-in">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
