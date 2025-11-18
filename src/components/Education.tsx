import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      degree: "Grado Superior: Desarrollo de Aplicaciones Multiplataforma",
      institution: "MEDAC",
      period: "Cursando actualmente",
      status: "En curso",
      description: "Formación en desarrollo de aplicaciones para múltiples plataformas, bases de datos, y desarrollo web.",
    },
    {
      degree: "Graduado en Bachillerato",
      institution: "IES Margarita Salas",
      period: "Completado",
      status: "Completado",
      description: "Bachillerato con enfoque en ciencias y tecnología.",
    },
  ];

  const certifications = [
    {
      name: "Inglés Nivel B1",
      issuer: "Certificado Oficial",
      icon: "🇬🇧",
    },
    {
      name: "Carnet de Conducir: Tipo B",
      issuer: "Certificado de Conducción",
      icon: "🚗",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-slate-900 mb-4">Educación</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Formación académica y certificaciones que complementan mi desarrollo profesional.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          className="max-w-4xl mx-auto space-y-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <motion.div
                          className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <GraduationCap className="h-6 w-6 text-blue-600" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-slate-900 mb-2">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-slate-700 mb-2">{edu.institution}</p>
                          <p className="text-slate-600">{edu.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          variant={edu.status === "En curso" ? "secondary" : "default"}
                          className={edu.status === "En curso" ? "bg-green-100 text-green-700" : ""}
                        >
                          {edu.status}
                        </Badge>
                        <motion.div
                          className="flex items-center gap-2 text-slate-600"
                          whileHover={{ x: 5 }}
                        >
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </motion.div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            className="text-slate-900 mb-6 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Award className="h-6 w-6 mr-2 text-blue-600" />
            Certificaciones y Títulos
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <motion.span
                          className="text-4xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {cert.icon}
                        </motion.span>
                        <div>
                          <h4 className="text-slate-900 mb-1">{cert.name}</h4>
                          <p className="text-slate-600">{cert.issuer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}