import { motion } from "framer-motion";
import { Laptop } from "lucide-react";

const freelanceWork = [
  {
    role: "Freelance Backend Developer",
    client: "Chat application",
    period: "2023 - Present",
    description: " delivering custom backend solutions for diverse business needs.",
    achievements: [
      "Built and maintained a chat application using Node.js.",
      "Implemented real-time messaging features using WebSockets.",
      "Integarated AWS S3 for file storage."
    ]
  }
];

export default function Freelance() {
  return (
    <section id="freelance" className="py-24 bg-slate-50 dark:bg-slate-950">
       <div className="max-w-6xl mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Freelance Work
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Independent projects and consulting for businesses worldwide.
            </p>
          </motion.div>

          <div className="space-y-8">
            {freelanceWork.map((job, index) => (
               <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-800"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Laptop className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    {job.role}
                                </h3>
                                <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">
                                    {job.client}
                                </p>
                            </div>
                            <span className="inline-block px-4 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold mt-2 sm:mt-0">
                                {job.period}
                            </span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 mb-6 italic">
                            {job.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {job.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                                    <span className="text-slate-700 dark:text-slate-300">
                                        {achievement}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
}
