import Image from "next/image";
import Navigation from "@/components/Navigation";
import SkillsList from "@/components/SkillsList";
import SystemArch from "@/components/SystemArch";
import ProjectsGrid from "@/components/ProjectsGrid";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import { Download, Github, Linkedin, Mail, ExternalLink, ShieldCheck } from "lucide-react";

export default function Home() {
  const certifications = [
    {
      title: "Summer Internship 2025",
      issuer: "Elsewedy Electric PSP",
      date: "2025",
      image: "/certifications/Summer Internship 2025 -Elsewedy Electric PSP-.jpeg",
    },
    {
      title: "Junior Penetration Tester",
      issuer: "TryHackMe",
      date: "2025",
      image: "/certifications/Jr Penetration Tester -Try Hack Me-.jpeg",
    },
    {
      title: "Pre Security Certified",
      issuer: "TryHackMe",
      date: "2025",
      image: "/certifications/Pre Security -Try Hack Me-.jpeg",
    },
    {
      title: "Career Compass Scholar",
      issuer: "Nile University",
      date: "2025",
      image: "/certifications/Career Compass -Nile University-.jpeg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Intro text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-custom/10 border border-primary-custom/30 rounded-full text-xs font-mono text-primary-custom">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-custom opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-custom"></span>
              </span>
              <span>Available for Backend & Full-Stack Roles</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Omar Mohamed Abdelghani
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-primary-custom font-mono">
              Backend & Full-Stack Software Engineer
            </p>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
              I am a Computer Science student at ElSewedy University of Technology. My engineering focus lies at the intersection of robust backend architectures, artificial intelligence integrations, network design, and cybersecurity. Rather than building simple prototypes, I focus on designing complete, production-ready systems that are secure by design, modular, and easy to maintain.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/Omar_Mohamed_Abdelghani_CV.pdf"
                download="Omar_Mohamed_Abdelghani_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-primary-custom hover:bg-blue-600 transition-all-custom shadow-lg shadow-primary-custom/20"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#0E1322]/80 border border-border-custom hover:border-slate-600 hover:bg-[#161D33] transition-all-custom"
              >
                <Mail size={18} />
                <span>Contact Omar</span>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://github.com/omar230101276"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold font-mono text-text-secondary hover:text-white transition-colors duration-200"
              >
                <Github size={16} />
                <span>GITHUB</span>
              </a>
              <a
                href="https://linkedin.com/in/omar-mohamed-gaafer-612072307"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold font-mono text-text-secondary hover:text-white transition-colors duration-200"
              >
                <Linkedin size={16} />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-2 bg-[#0E1322]/60 border border-border-custom rounded-2xl overflow-hidden shadow-2xl max-w-sm w-full group">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 border border-border-custom">
                <Image
                  src="/Profile.jpeg"
                  alt="Omar Mohamed Abdelghani"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
              <div className="p-4 mt-2 text-center">
                <div className="text-sm font-semibold text-white">Omar M. Abdelghani</div>
                <div className="text-xs text-text-secondary font-mono mt-1">Computer Science Major @ SUT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Architecture & Spec Section */}
      <section className="bg-[#080C14]/50 border-y border-border-custom py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Systems Engineering</h2>
            <p className="text-sm sm:text-base text-text-secondary">
              I design modular software infrastructures, prioritizing reliability, transaction boundaries, database persistence fallbacks, and microservice container isolation.
            </p>
          </div>
          <SystemArch />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Engineering Projects</h2>
          <p className="text-sm sm:text-base text-text-secondary">
            A verified catalog of software architectures, tools, and platforms built from scratch. Explore deep technical specifications for each database schema and deployment route.
          </p>
        </div>
        <ProjectsGrid />
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-[#080C14]/50 border-y border-border-custom py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Professional Experience</h2>
            <p className="text-sm sm:text-base text-text-secondary">
              A timeline tracking my studies, internships, and structured training achievements.
            </p>
          </div>
          <div className="max-w-4xl">
            <Experience />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Core Tech Competencies</h2>
          <p className="text-sm sm:text-base text-text-secondary">
            Categorized skills highlighting languages, frameworks, infrastructure platforms, databases, and auditing tools I actively work with.
          </p>
        </div>
        <SkillsList />
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-[#080C14]/50 border-y border-border-custom py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Verified Certifications</h2>
            <p className="text-sm sm:text-base text-text-secondary">
              Academic credentials, corporate internship sign-offs, and security program completions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-[#0E1322]/60 border border-border-custom rounded-xl overflow-hidden shadow-lg group hover:border-slate-700 transition-colors duration-300"
              >
                <div className="relative aspect-video w-full bg-slate-950 border-b border-border-custom overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 mb-1 text-primary-custom">
                    <ShieldCheck size={16} />
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider">Verified Credential</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">{cert.title}</h3>
                  <p className="text-xs text-text-secondary">{cert.issuer}</p>
                  <p className="text-[10px] text-text-secondary/70 font-mono mt-2">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Let&apos;s Connect</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              I am open to discuss professional opportunities, backend architectures, full-stack developments, and security audits. Send a direct message or connect with me via email/social media.
            </p>
            <div className="space-y-4 pt-4 text-sm text-text-secondary">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-custom" />
                <a href="mailto:omar230101276@sut.edu.eg" className="hover:text-white transition-colors duration-200">
                  omar230101276@sut.edu.eg
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={18} className="text-primary-custom" />
                <a
                  href="https://linkedin.com/in/omar-mohamed-gaafer-612072307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  linkedin.com/in/omar-mohamed-gaafer-612072307
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github size={18} className="text-primary-custom" />
                <a
                  href="https://github.com/omar230101276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  github.com/omar230101276
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-custom bg-[#05070B] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-secondary">
          <div>© {new Date().getFullYear()} Omar Mohamed Abdelghani. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
            <a href="/Omar_Mohamed_Abdelghani_CV.pdf" download="Omar_Mohamed_Abdelghani_CV.pdf" className="hover:text-white transition-colors duration-200">CV</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
