import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatusMessage({ type: "success", text: "Thank you! Your message has been sent successfully." });
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatusMessage({ type: "error", text: "Something went wrong. Please email directly at kabir202010487@gmail.com." });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#FAF7F2] border-t border-[#E4DCD0]">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C8A96A] font-semibold">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2A2A2A] mt-2">
              Let's Connect & Collaborate
            </h2>
            <div className="w-16 h-0.5 bg-[#6E1E2A] mx-auto mt-4"></div>
            <p className="font-sans text-sm sm:text-base text-[#5A5550] max-w-lg mx-auto mt-4">
              Open to full-stack and backend engineering opportunities, technical consulting, and collaborative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            
            {/* Left Card: Direct Contact Details from Resume */}
            <div className="md:col-span-5 bg-[#F5F0E8] p-8 rounded-2xl border border-[#E4DCD0] shadow-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6E1E2A] font-semibold block mb-4">
                // Direct Contact Information
              </span>

              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="font-serif font-bold text-[#2A2A2A] text-base mb-1">Residential Address</h4>
                  <p className="font-sans text-[#5A5550]">21/3 A, North Dhanmondi</p>
                  <p className="font-sans text-[#5A5550]">Dhaka-1209, Bangladesh</p>
                </div>

                <div className="pt-4 border-t border-[#E4DCD0]">
                  <h4 className="font-serif font-bold text-[#2A2A2A] text-base mb-1">Direct Phone</h4>
                  <p className="font-sans text-[#5A5550]">(+880) 1787-950597</p>
                </div>

                <div className="pt-4 border-t border-[#E4DCD0]">
                  <h4 className="font-serif font-bold text-[#2A2A2A] text-base mb-1">Primary Email</h4>
                  <p className="font-sans text-[#5A5550]">kabir202010487@gmail.com</p>
                  <p className="font-mono text-xs text-[#C8A96A] mt-0.5">Checked daily • Response within 24 hours</p>
                </div>

                <div className="pt-4 border-t border-[#E4DCD0]">
                  <h4 className="font-serif font-bold text-[#2A2A2A] text-base mb-2">Professional Profiles</h4>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://github.com/kabirhiking"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-[#FAF7F2] border border-[#E4DCD0] rounded-md font-mono text-xs text-[#2A2A2A] hover:border-[#6E1E2A] hover:text-[#6E1E2A] transition-colors"
                    >
                      GitHub (kabir) ↗
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kabirhiking/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-[#FAF7F2] border border-[#E4DCD0] rounded-md font-mono text-xs text-[#2A2A2A] hover:border-[#6E1E2A] hover:text-[#6E1E2A] transition-colors"
                    >
                      LinkedIn (kabirhiking) ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Message Form */}
            <div className="md:col-span-7 bg-[#F5F0E8] p-8 rounded-2xl border border-[#E4DCD0] shadow-sm relative">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6E1E2A] font-semibold block mb-6">
                // Send an Inquiry
              </span>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-[#5A5550] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    placeholder="e.g. Hiring Manager / Collaborator"
                    className="w-full bg-[#FAF7F2] border border-[#E4DCD0] rounded-lg px-4 py-3 text-sm text-[#2A2A2A] placeholder-[#9E978E] focus:outline-none focus:border-[#6E1E2A] focus:ring-1 focus:ring-[#6E1E2A] transition"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-[#5A5550] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    placeholder="name@company.com"
                    className="w-full bg-[#FAF7F2] border border-[#E4DCD0] rounded-lg px-4 py-3 text-sm text-[#2A2A2A] placeholder-[#9E978E] focus:outline-none focus:border-[#6E1E2A] focus:ring-1 focus:ring-[#6E1E2A] transition"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-[#5A5550] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    placeholder="Tell me about the engineering role, project requirements, or opportunity..."
                    className="w-full bg-[#FAF7F2] border border-[#E4DCD0] rounded-lg px-4 py-3 text-sm text-[#2A2A2A] placeholder-[#9E978E] focus:outline-none focus:border-[#6E1E2A] focus:ring-1 focus:ring-[#6E1E2A] transition"
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {statusMessage && (
                  <div
                    className={`p-3 rounded-lg font-mono text-xs ${
                      statusMessage.type === "success"
                        ? "bg-[#6E1E2A]/10 text-[#6E1E2A] border border-[#6E1E2A]/20"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#6E1E2A] hover:bg-[#8B2635] text-[#FAF7F2] font-sans font-medium text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Message ↘"}
                </button>
              </form>
            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
