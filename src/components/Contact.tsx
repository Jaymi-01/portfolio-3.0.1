// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
// import { SiGmail } from "react-icons/si";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Thank you! I will get back to you shortly.");
//   };

//   return (
//     <section id="contact" className="min-h-screen flex items-center py-20">
//       <div className="container mx-auto px-4 md:px-0">
        
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold font-mono">
//             /contact<span className="text-primary">.</span>
//           </h2>
//         </motion.div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
//           {/* Left Side: Contact Form with Gray Border */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="border border-gray-700 p-8 rounded-2xl"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-xs font-mono text-primary uppercase tracking-widest mb-3">Name</label>
//                 <input 
//                   type="text" 
//                   required
//                   className="w-full bg-transparent border border-gray-700 rounded-lg py-3 px-4 focus:border-primary outline-none transition-colors font-serif"
//                   placeholder="Your Name"
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-mono text-primary uppercase tracking-widest mb-3">Email Address</label>
//                 <input 
//                   type="email" 
//                   required
//                   className="w-full bg-transparent border border-gray-700 rounded-lg py-3 px-4 focus:border-primary outline-none transition-colors font-serif"
//                   placeholder="email@example.com"
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-mono text-primary uppercase tracking-widest mb-3">Message</label>
//                 <textarea 
//                   rows={4} 
//                   required
//                   className="w-full bg-transparent border border-gray-700 rounded-lg py-3 px-4 focus:border-primary outline-none transition-colors resize-none font-serif"
//                   placeholder="How can I help you?"
//                   onChange={(e) => setFormData({...formData, message: e.target.value})}
//                 ></textarea>
//               </div>
//               <button 
//                 type="submit" 
//                 className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-orange-600 transition-all font-mono uppercase tracking-widest text-sm"
//               >
//                 Send Message
//               </button>
//             </form>
//           </motion.div>

//           {/* Right Side: Info & Socials with Gray Borders */}
//           <div className="flex flex-col gap-8">
            
//             {/* Get in Touch Info Box */}
//             <motion.div 
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="border border-gray-700 p-8 rounded-2xl flex-1"
//             >
//               <h3 className="text-3xl font-bold mb-6 font-mono">Get in touch</h3>
//               <p className="text-gray-400 text-lg leading-relaxed mb-10 font-serif">
//                 I can help you design, improve, and build on your new or existing projects. 
//                 Feel free to get in touch with me.
//               </p>
              
//               <div className="space-y-6 font-mono">
//                 <div className="flex items-center gap-4 group">
//                   <div className="p-3 border border-gray-700 rounded-full text-primary group-hover:border-primary transition-colors">
//                     <FaEnvelope size={18} />
//                   </div>
//                   <span className="text-gray-300">millerjoel7597@email.com</span>
//                 </div>
//                 <div className="flex items-center gap-4 group">
//                   <div className="p-3 border border-gray-700 rounded-full text-primary group-hover:border-primary transition-colors">
//                     <FaPhone size={18} />
//                   </div>
//                   <span className="text-gray-300">+234 809 717 7851</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Connect Socials Box */}
//             <motion.div 
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="border border-gray-700 p-8 rounded-2xl"
//             >
//               <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-8">Connect with me</h4>
//               <div className="flex gap-6">
//                 <a href="#" className="p-4 border border-gray-700 rounded-xl text-gray-400 hover:text-primary hover:border-primary transition-all transform hover:-translate-y-1">
//                   <FaLinkedin size={24} />
//                 </a>
//                 <a href="#" className="p-4 border border-gray-700 rounded-xl text-gray-400 hover:text-primary hover:border-primary transition-all transform hover:-translate-y-1">
//                   <FaGithub size={24} />
//                 </a>
//                 <a href="#" className="p-4 border border-gray-700 rounded-xl text-gray-400 hover:text-primary hover:border-primary transition-all transform hover:-translate-y-1">
//                   <SiGmail size={24} />
//                 </a>
//                 <a href="#" className="p-4 border border-gray-700 rounded-xl text-gray-400 hover:text-primary hover:border-primary transition-all transform hover:-translate-y-1">
//                   <FaTwitter size={24} />
//                 </a>
//               </div>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Contact = () => {
  const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    socialRefs.current.forEach((el) => {
      if (!el) return;

      const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
      const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = el.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.4);
        yTo(y * 0.4);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const socials = [
    { Icon: FaLinkedin, link: "https://linkedin.com/in/jaymi1001", target: "_blank", rel: "noopener noreferrer" },
    { Icon: FaGithub, link: "https://github.com/Jaymi-01" },
    { Icon: FaEnvelope, link: "mailto:millerjoel7597@gmail.com" },
    { Icon: FaTwitter, link: "https://x.com/Jaymi_tsx", target: "_blank", rel: "noopener noreferrer" }
  ];

  return (
    <section id="contact" className="py-24 bg-transparent text-white relative">
      <div className="container mx-auto px-4">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-mono">Get in touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          
          <div className="flex flex-col gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="border border-gray-700 p-8 rounded-2xl text-center bg-[#1E1E1C]/30">
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-serif max-w-2xl mx-auto">
                I can help you design, improve, and build on your new or existing projects. 
                Feel free to get in touch with me.
              </p>
              
              <div className="flex flex-col items-start gap-6 font-mono w-fit mx-auto">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 border border-gray-700 rounded-full text-primary group-hover:border-primary transition-colors">
                    <FaEnvelope size={18} />
                  </div>
                  <a href="mailto:millerjoel7597@gmail.com" className="text-gray-300 hover:text-primary transition-colors break-all">
                    millerjoel7597@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 border border-gray-700 rounded-full text-primary group-hover:border-primary transition-colors">
                    <FaPhone size={18} />
                  </div>
                  <span className="text-gray-300">+234 809 717 7851</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="border border-gray-800 p-8 rounded-2xl text-center bg-[#1E1E1C]/50">
              <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-8">Connect with me</h4>
              <div className="grid grid-cols-2 sm:flex sm:justify-center gap-4 md:gap-6 max-w-[280px] sm:max-w-none mx-auto">
                {socials.map((social, i) => (
                  <a 
                    key={i} 
                    ref={(el) => (socialRefs.current[i] = el)}
                    href={social.link} 
                    target={social.target} 
                    rel={social.rel} 
                    className="p-3 border border-gray-700 rounded-xl text-gray-400 hover:text-primary hover:border-primary transition-all transform flex items-center justify-center bg-transparent"
                  >
                    <social.Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;