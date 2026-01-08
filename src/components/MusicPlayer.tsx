import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(24); // Default bottom-6 (24px)
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;
      const footerHeight = 120; // Estimated height of your footer

      // If we are close to the bottom, start pushing the button up
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
      audioRef.current.volume = 0.2; // Set volume to 20%
    }

    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setIsPlaying(false); // Reset state so it doesn't resume automatically
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Automatic playback started!
            })
            .catch((error) => {
              console.error("Audio playback failed:", error);
              // Auto-pause if playback fails (e.g. browser policy)
              setIsPlaying(false);
            });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="fixed right-6 z-50 transition-all duration-100 ease-out"
      style={{ bottom: `${bottomOffset}px` }}
    >
      <audio ref={audioRef} src="/jazz.mp3" loop />
      
      <motion.button
        onClick={togglePlay}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
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
        
        {/* Pulsing effect when playing */}
        {isPlaying && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-30 animate-ping"></span>
        )}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;