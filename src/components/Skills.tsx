import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaReact, FaGitAlt, FaGithub, FaCube } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: 'React', icon: <FaReact size={32} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} /> },
  { name: 'TypeScript', icon: <SiTypescript size={32} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={32} /> },
  { name: 'Shadcn', icon: <FaCube size={32} /> },
  { name: 'React Native', icon: <TbBrandReactNative size={32} /> },
  { name: 'Git', icon: <FaGitAlt size={32} /> },
  { name: 'GitHub', icon: <FaGithub size={32} /> },
];

const Skills = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const listeners = useRef(new Map());

  useEffect(() => {
    const cards = gridRef.current ? (Array.from(gridRef.current.children) as HTMLDivElement[]) : [];

    // --- SNOWFLAKE EFFECT LOGIC ---
    const createSnowflake = (card: HTMLDivElement) => {
      const flake = document.createElement('div');
      
      // Fixed: Color set to Orange, subtle opacity for a glow effect
      flake.className = 'absolute bg-primary rounded-full pointer-events-none opacity-70';
      const size = Math.random() * 3 + 1; 
      flake.style.width = `${size}px`;
      flake.style.height = `${size}px`;
      flake.style.filter = 'blur(1px)';
      
      flake.style.left = `${Math.random() * 100}%`;
      flake.style.top = `-5px`;

      card.appendChild(flake);

      gsap.to(flake, {
        y: card.offsetHeight + 10,
        x: `+=${Math.random() * 20 - 10}`, 
        duration: Math.random() * 4 + 3, // Slower fall speed
        ease: "none",
        onComplete: () => flake.remove(),
      });
    };

    const intervals: ReturnType<typeof setInterval>[] = [];

    cards.forEach((card) => {
      const interval = setInterval(() => createSnowflake(card), 800); 
      intervals.push(interval);
    });

    // --- HOVER ANIMATION LOGIC ---
    cards.forEach((el) => {
      if (el) {
        const tween = gsap.fromTo(el, { y: 0 }, {
          y: -10,
          duration: 0.3,
          ease: 'power2.out',
          paused: true,
          onReverseComplete: () => { gsap.set(el, { y: 0 }); },
        });

        const play = () => tween.play();
        const reverse = () => tween.reverse();
        listeners.current.set(el, { play, reverse });
        el.addEventListener('mouseenter', play);
        el.addEventListener('mouseleave', reverse);
      }
    });

    return () => {
      intervals.forEach(clearInterval);
      cards.forEach((el) => {
        if (el && listeners.current.has(el)) {
          const { play, reverse } = listeners.current.get(el);
          el.removeEventListener('mouseenter', play);
          el.removeEventListener('mouseleave', reverse);
        }
      });
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 font-mono"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          My Tech Stack
        </motion.h1>
        <motion.p
          className="text-2xl text-gray-400 mb-12 font-script"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          List of technologies and frameworks I have expertise in.
        </motion.p>

        <motion.div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              // relative and overflow-hidden ensures snow stays inside the card
              className="relative overflow-hidden flex flex-col items-start justify-center p-6 border border-primary rounded-lg shadow-lg hover:shadow-orange-500/50 transition-shadow duration-300 font-serif bg-transparent"
              variants={itemVariants}
            >
              {/* Content placed above the snow using z-10 */}
              <div className="relative z-10 text-primary mb-4">{skill.icon}</div>
              <h3 className="relative z-10 text-lg font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;