import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden 
                      bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 
                      dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 px-4"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 
                     bg-gradient-to-r from-slate-900 to-slate-700 
                     dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Shashivardhan Reddy Bajari
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-3xl font-semibold 
                     text-slate-700 dark:text-slate-300 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Full Stack MERN Developer
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-600 
                     dark:text-slate-400 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Building scalable web apps with modern tech.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 
                     text-white font-semibold rounded-lg shadow-lg hover:shadow-xl 
                     transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 
                     hover:bg-slate-50 dark:hover:bg-slate-700 
                     text-slate-900 dark:text-white font-semibold rounded-lg 
                     shadow-lg hover:shadow-xl transition-all duration-300 
                     transform hover:-translate-y-1 border border-slate-200 
                     dark:border-slate-700"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <ArrowDown className="w-6 h-6 text-slate-400 dark:text-slate-600" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}
