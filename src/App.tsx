import { useState, useEffect } from 'react';
import LandingHeader from './components/LandingHeader';
import HeroSection from './components/HeroSection';
import FreeFeatures from './components/FreeFeatures';
import PremiumFeatures from './components/PremiumFeatures';
import FooterSection from './components/FooterSection';
import { Button } from './components/ui/button';
import { ArrowUp } from 'lucide-react';


export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [title, setTitle] = useState('');
  // Scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTitle(params.get('title') || '');
  }, [])


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  

  return (
    <article>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={title} />
      <meta property="og:image" content="https://website-cfa99.vercel.app/image/logo_app.png" />
      <meta property="og:url" content="https://website-cfa99.vercel.app/#/welcome" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="CFA99" />
      <meta name="apple-itunes-app" content="app-id=Ứng Dụng Của Bạn, app-argument=null" />
      <link rel="alternate" href="https://website-cfa99.vercel.app/#/welcome" />
      <div className="min-h-screen bg-background transition-colors duration-300">
        {/* Header */}
        <LandingHeader />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Free Features Section */}
        <FreeFeatures />
        
        {/* Premium Features Section */}
        <PremiumFeatures />
        
        {/* Footer */}
        <FooterSection />

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 shadow-lg bg-gradient-to-r from-cfa99-yellow to-cfa99-yellow-light hover:from-cfa99-yellow-dark hover:to-cfa99-yellow transition-all duration-200"
            size="icon"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        )}
      </div>
    </article>
  );
}