import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Play,
  Code2,
  ArrowLeft,
  CheckCircle,
  Check,
  Copy,
  X,
} from "lucide-react";
import NotFound from "../NotFound/NotFound";
import projectsData from "../../utils/projectsData";

// Project data - add more projects here

function Project() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const projectName = queryParams.get("project");
  const [showVideo, setShowVideo] = useState(false);

  const project = projectName ? projectsData(projectName) : null;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const videoRef = useRef(null);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      // For HLS support, you might need hls.js library
      // But let's try native first
      videoRef.current
        .play()
        .catch((err) => console.log("Autoplay prevented:", err));
    }
  }, [showVideo]);

  const handleBackToProjects = () => {
    console.log("Back to Projects");
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectName]);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };
  if (!project) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={handleBackToProjects}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-600 dark:text-slate-400"
              >
                {project.tagline}
              </motion.p>
            </div>

            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-4"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-800 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">View Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-medium">Live Demo</span>
                </a>
              </motion.div>

              {project.demoCredentials && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-3"
                >
                  <p className="text-xs font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Demo Credentials:
                  </p>
                  <div className="space-y-2 text-xs text-blue-800 dark:text-blue-200">
                    <div className="flex items-center gap-2">
                      <span className="font-medium whitespace-nowrap">
                        Email:
                      </span>
                      <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded flex-1 truncate">
                        {project.demoCredentials.email}
                      </code>
                      <button
                        onClick={() =>
                          handleCopy(project.demoCredentials!.email, "email")
                        }
                        className="p-1.5 hover:bg-blue-100 dark:hover:bg-blue-900 rounded transition-colors flex-shrink-0"
                        title="Copy email"
                      >
                        {copiedField === "email" ? (
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium whitespace-nowrap">
                        Password:
                      </span>
                      <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded flex-1">
                        {project.demoCredentials.password}
                      </code>
                      <button
                        onClick={() =>
                          handleCopy(
                            project.demoCredentials!.password,
                            "password"
                          )
                        }
                        className="p-1.5 hover:bg-blue-100 dark:hover:bg-blue-900 rounded transition-colors flex-shrink-0"
                        title="Copy password"
                      >
                        {copiedField === "password" ? (
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 mb-10">
            <div className="aspect-video bg-slate-200 dark:bg-slate-800 relative group">
              {!showVideo ? (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                    onClick={() => setShowVideo(true)}
                  >
                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative w-full h-full bg-black">
                  <video
                    ref={videoRef}
                    className="w-full h-full"
                    controls
                    autoPlay
                    loop
                    playsInline
                  >
                    <source
                      src={project.videoUrl}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black/90 rounded-full transition-colors z-50"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-800 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {tech.name}
                      </h3>
                      <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                        {tech.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-600 transition-colors"
                >
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
