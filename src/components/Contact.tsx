import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Pen, Briefcase } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', projectType: 'General Inquiry', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:shashivardhan@example.com',
      color: 'hover:text-red-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/shashivardhan-dev',
      color: 'hover:text-slate-600 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/shashivardhan1/',
      color: 'hover:text-blue-700',
    },
    {
      name: 'Mobile',
      icon: Send,
      href: 'tel:+916303213224',
      color: 'hover:text-green-500',
    },
    {
      name: 'Blog',
      icon: Pen,
      href: 'https://hashnode.com/@Shashi-Dev',
      color: 'hover:text-green-500',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Start a Project
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and how I can help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I'm currently accepting new freelance projects. Whether it's a new website, 
              app development, or technical consulting, I'm here to deliver results.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-4 text-slate-600 dark:text-slate-400 ${link.color} transition-colors`}
                >
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center shadow-md">
                    <link.icon className="w-6 h-6" />
                  </div>
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-700 focus:ring-blue-600'
                  } rounded-lg focus:ring-2 focus:border-transparent transition-all text-slate-900 dark:text-white`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-700 focus:ring-blue-600'
                  } rounded-lg focus:ring-2 focus:border-transparent transition-all text-slate-900 dark:text-white`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Project Type
                </label>
                <div className="relative">
                  <Briefcase className="absolute top-3.5 left-4 w-5 h-5 text-slate-400" />
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-900 dark:text-white appearance-none"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Full Stack App">Full Stack Application</option>
                    <option value="Website Development">Website Development</option>
                    <option value="API Integration">API Integration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-700 focus:ring-blue-600'
                  } rounded-lg focus:ring-2 focus:border-transparent transition-all resize-none text-slate-900 dark:text-white`}
                  placeholder="Tell me about your project, timeline, and budget..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 dark:text-green-400 text-center font-medium"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 dark:text-red-400 text-center font-medium"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
