import { motion } from "framer-motion";
import { ArrowDown, Server, Cloud } from "lucide-react";

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
                      bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 
                      dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 px-4 pt-20"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm mb-6 border border-blue-200 dark:border-blue-800"
            >
              Available for Freelance Projects/Part Time Projects
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="block text-slate-900 dark:text-white mb-2">
                Hi, I'm
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Shashivardhan Reddy
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
              I help startups and businesses build scalable web apps that convert users and handle real traffic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToServices}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                See My Services
              </button>

              <a
                href="#contact"
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full shadow-md hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative max-w-md lg:max-w-lg w-full"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-white dark:bg-slate-800"
              >
                <img
                  src="/projects/ProfilePic.jpg" 
                  alt="Shashivardhan Reddy Bajari"
                  className="w-full h-full object-cover"
                />
             
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-10 -right-4 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                  JS
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Expert</p>
                  <p className="font-bold text-slate-800 dark:text-white">Developer</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5], x: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-8 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
              >
                 <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                  React
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Modern</p>
                  <p className="font-bold text-slate-800 dark:text-white">Frontend</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8], x: [-3, 3, -3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-24 -left-6 sm:-left-12 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                  <Server className="w-5 h-5" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Robust</p>
                  <p className="font-bold text-slate-800 dark:text-white">Backend</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-6, 6, -6], x: [3, -3, 3] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-32 -right-8 sm:-right-12 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <Cloud className="w-5 h-5" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Scalable</p>
                  <p className="font-bold text-slate-800 dark:text-white">Cloud</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-slate-400 dark:text-slate-600" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}
