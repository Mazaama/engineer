import React, { useState } from "react";
import { 
  Menu, X, Search, ChevronRight, CheckCircle2, 
  MapPin, Phone, Mail, Award, Users, Globe, Building2, 
  ShieldCheck, HardHat, Compass, Eye, Heart, Flame, Truck, 
  Construction, FolderKanban, ArrowRight, Quote, MessageCircle
} from "lucide-react";

// Types
type ServiceType = {
  id: string;
  title: string;
  icon: React.ElementType;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs: string[];
};

// Data
const services: ServiceType[] = [
  {
    id: "oil-gas",
    title: "Oil & Gas Projects",
    icon: Flame,
    shortDesc: "End-to-end design, construction, and commissioning of refineries and upstream facilities.",
    fullDesc: "Tejas Energy delivers full lifecycle solutions across upstream, midstream, and downstream sectors. Our expertise covers deepwater infrastructure, gas processing facilities, pipelines, and fully integrated mega-refinery construction under international ISO/API compliance standards.",
    features: [
      "Process & Mechanical Equipment Installation",
      "Cryogenic Storage & Offsite Storage Tanks",
      "Pipelines & Pumping Stations",
      "E&I (Electrical & Instrumentation) Setup"
    ],
    specs: ["API Standards Compliant", "Offshore/Onshore Expertise", "Heavy Structural Fabrication"]
  },
  {
    id: "infrastructure",
    title: "Road & Infrastructure Engineering",
    icon: Construction,
    shortDesc: "Premium infrastructure works including expressways, bridges, and smart city networks.",
    fullDesc: "Modeled after global mega-project standards, our infrastructure wing specializes in heavy civil works, national expressway development, elevated transport corridors, and advanced urban subterranean utility planning.",
    features: [
      "Expressways & Elevated Corridors",
      "Precast Bridge Components & Erection",
      "Deep Foundation & Substructure Engineering",
      "Smart City Underground Utility Networks"
    ],
    specs: ["AASHTO / IRC Guidelines", "Pavements & Super-Structure", "Traffic/Route Modelling"]
  },
  {
    id: "manpower",
    title: "Global Manpower Solutions",
    icon: Users,
    shortDesc: "Certified technical, specialized, and multi-skilled talent for complex heavy industrial projects.",
    fullDesc: "We provide highly specialized technical expertise across multi-disciplinary engineering domains globally. Every candidate undergoes rigorous vetting to ensure compliance with strict safety and performance standards for highly hazardous work environments.",
    features: [
      "Certified Welders, Fitters, & Riggers",
      "Process Engineers & Quality Assurance Specialists",
      "HSE & Fire Safety Inspectors",
      "Logistics & Site Administration Experts"
    ],
    specs: ["Global Staffing Protocols", "Safety/ISO Orientations", "Skill Testing Certification"]
  },
  {
    id: "heavy-lifting",
    title: "Heavy Lifting Services",
    icon: Truck,
    shortDesc: "Precision lift engineering, rigging operations, and specialized super-heavy cargo transport.",
    fullDesc: "Deploying high-tonnage multi-axle trailers and super-lift crane assemblies, our Heavy Lifting division handles the transport and positioning of massive industrial modules such as distillation columns, gas turbines, and bridge girders.",
    features: [
      "Heavy Lift Crane Operations (up to 1,200 MT)",
      "Multi-Axle SPMT Module Transport",
      "Detailed Rigging & Safety Studies",
      "Jacking, Skidding, & Complex Installation"
    ],
    specs: ["Critical Lift Engineering", "Site Specific Lift Plans", "Third Party Safety Audits"]
  },
  {
    id: "construction",
    title: "Building & Villas Projects",
    icon: Building2,
    shortDesc: "Turnkey luxury villas, multi-storey corporate towers, and industrial plant architecture.",
    fullDesc: "Combining superior aesthetics with structurally reinforced concrete construction, we deliver customized commercial and residential building complexes, executing architecture, foundational strengthening, and interior structural finishing.",
    features: [
      "Premium Commercial Corporate Towers",
      "Luxury Bespoke Villa Developments",
      "Seismic-Resistant Structural Framing",
      "MEP (Mechanical, Electrical, Plumbing) Fitouts"
    ],
    specs: ["LEED Certified Designs", "High-Grade Reinforcements", "Custom Premium Facades"]
  },
  {
    id: "project-management",
    title: "Project Management",
    icon: FolderKanban,
    shortDesc: "Comprehensive EPC planning, risk mitigation, schedule optimization, and quality audits.",
    fullDesc: "Acting as the prime orchestrator for large-scale EPC projects, our management teams ensure seamless execution within strict timeline and budgetary envelopes using state-of-the-art Primavera P6 and risk modeling platforms.",
    features: [
      "EPC Project Orchestration & Tendering",
      "Schedule & Cost Baseline Modeling",
      "Vendor & Subcontractor Coordination",
      "Quality Assurance & Progress Control"
    ],
    specs: ["Primavera P6 Tracking", "Earned Value Management", "Contract/Claim Advisory"]
  }
];

const projects = [
  {
    title: "Mega Refinery Expansion",
    location: "Ruwais, United Arab Emirates",
    tags: ["Oil & Gas", "Heavy Equipment"],
    desc: "Upgrading processing capacities by 450,000 BPD, including heavy structural erection and multi-kilometer high-pressure piping manifolds.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "National Super Expressway",
    location: "New Delhi - Mumbai, India",
    tags: ["Infrastructure", "Precast Bridges"],
    desc: "Construction of an advanced 120km elevated greenfield expressway stretch with automated tolling architecture and eco-corridors.",
    image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Petrochemical Industrial Complex",
    location: "Gujarat, India",
    tags: ["Civil Setup", "Manpower Supply"],
    desc: "End-to-end civil works and multi-disciplinary workforce provision for a massive automated olefins petrochemical processing facility.",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=600&q=80"
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<string | null>("oil-gas");
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [searchOpen, setSearchOpen] = useState(false);

  // Send WhatsApp message from form
  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) {
      alert("Please enter at least your Name and Message.");
      return;
    }
    const text = `Hello! I am ${formState.name}.%0AEmail: ${formState.email}%0APhone: ${formState.phone}%0A%0AMessage:%0A${formState.message}`;
    window.open(`https://wa.me/919354939463?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f4f6fb] font-sans overflow-x-hidden">
      {/* 1. Header & Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b1c3d]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-gradient-to-tr from-[#d4af37] to-amber-300 w-12 h-12 rounded-lg shadow-md">
              <HardHat className="text-[#0b1c3d] w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white leading-tight font-sans">
                TEJAS
              </h1>
              <p className="text-[10px] text-[#d4af37] uppercase tracking-widest font-semibold">
                Energy & Infra Resources
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-slate-200 hover:text-[#d4af37] font-medium text-sm transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}

            {/* Quick Search */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/5 transition"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* CTA Contact Button */}
            <a 
              href="#contact"
              className="bg-[#d4af37] hover:bg-amber-500 text-[#0b1c3d] font-bold px-6 py-2.5 rounded text-sm transition-all shadow-md shadow-[#d4af37]/20 flex items-center gap-2"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Search Bar Overlay */}
        {searchOpen && (
          <div className="bg-[#07132a] border-b border-white/10 px-8 py-4 transition-all">
            <div className="max-w-2xl mx-auto flex items-center gap-3">
              <input 
                type="text" 
                placeholder="Search capabilities, industries, or global footprint..." 
                className="w-full bg-transparent text-white border-b border-white/20 py-2 focus:outline-none focus:border-[#d4af37]"
              />
              <button onClick={() => setSearchOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0b1c3d] border-b border-white/10 shadow-xl px-4 pt-4 pb-6 space-y-4">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-[#d4af37] font-medium py-2 border-b border-white/5"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#d4af37] text-[#0b1c3d] font-bold py-3 rounded-lg shadow mt-4"
            >
              Inquire via WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden flex items-center bg-[#050e1e]">
        {/* Animated Full-Cover Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-zoom opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')" }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c3d]/90 via-[#0b1c3d]/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-20 w-full z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Main Headline & Value Proposition */}
          <div className="max-w-2xl text-white space-y-6">
            <span className="inline-block border border-[#d4af37]/60 text-[#d4af37] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest backdrop-blur-sm bg-white/5">
              GLOBAL EXCELLENCE & INDUSTRIAL ENGINEERING
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              WELCOME <br />
              <span className="bg-gradient-to-r from-[#d4af37] to-amber-300 bg-clip-text text-transparent">
                Tejas Energy and Infra Resources
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-200">
              Empowering the Core of Progress
            </p>
            <p className="text-lg md:text-xl font-medium text-[#4fa3ff] border-l-4 border-[#d4af37] pl-4">
              "Your Trust, Our Talent"
            </p>

            {/* Quick Links & CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#services"
                className="bg-[#d4af37] hover:bg-amber-400 text-[#0b1c3d] font-bold px-8 py-3.5 rounded flex items-center gap-2 transition-all shadow-lg shadow-[#d4af37]/20"
              >
                Our Services <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact"
                className="border-2 border-white/30 hover:border-white text-white font-medium px-8 py-3.5 rounded flex items-center gap-2 backdrop-blur-sm bg-white/5 transition-all"
              >
                Contact Our Team
              </a>
            </div>
          </div>

          {/* Quick Stat / Brand Showcase Card */}
          <div className="hidden lg:flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl max-w-sm gap-6 shadow-2xl">
            <div className="flex items-start gap-4 border-b border-white/10 pb-5">
              <ShieldCheck className="w-12 h-12 text-[#d4af37] flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white">ISO & International Compliance</h4>
                <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                  Executed to the highest engineering & structural standards spanning heavy infrastructure & multi-disciplinary engineering.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-[#d4af37] font-semibold mb-1">
                  <span>SAFETY STANDARDS</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#d4af37] h-full w-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-[#d4af37] font-semibold mb-1">
                  <span>PROJECT TIMELINE COMPLETION</span>
                  <span>98%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#d4af37] h-full w-[98%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Us & Managing Director Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f4f6fb] skew-x-12 -z-0 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* About Company Full Detailed Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0b1c3d]/5 text-[#0b1c3d] rounded-full text-xs font-bold tracking-wider">
              <Compass className="w-4 h-4 text-[#d4af37]" /> OVERVIEW & CAPABILITIES
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b1c3d] leading-tight">
              A Global Orchestrator in <br />
              <span className="text-[#d4af37]">Oil & Gas, Infrastructure & Engineering</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Tejas Energy and Infra Resources is a dynamic and rapidly growing company delivering world-class end-to-end solutions in Oil & Gas, Infrastructure Engineering, Building Construction, Heavy Lifting, and Global Manpower Services.
            </p>

            <p className="text-slate-500 leading-relaxed">
              Operating across international standards with strong compliance protocols, we deliver integrated project management across the lifecycle of large-scale infrastructure, mega-refineries, elevated road corridors, and modern civil engineering ventures. Supported by visionary leadership and multi-disciplinary subject matter experts, we continuously empower the core of global progress.
            </p>

            {/* Mission, Vision, Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {[
                {
                  title: "Our Mission",
                  icon: Eye,
                  desc: "To deliver mission-critical EPC and energy solutions with unmatched reliability, international quality, and absolute safety precision."
                },
                {
                  title: "Our Vision",
                  icon: Compass,
                  desc: "To be the foremost global infrastructure partner powering the economic and industrial engine of developing nations worldwide."
                },
                {
                  title: "Our Core Values",
                  icon: Heart,
                  desc: "Integrity, Operational Safety, Client-centric Innovation, and Collaborative Excellence in every foundation we build."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#f4f6fb] border-l-4 border-[#d4af37] p-5 rounded-r shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-6 h-6 text-[#d4af37]" />
                    <h4 className="font-bold text-[#0b1c3d] text-lg">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Managing Director Pinki Profile Card */}
          <div className="lg:col-span-4 bg-[#0b1c3d] text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[420px]">
            {/* Background design accents */}
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#d4af37]/20 rounded-full blur-2xl" />
            
            <div className="space-y-6 relative z-10">
              <span className="bg-[#d4af37] text-[#0b1c3d] text-xs font-bold px-3 py-1 rounded">
                LEADERSHIP
              </span>

              <div>
                <h3 className="text-3xl font-extrabold tracking-tight">Pinki</h3>
                <p className="text-[#4fa3ff] font-semibold text-sm mt-1 uppercase tracking-widest">
                  Managing Director
                </p>
              </div>

              <div className="h-[1px] w-12 bg-[#d4af37]" />

              <p className="text-slate-300 leading-relaxed text-sm">
                "A visionary leader guiding Tejas Energy & Infra Resources into a new era of global prominence. With deep expertise across Oil & Gas workflows and robust national infrastructure execution, her emphasis remains on superior quality, safety, and operational excellence."
              </p>

              <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center gap-4">
                <Quote className="w-8 h-8 text-[#d4af37]" />
                <p className="text-xs text-slate-400 italic">
                  Leading strategic expansions across international refinery and mega-infrastructure operations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Interactive Services Section (Clickable/Expandable Cards) */}
      <section id="services" className="py-24 bg-[#f4f6fb] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-[#d4af37] uppercase tracking-widest mb-3">
              Capabilities & Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b1c3d]">
              End-to-End Core Services
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed max-w-2xl">
              Discover our multi-disciplinary operations spanning full-scale EPC, resource mobilization, and construction excellence. Select a division below to view details.
            </p>
          </div>

          {/* Interactive Toggle Layout (Grid + Detail Pane) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Services List / Cards Sidebar */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {services.map((svc) => {
                const isActive = activeServiceId === svc.id;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setActiveServiceId(svc.id)}
                    className={`text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                      isActive 
                        ? "bg-[#0b1c3d] border-[#0b1c3d] text-white shadow-xl scale-[1.02]" 
                        : "bg-white border-slate-200 text-slate-800 hover:border-[#d4af37]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${isActive ? "bg-white/10" : "bg-[#f4f6fb]"}`}>
                        <svc.icon className={`w-6 h-6 ${isActive ? "text-[#d4af37]" : "text-[#0b1c3d]"}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-base">{svc.title}</h4>
                        <p className={`text-xs mt-1 line-clamp-1 ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                          {svc.shortDesc}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? "rotate-90 text-[#d4af37]" : "text-slate-400"}`} />
                  </button>
                );
              })}
            </div>

            {/* Service Detail Pane (Expanded Area) */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 min-h-[450px] flex flex-col justify-between">
              {(() => {
                const active = services.find((s) => s.id === activeServiceId) || services[0];
                return (
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                          <span className="text-xs bg-[#d4af37]/10 text-[#d4af37] font-bold px-3 py-1 rounded">
                            DIVISION SPECIFICS
                          </span>
                          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0b1c3d] mt-3">
                            {active.title}
                          </h3>
                        </div>
                        <div className="p-4 bg-[#f4f6fb] rounded-xl text-[#0b1c3d]">
                          <active.icon className="w-10 h-10" />
                        </div>
                      </div>

                      {/* Detailed Full Description */}
                      <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                        {active.fullDesc}
                      </p>

                      {/* Key Features/Points */}
                      <h5 className="font-bold text-[#0b1c3d] mb-3">Strategic Capabilities & Execution:</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {active.features.map((feat, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specification / Compliance Badges */}
                    <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3">
                      {active.specs.map((spec, i) => (
                        <span key={i} className="text-xs bg-slate-100 text-slate-700 font-semibold px-3 py-1.5 rounded">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Statistics / Performance Highlights (L&T Theme Parallax Style) */}
      <section className="relative py-24 bg-[#0b1c3d] overflow-hidden">
        {/* Abstract Architectural Shapes */}
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#4fa3ff]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Stat 1 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-white/5 border border-[#d4af37]/30 rounded-xl">
                <FolderKanban className="w-10 h-10 text-[#d4af37]" />
              </div>
              <div>
                <span className="text-5xl font-extrabold text-white block">50+</span>
                <span className="text-slate-400 font-semibold text-sm uppercase tracking-wider mt-2 block">
                  Mega-Projects Completed
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-white/5 border border-[#d4af37]/30 rounded-xl">
                <Globe className="w-10 h-10 text-[#d4af37]" />
              </div>
              <div>
                <span className="text-5xl font-extrabold text-white block">10+</span>
                <span className="text-slate-400 font-semibold text-sm uppercase tracking-wider mt-2 block">
                  Countries of Operation
                </span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-white/5 border border-[#d4af37]/30 rounded-xl">
                <Users className="w-10 h-10 text-[#d4af37]" />
              </div>
              <div>
                <span className="text-5xl font-extrabold text-white block">500+</span>
                <span className="text-slate-400 font-semibold text-sm uppercase tracking-wider mt-2 block">
                  Global Professional Workforce
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Signature Projects Section */}
      <section id="projects" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-sm font-bold text-[#d4af37] uppercase tracking-widest mb-3 block">
                Featured Case Studies
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b1c3d]">
                Excellence in Action
              </h2>
            </div>
            <p className="text-slate-500 max-w-md">
              Explore our landmark projects establishing modern infrastructural benchmarks globally.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="group bg-[#f4f6fb] border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[450px]">
                {/* Upper Thumbnail Area */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-[#0b1c3d] text-white font-semibold px-2.5 py-1 rounded backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details/Content Area */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-bold text-xl text-[#0b1c3d] mb-2">{proj.title}</h3>
                    <p className="text-xs text-[#d4af37] font-semibold flex items-center gap-1.5 mb-4">
                      <MapPin className="w-3.5 h-3.5" /> {proj.location}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {proj.desc}
                    </p>
                  </div>

                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0b1c3d] group-hover:text-[#d4af37] transition-colors"
                  >
                    Discuss a Project <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials & Client Feedback */}
      <section className="py-24 bg-[#f4f6fb]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-bold text-[#d4af37] uppercase tracking-widest block mb-2">
              Partnership & Reliability
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b1c3d]">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <Quote className="w-10 h-10 text-[#d4af37]/30 mb-4" />
                <p className="text-slate-700 text-lg leading-relaxed font-medium mb-6">
                  "Excellent service & support. Tejas Energy consistently delivers complex refinery and structural modifications with absolute precision and adherence to international ISO protocols."
                </p>
              </div>
              <div>
                <h5 className="font-bold text-[#0b1c3d]">Eng. Ahmed Al-Qasimi</h5>
                <p className="text-xs text-slate-500">Project Director, Ruwais Downstream Facilities</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <Quote className="w-10 h-10 text-[#d4af37]/30 mb-4" />
                <p className="text-slate-700 text-lg leading-relaxed font-medium mb-6">
                  "Highly professional team. Deploying top-tier manpower and massive lifting equipment seamlessly allowed our precast bridge operations to stay significantly ahead of baseline schedules."
                </p>
              </div>
              <div>
                <h5 className="font-bold text-[#0b1c3d]">Rakesh Sharma</h5>
                <p className="text-xs text-slate-500">Chief Engineer, Infrastructure & Urban Transport</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact & Inquiry Section (Form + Full details + Google Map) */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-[#f4f6fb] p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
            <span className="text-sm font-bold text-[#d4af37] uppercase tracking-widest block mb-2">
              Work With Us
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0b1c3d] mb-8">
              Send an Inquiry
            </h3>

            <form onSubmit={handleWhatsAppSend} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:border-[#d4af37] transition"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:border-[#d4af37] transition"
                    placeholder="example@corporate.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  Phone / Mobile Number
                </label>
                <input
                  type="text"
                  required
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:border-[#d4af37] transition"
                  placeholder="+91 9354939463"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  Message / Requirements
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:border-[#d4af37] transition"
                  placeholder="Detail your project specifications, manpower needs, or infrastructure requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-3 transition-all"
              >
                <MessageCircle className="w-5 h-5" /> Send Inquiry via WhatsApp
              </button>
            </form>
          </div>

          {/* Direct Contact Details & Google Map Embed */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div>
              <span className="text-sm font-bold text-[#d4af37] uppercase tracking-widest block mb-2">
                Corporate Headquarters
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0b1c3d] mb-6">
                Tejas Energy and Infra Resources
              </h3>

              {/* Direct Info List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#d4af37]/10 rounded-lg text-[#d4af37]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Managing Director</p>
                    <p className="text-sm font-semibold text-slate-800">Pinki</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#d4af37]/10 rounded-lg text-[#d4af37]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Phone Number</p>
                    <a href="tel:+919354939463" className="text-sm font-semibold text-slate-800 hover:text-[#d4af37]">
                      +91 9354939463
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#d4af37]/10 rounded-lg text-[#d4af37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Email Inquiries</p>
                    <a href="mailto:info@tejasenergyinfraresources.com" className="text-sm font-semibold text-slate-800 hover:text-[#d4af37]">
                      info@tejasenergyinfraresources.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#d4af37]/10 rounded-lg text-[#d4af37]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Office Location</p>
                    <p className="text-sm font-semibold text-slate-800">
                      Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embedded Iframe */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400511874!2d77.0688975!3d28.5272181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 9. Premium Corporate Footer (L&T multi-column Architecture) */}
      <footer className="bg-[#050e1e] border-t border-white/10 pt-20 pb-8 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand & About Overview */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center bg-gradient-to-tr from-[#d4af37] to-amber-300 w-10 h-10 rounded-lg shadow-md">
                  <HardHat className="text-[#0b1c3d] w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white leading-tight">TEJAS</h2>
                  <p className="text-[9px] text-[#d4af37] uppercase tracking-widest font-semibold">
                    Energy & Infra Resources
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                A premier global partner in large-scale EPC infrastructure, refinery operations, and strategic technical workforce deployment worldwide.
              </p>
              <div className="flex gap-4">
                {/* Social media minimal placeholder circles */}
                <a href="#linkedin" className="p-2 bg-white/5 rounded-full hover:bg-[#d4af37] hover:text-[#0b1c3d] transition">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#youtube" className="p-2 bg-white/5 rounded-full hover:bg-[#d4af37] hover:text-[#0b1c3d] transition">
                  <Eye className="w-4 h-4" />
                </a>
                <a href="#x" className="p-2 bg-white/5 rounded-full hover:bg-[#d4af37] hover:text-[#0b1c3d] transition">
                  <Flame className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Core Businesses */}
            <div>
              <h6 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Businesses</h6>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="hover:text-[#d4af37] transition">Oil & Gas Operations</a></li>
                <li><a href="#services" className="hover:text-[#d4af37] transition">Infrastructure Engineering</a></li>
                <li><a href="#services" className="hover:text-[#d4af37] transition">Heavy Lifting Logistics</a></li>
                <li><a href="#services" className="hover:text-[#d4af37] transition">Building Construction</a></li>
              </ul>
            </div>

            {/* Column 3: Corporate Policies */}
            <div>
              <h6 className="text-white font-bold text-sm tracking-widest uppercase mb-6">About & Governance</h6>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="hover:text-[#d4af37] transition">Corporate Overview</a></li>
                <li><a href="#about" className="hover:text-[#d4af37] transition">Innovation & ESG</a></li>
                <li><a href="#about" className="hover:text-[#d4af37] transition">Quality & Safety Policies</a></li>
                <li><a href="#contact" className="hover:text-[#d4af37] transition">Careers & Talent</a></li>
              </ul>
            </div>

            {/* Column 4: Contact & Locations */}
            <div>
              <h6 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Connect</h6>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Delhi, India (Corporate HQ)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <a href="tel:+919354939463" className="hover:text-[#d4af37]">+91 9354939463</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <a href="mailto:info@tejasenergyinfraresources.com" className="hover:text-[#d4af37]">info@tejasenergyinfraresources.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sub Footer / Disclaimer */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Tejas Energy and Infra Resources. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition">Terms & Conditions</a>
            </div>
          </div>

        </div>
      </footer>

      {/* 10. Fixed Floating WhatsApp Inquiry Button */}
      <a 
        href="https://wa.me/919354939463?text=Hello%20Tejas%20Energy%20Team!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all z-50 animate-bounce"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
