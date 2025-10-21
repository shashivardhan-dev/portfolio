import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "FiftyFive Technologies",
    role: "Senior Full Stack Developer",
    period: " JULY 2022 - Present",
    achievements: [
      "Developed and maintained an E-Commerce platform serving 50,000+ users, selling digital subscriptions with multiple payment gateways (Stripe, NetsEasy)  using Node.js, Express.js, and PostgreSQL",
      "Implemented subscription management features, leading to a 30% increase in user retention through automatic recurring payments and voucher-based discounts",
      "Optimized admin operations, improving order, subscription, voucher, payment, and refund management—reducing manual effort by 40%",
      "Designed and developed an admin panel, cutting down data retrieval time by 50% and streamlining operational efficiency",
      "Successfully integrated Stripe, ensuring 99.9% payment success rate and reducing payment failures by 20%",
    ],
  },
  {
    company: "FunctionUp",
    role: "Full Stack MERN Developer",
    period: "FEBRUARY 2022  -  JULY 2022",
    achievements: [
      "Gained hands-on experience in Node.js, Express.js, and MongoDB (Mongoose) for backend development",
      "Implemented AWS S3 and AWS SNS for scalable cloud storage and notifications",
      "Built efficient caching solutions using Redis to optimize system performance",
      "Followed industry best practices in coding, API development, and version control (Git)",
      "Actively participated in coding competitions on platforms like HackerRank and CodeZinger",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="md:flex-shrink-0 md:w-8 relative">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="hidden md:flex absolute left-0 top-2 w-8 h-8 bg-blue-600 rounded-full items-center justify-center shadow-lg"
                    >
                      <Briefcase className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-slate-500 dark:text-slate-400 font-medium mt-2 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                            ▹
                          </span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
