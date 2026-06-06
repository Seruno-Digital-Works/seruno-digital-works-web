import { useState, useEffect, useRef } from "react";
import { ShoppingCart, Wrench, Sparkles, CodeXml, Smartphone, Code, Menu, X, ArrowRight, Mail, Phone } from "lucide-react";

/* ─── Constants ─── */
const PHONE = "+32466238796";
const PHONE_DISPLAY = "+32 466 23 87 96";
const EMAIL = "serkanahmedov2000@gmail.com";
const WHATSAPP_URL = `https://wa.me/${PHONE.replace(/\+/g, "")}`;

const SERVICES = [
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: "Webshops & E-commerce",
    description:
      "Bouwen, beheren en optimaliseren van webshops en e-commerceplatformen.",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "Onderhoud & Optimalisatie",
    description:
      "Uitvoeren van websiteonderhoud, updates en prestatieverbeteringen.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "AI & Moderne Technologie",
    description:
      "Inzetten van AI-tools en moderne technologieën voor een efficiënte en innovatieve ontwikkeling.",
  },
  {
    icon: <CodeXml className="w-7 h-7" />,
    title: "Integraties & API's",
    description:
      "Integreren van plugins, betaalsystemen, API's en andere externe diensten.",
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Responsive & SEO",
    description:
      "Zorgen voor snelle, gebruiksvriendelijke en SEO-geoptimaliseerde websites die perfect werken op alle apparaten.",
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: "Maatwerk Ontwikkeling",
    description:
      "Ontwikkelen van projecten in diverse programmeertalen en technologieën, waarbij gebruik wordt gemaakt van geavanceerde tools en beschikbare resources om de beste oplossing te realiseren.",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Diensten", href: "#diensten" },
  { label: "Over Ons", href: "#over-ons" },
  { label: "Contact", href: "#contact" },
];

/* ─── Intersection Observer Hook ─── */
/* ─── WhatsApp SVG Icon ─── */
function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled
        ? "shadow-md border-b border-slate-100 py-3"
        : "py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/seruno-half-logo.jpeg"
            alt="Seruno Digital Works Logo"
            className="h-14 w-auto p-1 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          {/* <span className={`font-bold text-lg tracking-tight hidden sm:inline transition-colors duration-300 ${isScrolled ? "text-white" : "text-navy-950"
            }`}>
            Seruno <span className={isScrolled ? "text-navy-300" : "text-navy-600"}>Digital Works</span>
          </span> */}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 text-sm font-medium text-navy-700 hover:text-navy-950 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-navy-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-navy-700 transition-colors duration-300"
          aria-label="Menu openen"
        >
          {isMobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-4 bg-navy-950 border-t border-navy-800/50 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3 text-navy-200 hover:text-white hover:bg-navy-800/50 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient grid-pattern overflow-hidden"
    >
      {/* Radial gradient background — cross-platform safe */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 80% 30%, rgba(147,197,253,0.25) 0%, transparent 70%), " +
            "radial-gradient(ellipse 50% 50% at 10% 80%, rgba(147,197,253,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-navy-950 leading-tight mb-6 animate-fade-in-up" style={{ fontFamily: 'var(--font-heading)' }}>
            Websites die werken,
            <br />
            <span className="gradient-text-dark">gebouwd voor jouw bedrijf</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-200">
            Wij zijn een klein team dat websites en webshops bouwt voor zelfstandigen en bedrijven
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-600/25 hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Start een Gesprek
            </a>
            <a
              href="#diensten"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy-200 hover:border-navy-950 text-navy-950 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-navy-50 hover:-translate-y-1"
            >
              Onze Diensten
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Services Section ─── */
function Services() {

  return (
    <section id="diensten" className="relative py-24 lg:py-32 bg-white overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span
            className="inline-block text-navy-600 font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Wat Wij Doen
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 mb-6"
          >
            Onze Diensten
          </h2>
          <p
            className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Wij bieden een breed scala aan digitale diensten om uw online aanwezigheid te versterken
            en uw bedrijf te laten groeien.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="relative bg-white border border-navy-100 rounded-2xl p-6 md:p-8 transition-all duration-500"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-navy-50 rounded-xl flex items-center justify-center text-navy-600 mb-4 md:mb-6">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About Section ─── */
function About() {

  return (
    <section id="over-ons" className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span
              className="inline-block text-navy-400 font-semibold text-sm tracking-widest uppercase mb-4"
            >
              Over Ons
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
            >
              Uw Partner in{" "}
              <span className="gradient-text">Digitale Groei</span>
            </h2>
            <div
              className="space-y-4 text-slate-300 leading-relaxed text-lg"
            >
              <p>
                Bij <strong className="text-white">Seruno Digital Works</strong> combineren wij
                technische expertise met creatieve visie. Wij geloven dat elke onderneming een
                sterke digitale aanwezigheid verdient.
              </p>
              <p>
                Van kleine startups tot gevestigde bedrijven, wij ontwikkelen op maat gemaakte
                oplossingen die niet alleen mooi zijn, maar ook resultaat leveren. Met de nieuwste
                technologieën en AI-tools bouwen wij websites die sneller, slimmer en effectiever
                zijn.
              </p>
            </div>
          </div>

          {/* Right – Visual Card */}
          <div
            className=""
          >
            <div className="relative">
              {/* Glow background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-navy-500/20 to-navy-700/20 rounded-3xl blur-2xl" />

              <div className="relative bg-navy-900 border border-navy-800/80 rounded-2xl p-6 md:p-10 space-y-4 md:space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Waarom Seruno?</h3>

                {[
                  "Persoonlijke aanpak & directe communicatie",
                  "Moderne technologieën & AI-integratie",
                  "Snelle oplevering zonder concessies",
                  "Transparante prijzen, geen verborgen kosten",
                  "Langdurige ondersteuning na oplevering",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-navy-500/30 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-navy-100 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Section ─── */
function Contact() {

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-navy-600 font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Neem Contact Op
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 mb-6"
          >
            Laten We Samenwerken
          </h2>
          <p
            className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Heeft u een project in gedachten? Neem vandaag nog contact met ons op en ontdek wat wij
            voor u kunnen betekenen.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
          {/* WhatsApp Card */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-6 md:p-8 bg-green-50 hover:bg-green-600 border border-green-100 hover:border-green-500 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-green-200/50 hover:-translate-y-2"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center text-green-600 group-hover:text-white transition-all duration-500 mb-4 md:mb-5">
              <WhatsAppIcon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 group-hover:text-white transition-colors duration-500 mb-2">
              WhatsApp
            </h3>
            <p className="text-slate-500 group-hover:text-green-100 transition-colors duration-500 text-sm">
              {PHONE_DISPLAY}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-green-600 group-hover:text-white font-semibold text-sm transition-colors duration-500">
              Chat Nu
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${EMAIL}`}
            className="group flex flex-col items-center text-center p-6 md:p-8 bg-navy-50 hover:bg-navy-950 border border-navy-100 hover:border-navy-800 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-navy-200/50 hover:-translate-y-2"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-navy-100 group-hover:bg-white/10 rounded-2xl flex items-center justify-center text-navy-600 group-hover:text-white transition-all duration-500 mb-4 md:mb-5">
              <Mail className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 group-hover:text-white transition-colors duration-500 mb-2">
              E-mail
            </h3>
            <p className="text-slate-500 group-hover:text-navy-300 transition-colors duration-500 text-sm break-all">
              {EMAIL}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-navy-600 group-hover:text-white font-semibold text-sm transition-colors duration-500">
              Stuur E-mail
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-navy-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 items-start">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-3 md:mb-4 group">
              <img src="/seruno-full-logo.jpeg" alt="Seruno Digital Works" className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Uw digitale partner voor webontwikkeling, e-commerce en innovatieve technologieën.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4">Snelle Links</h4>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-navy-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-navy-400 hover:text-green-400 transition-colors duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-navy-400 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-navy-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-navy-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-navy-500 text-sm">
            © {year} Seruno Digital Works. Alle rechten voorbehouden.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-400 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-600/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        aria-label="Chat via WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </footer>
  );
}

/* ─── Main App ─── */
export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
