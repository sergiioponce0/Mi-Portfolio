import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Experience() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const experiences = [
    {
      title: t("experience.job1.title"),
      company: t("experience.job1.company"),
      location: t("experience.job1.location"),
      period: t("experience.job1.period"),
      description: [
        t("experience.job1.desc1"),
        t("experience.job1.desc2"),
      ],
    },
    {
      title: t("experience.job2.title"),
      company: t("experience.job2.company"),
      location: t("experience.job2.location"),
      period: t("experience.job2.period"),
      description: [
        t("experience.job2.desc1"),
        t("experience.job2.desc2"),
        t("experience.job2.desc3"),
      ],
    },
  ];

  const education = [
    {
      degree: t("experience.edu1.title"),
      institution: t("experience.edu1.institution"),
      period: t("experience.edu1.period"),
      status: t("experience.edu1.status"),
    },
    {
      degree: t("experience.edu2.title"),
      institution: t("experience.edu2.institution"),
      period: t("experience.edu2.period"),
      status: t("experience.edu2.status"),
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

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
            {t("experience.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl mb-6 tracking-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t("experience.work")}
            </motion.h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg mb-1">{exp.title}</h4>
                    <p className="text-sm text-white/70 mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-white/50 mb-3">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-xs text-white/60">
                          <span className="text-blue-500 mt-0.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl mb-6 tracking-tight"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t("experience.education")}
            </motion.h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: -10 }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg mb-1">{edu.degree}</h4>
                    <p className="text-sm text-white/70 mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-xs text-white/50">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                      edu.status === t("experience.edu1.status")
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    }`}
                  >
                    {edu.status}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Certifications */}
            <motion.div
              className="p-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg mb-4">{t("experience.certifications")}</h4>
              <div className="space-y-3">
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-xl flex-shrink-0">🇬🇧</span>
                  <div>
                    <p className="text-sm text-white">{t("experience.cert1")}</p>
                    <p className="text-xs text-white/60">{t("experience.cert1.issuer")}</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-xl flex-shrink-0">🚗</span>
                  <div>
                    <p className="text-sm text-white">{t("experience.cert2")}</p>
                    <p className="text-xs text-white/60">{t("experience.cert2.issuer")}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
