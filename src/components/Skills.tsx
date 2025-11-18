import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function Skills() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skillCategories = [
    {
      category: t("skills.languages"),
      skills: ["Java", "Python", "HTML5/CSS3", "SQL"],
    },
    {
      category: t("skills.tools"),
      skills: ["Android Studio", "Git", "Excel", "Linux"],
    },
    {
      category: t("skills.soft"),
      skills: [
        t("skills.teamwork"),
        t("skills.communication"),
        t("skills.problemsolving"),
        t("skills.fastlearning"),
      ],
    },
  ];

  const languages = [
    { name: "Español", level: t("skills.native"), flag: "🇪🇸" },
    { name: "Inglés", level: t("skills.certified"), flag: "🇬🇧" },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full"
        style={{ opacity }}
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
            {t("skills.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl mb-4 tracking-tight">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-blue-500"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: skillIndex * 0.2,
                      }}
                    />
                    <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="p-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
            <h3 className="text-xl mb-4 text-center tracking-tight">{t("skills.idioms")}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <div>
                    <p className="text-sm text-white">{lang.name}</p>
                    <p className="text-xs text-white/60">{lang.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}