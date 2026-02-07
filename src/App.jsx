import React, { useState, useEffect, useRef } from "react";
import {
  Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink,
  Code, Briefcase, User, GraduationCap, Award, Send,
  ChevronDown, Star, Zap, Trophy, Target, Rocket,
  Database, Server, Smartphone, Globe, Terminal, Package
} from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);

  // Titles for typing effect
  const titles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  // Particle background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = darkMode ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0.3)";
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = darkMode ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Connect particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = darkMode
              ? `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`
              : `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [darkMode]);

  // Typing effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentTitle.length) {
          setTypedText(currentTitle.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTitleIndex]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") !== "false";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", !darkMode);
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(sectionId);
  };

  // Portfolio data (CUSTOMIZE THIS!)
  const portfolio = {
    name: "Chhorn Vibol",
    email: "ChhornVibol19@gmail.com",
    phone: "+855 60 51 926",
    location: "Phnom Penh, Cambodia",
    github: "https://github.com/vibol18",
    linkedin: "https://linkedin.com/in/vi-bol-aa4b9239a",

    about:
      "I am a passionate Full Stack Web Developer focused on building modern, scalable, and user-friendly web applications. I enjoy working with JavaScript frameworks, backend systems, and databases to turn complex ideas into efficient digital solutions. My goal is to continuously grow as a developer while delivering high-quality software for real-world problems.",

    stats: [
      { icon: Trophy, value: "25+", label: "Projects Completed" },
      { icon: Star, value: "0 Years", label: "Experience" },
      { icon: Target, value: "15+", label: "Happy Clients" },
      { icon: Zap, value: "100%", label: "Commitment" },
    ],

    skills: [
      {
        category: "Frontend",
        icon: Globe,
        items: [
          "React",
          "Css",
          "Html",
          "Boostrap",
          "Tailwind CSS",
          "JavaScript",
        ],
        color: "from-blue-500 to-cyan-500",
      },
      {
        category: "Backend",
        icon: Server,
        items: [
          "Laravel",
           "PHP", 
           "Python",
           "java"
          ],
        color: "from-purple-500 to-pink-500",
      },
      {
        category: "Database",
        icon: Database,
        items: ["MongoDB", "MySQL","Laragon"],
        color: "from-green-500 to-emerald-500",
      },
      {
        category: "DevOps",
        icon: Terminal,
        items: ["Git", "GitHub", "GitHub Actions",],
        color: "from-indigo-500 to-purple-500",
      },
      {
        category: "Tools",
        icon: Package,
        items: ["VS Code", "Postman", "Antigravity", "Notion"],
        color: "from-yellow-500 to-orange-500",
      },
    ],

    projects: [
      {
        id: 1,
        title: "E-Commerce Web Platform",
        description:
          "A full-stack shopping website with product listing, cart system, authentication, admin dashboard, and payment integration.",
        tech: ["React", "Laravel", "MySQL"],
        image:
          "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
        github: "https://github.com/vibol18",
        demo: "",
        featured: true,
      },
      {
        id: 2,
        title: "Admin Dashboard & Analytics",
        description:
          "A responsive admin dashboard for tracking users, sales, and reports with charts and filtering features.",
        tech: ["React", "Laravel", "MySQL", "Chart.js"],
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        github: "https://github.com/vibol18",
        demo: "",
        featured: true,
      },
    ],

    experience: [
      {
        title: "Intern Full Stack Developer",
        company: "BB' INNOTEK",
        period: "2025 - Present",
        description:
          "Contributing to full-stack web applications using React and Laravel, developing RESTful APIs, and collaborating with cross-functional teams to deliver high-quality client solutions.",
        achievements: [
          "Built internal dashboards for business operations",
          "Optimized application performance and load times",
          "Worked within agile development teams and sprint cycles",
        ],
      },

      {
        title: "Backend Developer Intern",
        company: "ETEC Center",
        period: "2025 - Present",
        description:
          "Assisted in developing backend systems and RESTful APIs using Laravel and Node.js, collaborating with frontend developers to integrate user interfaces and business logic.",
        achievements: [
          "Built and tested API endpoints",
          "Integrated databases and optimized queries",
          "Supported debugging and system maintenance",
        ],
      },

    ],

    education: [
      {
        degree: "Full Stack Web Development Program",
        institution: "ETEC Center",
        period: "2024 - 2026",
        description:
          "Completed intensive training in full-stack web development, covering frontend frameworks, backend systems, RESTful APIs, and relational databases.",
      },

      {
        degree: "Bachelor of ICT Management",
        institution: "Norton University",
        period: "2025 - 2026",
        description:
          "Focused on DevOps engineering, database systems, and modern web technologies,Digital Communication, including cloud deployment and automation practices.",
      },

    ],

    certifications: [
      { name: "React Developer Certificate", year: "2025" },
      { name: "Laravel Developer Certificate", year: "2025" },
      { name: "MySql Fundamentals", year: "2026" },
    ],

    testimonials: [
      {
        name: "Project Client",
        role: "Business Owner",
        text:
          "Jom Loy mes Bro.",
        avatar:
          "https://vibol18.github.io/mitchacademytwo/IMG_9467.JPG",
      },
      {
        name: "Team Lead",
        role: "Senior Developer",
        text:
          "A fast learner with strong technical skills and great teamwork attitude.",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
    ],
  };


  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Particle Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: darkMode ? "#000000" : "#ffffff" }}
      />

      <div className="relative z-10 bg-gradient-to-br from-black via-blue-950 to-black dark:from-black dark:via-blue-950 dark:to-black text-white transition-colors duration-300">

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
              {portfolio.name}
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "skills", "projects", "experience", "testimonials", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-400 transition-all duration-300 relative group ${activeSection === section ? "text-blue-400 font-semibold" : ""
                    }`}
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 border border-blue-500/20"
              >
                {darkMode ? <Sun size={20} className="text-blue-400" /> : <Moon size={20} className="text-blue-400" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleDarkMode} className="p-2">
                {darkMode ? <Sun size={20} className="text-blue-400" /> : <Moon size={20} />}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-blue-500/20 animate-fadeIn">
              <div className="flex flex-col p-4 gap-4">
                {["home", "about", "skills", "projects", "experience", "testimonials", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left capitalize hover:text-blue-400 transition-colors py-2 border-b border-blue-500/10"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="section-padding pt-32 min-h-screen flex items-center relative overflow-hidden"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10 animate-gradient"></div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slideInLeft">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-semibold backdrop-blur-sm animate-fadeIn">
                  <Rocket size={16} className="animate-bounce" />
                  Welcome to my digital space
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Hi, I'm{" Vibol"}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient">
                    {portfolio.name}
                  </span>
                </h1>

                <div className="text-2xl md:text-4xl font-bold h-16">
                  <span className="text-blue-400">{typedText}</span>
                  <span className="animate-blink">|</span>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                  Crafting digital experiences that blend innovation with elegance.
                  Let's build something extraordinary together! 🚀
                </p>

                <div className="flex gap-4 flex-wrap" style={{ animationDelay: "0.5s" }}>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 flex items-center gap-2"
                  >
                    View My Work
                    <Zap size={18} className="group-hover:rotate-12 transition-transform" />
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Get In Touch
                  </button>
                </div>

                <div className="flex gap-4 pt-4">
                  {[
                    { icon: Github, link: portfolio.github },
                    { icon: Linkedin, link: portfolio.linkedin },
                    { icon: Mail, link: `mailto:${portfolio.email}` },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-all duration-300 border border-blue-500/20 hover:border-blue-400 hover:scale-110 group"
                    >
                      <social.icon size={24} className="text-blue-400 group-hover:rotate-12 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative animate-slideInRight">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  {/* Rotating gradient ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 animate-spin-slow p-1">
                    <div className="w-full h-full rounded-full bg-black"></div>
                  </div>

                  {/* Profile image */}
                  <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl shadow-blue-500/50">
                    <img
                      src="https://vibol18.github.io/mitchacademytwo/IMG_9467.JPG"
                      alt="Profile"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} className="text-blue-400" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-br from-blue-950/50 to-black/50 backdrop-blur-sm border-y border-blue-500/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {portfolio.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-black/40 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group backdrop-blur-sm animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon size={40} className="mx-auto mb-4 text-blue-400 group-hover:rotate-12 transition-transform" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                <User size={16} />
                About Me
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Who I Am
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-slideInLeft">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {portfolio.about}
                </p>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <GraduationCap className="text-blue-400" />
                    Education
                  </h3>
                  {portfolio.education.map((edu, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gradient-to-r from-blue-950/50 to-black/50 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
                    >
                      <h4 className="font-bold text-xl text-blue-400 group-hover:text-cyan-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-cyan-400">{edu.institution}</p>
                      <p className="text-sm text-gray-400">{edu.period}</p>
                      <p className="text-gray-300 mt-2">{edu.description}</p>
                      <p className="text-blue-400 font-semibold mt-2">GPA: {edu.gpa}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 animate-slideInRight">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Award className="text-blue-400" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {portfolio.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-blue-950/50 to-black/50 rounded-lg border-l-4 border-blue-500 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm group hover:translate-x-2"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <p className="font-semibold text-blue-400 group-hover:text-cyan-400 transition-colors">
                        {cert.name}
                      </p>
                      <p className="text-sm text-gray-400">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding bg-gradient-to-br from-blue-950/30 to-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                <Code size={16} />
                Skills & Technologies
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                What I Do Best
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="p-6 bg-black/40 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group backdrop-blur-sm animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${skillGroup.color} rounded-lg`}>
                      <skillGroup.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2 rounded hover:bg-blue-500/10 transition-all duration-300 group/item"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${skillGroup.color} rounded-full group-hover/item:scale-150 transition-transform`}></div>
                        <span className="text-gray-300 group-hover/item:text-blue-400 transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                <Briefcase size={16} />
                My Projects
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Work
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and creativity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.projects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-black/40 rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 group backdrop-blur-sm animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-full flex items-center gap-1">
                        <Star size={14} className="fill-current" />
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm hover:bg-blue-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group/link"
                      >
                        <Github size={18} className="group-hover/link:rotate-12 transition-transform" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group/link"
                      >
                        <ExternalLink size={18} className="group-hover/link:rotate-12 transition-transform" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding bg-gradient-to-br from-blue-950/30 to-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                <Briefcase size={16} />
                Experience
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Work History
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
              {portfolio.experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-black/40 p-8 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group backdrop-blur-sm animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 text-lg font-semibold">{exp.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-950/50 to-cyan-950/50 border border-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        ✓ {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                <Star size={16} />
                Testimonials
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                What People Say
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {portfolio.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-black/40 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-blue-400 text-blue-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-blue-500/50"
                    />
                    <div>
                      <p className="font-semibold text-blue-400">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-gradient-to-br from-blue-950/50 to-black/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm animate-fadeIn">
              <Mail size={16} />
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fadeIn">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fadeIn">
              I'm always excited to discuss new projects, creative ideas, or opportunities to bring your vision to life.
              Let's create something amazing together! 🚀
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeIn">
              <a
                href={`mailto:${portfolio.email}`}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 flex items-center gap-2 justify-center"
              >
                <Send size={20} className="group-hover:rotate-45 transition-transform" />
                Send Email
              </a>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>

            <div className="flex gap-6 justify-center animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              {[
                { icon: Github, link: portfolio.github },
                { icon: Linkedin, link: portfolio.linkedin },
                { icon: Mail, link: `mailto:${portfolio.email}` },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-all duration-300 border border-blue-500/20 hover:border-blue-400 hover:scale-110 group"
                >
                  <social.icon size={28} className="text-blue-400 group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/60 border-t border-blue-500/20 py-8 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-400">
              © 2024 {portfolio.name}. Built with React, Tailwind CSS & 💙
            </p>
            <p className="text-blue-400 text-sm mt-2">
              Crafted with passion and precision
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;