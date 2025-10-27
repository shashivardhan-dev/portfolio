import { motion } from "framer-motion";
import { Download } from "lucide-react";

const techStack = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "AWS",
    icon: "https://www.kindpng.com/picc/m/152-1522129_how-to-manage-and-automate-aws-ebs-snapshots.png",
  },
  {
    name: "Stripe",
    icon: "https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "CI/CD",
    icon: "https://www.pngfind.com/pngs/m/137-1375379_ci-cd-with-github-travis-ci-and-heroku.png",
  },
  {
    name: "Github Actions",
    icon: "https://raw.githubusercontent.com/gilbarbara/logos/de2c1f96ff6e74ea7ea979b43202e8d4b863c655/logos/github-actions.svg",
  },
];

export default function About() {
  const imageKitResumeUrl =
   "https://ik.imagekit.io/shashi/Shashivardhan_Resume_Full_Stack.pdf"

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-20"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            I'm a passionate Full Stack MERN Developer with expertise in
            building scalable, high-performance web applications. With
            experience at leading tech companies, I specialize in creating
            seamless user experiences and robust backend systems.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            My focus is on writing clean, maintainable code and leveraging
            modern technologies to solve complex problems. I'm committed to
            continuous learning and staying updated with the latest industry
            trends.
          </p>

          <motion.a
            href={`${imageKitResumeUrl}?t=${Date.now()}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-10">
            Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                  />
                  <span className="font-medium text-slate-900 dark:text-white">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
