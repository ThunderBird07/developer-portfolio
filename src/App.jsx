import React from 'react';
import profileImage from './assets/profile.png';
import tpLogo from './assets/techprofuse_logo.png';
import halLogo from './assets/hal_logo.png';
import crescentLogo from './assets/Crescent_logo.png';
import velsLogo from './assets/vels_logo.png';
import { 
  SiPython, SiJavascript, SiHtml5, SiCss, SiPhp, 
  SiReact, SiNodedotjs, SiFlask, SiDjango, SiLaravel, 
  SiCypress, SiPostgresql, SiMysql, SiSupabase, SiFirebase, 
  SiGooglecloud, SiGithub
} from 'react-icons/si';
import { FaDatabase, FaLinkedin } from 'react-icons/fa';
import { FiHome, FiSun, FiMoon, FiMail, FiAward, FiStar } from 'react-icons/fi';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    // Disable automatic scroll restoration which causes progressive scrolling down on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-client-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-client-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "SQL", icon: <FaDatabase color="#336791" /> },
    { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <SiCss color="#1572B6" /> },
    { name: "PHP", icon: <SiPhp color="#777BB4" /> },
    { name: "React.js", icon: <SiReact color="#61DAFB" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "Flask", icon: <SiFlask color="#000000" /> },
    { name: "Django", icon: <SiDjango color="#092E20" /> },
    { name: "Laravel", icon: <SiLaravel color="#FF2D20" /> },
    { name: "Cypress", icon: <SiCypress color="#17202C" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    { name: "GCP", icon: <SiGooglecloud color="#4285F4" /> },
    { name: "GitHub", icon: <SiGithub color="#181717" /> }
  ];

  const projects = [
    {
      title: "Student-Teacher Booking",
      description: "A web application designed to streamline the scheduling of appointments between students and teachers.",
      tags: ["Python", "Django", "HTML", "CSS"],
      link: "https://github.com/ThunderBird07/student-teacher-appointment-booking-webapp"
    },
    {
      title: "FiDa (Full-Stack)",
      description: "A full-stack financial dashboard tracker application featuring a decoupled React frontend and a robust backend API.",
      tags: ["React", "Node.js", "Express", "API"],
      link: "https://github.com/ThunderBird07/FiDa-Ui"
    },
    {
      title: "IoT Based Smart Parking",
      description: "An Internet of Things (IoT) solution for smart parking management, utilizing Python for backend logic and sensor integration.",
      tags: ["Python", "IoT", "Hardware"],
      link: "https://github.com/ThunderBird07/iot-based-smart-parking-python"
    },
    {
      title: "CHDKPTP Python",
      description: "A Python interface for CHDKPTP, enabling programmable control and automation for Canon cameras running CHDK.",
      tags: ["Python", "Camera API", "Hardware"],
      link: "https://github.com/ThunderBird07/chdkptp-python"
    },
    {
      title: "Zengravitas",
      description: "An open-source exploration project focused on delivering elegant technical solutions.",
      tags: ["Python", "Algorithms", "Development"],
      link: "https://github.com/ThunderBird07/zengravitas"
    },
    {
      title: "ZenTo",
      description: "A minimalist and elegant application built to help users manage tasks and stay focused.",
      tags: ["Web", "UI/UX", "JavaScript"],
      link: "https://github.com/ThunderBird07/ZenTo"
    }
  ];

  const certifications = [
    {
      title: "Deploy Gemini Enterprise with Workspace Data & Model Armor",
      subtitle: "Google Cloud",
      icon: <FiAward size={18} color="var(--text-secondary)" />
    },
    {
      title: "Accelerate Development with Antigravity",
      subtitle: "Google Cloud",
      icon: <FiAward size={18} color="var(--text-secondary)" />
    },
    {
      title: "Anthropic API & Agent Development",
      subtitle: "Anthropic",
      icon: <FiAward size={18} color="var(--text-secondary)" />
    },
    {
      title: "Python Development Certification",
      subtitle: "upskill Campus",
      icon: <FiAward size={18} color="var(--text-secondary)" />
    },
    {
      title: "Data Visualization: Empowering Business",
      subtitle: "Tata Business",
      icon: <FiAward size={18} color="var(--text-secondary)" />
    },
    {
      title: "Data Analytics and Visualization",
      subtitle: "Accenture",
      icon: <FiAward size={18} color="var(--text-secondary)" />
    },
    {
      title: "Web Development Certification",
      subtitle: "Swan Solutions",
      icon: <FiAward size={18} color="var(--text-secondary)" />
    },
    {
      title: "Department Level Recognition",
      subtitle: "Conducted successful events for the Coding Club",
      icon: <FiStar size={18} color="var(--text-secondary)" />
    }
  ];

  return (
    <>
      <div className="dot-pattern"></div>
      <div className="top-blur-mask"></div>
      <div className="container">
        {/* Hero Section */}
      <section className="section blur-fade" style={{ '--delay': '0ms' }}>
        <div className="flex-row space-between">
          <div className="flex-col">
            <h1>Hi, I'm Vikas</h1>
            <p style={{ maxWidth: '85%', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
              Software Developer passionate about building scalable web applications and cloud-integrated solutions.
            </p>
          </div>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            flexShrink: 0, 
            overflow: 'hidden',
            border: '4px solid var(--bg-hover)',
            boxShadow: 'var(--shadow-md)'
          }}>
             <img src={profileImage} alt="Vikas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section blur-fade" style={{ '--delay': '100ms' }}>
        <h2>About</h2>
        <p>
          I am a driven Software Developer with hands-on experience in developing production-ready features, data analytics tools, and multi-tenant systems. I am passionate about solving real-world problems through clean, efficient workflows and building user-centric platforms.
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="section blur-fade" style={{ '--delay': '200ms' }}>
        <h2>Work Experience</h2>
        
        <div className="work-item">
          <div className="work-logo">
            <img src={tpLogo} alt="Tech Profuse" />
          </div>
          <div className="work-details">
            <div className="flex-row space-between" style={{ alignItems: 'flex-start' }}>
              <div className="flex-col">
                <h3>Tech Profuse</h3>
                <span className="text-sm" style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Junior Full Stack Developer</span>
              </div>
              <span className="text-sm">April 2026 - Present</span>
            </div>
            <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
              Working on scalable live projects like DaanBox and a Sales & Purchase Report App. Utilizing Python, Flask, Supabase, and PostgreSQL for backend architecture.
            </p>
          </div>
        </div>

        <div className="work-item">
          <div className="work-logo">
            <img src={halLogo} alt="Hal Simplify" />
          </div>
          <div className="work-details">
            <div className="flex-row space-between" style={{ alignItems: 'flex-start' }}>
              <div className="flex-col">
                <h3>Hal Simplify</h3>
                <span className="text-sm" style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Programmer Analyst Intern</span>
              </div>
              <span className="text-sm">June 2025 - March 2026</span>
            </div>
            <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
              Developed features for Vatcare using PHP and Laravel, ensuring compliance with Saudi Arabia's ZATCA standards for invoice workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section blur-fade" style={{ '--delay': '300ms' }}>
        <h2>Education</h2>
        
        <div className="work-item" style={{ marginBottom: '1rem' }}>
          <div className="work-logo">
            <img src={crescentLogo} alt="Crescent Institute" />
          </div>
          <div className="work-details">
            <div className="flex-row space-between" style={{ alignItems: 'flex-start' }}>
              <div className="flex-col">
                <h3>B.S. Abdur Rahman Crescent Institute</h3>
                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>B.Tech in Computer Science & Engineering</span>
              </div>
              <span className="text-sm">May 2025</span>
            </div>
          </div>
        </div>

        <div className="work-item">
          <div className="work-logo">
            <img src={velsLogo} alt="Vels Vidyashram" />
          </div>
          <div className="work-details">
            <div className="flex-row space-between" style={{ alignItems: 'flex-start' }}>
              <div className="flex-col">
                <h3>Vels Vidyashram</h3>
                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>High School PCM</span>
              </div>
              <span className="text-sm">June 2021</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section blur-fade" style={{ '--delay': '400ms' }}>
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill.name} className="skill-badge flex-row" style={{ gap: '0.4rem' }}>
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section blur-fade" style={{ alignItems: 'center', textAlign: 'center', '--delay': '500ms' }}>
        <div style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-color)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Projects
        </div>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Check out my latest work</h2>
        <p style={{ maxWidth: '80%', margin: '0 auto 3rem auto', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.5' }}>
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>
        <div className="projects-grid" style={{ textAlign: 'left', width: '100%' }}>
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="flex-col">
                <div className="flex-row space-between" style={{ alignItems: 'center', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: '1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{project.title}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = 0.7} onMouseOut={e => e.currentTarget.style.opacity = 1}>
                      <SiGithub size={18} />
                    </a>
                  )}
                </div>
                <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>{project.description}</p>
              </div>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications / Other */}
      <section className="section blur-fade" style={{ alignItems: 'center', textAlign: 'center', '--delay': '600ms' }}>
        <div style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-color)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Certifications & Highlights
        </div>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>I love learning & contributing</h2>
        <p style={{ maxWidth: '80%', margin: '0 auto 3rem auto', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.5' }}>
          Throughout my journey, I have actively pursued certifications to upskill myself and contributed to my community through events and initiatives.
        </p>

        <div className="hackathon-timeline" style={{ textAlign: 'left', width: '75%', margin: '0 auto' }}>
          {certifications.map((cert, idx) => (
            <div className="hackathon-item" key={idx}>
              <div className="hackathon-icon">
                {cert.icon}
              </div>
              <div className="flex-col">
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{cert.title}</h3>
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{cert.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section blur-fade" style={{ marginTop: '4rem', marginBottom: '2rem', '--delay': '700ms' }}>
        <div style={{
          backgroundColor: 'var(--bg-color)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 2rem',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-color)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Contact
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Get in Touch</h2>
          <p style={{ maxWidth: '80%', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.5' }}>
            Want to chat? Just <a href="mailto:thunderbird030815@gmail.com" style={{ color: '#3b82f6', textDecoration: 'none' }}>drop me an email</a> and I'll respond whenever I can. Let’s build something cool together.
          </p>
        </div>
      </section>

      {/* Footer */}
      <section className="section blur-fade" style={{ alignItems: 'center', marginTop: '2rem', paddingBottom: '6rem', '--delay': '800ms' }}>
        <p className="text-sm">© {new Date().getFullYear()} Vikas.</p>
      </section>
      </div>

      {/* Floating Dock */}
      <div className="dock-container blur-fade" style={{ '--delay': '900ms' }}>
        <a href="#top" className="dock-item" title="Home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <FiHome size={20} />
        </a>
        <div className="dock-divider"></div>
        <a href="https://github.com/ThunderBird07" target="_blank" rel="noreferrer" className="dock-item" title="GitHub">
          <SiGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/vikas815" target="_blank" rel="noreferrer" className="dock-item" title="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:thunderbird030815@gmail.com" className="dock-item" title="Email">
          <FiMail size={20} />
        </a>
        <div className="dock-divider"></div>
        <button className="dock-item" title="Toggle Theme" onClick={() => setDarkMode(!darkMode)} style={{ border: 'none' }}>
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </>
  );
}

export default App;
