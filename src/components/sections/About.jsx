import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skillsCategories = [
    {
      title: "Backend & Systems",
      badge: "CORE ENGINE",
      skills: ["Python", "Django", "Django REST Framework", "FastAPI", "C#", ".NET", "NestJS", "RESTful APIs", "SQLAlchemy"]
    },
    {
      title: "Frontend Engineering",
      badge: "USER INTERFACE",
      skills: ["React", "Angular 18", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3"]
    },
    {
      title: "AI & LLM Orchestration",
      badge: "INTELLIGENCE",
      skills: ["OpenAI API", "LLM Integration", "Prompt Engineering", "Model Routing", "PII Detection", "Human-in-the-Loop"]
    },
    {
      title: "Data & Persistence",
      badge: "DATABASE",
      skills: ["PostgreSQL", "MySQL", "SQLite", "Database Design", "Query Optimization", "Relational Modeling"]
    },
    {
      title: "Architecture & Patterns",
      badge: "FOUNDATIONS",
      skills: ["Clean Architecture", "Domain-Driven Design (DDD)", "MVC / MVT", "Repository Pattern", "SOLID Principles", "OOP"]
    },
    {
      title: "DevOps & Quality",
      badge: "TOOLING",
      skills: ["Docker", "Git / GitHub", "GitHub Actions", "CI/CD", "Linux / Bash", "Unit Testing", "xUnit", "Moq", "Postman"]
    }
  ];

  const workExperience = [
    {
      role: "Software Engineer",
      company: "TechWorks Ltd",
      location: "Dhaka, Bangladesh",
      period: "October 2024 – Present",
      points: [
        "Developing and maintaining scalable web applications using modern backend and frontend technologies.",
        "Engineering backend services and RESTful APIs to support core functionality and business workflows.",
        "Integrating application components with relational databases, robust authentication systems, and client interfaces.",
        "Collaborating across the SDLC with modern code management, automated testing, and CI/CD pipelines."
      ]
    },
    {
      role: "Software Engineer Trainee",
      company: "HRsoftbd",
      location: "Dhaka, Bangladesh",
      period: "Internship / Trainee",
      points: [
        "Contributed to the development of the Bangla website for an electronic voting machine system.",
        "Participated in software engineering activities following structured SDLC practices.",
        "Implemented GitHub Actions for CI/CD workflows and containerized applications using Docker."
      ]
    }
  ];

  const achievements = [
    {
      title: "Champion — Software Project Showcase",
      org: "CSE Tech Fest 2024, University of Asia Pacific",
      badge: "1ST PLACE"
    },
    {
      title: "Runner-up — Intra-University Programming Contest",
      org: "EEE Tech Fest 2023, University of Asia Pacific",
      badge: "2ND PLACE"
    },
    {
      title: "2nd Runner-up — Inter University Programming Contest",
      org: "University of Asia Pacific, 2022",
      badge: "3RD PLACE"
    },
    {
      title: "3x ICPC Asia Dhaka Regional Contestant",
      org: "Preliminary Contests: 2021-22, 2022-23, 2023-24",
      badge: "ICPC"
    },
    {
      title: "Onsite Qualifier — Dhaka Divisional Hackathon",
      org: "Divisional Hackathon 2024 & Grand Finalist (National Hackathon)",
      badge: "HACKATHON"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-[#FAF7F2] border-y border-[#E4DCD0]">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96A] font-semibold">
              Profile & Background
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2A2A2A] mt-2">
              Engineering Profile & Experience
            </h2>
            <div className="w-16 h-0.5 bg-[#6E1E2A] mx-auto mt-4"></div>
          </div>

          {/* Profile Statement & Education */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            
            {/* Left Column: Narrative Summary */}
            <div className="lg:col-span-7 bg-[#F5F0E8] p-8 sm:p-10 rounded-2xl border border-[#E4DCD0] shadow-sm relative overflow-hidden">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6E1E2A] font-semibold block mb-4">
                Professional Overview
              </span>

              <p className="font-sans text-[#2A2A2A] leading-relaxed text-base sm:text-lg mb-5 drop-cap">
                Full-Stack Software Engineer with professional experience developing and maintaining production web applications, backend microservices, and high-performance RESTful APIs.
              </p>

              <p className="font-sans text-[#5A5550] leading-relaxed text-sm sm:text-base mb-5">
                Grounded in strong software architecture principles, database design, and end-to-end full-stack development using <strong>Python, Django, FastAPI, React, C#, .NET, and JavaScript</strong>. Experienced in implementing authentication protocols, complex workflow state machines, and relational database integrations.
              </p>

              <p className="font-sans text-[#5A5550] leading-relaxed text-sm sm:text-base mb-6">
                Proficient with Angular, TypeScript, Clean Architecture, Docker containerization, CI/CD with GitHub Actions, and automated testing (xUnit, Moq, Unit Tests). Driven by collaborative engineering and building scalable, maintainable systems.
              </p>

              <div className="pt-6 border-t border-[#E4DCD0] flex flex-wrap items-center justify-between text-xs font-mono text-[#5A5550] gap-4">
                <div>
                  <span className="text-[#C8A96A] font-bold">●</span> ACTIVE: TECHWORKS LTD
                </div>
                <div>
                  <span className="text-[#C8A96A] font-bold">●</span> LOCATION: NORTH DHANMONDI, DHAKA
                </div>
              </div>
            </div>

            {/* Right Column: Education & Certifications */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#F5F0E8] p-8 rounded-2xl border border-[#E4DCD0] shadow-sm relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#6E1E2A] font-semibold">
                    Academic Pedigree
                  </span>
                  <span className="font-mono text-xs text-[#6E1E2A] font-bold bg-[#6E1E2A]/10 px-2.5 py-0.5 rounded-full">
                    CGPA: 3.77
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2A2A2A] mb-1">
                  B.Sc. in Computer Science and Engineering
                </h3>
                <p className="text-sm font-sans font-medium text-[#6E1E2A] mb-3">
                  University of Asia Pacific (UAP), Dhaka
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#5A5550] leading-relaxed">
                  Rigorous focus on Data Structures, Algorithms, Software Engineering, Database Systems, Object-Oriented Programming, and Cloud Computing.
                </p>
              </div>

              {/* Verified Certificates */}
              <div className="bg-[#181818] text-[#FAF7F2] p-8 rounded-2xl shadow-lg relative border border-[#C8A96A]/20">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96A] block mb-3">
                  // HackerRank Verified Credentials
                </span>
                <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#E4DCD0]/90">
                  <li className="flex items-center justify-between py-1 border-b border-white/10">
                    <span>Problem Solving Certificate</span>
                    <span className="font-mono text-[10px] text-[#C8A96A]">VERIFIED</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-white/10">
                    <span>Python Certificate</span>
                    <span className="font-mono text-[10px] text-[#C8A96A]">VERIFIED</span>
                  </li>
                  <li className="flex items-center justify-between py-1">
                    <span>Leadership & Management</span>
                    <span className="font-mono text-[10px] text-[#C8A96A]">VERIFIED</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Work Experience Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96A] font-semibold">
                Career History
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2A2A] mt-1">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {workExperience.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-[#F5F0E8] p-8 rounded-2xl border border-[#E4DCD0] shadow-sm hover:border-[#6E1E2A]/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-3 border-b border-[#E4DCD0] gap-2">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-[#2A2A2A]">
                        {exp.role} <span className="text-[#6E1E2A]">@ {exp.company}</span>
                      </h4>
                      <p className="font-sans text-xs text-[#5A5550]">{exp.location}</p>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E4DCD0] rounded-full text-[#6E1E2A] font-semibold w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start text-xs sm:text-sm text-[#5A5550]">
                        <span className="text-[#6E1E2A] mr-2.5 font-bold">›</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96A] font-semibold">
                Technical Capabilities
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2A2A] mt-1">
                Skills & Technologies
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-[#F5F0E8] p-6 rounded-xl border border-[#E4DCD0] hover:border-[#6E1E2A]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-serif font-bold text-base text-[#2A2A2A]">
                      {cat.title}
                    </h4>
                    <span className="font-mono text-[10px] text-[#C8A96A] font-semibold px-2 py-0.5 bg-[#FAF7F2] rounded border border-[#E4DCD0]">
                      {cat.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-mono bg-[#FAF7F2] text-[#2A2A2A] border border-[#E4DCD0] rounded-md hover:border-[#6E1E2A] hover:text-[#6E1E2A] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Competitions */}
          <div>
            <div className="text-center mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96A] font-semibold">
                Honors & Recognition
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2A2A] mt-1">
                Achievements & Competitions
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#F5F0E8] border border-[#E4DCD0] rounded-xl flex flex-col justify-between hover:border-[#C8A96A] transition-colors"
                >
                  <div>
                    <span className="font-mono text-[10px] text-[#C8A96A] font-bold px-2 py-0.5 bg-[#FAF7F2] border border-[#E4DCD0] rounded mb-2 inline-block">
                      {ach.badge}
                    </span>
                    <h5 className="font-serif font-bold text-sm text-[#2A2A2A] mt-1">
                      {ach.title}
                    </h5>
                  </div>
                  <p className="font-sans text-xs text-[#5A5550] mt-3 pt-3 border-t border-[#E4DCD0]">
                    {ach.org}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
