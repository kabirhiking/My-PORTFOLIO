import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-28 pb-16 px-4 bg-[#F5F0E8] parchment-grain overflow-hidden"
    >
      {/* Soft warm ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FAF7F2] rounded-full blur-3xl opacity-75 pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#C8A96A]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-[250px] h-[250px] bg-[#6E1E2A]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <RevealOnScroll>
        <div className="max-w-4xl mx-auto text-center z-10">
          
          {/* Engineering Experience Pill Badge */}
          <div className="inline-flex items-center space-x-2.5 mb-6 px-4 py-1.5 rounded-full border border-[#E4DCD0] bg-[#FAF7F2] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#6E1E2A] animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#5A5550]">
              Full-Stack Software Engineer • 2+ Years Experience • Dhaka, BD
            </span>
          </div>

          {/* Hero Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#2A2A2A] tracking-tight leading-[1.15] mb-6">
            Building resilient systems.{" "}
            <span className="italic font-normal text-[#6E1E2A] block mt-2">
              Engineering web apps & APIs with precision.
            </span>
          </h1>

          {/* Subtitle / Resume Profile Summary */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#5A5550] max-w-3xl mx-auto leading-relaxed mb-10">
            Hi, I’m <strong className="text-[#2A2A2A] font-semibold">Raihan Kabir</strong> — a Full-Stack Software Engineer with professional experience 
            building web applications, backend services, and RESTful APIs using 
            <span className="text-[#6E1E2A] font-medium"> Python</span>, 
            <span className="text-[#6E1E2A] font-medium"> Django</span>, 
            <span className="text-[#6E1E2A] font-medium"> FastAPI</span>, 
            <span className="text-[#6E1E2A] font-medium"> React</span>, and 
            <span className="text-[#6E1E2A] font-medium"> C# / .NET</span>. Specializing in Clean Architecture, relational database design, and AI orchestration.
          </p>

          {/* Quick Technical Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#5A5550] mb-10">
            <span className="px-3.5 py-1.5 bg-[#FAF7F2] border border-[#E4DCD0] rounded-full shadow-xs text-[#2A2A2A]">
              <span className="text-[#C8A96A] font-bold mr-1.5">●</span>2+ YEARS EXPERIENCE
            </span>
            <span className="px-3.5 py-1.5 bg-[#FAF7F2] border border-[#E4DCD0] rounded-full shadow-xs text-[#2A2A2A]">
              <span className="text-[#C8A96A] font-bold mr-1.5">●</span>TECHWORKS LTD (SOFTWARE ENGINEER)
            </span>
            <span className="px-3.5 py-1.5 bg-[#FAF7F2] border border-[#E4DCD0] rounded-full shadow-xs text-[#2A2A2A]">
              <span className="text-[#C8A96A] font-bold mr-1.5">●</span>B.SC. IN CSE (CGPA 3.77)
            </span>
            <span className="px-3.5 py-1.5 bg-[#FAF7F2] border border-[#E4DCD0] rounded-full shadow-xs text-[#2A2A2A]">
              <span className="text-[#C8A96A] font-bold mr-1.5">●</span>3X ICPC DHAKA REGIONAL
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#6E1E2A] text-[#FAF7F2] font-sans font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#8B2635] hover:shadow-[0_10px_25px_rgba(110,30,42,0.25)] hover:-translate-y-0.5"
            >
              Explore Featured Projects <span className="ml-2 font-mono">↘</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#FAF7F2] text-[#2A2A2A] border border-[#E4DCD0] font-sans font-medium text-sm tracking-wide transition-all duration-300 hover:border-[#6E1E2A] hover:text-[#6E1E2A] hover:shadow-sm hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
