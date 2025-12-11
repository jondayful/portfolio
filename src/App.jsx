import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  Layout,
  Terminal,
  Server,
  Cpu,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Download,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const PERSONAL_INFO = {
  name: "Jonas James D. Fulgencio",
  title: "BSIT Student & Aspiring Frontend and Backend Developer",
  email: "jonworkful@gmail.com",
  linkedin: "https://www.linkedin.com/in/jonworkful",
  github: "https://github.com/jondayful",
  about:
    "I am a 3rd-year Bachelor of Science in Information Technology student with a strong passion for building web/software applications and solving problems through code. While I am still learning, I have built a solid foundation in frontend/backend development and database management. I am currently looking for opportunities where I can apply my academic knowledge in a real-world environment.",
};

const SKILLS = [
  {
    category: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    items: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React Basics",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend & Database",
    icon: <Database className="w-6 h-6 text-green-400" />,
    items: ["PHP / MySQL", "MongoDB", "Node.js", "Firebase", "SQL Queries"],
  },
  {
    category: "Tools & Others",
    icon: <Terminal className="w-6 h-6 text-purple-400" />,
    items: [
      "Git & GitHub",
      "VS Code",
      "Figma (Basic UI)",
      "Postman",
      "MS Office",
    ],
  },
  {
    category: "Core Concepts",
    icon: <Cpu className="w-6 h-6 text-red-400" />,
    items: [
      "Data Structures",
      "OOP",
      "Networking Basics",
      "System Analysis",
      "Agile Basics",
    ],
  },
];

const PROJECTS = [
  {
    id: 1,
    title: "Dino Dash",
    description:
      "A desktop game inspired by the Chrome offline dinosaur game. Built using Godot Engine.",
    tags: ["GDScript", "Godot", "Game Development"],
    link: "https://github.com/jondayful/dino-dash/releases/tag/v1.0.0",
    github: "https://github.com/jondayful/dino-dash",
  },
  {
    id: 2,
    title: "Bantay Komunidad",
    description:
      "A web-based community issue reporting platform that connects citizens with local authorities.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Python"],
    link: "https://github.com/jondayful/bantay-komunidad",
    github: "https://github.com/jondayful/bantay-komunidad",
  },
  {
    id: 3,
    title: "Barangay E-Services",
    description:
      "A modern, full-stack web application designed to digitize local government services.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://github.com/jondayful/barangay-eservices",
    github: "https://github.com/jondayful/barangay-eservices",
  },
];

const EDUCATION = [
  {
    school: "Pampanga State Agricultural University",
    degree: "Bachelor of Science in Information Technology",
    year: "2023 - Present (Expected 2027)",
    details: "Dean's Lister (3 Semesters), President's Lister (1 Semester).",
  },
  {
    school: "Tinajero National High School",
    degree: "Senior High School (TVL - CSS Strand)",
    year: "2021 - 2023",
    details: "Graduated with High Honors, Best in Computer Systems Servicing.",
  },
];

const COURSEWORK = [
  "Object Oriented Programming",
  "Data Structures & Algorithms",
  "Web Systems & Technologies",
  "Database Management Systems",
  "Human Computer Interaction",
  "Networking Fundamentals",
];

// --- COMPONENTS ---

const NavLink = ({ href, children, mobile, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`${
      mobile
        ? "block w-full py-3 px-4 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white rounded-md"
        : "text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
    }`}
  >
    {children}
  </a>
);

const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
      {children}
    </h2>
    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-4"></div>
    {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 ${className}`}
  >
    {children}
  </div>
);

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl text-blue-400 tracking-tighter">
              &lt;{PERSONAL_INFO.name.split(" ")[0]} /&gt;
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <NavLink key={item} href={`#${item.toLowerCase()}`}>
                      <span
                        className={
                          activeSection === item.toLowerCase()
                            ? "text-blue-400"
                            : ""
                        }
                      >
                        {item}
                      </span>
                    </NavLink>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <NavLink
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    mobile
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </NavLink>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-16 relative overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                Open to Internships / Part-time
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              <p className="text-xl text-slate-400 max-w-lg">
                {PERSONAL_INFO.title}. Transforming lines of code into
                meaningful digital experiences while constantly learning.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-medium transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>

              <div className="flex gap-6 pt-6 text-slate-400">
                <a
                  href={PERSONAL_INFO.github}
                  className="hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  className="hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Visual Element*/}
            <div className="relative hidden md:block group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center">
                <img
                  src="https://i.ibb.co/60zN7jzG/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="A glimpse into my academic journey and passion for tech.">
            About Me
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card className="h-full">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5 text-blue-400" />
                  The Journey So Far
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {PERSONAL_INFO.about}
                </p>
                <p className="text-slate-300 leading-relaxed">
                  I believe that the best way to learn is by doing. That's why,
                  outside of my university coursework, I spend my time
                  experimenting with new frameworks, reading tech documentation,
                  and building small utility apps to automate my daily tasks.
                </p>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  Education
                </h3>
                <div className="space-y-6">
                  {EDUCATION.map((edu, idx) => (
                    <div
                      key={idx}
                      className="relative pl-4 border-l-2 border-slate-700"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500"></div>
                      <h4 className="font-bold text-white text-sm">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-400 text-xs mb-1">{edu.school}</p>
                      <p className="text-slate-500 text-xs mb-2">{edu.year}</p>
                      <p className="text-slate-400 text-xs">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-400" />
                  Relevant Coursework
                </h3>
                <div className="flex flex-wrap gap-2">
                  {COURSEWORK.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Tools and technologies I have worked with during my studies.">
            Technical Skills
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <Card key={idx} className="hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
                    {skillGroup.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center text-slate-400 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Selected academic and personal projects that demonstrate my coding abilities.">
            Featured Projects
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <Card key={project.id} className="group flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <Code className="w-8 h-8 text-blue-400" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-slate-400 hover:text-white transition-colors"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.link}
                      className="text-slate-400 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle subtitle="I am currently available for internships and part-time opportunities.">
            Let's Connect
          </SectionTitle>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Looking for a dedicated Intern?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              I'm ready to apply what I've learned in the classroom to
              real-world projects. Whether you have a question or just want to
              say hi, I'll try my best to get back to you!
            </p>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-blue-500/25 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Say Hello
            </a>

            <div className="mt-12 pt-8 border-t border-slate-700 flex justify-center gap-8">
              <a
                href={PERSONAL_INFO.linkedin}
                className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <div className="p-3 bg-slate-900 rounded-full group-hover:bg-blue-500/10 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="p-3 bg-slate-900 rounded-full group-hover:bg-slate-700 transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
            reserved.
          </p>
          <p className="mt-2">Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
