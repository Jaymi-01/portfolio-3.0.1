import { FaGithub, FaExternalLinkAlt, FaDesktop, FaMobileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// 1. UPDATED DATA ARRAY WITH TAGS AND TYPE
const myProjects = [
  {
    id: 1,
    title: "Audiophile E-Commerce",
    description: "A fullstack E-commerce website with a sleek dark-mode dashboard and real-time inventory.",
    tags: ["React", "Typescript", "Convex", "TailwindCSS"],
    type: "desktop",
    image: "https://res.cloudinary.com/dquzcqxcy/image/upload/v1767781392/ege9qvkq0xzfckdv9sg8.png",
    github: "https://github.com/Jaymi-01/audiophile",
    demo: "https://jaymi-audiophile.vercel.app/",
  },
  {
    id: 2,
    title: "Eventup",
    description: "A platform designed to help hybrid-conference teams create, collaborate and celebrate together",
    tags: ["React", "Javascript", "TailwindCSS"],
    type: "desktop",
    image: "https://res.cloudinary.com/dquzcqxcy/image/upload/v1767795150/zt9pdemhfq1g7eac0ei4.png",
    github: "https://github.com/Jaymi-01/eventup",
    demo: "https://eventup-topaz.vercel.app/",
  },
  {
    id: 3,
    title: "Read Count",
    description: "An online book tracker application with social features.",
    tags: ["React Native", "Typescript", "Firebase"],
    type: "mobile",
    image: "https://res.cloudinary.com/dquzcqxcy/image/upload/v1767778893/n7e3rqkgwdi6serqtrnr.png",
    github: "https://github.com/Jaymi-01/readcount-new",
    demo: "https://appetize.io/app/b_xicmsnlrfqiytygofqp2ep4ru4",
  },
  {
    id: 4,
    title: "Afuni's Ticket App",
    description: "A ticketing website built using CRUD operation, with data displayed in real time.",
    tags: ["React", "Javascript", "TailwindCSS"],
    type: "desktop",
    image: "https://res.cloudinary.com/dquzcqxcy/image/upload/v1767780782/eaaowla898vb9mdppeul.png",
    github: "https://github.com/Jaymi-01/ticket-app-react",
    demo: "https://ticket-app-react.vercel.app/",
  },
  {
    id: 5,
    title: "AniRest E-Commerce",
    description: "A fullstack E-commerce designed for renting anime (both physical copies and digital access).",
    tags: ["Nextjs", "Typescript", "Shadcn", "Firebase", "Jikan API"],
    image: "https://res.cloudinary.com/dquzcqxcy/image/upload/v1769441623/k9lqdgrb4jwgskd6h5uv.png",
    github: "https://github.com/Jaymi-01/anirent",
    demo: "https://anirent.vercel.app/",
  }
];

// 2. INDIVIDUAL PROJECT CARD COMPONENT
const ProjectCard = ({ project, index }: { project: typeof myProjects[0], index: number }) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl border border-primary bg-[#1A1A18]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Thumbnail Container */}
      <div className="aspect-video w-full overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
        
        {/* Project Type Icon (Top-Left) */}
        <div className="absolute top-3 left-3 z-10 p-2 rounded-full bg-black/60 border border-primary text-primary backdrop-blur-sm" title={project.type === 'mobile' ? 'Mobile App' : 'Desktop Website'}>
          {project.type === 'mobile' ? <FaMobileAlt size={16} /> : <FaDesktop size={16} />}
        </div>

        {/* Desktop Hover Overlay */}
        <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center z-20">
          <div className="flex gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              className="bg-white text-black p-3 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110"
              title="View GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href={project.demo} 
              target="_blank" 
              className="bg-primary text-white p-3 rounded-full hover:bg-orange-600 transition-all transform hover:scale-110"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 font-mono">{project.title}</h3>
        
        {/* --- NEW TECHNOLOGIES DIV --- */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] uppercase tracking-wider font-bold text-primary border border-primary/30 px-2 py-1 rounded-md bg-primary/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-script">{project.description}</p>
        
        {/* Mobile View Buttons */}
        <div className="flex md:hidden gap-3 mt-2">
          <a 
            href={project.github}
            className="flex items-center gap-2 text-xs font-bold text-white border border-gray-700 px-3 py-2 rounded-lg bg-gray-800/50"
          >
            <FaGithub /> GitHub
          </a>
          <a 
            href={project.demo}
            className="flex items-center gap-2 text-xs font-bold text-black px-3 py-2 rounded-lg bg-primary"
          >
            <FaExternalLinkAlt size={10} /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// 3. MAIN PROJECTS SECTION
const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-white">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;