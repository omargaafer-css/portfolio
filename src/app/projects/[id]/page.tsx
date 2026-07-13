import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Globe, Check, AlertTriangle, Lightbulb, Settings, Cpu, Shield, Database, Code } from "lucide-react";

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  techStack: string[];
  decisions: string[];
  challenges: string;
  lessons: string;
  future: string[];
  github: string;
  demo?: string;
  image?: string;
  iconType: "ai" | "security" | "backend" | "frontend";
}

const projectsData: Record<string, ProjectDetail> = {
  "specsense-ai": {
    id: "specsense-ai",
    title: "SpecSense AI",
    subtitle: "Intelligent Cable Specification & Inspection Control System",
    description: "State-of-the-art computer vision & NLP system for automated datasheet analysis, cable segmentation (YOLOv8), and feeder validation calculations.",
    overview: "SpecSense AI is a dual-tier computer vision and natural language processing system built to automate cable specification extraction, datasheet analysis, and structural cross-section inspection. It features a React & FastAPI enterprise console and a Streamlit console for single-spec parsing.",
    problem: "Electrical engineers spend substantial manual time parsing PDF sheets for cables, checking dimensions, running voltage drop calculations, and validating compliance. Manually checking inner layer boundaries of cable cross-sections is prone to measurement errors.",
    solution: "The system integrates YOLOv8 to segment outer and inner insulation boundaries from cable section photographs, automatically extracting diameters. A SpaCy-based NLP pipeline parses text extracted via OCR from PDF sheets to structure ratings (Voltage, Current, Armour). The FastAPI server operates with a dual-database fallback system.",
    features: [
      "Vision Cable Inspection (YOLOv8 segmentations of circular layers)",
      "Technical Datasheet Parser (OCR text processing & SpaCy tokenizers)",
      "Intelligent Wiring & Feeder Sizer (voltage drops, sizing calculations)",
      "Dual Database Manager (PostgreSQL fallback to local SQLite database)"
    ],
    architecture: "PDF Datasheet / Cable Section Image -> OCR & YOLOv8 Vision Inspector -> FastAPI Parsing Engine -> Sizing Calculations -> Postgres/SQLite DB -> React Client Frontend Dashboard",
    techStack: ["FastAPI (Python)", "React (Vite + TypeScript)", "YOLOv8", "SpaCy NLP", "PostgreSQL", "SQLite", "Tailwind CSS"],
    decisions: [
      "Designed a custom DB Manager that tests PostgreSQL connectivity and transparently redirects operations to SQLite if unreachable, enabling local development without Docker.",
      "Implemented PowerShell commands inside run_project.bat to automatically locate and terminate dangling node/python servers on ports 8000 and 5173."
    ],
    challenges: "YOLOv8 model required robust segmentations on varying cable backgrounds and custom cable colors. This was solved by expanding the training dataset with contrast-adjusted augments and annotating inner insulations precisely.",
    lessons: "Leading a multi-disciplinary project highlights the value of defining clean schemas and REST API borders early. Separating the model inference loops from the main web server threads keeps the interface responsive.",
    future: [
      "Incorporate 3D model renderings of cable runs",
      "Expand compliant checking configurations for regional IEC / NEC standard codes",
      "Build real-time streaming calculation graphs"
    ],
    github: "https://github.com/omar230101276/SpecSense-AI",
    image: "/projects/SpecSense AI/Dashboard.png",
    iconType: "ai"
  },
  "edgmon-v4": {
    id: "edgmon-v4",
    title: "EdgeMon V4.0",
    subtitle: "Intelligent Threat & System Monitor",
    description: "A hybrid system monitoring and Layer 2/4 intrusion detection system (IDS) utilizing Machine Learning (Scikit-Learn) and raw Scapy packet analysis.",
    overview: "EdgeMon V4.0 is a self-hosted system telemetry and network Intrusion Detection System (IDS). It logs hardware metrics and captures packet flows, predicting threat indicators using a Random Forest classifier in real-time.",
    problem: "Traditional system monitoring tools ignore security vulnerabilities in packet payloads. Security tools, conversely, ignore system performance indicators (such as local CPU temp spikes) that could correlate with active attacks.",
    solution: "EdgeMon combines hardware performance polling with a Scapy packet sniffer thread. The packet flow features are parsed by a Scikit-Learn trained ML model (Random Forest / Decision Tree) to classify threat environments, and alert metrics are persisted inside distinct local databases.",
    features: [
      "Multi-Layer Telemetry Poller (hardware metrics, temperatures, network)",
      "Layer 2/4 Network Sniffer (detached Scapy thread capturing streams)",
      "ML-Powered IDS (Random Forest classifier predicting intrusions)",
      "Dual Database Logs (system telemetry in metrics.db, alerts in agent.db)",
      "Excel Exporter (dynamic openpyxl metrics reporting compiler)"
    ],
    architecture: "Host Hardware (CPU/RAM/Temp) + Network Sockets (Scapy sniffer) -> Threat Correlator Engine (ML evaluation) -> SQLite DB Loggers -> Flask Web Dashboard UI + Openpyxl Excel Export",
    techStack: ["Flask (Python)", "Scikit-Learn", "Scapy Engine", "SQLite", "openpyxl", "Tailwind CSS"],
    decisions: [
      "Separated system performance telemetry database from security alerts. This prevents heavy logging loops from locking tables during critical security evaluations.",
      "Generated audio alerts programmatically to notify host administrators immediately when high-risk intrusion signatures are flagged."
    ],
    challenges: "Running Scapy packet capture in python on active windows networks caused CPU spikes and packet loss due to thread blocking.",
    lessons: "Using deque buffers and running the sniffer in a detached background daemon decoupled from the Flask event loop minimized CPU overhead and eliminated packet loss.",
    future: [
      "Implement deep packet inspection (DPI) parser for Layer 7 applications",
      "Add container orchestration logs to trace docker metrics",
      "Integrate automated firewall rule blocks for identified malicious IP inputs"
    ],
    github: "https://github.com/omar230101276/EdgMon_V4.0",
    image: "/projects/EdgMon V4.0/dashbord.png",
    iconType: "security"
  },
  "ecommerce-microservices": {
    id: "ecommerce-microservices",
    title: "Docker E-Commerce System",
    subtitle: "Microservices Catalog & Order Ecosystem",
    description: "A containerized shopping API framework separating catalog, cart, order and payment into autonomous FastAPI servers prepared for Kubernetes orchestration.",
    overview: "This is a containerized microservices platform containing four autonomous Python backend services and a central React administration control dashboard. The architecture is ready for local Kubernetes orchestration.",
    problem: "Monolithic e-commerce setups are difficult to scale. A peak in checkout payment requests can throttle catalog updates, causing system-wide performance degradation.",
    solution: "The system decouples logic into four independent backend services (Catalog, Cart, Order, Payment) running on FastAPI. Services communicate via HTTP REST. Each component is dockerized, and deployment files are configured for Kubernetes.",
    features: [
      "Autonomous Backend Services (Catalog, Cart, Order, Payment)",
      "React Order Dashboard UI (visualizing sales, stock statuses)",
      "Containerized Ecosystem (Docker-Compose configurations)",
      "Kubernetes Deployment Manifests (pods, services, configurations)",
      "Interactive Swagger API Documentation for all backend services"
    ],
    architecture: "React Web Dashboard Client -> Gateway Router -> [Catalog Service (8000), Cart Service (8001), Order Service (8002), Payment Service (8003)] -> Independent In-Memory Datastores",
    techStack: ["FastAPI (Python)", "React (JavaScript)", "Docker", "Docker-Compose", "Kubernetes", "Swagger UI"],
    decisions: [
      "Configured in-memory data structures inside each service to guarantee rapid development iteration without external DB hosting prerequisites.",
      "Configured independent Kubernetes manifest files (services, deployments) inside k8s/ to allow local clusters (Kind/Minikube) to manage replicas."
    ],
    challenges: "Handling port mapping conflicts and communication routing across multiple local Docker containers during initial boots.",
    lessons: "Writing custom PowerShell (`start_dev.ps1`) and batch (`start.bat`) files to orchestrate the build sequence ensures consistent local deployment environments.",
    future: [
      "Integrate Redis caches to manage cart session states",
      "Configure RabbitMQ messaging bus to handle asynchronous order dispatches",
      "Implement PostgreSQL data layer for permanent order records"
    ],
    github: "https://github.com/omar230101276/e-commerce-microservices",
    iconType: "backend"
  },
  "huffman-compressor": {
    id: "huffman-compressor",
    title: "Huffman Compressor",
    subtitle: "Lossless Coding & Decompression Tool",
    description: "A desktop and terminal compiler deploying the Huffman prefix algorithm. Integrates Shannon Entropy verification limits for files.",
    overview: "This tool implements the Huffman Coding Algorithm for lossless data compression and decompression. It features an interactive Tkinter graphical interface and a command-line interface, providing exact telemetry logs of savings.",
    problem: "Developers need to optimize data payloads, but understanding how close an encoded file gets to the theoretical limits of lossless compression is rarely visualized.",
    solution: "The tool structures custom binary headers, compiles the frequency mapping of input payloads, constructs the prefix tree, and writes compressed `.huff` output files. It integrates Shannon Entropy formulas to display theoretical compression limits.",
    features: [
      "Lossless Compression (safely handles text, images, PDFs, media)",
      "Extension Metadata Preservation (retains original format inside header)",
      "Interactive GUI Dashboard (Tkinter browse, compression, output logger)",
      "Shannon Entropy calculations (theoretical limits of lossless coding)"
    ],
    architecture: "Input File -> Frequency Mapping -> Huffman Tree Compiler -> Bitstream Encoder -> Custom Headers (.huff output) -> Bitstream Parser -> Tree-based Decoder -> Restored File",
    techStack: ["Python", "Tkinter", "CLI Parsing", "Mathematical Telemetry"],
    decisions: [
      "Preserved the original file extensions by appending a metadata block directly to the binary header of the compressed `.huff` file.",
      "Designed a CLI validator that compresses a target file, performs decompression immediately, and runs byte verification to ensure zero data loss."
    ],
    challenges: "Handling bitstream boundaries when output file bytes do not line up on perfect 8-bit limits.",
    lessons: "Using a byte-padding header allows the decoder to identify and ignore trailing bit offsets, avoiding payload corruption during file restoration.",
    future: [
      "Implement dynamic adaptive Huffman algorithms for streaming data",
      "Port the core compression logic to C++ to optimize execution times",
      "Add folder-level archive zipping support"
    ],
    github: "https://github.com/omar230101276/Huffman_Compressor",
    image: "/projects/Huffman Compression/Dashbord.png",
    iconType: "backend"
  },
  "apexbank": {
    id: "apexbank",
    title: "ApexBank Interface",
    subtitle: "Modern Banking Client Interface",
    description: "Polished client banking application dashboard with clean ledger views, balance charts, appointment planners, and transfer configurations.",
    overview: "ApexBank is a static web interface modeling a retail banking system. It includes client panels, appointment scheduling calendars, ledger screens, transaction transfer logs, and administrator consoles.",
    problem: "Recruiters and frontend developers need reference designs for secure-looking, responsive financial dashboards that avoid heavy framework payloads.",
    solution: "Designed and built a static interface utilizing semantic HTML5, custom properties (CSS variables) for strict design grids, and pure JavaScript to handle simulated database updates.",
    features: [
      "Interactive Landing Page (responsive reviews, product calculators)",
      "Secure Authentication gates (validated login and registration)",
      "Customer Dashboard (account ledger, balance metrics, transfer paths)",
      "Branch Locator and Meeting Booking calendars",
      "Admin Control Panel (audit logs, user registrations, transfer approvals)"
    ],
    architecture: "Static HTML5 pages -> Custom CSS layout variables -> Vanilla JavaScript Event Handlers -> LocalStorage (State synchronization)",
    techStack: ["HTML5", "Vanilla CSS3 (Variables, Grids, Glassmorphism)", "Vanilla JavaScript"],
    decisions: [
      "Utilized pure CSS variables for consistent palettes, enabling smooth light/dark mode transitions without heavy external frameworks.",
      "Used LocalStorage to persist balance updates, transaction histories, and scheduled meetings across separate static page boundaries."
    ],
    challenges: "Maintaining state (balance calculations, transactions) across separate HTML pages without a database backend.",
    lessons: "Leveraging the HTML5 LocalStorage API with structured JSON schemas allows for mock databases, creating responsive user flows.",
    future: [
      "Integrate real-time charts using Chart.js",
      "Build serverless functions to simulate live security authorization pins",
      "Add CSV ledger export options"
    ],
    github: "https://github.com/omar230101276/Bank_Web_FrontEnd",
    image: "/projects/Web Bank/dashbord.png",
    iconType: "frontend"
  },
  "photographer-ms": {
    id: "photographer-ms",
    title: "Photographer Portfolio",
    subtitle: "Portfolio & Booking Engine (abady)",
    description: "A robust client booking and gallery portfolio management system built on Laravel. Simplifies schedules, reserves appointments, and exposes admin logs.",
    overview: "Photographer Portfolio (abady) is a full-stack content and reservation management platform built with Laravel. It integrates booking schedules, database schema migrations, and administrator logs.",
    problem: "Photographers require portfolios that do not just display images, but also coordinate client reservations, lock booked calendar slots, and log audit data.",
    solution: "Implemented a Laravel web application utilizing Eloquent ORM to manage models (Clients, Bookings, Gallery). The dashboard allows admins to confirm bookings and manage the portfolio.",
    features: [
      "Dynamic Schedule Selector (booking calendars for client schedules)",
      "Responsive Image Portfolios (lazy-loaded display grids)",
      "Admin Console (booking audit logs, verification flags)",
      "Secure Authentication gates (auth middleware limits for dashboards)"
    ],
    architecture: "Client Web Browser -> Laravel Router -> Middleware Filter -> Controllers & Eloquent ORM Models -> MySQL Database",
    techStack: ["PHP", "Laravel Framework", "MySQL Database", "Blade Templates", "HTML5 & CSS3"],
    decisions: [
      "Configured robust Eloquent relationships (HasMany / BelongsTo) to ensure child bookings are cascade-deleted if a client profile is removed.",
      "Integrated secure authentication middleware for all administrative routes to protect booking metrics."
    ],
    challenges: "Preventing double-booking of identical time slots during concurrent client checkouts.",
    lessons: "Enforcing unique index constraints across both the DB schema migrations and Eloquent validation rules handles concurrent transactions reliably.",
    future: [
      "Add automated email notifications using Laravel Mailables",
      "Integrate Stripe payment gateways",
      "Expose public API endpoints for client integrations"
    ],
    github: "https://github.com/omar230101276/abady",
    image: "/projects/Photogapher MS/Home page.png",
    iconType: "backend"
  },
  "storm-breaker": {
    id: "storm-breaker",
    title: "Storm-Breaker",
    subtitle: "Web Panel Security Access Tool",
    description: "Tested platform to collect device metrics, capture simulated payloads, check SSL constraints, and audit network communication parameters.",
    overview: "Storm-Breaker is a security testing panel built to audit device telemetry and web authorization permissions under controlled lab configurations.",
    problem: "Security analysts need to verify how easily user agents expose device parameters (such as locations, camera, or microphone metrics) when security defaults are weak.",
    solution: "The tool provides a web panel built with Python and PHP. It handles device metadata extraction and simulates camera/microphone interactions. It includes local tunnel integration via Ngrok.",
    features: [
      "Device Telemetry extraction (permission-free hardware properties)",
      "Webcam/Microphone authorization audits",
      "Local Ngrok tunnel script integration",
      "Operational logging panels"
    ],
    architecture: "Audited Web Page -> PHP Web Endpoint -> Local Python Listeners -> Ngrok SSL Tunnel -> Admin Control Console",
    techStack: ["Python3", "PHP", "Bash Scripts", "Ngrok Engine", "SSL Handlers"],
    decisions: [
      "Designed a modular PHP system that runs on standard public_html domains, bypassing local virtual machine requirements.",
      "Integrated custom configuration modules allowing operators to reset panel credentials securely."
    ],
    challenges: "Modern browsers require active SSL certificates to authorize location or media access, blocking local testing.",
    lessons: "Configuring automated Ngrok commands to spin up secure tunnels ensures that the panel operates correctly in lab tests.",
    future: [
      "Develop responsive security dashboards",
      "Support telemetry analysis for Android Termux containers",
      "Include detailed OWASP advisory write-ups for users"
    ],
    github: "https://github.com/ultrasecurity/Storm-Breaker",
    image: "/projects/Click Breaker/Dashboard.png",
    iconType: "security"
  },
  "edgmon-v3-1": {
    id: "edgmon-v3-1",
    title: "EdgeMon V3.1",
    subtitle: "System Metrics Telemetry Dashboard",
    description: "A lightweight hardware polling daemon collecting real-time CPU, disk, RAM and temperature bounds, logging directly into a local SQLite repository.",
    overview: "EdgeMon V3.1 is a lightweight system telemetry tool that monitors hardware resource indicators in real-time and logs history records into a local SQLite database.",
    problem: "Most system monitoring utilities are heavy, difficult to install, or lack native CPU temperature polling on Windows platforms.",
    solution: "A lightweight Python daemon polls system indicators (CPU utilization, temperatures, RAM, and Disk space) using psutil and WMI bindings, and serves a Flask interface.",
    features: [
      "Real-time Telemetry Dashboard (CPU utilization, RAM, network streams)",
      "Persistent History Logger (background thread daemon updating metrics.db)",
      "Cross-platform Temperature Poller (WMI/GPUtil on Windows, /sys on Linux)",
      "Threshold Alert Alerts (CPU, memory, temperature warnings)",
      "CSV Report Exports (history log downloads)"
    ],
    architecture: "Background Poller (psutil/WMI threads) -> SQLite Database Log -> Flask REST API Backend -> CSS-styled Dashboard UI",
    techStack: ["Python", "Flask", "SQLite Database", "psutil & GPUtil", "HTML5 & CSS3"],
    decisions: [
      "Coded a custom Windows temperature poller using GPUtil and WMI namespace queries to bypass hardware access limitations.",
      "Configured automated CSV compilations to dump SQLite records directly for administrative exports."
    ],
    challenges: "Reducing CPU overhead caused by high-frequency hardware queries inside the telemetry collection loop.",
    lessons: "Throttling background collector intervals to 5 seconds and index-optimizing time-series columns in SQLite reduced daemon CPU usage to below 1%.",
    future: [
      "Implement real-time WebSocket metric pushes",
      "Add email-based warning alerts for server status thresholds",
      "Support customized telemetry polling dashboards"
    ],
    github: "https://github.com/omar230101276/Automated_Server_Monitorin-Linux-Windows-",
    image: "/projects/EdgMon V3.1/dashbord.png",
    iconType: "security"
  }
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id: id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-white transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to Command Center</span>
        </Link>

        {/* Title Block */}
        <div className="border border-border-custom bg-[#0E1322]/60 rounded-2xl p-6 sm:p-8 mb-8 shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="p-2 bg-slate-900 border border-border-custom rounded-lg text-primary-custom">
              {project.iconType === "ai" && <Cpu size={24} />}
              {project.iconType === "security" && <Shield size={24} />}
              {project.iconType === "backend" && <Database size={24} />}
              {project.iconType === "frontend" && <Code size={24} />}
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary">
              {project.iconType === "ai" ? "AI & Computer Vision" : project.iconType} System
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{project.title}</h1>
          <p className="text-sm sm:text-base font-semibold text-primary-custom font-mono mb-4">{project.subtitle}</p>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border-custom rounded-lg text-xs font-bold text-white bg-slate-900 hover:border-slate-600 transition-colors"
            >
              <Github size={14} />
              <span>SOURCE CODE</span>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary-custom/40 rounded-lg text-xs font-bold text-white bg-primary-custom/10 hover:bg-primary-custom/25 transition-colors"
              >
                <Globe size={14} />
                <span>LIVE DEMO</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Image Banner */}
        {project.image && (
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border-custom bg-slate-950 mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain object-center p-2"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        )}

        {/* Detailed Sections */}
        <div className="space-y-8">
          {/* Overview */}
          <section className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">System Overview</h2>
            <p className="text-sm text-text-secondary leading-relaxed">{project.overview}</p>
          </section>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md flex flex-col">
              <div className="flex items-center gap-2 mb-3 text-red-400">
                <AlertTriangle size={18} />
                <h2 className="text-base sm:text-lg font-bold text-white">The Problem</h2>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed flex-grow">{project.problem}</p>
            </div>
            <div className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md flex flex-col">
              <div className="flex items-center gap-2 mb-3 text-emerald-400">
                <Lightbulb size={18} />
                <h2 className="text-base sm:text-lg font-bold text-white">The Solution</h2>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed flex-grow">{project.solution}</p>
            </div>
          </div>

          {/* System Architecture */}
          <section className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">System Architecture</h2>
            <div className="p-4 bg-slate-950 rounded-lg border border-border-custom mb-3 font-mono text-xs text-text-secondary overflow-x-auto leading-relaxed">
              {project.architecture}
            </div>
            <p className="text-xs text-text-secondary/70 italic">Visual flow representation mapping core communication boundaries.</p>
          </section>

          {/* Technical Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Features */}
            <div className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
              <h2 className="text-base sm:text-lg font-bold text-white mb-4">Core Specifications</h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                    <span className="text-emerald-400 mt-1 shrink-0"><Check size={14} /></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
              <h2 className="text-base sm:text-lg font-bold text-white mb-4">Technologies Leveraged</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-slate-950 text-text-secondary border border-border-custom rounded-md text-xs font-mono font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Engineering Decisions */}
          <section className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4 text-primary-custom">
              <Settings size={18} />
              <h2 className="text-base sm:text-lg font-bold text-white">Engineering Decisions</h2>
            </div>
            <ul className="space-y-4">
              {project.decisions.map((decision, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                  <span className="px-2 py-0.5 bg-slate-950 border border-border-custom text-primary-custom text-xs font-mono rounded shrink-0">DEC-{idx + 1}</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges & Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
              <h2 className="text-base sm:text-lg font-bold text-white mb-3">Key Challenge</h2>
              <p className="text-sm text-text-secondary leading-relaxed">{project.challenges}</p>
            </div>
            <div className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
              <h2 className="text-base sm:text-lg font-bold text-white mb-3">Lessons Learned</h2>
              <p className="text-sm text-text-secondary leading-relaxed">{project.lessons}</p>
            </div>
          </div>

          {/* Future Improvements */}
          <section className="bg-[#0E1322]/45 border border-border-custom rounded-xl p-6 shadow-md">
            <h2 className="text-base sm:text-lg font-bold text-white mb-4">Future Improvements</h2>
            <ul className="space-y-3">
              {project.future.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                  <span className="text-primary-custom mt-1.5 shrink-0 select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer Back Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-custom rounded-lg text-sm font-bold text-white bg-slate-900 hover:border-slate-600 transition-colors shadow-lg"
          >
            <ArrowLeft size={16} />
            <span>Return to Command Center</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
