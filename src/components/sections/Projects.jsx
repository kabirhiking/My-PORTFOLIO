import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      id: "PROJECT 01",
      title: "NeuraBusiness — Enterprise Platform",
      category: "Enterprise ERP / CRM / HRM with AI Orchestration",
      description:
        "Comprehensive enterprise business platform covering ERP, CRM, HRM, and business process automation built with Angular, NestJS, and PostgreSQL. Implemented AI orchestration via NeuraAI featuring prompt management, model routing, fallback mechanisms, PII detection, role-based access control, and human-in-the-loop workflows.",
      tags: ["Angular", "NestJS", "PostgreSQL", "OpenAI API", "LLM Integration", "AI Safety"],
      link: "https://www.neurasolutionsltd.com/products/neuraerp",
      type: "Live Enterprise Platform",
    },
    {
      id: "PROJECT 02",
      title: "Sora — Bus Reservation System",
      category: "Full-Stack System & Clean Architecture",
      description:
        "Full-stack bus reservation platform engineered with React, RESTful APIs, and .NET/Django following Clean Architecture. Implements dynamic transit route search across Bangladesh, waypoint boarding points, seat concurrency locking, role-based authorization, and complete transactional booking workflows.",
      tags: ["React", ".NET", "Django", "RESTful APIs", "MySQL", "Clean Architecture"],
      link: "https://sitesoraride.netlify.app/",
      type: "Live Web App",
    },
    {
      id: "PROJECT 03",
      title: "RenewTech — Device Refurbishing System",
      category: "Hardware Lifecycle & Inventory Workflows",
      description:
        "Backend services and automated business workflows for electronics refurbishment using Django and MySQL. Implemented strict data validation, database normalization for reliable processing, and tested within containerized Linux environments.",
      tags: ["Django", "Python", "MySQL", "Linux", "Docker", "Database Design"],
      link: "https://github.com/kabirhiking/ReTech-Cycle",
      type: "Repository",
    },
    {
      id: "PROJECT 04",
      title: "Gigple — Freelance Marketplace",
      category: "Talent Discovery & Recruitment Platform",
      description:
        "A centralized marketplace connecting freelancers (Gig Seekers) with employers using PHP and MVT architecture. Enables profile showcasing, job posting, applicant evaluation, recruitment, and structured hiring pipelines.",
      tags: ["PHP", "MVT Architecture", "MySQL", "Authentication", "Workflow Automation"],
      link: "https://gigple.com/",
      type: "Live Marketplace",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-[#F5F0E8] parchment-grain">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96A] font-semibold">
              Engineering Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2A2A2A] mt-2">
              Featured Systems & Applications
            </h2>
            <div className="w-16 h-0.5 bg-[#6E1E2A] mx-auto mt-4"></div>
            <p className="font-sans text-sm sm:text-base text-[#5A5550] max-w-xl mx-auto mt-4">
              Enterprise platforms, AI orchestration engines, full-stack web applications, and backend systems.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="editorial-card p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(42,42,42,0.08)] hover:border-[#6E1E2A]/50 group"
              >
                <div>
                  {/* Card Header Metadata */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E4DCD0] text-xs font-mono">
                    <span className="text-[#6E1E2A] font-bold tracking-wider">
                      {proj.id}
                    </span>
                    <span className="text-[#C8A96A] font-semibold">
                      [{proj.type}]
                    </span>
                  </div>

                  {/* Title & Category */}
                  <span className="font-sans text-xs uppercase tracking-wider text-[#5A5550] font-medium block mb-1">
                    {proj.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2A2A] mb-3 group-hover:text-[#6E1E2A] transition-colors">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#5A5550] leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E4DCD0] mb-5">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-[#F5F0E8] text-[#2A2A2A] font-mono text-[11px] rounded border border-[#E4DCD0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-[#6E1E2A] font-semibold hover:text-[#8B2635] transition-colors group/link"
                  >
                    <span>View Project Artifact</span>
                    <span className="ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
