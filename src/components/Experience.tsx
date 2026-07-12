import { Calendar, Briefcase, GraduationCap, Award } from "lucide-react";

interface TimelineItem {
  id: number;
  type: "work" | "education" | "training";
  title: string;
  organization: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
}

export default function Experience() {
  const items: TimelineItem[] = [
    {
      id: 1,
      type: "education",
      title: "Computer Science Major",
      organization: "ElSewedy University of Technology",
      period: "2024 - Present",
      description: [
        "Focusing on backend systems architecture, software engineering, databases, and secure programming practices.",
        "Team Lead for SpecSense AI, orchestrating a multi-disciplinary team to deliver a functional cable inspection platform.",
        "Maintaining a strong academic focus on data structures, computer networks, OS design, and algorithms.",
      ],
      icon: <GraduationCap size={18} className="text-primary-custom" />,
    },
    {
      id: 2,
      type: "work",
      title: "Software Engineering Intern",
      organization: "Elsewedy Electric PSP",
      period: "Summer 2025",
      description: [
        "Collaborated with engineering groups to study telemetry architectures and system integrations.",
        "Gained practical exposure to enterprise software systems, clean coding guidelines, and scalable deployments.",
        "Documented architecture blueprints and verified secure transmission models.",
      ],
      icon: <Briefcase size={18} className="text-[#06B6D4]" />,
    },
    {
      id: 3,
      type: "training",
      title: "Career Compass Development Scholar",
      organization: "Nile University",
      period: "2025",
      description: [
        "Completed rigorous software architecture, career engineering, and product development workshops.",
        "Refined technical communication skills and collaborative software design methodologies.",
      ],
      icon: <Award size={18} className="text-[#F59E0B]" />,
    },
  ];

  return (
    <div className="relative border-l border-border-custom ml-4 md:ml-6 space-y-12">
      {items.map((item) => (
        <div key={item.id} className="relative pl-8 md:pl-10 group">
          {/* Timeline bullet */}
          <div className="absolute left-[-17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-lg bg-[#05070B] border border-border-custom group-hover:border-primary-custom transition-colors duration-300">
            {item.icon}
          </div>

          {/* Card content */}
          <div className="p-6 bg-[#0E1322]/60 border border-border-custom rounded-xl shadow-lg group-hover:border-slate-800 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary-custom transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-text-secondary">{item.organization}</p>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900 border border-border-custom rounded-md text-xs font-mono text-text-secondary shrink-0">
                <Calendar size={12} />
                <span>{item.period}</span>
              </div>
            </div>

            <ul className="space-y-2.5">
              {item.description.map((bullet, idx) => (
                <li
                  key={idx}
                  className="text-sm text-text-secondary leading-relaxed flex items-start gap-2"
                >
                  <span className="text-primary-custom mt-1.5 shrink-0 select-none">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
