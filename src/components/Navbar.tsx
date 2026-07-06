import { useState, useEffect } from 'react';
import ttLogo from '../../tt.png';

const navLinks = [
  { label: 'TÔI BẢN LĨNH', href: '#' },
  { label: 'CLB THUYẾT TRÌNH', href: '#about' },
  { label: 'THỂ LỆ', href: '#rules' },
  { label: 'TIMELINE', href: '#timeline' },
  { label: 'PARTNER', href: '#partner' },
  { label: 'BAN TỔ CHỨC', href: '#organizers' },
  { label: 'Q&A', href: '#qa' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white shadow-md text-brand-dark py-4' 
          : 'bg-transparent text-white py-6 border-b border-white/10'
      }`}
    >
      <div className="w-full px-4 md:px-8 flex items-center justify-center relative min-h-[24px]">
        
        {/* Logo */}
        <div className="absolute left-4 md:left-8 flex items-center h-full">
          <img 
            src={ttLogo} 
            alt="Câu lạc bộ Thuyết trình" 
            className="h-[18px] md:h-[24px] object-contain cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
          />
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 lg:gap-12 text-sm font-medium">
          {navLinks.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className={`transition-colors cursor-pointer ${
                isScrolled || isMobileMenuOpen
                  ? 'text-gray-600 hover:text-black font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="absolute right-4 md:hidden flex flex-col justify-center gap-[5px] w-6 h-full items-center focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-brand-dark' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-brand-dark' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-brand-dark' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] border-t border-gray-100 shadow-xl' : 'max-h-0 shadow-none'
        }`}
      >
        <div className="flex flex-col py-2 px-6">
          {navLinks.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="py-3 text-brand-dark font-medium border-b border-gray-100 last:border-none uppercase text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

    </header>
  );
};
