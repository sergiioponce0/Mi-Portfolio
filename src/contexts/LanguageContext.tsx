import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.skills": "Skills",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    
    // Hero
    "hero.role": "Desarrollador Junior",
    "hero.description": "Creando experiencias digitales excepcionales con código limpio y pasión por el aprendizaje continuo",
    "hero.cta": "Ver mi trabajo",
    
    // About
    "about.title": "Sobre mí",
    "about.subtitle": "Desarrollador apasionado por crear soluciones que importen",
    "about.feature1.title": "Desarrollo Full Stack",
    "about.feature1.desc": "Java, Python, HTML/CSS y Android Studio",
    "about.feature2.title": "Aprendizaje Rápido",
    "about.feature2.desc": "Adaptación ágil a nuevas tecnologías",
    "about.feature3.title": "Trabajo en Equipo",
    "about.feature3.desc": "Colaboración y comunicación efectiva",
    "about.feature4.title": "Pensamiento Creativo",
    "about.feature4.desc": "Soluciones innovadoras a problemas complejos",
    "about.bio": "Soy un desarrollador junior en formación con conocimiento en Java, SQL, HTML, CSS y Android Studio. Destaco por mi capacidad de aprendizaje rápido, actitud positiva y excelente trabajo en equipo. Me interesa seguir creciendo en el área de desarrollo de software y aportar soluciones creativas en proyectos reales.",
    
    // Projects
    "projects.title": "Proyectos",
    "projects.subtitle": "Una selección de mi trabajo más reciente",
    "projects.status.completed": "Completado",
    "projects.status.development": "En Desarrollo",
    "projects.code": "Código",
    "projects.fantasy.title": "FantasyBot",
    "projects.fantasy.desc": "Bot de Discord automatizado para gestión de ligas de fantasía deportiva con comandos personalizados y automatización de procesos.",
    "projects.carflex.title": "CarFlex",
    "projects.carflex.desc": "Aplicación web completa para gestión y alquiler de vehículos con interfaz intuitiva y sistema de reservas.",
    "projects.fitlens.title": "FitLens",
    "projects.fitlens.desc": "Aplicación de fitness desarrollada en Java con reconocimiento de imágenes usando computer vision para tracking de ejercicios y nutrición.",
    
    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "Tecnologías y capacidades que domino",
    "skills.languages": "Lenguajes",
    "skills.tools": "Herramientas",
    "skills.soft": "Habilidades",
    "skills.idioms": "Idiomas",
    "skills.native": "Nativo",
    "skills.certified": "B1",
    "skills.teamwork": "Trabajo en Equipo",
    "skills.communication": "Comunicación",
    "skills.problemsolving": "Resolución de Problemas",
    "skills.fastlearning": "Aprendizaje Rápido",
    
    // Experience
    "experience.title": "Experiencia",
    "experience.subtitle": "Mi trayectoria profesional",
    "experience.work": "Experiencia Laboral",
    "experience.education": "Educación",
    "experience.certifications": "Certificaciones",
    "experience.job1.title": "Desarrollador Junior",
    "experience.job1.company": "Open Webinars",
    "experience.job1.location": "Sevilla",
    "experience.job1.period": "Marzo 2025 (1 mes)",
    "experience.job1.desc1": "Prácticas formativas intensivas en entornos Linux, bases de datos SQL y desarrollo web",
    "experience.job1.desc2": "Participación en proyectos de desarrollo full-stack",
    "experience.job2.title": "Técnico de Atención al Cliente",
    "experience.job2.company": "R&S INFINITY",
    "experience.job2.location": "Sevilla",
    "experience.job2.period": "Abril 2025 - Julio 2025",
    "experience.job2.desc1": "Atención telefónica y resolución de incidencias",
    "experience.job2.desc2": "Desarrollo de sistemas de inventario y facturación de ventas",
    "experience.job2.desc3": "Mejora de habilidades de comunicación y trabajo en equipo",
    "experience.edu1.title": "Desarrollo de Aplicaciones Multiplataforma",
    "experience.edu1.institution": "MEDAC",
    "experience.edu1.period": "Cursando actualmente",
    "experience.edu1.status": "En curso",
    "experience.edu2.title": "Bachillerato",
    "experience.edu2.institution": "IES Margarita Salas",
    "experience.edu2.period": "Completado",
    "experience.edu2.status": "Completado",
    "experience.cert1": "Inglés Nivel B1",
    "experience.cert1.issuer": "Certificado Oficial",
    "experience.cert2": "Carnet de Conducir Tipo B",
    "experience.cert2.issuer": "Certificado de Conducción",
    
    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "Hablemos sobre tu próximo proyecto",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.cta.title": "¿Listo para empezar?",
    "contact.cta.desc": "Estoy disponible para nuevas oportunidades y colaboraciones. No dudes en contactarme para discutir tu proyecto.",
    "contact.cta.button": "Enviar mensaje",
    "contact.footer1": "© 2025 Sergio Ponce Castro. Todos los derechos reservados.",
    "contact.footer2": "Diseñado y desarrollado con pasión",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    
    // Hero
    "hero.role": "Junior Developer",
    "hero.description": "Creating exceptional digital experiences with clean code and passion for continuous learning",
    "hero.cta": "View my work",
    
    // About
    "about.title": "About Me",
    "about.subtitle": "Developer passionate about creating solutions that matter",
    "about.feature1.title": "Full Stack Development",
    "about.feature1.desc": "Java, Python, HTML/CSS and Android Studio",
    "about.feature2.title": "Fast Learning",
    "about.feature2.desc": "Agile adaptation to new technologies",
    "about.feature3.title": "Teamwork",
    "about.feature3.desc": "Effective collaboration and communication",
    "about.feature4.title": "Creative Thinking",
    "about.feature4.desc": "Innovative solutions to complex problems",
    "about.bio": "I am a junior developer in training with knowledge in Java, SQL, HTML, CSS and Android Studio... I stand out for my quick learning ability, positive attitude and teamwork. I am interested in continuing to grow in the software development area and provide creative solutions in real projects.",
    
    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "A selection of my most recent work",
    "projects.status.completed": "Completed",
    "projects.status.development": "In Development",
    "projects.code": "Code",
    "projects.fantasy.title": "FantasyBot",
    "projects.fantasy.desc": "Automated Discord bot for fantasy sports league management with custom commands and process automation.",
    "projects.carflex.title": "CarFlex",
    "projects.carflex.desc": "Complete web application for vehicle management and rental with intuitive interface and booking system.",
    "projects.fitlens.title": "FitLens",
    "projects.fitlens.desc": "Fitness application developed in Java with image recognition using computer vision for exercise and nutrition tracking.",
    
    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "Technologies and capabilities I master",
    "skills.languages": "Languages",
    "skills.tools": "Tools",
    "skills.soft": "Skills",
    "skills.idioms": "Languages",
    "skills.native": "Native",
    "skills.certified": "B1",
    "skills.teamwork": "Teamwork",
    "skills.communication": "Communication",
    "skills.problemsolving": "Problem Solving",
    "skills.fastlearning": "Fast Learning",
    
    // Experience
    "experience.title": "Experience",
    "experience.subtitle": "My professional journey",
    "experience.work": "Work Experience",
    "experience.education": "Education",
    "experience.certifications": "Certifications",
    "experience.job1.title": "Junior Developer",
    "experience.job1.company": "Open Webinars",
    "experience.job1.location": "Seville",
    "experience.job1.period": "March 2025 (1 month)",
    "experience.job1.desc1": "Intensive training internship in Linux environments, SQL databases and web development",
    "experience.job1.desc2": "Participation in full-stack development projects",
    "experience.job2.title": "Customer Service Technician",
    "experience.job2.company": "R&S INFINITY",
    "experience.job2.location": "Seville",
    "experience.job2.period": "April 2025 - July 2025",
    "experience.job2.desc1": "Telephone support and incident resolution",
    "experience.job2.desc2": "Development of inventory and sales billing systems",
    "experience.job2.desc3": "Improvement of communication and teamwork skills",
    "experience.edu1.title": "Multiplatform Application Development",
    "experience.edu1.institution": "MEDAC",
    "experience.edu1.period": "Currently studying",
    "experience.edu1.status": "In progress",
    "experience.edu2.title": "High School",
    "experience.edu2.institution": "IES Margarita Salas",
    "experience.edu2.period": "Completed",
    "experience.edu2.status": "Completed",
    "experience.cert1": "English Level B1",
    "experience.cert1.issuer": "Official Certificate",
    "experience.cert2": "Driving License Type B",
    "experience.cert2.issuer": "Driving Certificate",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Let's talk about your next project",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.cta.title": "Ready to get started?",
    "contact.cta.desc": "I am available for new opportunities and collaborations. Feel free to contact me to discuss your project.",
    "contact.cta.button": "Send message",
    "contact.footer1": "© 2025 Sergio Ponce Castro. All rights reserved.",
    "contact.footer2": "Designed and developed with passion",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.projects": "Projekte",
    "nav.skills": "Fähigkeiten",
    "nav.experience": "Erfahrung",
    "nav.contact": "Kontakt",
    
    // Hero
    "hero.role": "Junior Entwickler",
    "hero.description": "Außergewöhnliche digitale Erlebnisse mit sauberem Code und Leidenschaft für kontinuierliches Lernen schaffen",
    "hero.cta": "Meine Arbeit ansehen",
    
    // About
    "about.title": "Über mich",
    "about.subtitle": "Entwickler mit Leidenschaft für bedeutungsvolle Lösungen",
    "about.feature1.title": "Full Stack Entwicklung",
    "about.feature1.desc": "Java, Python, HTML/CSS und Android Studio",
    "about.feature2.title": "Schnelles Lernen",
    "about.feature2.desc": "Agile Anpassung an neue Technologien",
    "about.feature3.title": "Teamarbeit",
    "about.feature3.desc": "Effektive Zusammenarbeit und Kommunikation",
    "about.feature4.title": "Kreatives Denken",
    "about.feature4.desc": "Innovative Lösungen für komplexe Probleme",
    "about.bio": "Junior-Entwickler in Ausbildung mit Kenntnissen in Java, SQL, HTML, CSS und Android Studio... Ich zeichne mich durch schnelle Lernfähigkeit, positive Einstellung und Teamarbeit aus. Ich möchte im Bereich Softwareentwicklung weiter wachsen und kreative Lösungen in echten Projekten bieten.",
    
    // Projects
    "projects.title": "Projekte",
    "projects.subtitle": "Eine Auswahl meiner neuesten Arbeiten",
    "projects.status.completed": "Abgeschlossen",
    "projects.status.development": "In Entwicklung",
    "projects.code": "Code",
    "projects.fantasy.title": "FantasyBot",
    "projects.fantasy.desc": "Automatisierter Discord-Bot für Fantasy-Sport-Liga-Management mit benutzerdefinierten Befehlen und Prozessautomatisierung.",
    "projects.carflex.title": "CarFlex",
    "projects.carflex.desc": "Vollständige Webanwendung für Fahrzeugverwaltung und -vermietung mit intuitiver Oberfläche und Buchungssystem.",
    "projects.fitlens.title": "FitLens",
    "projects.fitlens.desc": "In Java entwickelte Fitness-Anwendung mit Bilderkennung mittels Computer Vision für Übungs- und Ernährungsverfolgung.",
    
    // Skills
    "skills.title": "Fähigkeiten",
    "skills.subtitle": "Technologien und Fähigkeiten, die ich beherrsche",
    "skills.languages": "Sprachen",
    "skills.tools": "Werkzeuge",
    "skills.soft": "Fähigkeiten",
    "skills.idioms": "Sprachen",
    "skills.native": "Muttersprache",
    "skills.certified": "B1",
    "skills.teamwork": "Teamarbeit",
    "skills.communication": "Kommunikation",
    "skills.problemsolving": "Problemlösung",
    "skills.fastlearning": "Schnelles Lernen",
    
    // Experience
    "experience.title": "Erfahrung",
    "experience.subtitle": "Meine berufliche Laufbahn",
    "experience.work": "Berufserfahrung",
    "experience.education": "Bildung",
    "experience.certifications": "Zertifizierungen",
    "experience.job1.title": "Junior Entwickler",
    "experience.job1.company": "Open Webinars",
    "experience.job1.location": "Sevilla",
    "experience.job1.period": "März 2025 (1 Monat)",
    "experience.job1.desc1": "Intensive Schulung Praktikum in Linux-Umgebungen, SQL-Datenbanken und Webentwicklung",
    "experience.job1.desc2": "Teilnahme an Full-Stack-Entwicklungsprojekten",
    "experience.job2.title": "Kundendiensttechniker",
    "experience.job2.company": "R&S INFINITY",
    "experience.job2.location": "Sevilla",
    "experience.job2.period": "April 2025 - Juli 2025",
    "experience.job2.desc1": "Telefonischer Support und Störungsbehebung",
    "experience.job2.desc2": "Entwicklung von Inventar- und Verkaufsabrechnungssystemen",
    "experience.job2.desc3": "Verbesserung der Kommunikations- und Teamfähigkeiten",
    "experience.edu1.title": "Multiplattform-Anwendungsentwicklung",
    "experience.edu1.institution": "MEDAC",
    "experience.edu1.period": "Derzeit im Studium",
    "experience.edu1.status": "Laufend",
    "experience.edu2.title": "Abitur",
    "experience.edu2.institution": "IES Margarita Salas",
    "experience.edu2.period": "Abgeschlossen",
    "experience.edu2.status": "Abgeschlossen",
    "experience.cert1": "Englisch Niveau B1",
    "experience.cert1.issuer": "Offizielles Zertifikat",
    "experience.cert2": "Führerschein Klasse B",
    "experience.cert2.issuer": "Führerscheinzertifikat",
    
    // Contact
    "contact.title": "Kontakt",
    "contact.subtitle": "Lassen Sie uns über Ihr nächstes Projekt sprechen",
    "contact.email": "E-Mail",
    "contact.phone": "Telefon",
    "contact.location": "Standort",
    "contact.cta.title": "Bereit anzufangen?",
    "contact.cta.desc": "Ich bin verfügbar für neue Möglichkeiten und Kooperationen. Zögern Sie nicht, mich zu kontaktieren, um Ihr Projekt zu besprechen.",
    "contact.cta.button": "Nachricht senden",
    "contact.footer1": "© 2025 Sergio Ponce Castro. Alle Rechte vorbehalten.",
    "contact.footer2": "Mit Leidenschaft entworfen und entwickelt",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}