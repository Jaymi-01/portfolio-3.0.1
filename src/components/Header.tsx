import { useState, useEffect } from 'react';
import { AlignJustify, X } from 'lucide-react';

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
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
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
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/" className="font-mono text-primary">Jaymi.tsx</a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-serif">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors duration-300 font-medium ${
                activeLink === link.id ? 'text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
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

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="border-t border-gray-800 mt-4 pt-4 pb-4">
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