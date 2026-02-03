import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Home = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      xTo(x * 0.3);
      yTo(y * 0.3);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pb-20 md:pb-0">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col items-start max-w-4xl">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono uppercase mb-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome to my{' '}
            <motion.span
              className="text-primary inline-block"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{
                duration: 2,
                delay: 0.8,
                ease: "easeInOut"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              portfolio
            </motion.span>
          </motion.h1>
          <motion.p
            className='font-script text-base sm:text-lg md:text-xl font-semibold mb-6 tracking-normal md:tracking-wide max-w-2xl'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Here you will find a curated selection of frontend projects where creativity meets functionality. Each piece reflects my commitment to solving real problems through clean code, thoughtful design, and experiences that users actually enjoy.
          </motion.p>
          <div className="relative inline-block"> {/* Wrapper for isolation */}
            <motion.a
              ref={buttonRef}
              href="/Joel-Miller-Resume.pdf"
              download
              className="inline-block bg-primary hover:bg-orange-600 text-white font-extrabold py-3 px-6 rounded-2xl transition-colors duration-300"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Download my CV
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;