import { Server, Layout, Database, Terminal, Shield, Network } from "lucide-react";

export default function SkillsList() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="text-primary-custom" size={24} />,
      skills: ["Python", "Laravel (PHP)", "Flask", "FastAPI"],
    },
    {
      title: "Frontend Development",
      icon: <Layout className="text-[#06B6D4]" size={24} />,
      skills: ["React", "TypeScript", "JavaScript", "HTML5 & CSS3", "Tailwind CSS"],
    },
    {
      title: "Databases & Storage",
      icon: <Database className="text-[#10B981]" size={24} />,
      skills: ["MySQL", "PostgreSQL", "SQLite", "Database Design"],
    },
    {
      title: "DevOps & Systems",
      icon: <Terminal className="text-[#F59E0B]" size={24} />,
      skills: ["Docker", "Git & GitHub", "Linux Administration", "Shell Scripting"],
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="text-[#EF4444]" size={24} />,
      skills: ["Burp Suite", "Wireshark", "Nmap & Metasploit", "OWASP Top 10", "Penetration Testing"],
    },
    {
      title: "Networking",
      icon: <Network className="text-[#8B5CF6]" size={24} />,
      skills: ["VLANs", "OSPF Routing", "Cisco Networking", "Network Security"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="p-6 bg-[#0E1322]/60 border border-border-custom rounded-xl shadow-lg hover:border-text-secondary/30 transition-all duration-350 hover:translate-y-[-2px]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-900 rounded-lg">
              {category.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white">
              {category.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#1E293B]/60 text-text-secondary rounded-md text-xs sm:text-sm font-medium border border-border-custom hover:border-slate-600 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
