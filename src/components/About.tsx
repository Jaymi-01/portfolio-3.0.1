import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const About = () => {
  const aboutTitleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
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

    // Image Tilt Effect
    const image = imageRef.current;
    if (image) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = image.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        
        const rotateX = (y / height) * -20;
        const rotateY = (x / width) * 20;

        gsap.to(image, {
          rotateX,
          rotateY,
          duration: 0.5,
          ease: "power2.out",
          perspective: 1000
        });
      };

      const handleMouseLeave = () => {
        gsap.to(image, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      };

      image.addEventListener("mousemove", handleMouseMove);
      image.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        image.removeEventListener("mousemove", handleMouseMove);
        image.removeEventListener("mouseleave", handleMouseLeave);
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} id="about" className="text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Image - Left on Desktop */}
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div ref={imageRef} className="relative group transition-all duration-300" style={{ transformStyle: "preserve-3d" }}>
              <img
                src="/joel.jpg"
                alt="Joel"
                className="w-full h-auto rounded-lg shadow-2xl transition-all duration-300"
              />
              {/* Top Left Corner */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-lg pointer-events-none"></div>
              {/* Top Right Corner */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-lg pointer-events-none"></div>
              {/* Bottom Left Corner */}
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-lg pointer-events-none"></div>
              {/* Bottom Right Corner */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-lg pointer-events-none"></div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
            </div>
          </motion.div>

          {/* About Me Text - Right on Desktop */}
          <motion.div
            className="w-full md:w-2/3 text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 ref={aboutTitleRef} className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              About Me
            </h1>
            <motion.div className="space-y-6">
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-400 font-script leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                I'm a passionate and creative software developer with a love for building beautiful and functional web applications.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-400 font-script leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                I have experience in a variety of technologies, including React, and Nextjs. I'm always eager to learn new things and take on new challenges.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-400 font-script leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                You'll probably catch me watching anime, reading novel, manhwa and manga, or playing video games when I'm not coding.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;