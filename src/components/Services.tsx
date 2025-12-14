import { motion } from "framer-motion";
import { Code, Server, Rocket, Layout } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web applications built with the MERN stack. From concept to deployment.",
    icon: Code,
    features: ["Custom Web Apps", "Admin Dashboards", "SaaS Platforms"],
    price: "Custom Quote"
  },
  {
    title: "Frontend Architecture",
    description: "Pixel-perfect, responsive UIs with React and Tailwind CSS. Smooth animations included.",
    icon: Layout,
    features: ["Responsive Design", "Performance Optimization", "Interactive UI"],
    price: "From $500"
  },
  {
    title: "Backend & API Design",
    description: "Robust RESTful APIs and database schema design for scalable applications.",
    icon: Server,
    features: ["API Development", "Database Optimization", "Authentication & Security"],
    price: "From $400"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I help businesses turn ideas into reality with high-quality software solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto">
                 {/* Optional: Add specific call to action or pricing indicator */}
                 {/* <span className="text-sm font-semibold text-slate-500 dark:text-slate-500">{service.price}</span> */}
                 <a href="#contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-2">
                    Start a Project <Rocket className="w-4 h-4" />
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
