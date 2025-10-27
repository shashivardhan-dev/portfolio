import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import ThumbGen from  '../../public/projects/ThumbGen.png';
import Portfolio from '../../public/projects/Portfolio.png';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'YouTube Thumbnail Generator',
    url: 'youtube-thumbnail-generator',
    description: 'Full-stack web application for generating thumbnails for YouTube videos.',
    image: ThumbGen,
    github: 'https://github.com/shashivardhan-dev/ThumbGen',
    demo: 'http://43.204.220.56/',
    tags: ['Next.js', 'PostgreSQL', 'Gen AI', 'TypeScript', 'Websockets', 'Queues'],
  },
  {
    title: "Portfolio",
    url: "portfolio",
    description: "Personal portfolio website showcasing my skills and projects.",
    image: Portfolio,
    github: "https://github.com/shashivardhan-dev/portfolio",
    demo: "https://shashivardhan.is-a.dev",
    tags: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  }
];

export default function Projects() {
  const navigate = useNavigate();
  const onClick = (projectName: string) => {
    console.log(projectName);
   navigate(`/project?project=${projectName}`);
  };



  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing expertise across the full stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={ () =>onClick(project.url)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800"
            >
              <div className="relative overflow-hidden h-48 bg-slate-200 dark:bg-slate-800">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
