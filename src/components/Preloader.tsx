import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const codeLines = [
  "Initialising system...",
  "Loading core modules...",
  "Verifying integrity...",
  "Connecting to server...",
  "Downloading assets...",
  "Optimizing interface...",
  "Configuring animations...",
  "Establishing secure connection...",
  "Access granted.",
  "Welcome, User."
];

const Preloader = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    
    // Disable body scroll when loading
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      if (currentIndex >= codeLines.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = 'unset';
        }, 800);
        return;
      }

      setLines(prev => [...prev, codeLines[currentIndex]]);
      currentIndex++;

      // Auto-scroll to bottom
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }

    }, 200); // Speed of new lines appearing

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex flex-col justify-center items-center font-mono text-sm sm:text-base p-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="w-full max-w-lg border border-primary/30 bg-black/50 p-6 rounded-lg shadow-[0_0_20px_rgba(217,154,108,0.1)]">
            <div className="flex items-center gap-2 mb-4 border-b border-primary/20 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="ml-auto text-primary/50 text-xs">TERMINAL</span>
            </div>
            
            <div 
              ref={scrollRef}
              className="h-64 overflow-hidden flex flex-col justify-end space-y-1"
            >
              {lines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-primary font-mono"
                >
                  <span className="text-primary/40 mr-2">{`>`}</span>
                  {line}
                </motion.div>
              ))}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-4 bg-primary inline-block ml-1"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;