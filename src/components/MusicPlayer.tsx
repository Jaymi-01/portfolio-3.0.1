import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(24);
  const [shakeTrigger, setShakeTrigger] = useState(0); // Used to re-trigger animation
  const audioRef = useRef<HTMLAudioElement>(null);

  // Trigger shake every 2 seconds if not interacted
  useEffect(() => {
    if (hasInteracted) return;

    const interval = setInterval(() => {
      setShakeTrigger(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [hasInteracted]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;
      const footerHeight = 120;

      if (scrollHeight - scrollPosition < footerHeight) {
        const newOffset = footerHeight - (scrollHeight - scrollPosition) + 24;
        setBottomOffset(newOffset);
      } else {
        setBottomOffset(24);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }

    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setIsPlaying(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!hasInteracted) setHasInteracted(true);
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {})
            .catch((error) => {
              console.error("Audio playback failed:", error);
              setIsPlaying(false);
            });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      className="fixed right-6 z-50"
      style={{ bottom: `${bottomOffset}px` }}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        y: { type: "spring", stiffness: 200, damping: 8 },
        opacity: { duration: 0.6 }
      }}
    >
      <audio ref={audioRef} src="/jazz.mp3" loop />
      
      {/* Wrapper for the shake animation to separate it from button interactions */}
      <motion.div
        animate={!hasInteracted ? {
          y: [0, -10, 10, -10, 10, 0],
        } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        key={shakeTrigger} // Key change forces re-render/animation
      >
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`relative flex items-center justify-center w-12 h-12 rounded-full border border-primary transition-all duration-300 ${
            isPlaying 
              ? 'bg-primary text-black shadow-[0_0_15px_rgba(217,154,108,0.5)]' 
              : 'bg-black/40 text-primary backdrop-blur-sm'
          }`}
          title={isPlaying ? "Pause Music" : "Play Jazz Music"}
        >
          {isPlaying ? <Pause size={20} /> : <Music size={20} />}
          
          {isPlaying && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-30 animate-ping"></span>
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default MusicPlayer;