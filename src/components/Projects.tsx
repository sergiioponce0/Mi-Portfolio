import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github, Code, Camera, Lock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import carflexScreen1 from "figma:asset/3ac9d8ca7584ce992c4ceba7da094d2c4451c72d.png";
import carflexScreen2 from "figma:asset/336951075f1f0b6aa22fe5fb42a03fecb344205a.png";
import carflexScreen3 from "figma:asset/103d8a061cdb309c5ecd964153b33e3ba3f7e951.png";

export function Projects() {
  const ref = useRef(null);
  const { t, language } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const projects = [
    {
      title: t("projects.fantasy.title"),
      description: t("projects.fantasy.desc"),
      icon: Code,
      status: t("projects.status.completed"),
      technologies: ["Python", "Discord Bot", "Automation"],
      github: "https://github.com/sergiioponce0/FantasyBot",
      gradient: "from-purple-600 to-pink-600",
      showButton: true,
      buttonType: "code",
    },
    {
      title: t("projects.fitlens.title"),
      description: t("projects.fitlens.desc"),
      icon: Camera,
      status: t("projects.status.development"),
      technologies: ["Java", "Computer Vision", "ML"],
      github: "#",
      gradient: "from-green-600 to-emerald-600",
      showButton: true,
      buttonType: "locked",
    },
  ];

  const carflexDescriptions = {
    es: {
      title: "CarFlex - Plataforma de Alquiler de Vehículos",
      subtitle: "Aplicación web completa con gestión de usuarios, catálogo de vehículos y sistema de reservas",
      features: [
        "Sistema completo de autenticación y gestión de usuarios",
        "Catálogo interactivo de vehículos con filtros avanzados",
        "Sistema de reservas con calendario y disponibilidad en tiempo real",
        "Panel de administración para gestión de flota y usuarios",
        "Gestión de ciudades y ubicaciones de alquiler",
        "Interfaz intuitiva diseñada con CSS3 moderno",
        "Diseño responsive y accesible",
      ],
      tech: "Desarrollado con HTML5 y CSS3 puro, siguiendo las mejores prácticas de desarrollo web para ofrecer una experiencia de usuario fluida, responsive y profesional.",
    },
    en: {
      title: "CarFlex - Vehicle Rental Platform",
      subtitle: "Complete web application with user management, vehicle catalog and booking system",
      features: [
        "Complete authentication and user management system",
        "Interactive vehicle catalog with advanced filters",
        "Booking system with calendar and real-time availability",
        "Admin panel for fleet and user management",
        "City and rental location management",
        "Intuitive interface designed with modern CSS3",
        "Responsive and accessible design",
      ],
      tech: "Developed with pure HTML5 and CSS3, following web development best practices to deliver a smooth, responsive and professional user experience.",
    },
    de: {
      title: "CarFlex - Fahrzeugvermietungsplattform",
      subtitle: "Vollständige Webanwendung mit Benutzerverwaltung, Fahrzeugkatalog und Buchungssystem",
      features: [
        "Vollständiges Authentifizierungs- und Benutzerverwaltungssystem",
        "Interaktiver Fahrzeugkatalog mit erweiterten Filtern",
        "Buchungssystem mit Kalender und Echtzeit-Verfügbarkeit",
        "Admin-Panel für Flotten- und Benutzerverwaltung",
        "Stadt- und Mietstandortverwaltung",
        "Intuitive Benutzeroberfläche mit modernem CSS3",
        "Responsives und zugängliches Design",
      ],
      tech: "Entwickelt mit reinem HTML5 und CSS3, nach Best Practices der Webentwicklung für ein reibungsloses, responsives und professionelles Benutzererlebnis.",
    },
  };

  const currentCarflex = carflexDescriptions[language as keyof typeof carflexDescriptions];

  return (
    <section
      id="projects"
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
            {t("projects.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Projects Grid - FantasyBot y FitLens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-full p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none`} />

                  {/* Status Badge */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs ${
                        project.status === t("projects.status.development")
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          : "bg-green-500/20 text-green-300 border border-green-500/30"
                      }`}
                    >
                      {project.status}
                    </div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl mb-3 tracking-tight">{project.title}</h3>
                    <p className="text-sm text-white/60 mb-4 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.buttonType === "code" ? (
                        <a
                          href="https://github.com/sergiioponce0/FantasyBot"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-20 w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                          style={{ pointerEvents: 'auto' }}
                        >
                          <Github className="w-4 h-4" />
                          <span>{t("projects.code")}</span>
                        </a>
                      ) : (
                        <div
                          className="relative z-20 w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm rounded-full bg-white/5 border border-white/10 cursor-not-allowed opacity-60"
                        >
                          <Lock className="w-4 h-4" />
                          <span>{t("projects.status.development")}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CarFlex - Featured Project */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
            {/* Header */}
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl tracking-tight">{currentCarflex.title}</h3>
                    <p className="text-sm text-white/60 mt-1">{currentCarflex.subtitle}</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300 border border-green-500/30 inline-block">
                  {t("projects.status.completed")}
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[carflexScreen1, carflexScreen2, carflexScreen3].map((screen, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={screen}
                    alt={`CarFlex Screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-lg mb-3 text-white/90">Características principales:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentCarflex.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  >
                    <span className="text-blue-500 mt-0.5">▸</span>
                    <span className="text-sm text-white/70">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Description */}
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              {currentCarflex.tech}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["HTML5", "CSS3"].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://github.com/sergiioponce0/CarFlex"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                <span>{t("projects.code")}</span>
              </motion.a>
              <motion.a
                href="https://sergiioponce0.github.io/CarFlex/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm rounded-full bg-white text-black hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visitar Web</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}