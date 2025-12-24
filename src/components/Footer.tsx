import { ArrowUp, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#1A1A18] text-white py-8">
      <div className="container mx-auto px-4 md:px-0">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-end justify-between">
          {/* Copyright - Left on Desktop */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Jaymi. All rights reserved.
          </p>

          {/* Right Section: Social Media Links & Back to Top */}
          <div className="flex flex-col items-end">
            {/* Social Media Links */}
            <div className="flex space-x-6 mb-2">
              
              <a href="https://x.com/Jaymi_tsx" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com/in/jaymi1001" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Jaymi-01" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300">
                <Github size={24} />
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-gray-400 text-xs hover:text-orange-400 transition-colors duration-300"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden justify-between items-start">
          {/* Copyright - Left on Mobile */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Jaymi. All rights reserved.
          </p>

          {/* Right Section: Social Media Links & Back to Top */}
          <div className="flex flex-col items-end">
            {/* Social Media Links - Right on Mobile */}
            <div className="flex space-x-4 mb-2">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Jaymi-01" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300">
                <Github size={20} />
              </a>
            </div>

            {/* Back to Top - Below Social Links */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-1 text-gray-400 text-xs hover:text-orange-400 transition-colors duration-300"
            >
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;