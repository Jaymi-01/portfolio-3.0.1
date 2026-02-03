import { useState, useEffect } from 'react';
import { AlignJustify, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const Header = ({ activeLink, setActiveLink }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. SCROLL EFFECT LOGIC
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveLink(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveLink]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    setActiveLink(link);
    setIsOpen(false);
    
    const element = document.getElementById(link);
    if (element) {
      // Offset added to prevent header from covering section title
      // We calculate the position relative to the document
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-[#1A1A18] p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-white text-2xl font-bold">
          <a href="/" className="font-mono text-primary">Jaymi.tsx</a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-serif">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative px-4 py-2 transition-colors duration-300 font-medium ${
                activeLink === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {activeLink === link.id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 bg-primary/20 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isOpen ? <X size={28} /> : <AlignJustify size={28} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`md:hidden absolute left-0 right-0 bg-[#1A1A18] shadow-lg border-t border-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'top-full opacity-100 visible' : 'top-[120%] opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`block py-2 text-lg transition-colors duration-300 ${
                    activeLink === link.id ? 'text-primary' : 'text-white'
                  }`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;