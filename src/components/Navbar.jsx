import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E4DCD0] shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl transition-all duration-300">
        {/* Brand / Monogram */}
        <a href="#home" className="flex items-center space-x-2.5 group">
          <span className="w-8 h-8 rounded-full bg-[#6E1E2A] text-[#FAF7F2] flex items-center justify-center font-serif text-sm font-semibold tracking-wide transition-transform duration-300 group-hover:scale-105">
            RK
          </span>
          <div className="flex flex-col">
            <span className="font-serif tracking-wide text-sm font-bold text-[#2A2A2A]">
              Raihan Kabir
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#C8A96A] -mt-1 hidden sm:block">
              Software Engineer • 2+ Years Exp
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-7 font-sans text-xs uppercase tracking-widest font-semibold text-[#5A5550]">
          <a
            href="#home"
            className="hover:text-[#6E1E2A] transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#6E1E2A] hover:after:w-full after:transition-all"
          >
            Overview
          </a>
          <a
            href="#about"
            className="hover:text-[#6E1E2A] transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#6E1E2A] hover:after:w-full after:transition-all"
          >
            About & Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[#6E1E2A] transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#6E1E2A] hover:after:w-full after:transition-all"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[#6E1E2A] transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#6E1E2A] hover:after:w-full after:transition-all"
          >
            Contact
          </a>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#6E1E2A] hover:bg-[#8B2635] text-[#FAF7F2] font-mono text-xs uppercase tracking-wider transition-all duration-200 hover:shadow-md"
          >
            Hire / Connect
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 text-[#2A2A2A] focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`block w-5 h-0.5 bg-[#2A2A2A] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#2A2A2A] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#2A2A2A] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>
    </header>
  );
};
