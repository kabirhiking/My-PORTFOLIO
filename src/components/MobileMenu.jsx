export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-[#181818]/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-8 right-8 text-[#FAF7F2] text-4xl focus:outline-none hover:text-[#C8A96A] transition-colors"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Engineering label */}
      <div className="font-mono text-xs text-[#C8A96A] uppercase tracking-widest mb-6 border-b border-[#C8A96A]/30 pb-2">
        // Navigation Index
      </div>

      <nav className="flex flex-col items-center space-y-6 text-center">
        {[
          { label: "Overview", href: "#home" },
          { label: "About & Engineering Craft", href: "#about" },
          { label: "Selected Projects", href: "#projects" },
          { label: "Contact & Collaboration", href: "#contact" },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`font-serif text-2xl text-[#FAF7F2] hover:text-[#C8A96A] transition-all duration-300 transform ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${idx * 75}ms` }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-12 font-mono text-xs text-[#E4DCD0]/60">
        RAIHAN KABIR • SOFTWARE ENGINEER (2+ YEARS EXP)
      </div>
    </div>
  );
};
