import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const contactMethods = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "sergioponcacastro@gmail.com",
      link: "mailto:sergioponcacastro@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+34 685 33 57 31",
      link: "tel:+34685335731",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Sevilla, España",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/sergiioponce0",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sergio-ponce-castro-3163a2338/",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full"
        style={{ opacity, scale }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  className="group p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {method.link ? (
                    <a
                      href={method.link}
                      className="flex items-center gap-4"
                      target={method.link.startsWith("http") ? "_blank" : undefined}
                      rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-xs text-white/60 mb-0.5">{method.label}</p>
                        <p className="text-sm text-white/90">{method.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-xs text-white/60 mb-0.5">{method.label}</p>
                        <p className="text-sm text-white/90">{method.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Card */}
          <motion.div
            className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl tracking-tight mb-3">
                {t("contact.cta.title")}
              </h3>
              <p className="text-sm text-white/90 mb-6 leading-relaxed">
                {t("contact.cta.desc")}
              </p>

              <motion.a
                href="mailto:sergioponcacastro@gmail.com?subject=Contacto%20desde%20Portfolio&body=Hola%20Sergio,%0D%0A%0D%0A"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-white text-black rounded-full group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t("contact.cta.button")}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 text-sm rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                <span className="text-white/70 group-hover:text-white transition-colors">
                  {social.label}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xs text-white/40 mb-1">
            {t("contact.footer1")}
          </p>
          <p className="text-xs text-white/30">{t("contact.footer2")}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}