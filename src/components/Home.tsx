import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col items-start max-w-4xl">
          <motion.h1
            className="text-6xl md:text-8xl font-bold font-mono uppercase mb-4"
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
            className='font-script text-lg/7 md:text-xl/8 font-semibold mb-4 tracking-normal md:tracking-wide'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Here you will find a curated selection of frontend projects where creativity meets functionality. Each piece reflects my commitment to solving real problems through clean code, thoughtful design, and experiences that users actually enjoy.
          </motion.p>
          <motion.a
            href="/Joel-Miller-Resume.pdf"
            download
            className="bg-primary hover:bg-orange-600 text-white font-extrabold py-3 px-6 rounded-2xl transition-colors duration-300"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Download my CV
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Home;