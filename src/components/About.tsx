import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const aboutTitleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startScrambleAnimation = () => {
    const el = aboutTitleRef.current;
    if (el) {
      const originalText = el.innerText;
      let iteration = 0;
      const interval = setInterval(() => {
        el.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) {
              return originalText[index];
            }
            return String.fromCharCode(65 + Math.floor(Math.random() * 26));
          })
          .join("");
        if (iteration >= originalText.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startScrambleAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} id="about" className="text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image - Left on Desktop */}
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <img
                src="/joel.jpg"
                alt="Joel"
                className="w-full h-auto rounded-lg"
              />
              {/* Top Left Corner */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
              {/* Top Right Corner */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
              {/* Bottom Left Corner */}
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
              {/* Bottom Right Corner */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
            </div>
          </motion.div>

          {/* About Me Text - Right on Desktop */}
          <motion.div
            className="w-full md:w-2/3 text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 ref={aboutTitleRef} className="text-4xl md:text-5xl font-bold mb-4 font-mono">
              About Me
            </h1>
            <motion.p
              className="text-2xl text-gray-400 mb-4 font-script"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              I'm a passionate and creative software developer with a love for building beautiful and functional web applications.
            </motion.p>
            <motion.p
              className="text-2xl text-gray-400 mb-4 font-script"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              I have experience in a variety of technologies, including React, TypeScript, and Node.js. I'm always eager to learn new things and take on new challenges.
            </motion.p>
            <motion.p
              className="text-2xl text-gray-400 font-script"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              You'll probably catch me watching anime, reading novel, manhwa and manga, or playing video games when I'm not coding.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;