import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "TezCredit (Finagle Financial Pvt Ltd)",
    role: "Full Stack Developer",
    period: "DEC 2025 - Present",
    achievements: [
      "Contributed to the design and implementation of loan origination, customer onboarding, KYC, credit assessment, and disbursement workflows for a digital lending platform using Node.js, Nest.js, React, and PostgreSQL",
      "Implemented idempotency handling for money movement APIs supporting 25K+ loan disbursals, preventing duplicate transactions and ensuring reliable fund transfers",
      "Designed and implemented a lead management system handling 10K+ leads per day, supporting customer acquisition, lead attribution, and onboarding workflows",
      "Developed CKYC (Central KYC) search and download functionality to streamline customer verification and regulatory compliance",
      "Optimized MIS reports, reducing report generation time by 20% and improving data accuracy for marketing and support teams",
      "Built a health metrics dashboard for real-time monitoring of system and service health, and resolved 20+ production bugs across the full stack",
    ],
  },
  {
    company: "FiftyFive Technologies",
    role: "Software Engineer",
    period: "JULY 2022 - NOV 2025",
    achievements: [
      "Developed and maintained a high-traffic E-Commerce platform for digital subscriptions, integrating Stripe and NetsEasy payment gateways using Node.js, Express.js, and PostgreSQL",
      "Boosted user retention by 30% through automated subscription renewals and a voucher-based discount system",
      "Architected and maintained a centralized Redux store to streamline state management and reduce component re-renders by 25%",
      "Integrated Redis caching, improving API response times by 40% and reducing database query load by 30%",
      "Optimized payment pipelines in Stripe, achieving a 99% transaction success rate",
    ],
  },
  {
    company: "FunctionUp",
    role: "Backend Developer Trainee",
    period: "FEB 2022 - JULY 2022",
    achievements: [
      "Engineered backend microservices using Node.js and Express.js, integrating MongoDB (Mongoose) for dynamic data models",
      "Leveraged AWS S3 and SNS for scalable file storage and event-driven notifications",
      "Enhanced backend efficiency through Redis caching, reducing average API latency by 25%",
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
