import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// TODO: Replace with real client testimonials
const testimonials = [
  {
    name: "Alex Morgan",
    role: "Founder, TechStart",
    content: "Shashi delivered our MVP in record time. The code quality was exceptional and the communication was effortless.",
    image: "https://ui-avatars.com/api/?name=Alex+Morgan&background=random"
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    content: "One of the best developers I've worked with. He understood our requirements perfectly and added valuable insights.",
    image: "https://ui-avatars.com/api/?name=Sarah+Chen&background=random"
  },
  {
    name: "David Miller",
    role: "CTO, Innovation Labs",
    content: "Highly recommended! Transformative work on our dashboard performance. We saw a 50% increase in speed.",
    image: "https://ui-avatars.com/api/?name=David+Miller&background=random"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100 dark:text-blue-900/40" />
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 relative z-10 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover bg-slate-100" 
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
