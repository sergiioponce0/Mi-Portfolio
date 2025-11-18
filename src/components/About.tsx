import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Code, Users, Lightbulb, Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const highlights = [
    {
      icon: Code,
      title: t("about.feature1.title"),
      description: t("about.feature1.desc"),
    },
    {
      icon: Rocket,
      title: t("about.feature2.title"),
      description: t("about.feature2.desc"),
    },
    {
      icon: Users,
      title: t("about.feature3.title"),
      description: t("about.feature3.desc"),
    },
    {
      icon: Lightbulb,
      title: t("about.feature4.title"),
      description: t("about.feature4.desc"),
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12"
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
            {t("about.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="w-12 h-12 mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bio */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {t("about.bio")}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}