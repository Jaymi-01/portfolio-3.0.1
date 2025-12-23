import { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#1A1A18] p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/" className="font-mono">Jaymi</a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className={`text-white hover:text-orange-400 transition-colors duration-300 ${
              activeLink === 'home' ? 'text-orange-500' : ''
            }`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={`text-white hover:text-orange-400 transition-colors duration-300 ${
              activeLink === 'about' ? 'text-orange-500' : ''
            }`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </a>
          <a
            href="#skills"
            className={`text-white hover:text-orange-400 transition-colors duration-300 ${
              activeLink === 'skills' ? 'text-orange-500' : ''
            }`}
            onClick={() => handleLinkClick('skills')}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`text-white hover:text-orange-400 transition-colors duration-300 ${
              activeLink === 'projects' ? 'text-orange-500' : ''
            }`}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`text-white hover:text-orange-400 transition-colors duration-300 ${
              activeLink === 'contact' ? 'text-orange-500' : ''
            }`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
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
      <div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {/* Horizontal separator */}
        <div className="border-t border-gray-600 mt-4 mb-2"></div>
        
        <ul className="flex flex-col space-y-2">
          <li>
            <a
              href="#home"
              className={`block text-white hover:bg-gray-600 py-2 rounded-md transition-colors duration-300 ${
                activeLink === 'home' ? 'bg-orange-500' : ''
              }`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a> <a
              href="#about"
              className={`block text-white hover:bg-gray-600 py-2 rounded-md transition-colors duration-300 ${
                activeLink === 'about' ? 'bg-orange-500' : ''
              }`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`block text-white hover:bg-gray-600 py-2 rounded-md transition-colors duration-300 ${
                activeLink === 'skills' ? 'bg-orange-500' : ''
              }`}
              onClick={() => handleLinkClick('skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`block text-white hover:bg-gray-600 py-2 rounded-md transition-colors duration-300 ${
                activeLink === 'projects' ? 'bg-orange-500' : ''
              }`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`block text-white hover:bg-gray-600 py-2 rounded-md transition-colors duration-300 ${
                activeLink === 'contact' ? 'bg-orange-500' : ''
              }`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;