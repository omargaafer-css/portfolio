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
      type: "work",
      title: "Freelance Software & AI Engineer",
      organization: "Outlier",
      period: "Oct 2024 – Feb 2026",
      description: [
        "Delivered coding and AI-model evaluation solutions for international clients, consistently meeting deadlines across concurrent technical engagements.",
        "Translated ambiguous client requirements into working technical deliverables, strengthening independent problem-solving and remote collaboration skills in a fast-paced freelance environment.",
      ],
      icon: <Briefcase size={18} className="text-primary-custom" />,
    },
    {
      id: 2,
      type: "work",
      title: "Information Technology Trainee",
      organization: "Elsewedy Electric PSP",
      period: "Jul 2025 – Aug 2025",
      description: [
        "Supported monitoring and maintenance of enterprise IT infrastructure across network and hardware operations for an industrial manufacturing environment.",
        "Assisted in troubleshooting and system administration, gaining direct exposure to production IT operations at an industrial-scale organization — context later applied to the SpecSense AI graduation project.",
      ],
      icon: <Briefcase size={18} className="text-[#06B6D4]" />,
    },
    {
      id: 3,
      type: "education",
      title: "B.Sc. in Computer Science (In Progress)",
      organization: "ElSewedy University of Technology — Faculty of Engineering Technology",
      period: "2024 – Present",
      description: [
        "Focusing on backend systems architecture, software engineering, databases, and secure programming practices.",
        "Team Lead for SpecSense AI, orchestrating a multi-disciplinary team to deliver a functional cable inspection platform for Elsewedy Electric.",
        "Strong academic focus on data structures, computer networks, OS design, and algorithms.",
      ],
      icon: <GraduationCap size={18} className="text-[#10B981]" />,
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
