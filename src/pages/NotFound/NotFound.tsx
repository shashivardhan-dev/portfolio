import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Mail, User, Palette } from 'lucide-react';
import { Variants } from 'framer-motion';
import {useNavigate } from "react-router-dom";

export default function NotFound() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const navigate = useNavigate();

  const scrollToWork = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollToHome = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const scrollToAbout = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };




  const quickLinks = [
    { icon: Home, label: 'Home', description: 'Back to homepage', btn: scrollToHome },
    { icon: Briefcase, label: 'Projects', description: 'View my work', btn: scrollToWork },
    { icon: User, label: 'About', description: 'Learn about me', btn: scrollToAbout },
    { icon: Mail, label: 'Contact', description: 'Get in touch', btn: scrollToContact },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle animated background grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(148 163 184 / 0.15) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Floating code brackets decoration */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-slate-300 dark:text-slate-700 text-6xl font-mono opacity-20"
      >
        {'</>'}
      </motion.div>
      
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 text-slate-300 dark:text-slate-700 text-6xl opacity-20"
      >
        <Palette size={80} strokeWidth={1} />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full relative z-10"
      >
        <div className="text-center mb-12">
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.span
              className="inline-block text-8xl md:text-[160px] font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              404
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-2"
          >
            Looks like this page doesn't exist in my portfolio yet.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-base text-slate-500 dark:text-slate-500 max-w-xl mx-auto"
          >
            Maybe it's still in development, or perhaps you followed a broken link. Let me help you find what you're looking for.
          </motion.p>
        </div>

        {/* Quick Navigation Cards */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h2 className="text-center text-slate-700 dark:text-slate-300 font-semibold mb-6">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.label}
                onClick={link.btn}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 cursor-pointer relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative">
                  <motion.div
                    animate={{
                      rotate: hoveredCard === index ? [0, -10, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 mx-auto"
                  >
                    <link.icon size={24} className="text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-center mb-1">{link.label}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 text-center">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12 px-4"
        >
          <p className="text-sm text-slate-400 dark:text-slate-600 font-mono">
            ERROR_CODE: 404 | PAGE_NOT_FOUND
          </p>
        </motion.div>
      </motion.div>

      {/* Corner accent decoration */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-400/20 to-indigo-400/20 rounded-full blur-3xl"
      />
    </div>
  );
}