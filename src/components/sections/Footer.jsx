import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#181818] text-[#FAF7F2] py-16 px-4 border-t border-[#C8A96A]/20">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Monogram */}
        <div className="w-12 h-12 rounded-full border border-[#C8A96A]/40 flex items-center justify-center font-serif text-lg font-bold text-[#C8A96A] mb-4">
          RK
        </div>

        <h3 className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2] mb-1">
          Raihan Kabir
        </h3>
        <p className="font-mono text-xs uppercase tracking-widest text-[#C8A96A] mb-3">
          Full-Stack Software Engineer (2+ Years Experience) • TechWorks Ltd
        </p>
        <p className="font-sans text-xs text-[#E4DCD0]/70 mb-8 max-w-md">
          21/3 A, North Dhanmondi, Dhaka-1209, Bangladesh • (+880) 1787-950597
        </p>

        {/* Links */}
        <div className="flex space-x-6 text-[#FAF7F2]/70 text-lg mb-10">
          <a
            href="https://github.com/kabirhiking"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-[#C8A96A] transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kabirhiking/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-[#C8A96A] transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Kabir_TRT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X Profile"
            className="hover:text-[#C8A96A] transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/raihankabir716/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="hover:text-[#C8A96A] transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Legal & Credits */}
        <div className="font-mono text-xs text-[#E4DCD0]/50 tracking-wider space-y-1">
          <p>© {new Date().getFullYear()} RAIHAN KABIR • ALL RIGHTS RESERVED.</p>
          <p className="text-[10px] text-[#C8A96A]/60">
            ENGINEERED WITH REACT, TAILWIND CSS & CLEAN ARCHITECTURE
          </p>
        </div>

      </div>
    </footer>
  );
};
