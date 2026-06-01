import { FormEvent, useState } from "react";
import {
  Menu, X, MapPin,
  ArrowRight,
  Archive
} from "lucide-react";
import { CATEGORY_TABS, ITEMS, REGIONS } from "./data";
import { Item } from "./interfaces";

// ── SVG folk-pattern (Ukrainian embroidery diamond repeat) ───────────────────
const svgRaw = `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><path d='M30 5L55 30L30 55L5 30Z' fill='none' stroke='rgba(201,135,42,0.11)' stroke-width='0.8'/><line x1='30' y1='18' x2='30' y2='42' stroke='rgba(201,135,42,0.07)' stroke-width='0.8'/><line x1='18' y1='30' x2='42' y2='30' stroke='rgba(201,135,42,0.07)' stroke-width='0.8'/><circle cx='30' cy='30' r='1.8' fill='rgba(201,135,42,0.16)'/></svg>`;
const folkBg = `url("data:image/svg+xml;charset=utf8,${encodeURIComponent(svgRaw)}")`;

// ── Data ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["Archive", "Regions", "Categories", "About"];
const RESEARCHER_EMAIL = "research@folkarchive.org";



const getCategoryLabel = (categoryId: string) =>
  CATEGORY_TABS.find((category) => category.id === categoryId)?.label ?? categoryId;


// ── Shared style helpers ──────────────────────────────────────────────────────
const serif  = { fontFamily: "'Spectral', serif" };
const mono   = { fontFamily: "'DM Mono', monospace" };
const sans   = { fontFamily: "'Mulish', sans-serif" };

// ── Sub-components ────────────────────────────────────────────────────────────

function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ backgroundColor: "rgba(19,13,7,0.92)" }}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-primary/30 bg-card p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-widest uppercase text-primary mb-2" style={mono}>
      {children}
    </p>
  );
}

function ArchiveCard({ item, onSelect }: { item: Item; onSelect: (item: Item) => void }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect(item)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(item);
        }
      }}
      className="group border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer bg-card focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      <div className="relative overflow-hidden aspect-[3/2] bg-muted">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className="absolute top-3 right-3 text-xs px-2 py-0.5 bg-background/80 text-muted-foreground"
          style={mono}
        >
          {item.year}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <MapPin size={11} className="text-primary flex-shrink-0" />
          <span className="text-xs text-muted-foreground tracking-wide" style={mono}>
            {item.region}
          </span>
        </div>
        <h3
          className="text-base font-normal leading-snug text-foreground mb-2 group-hover:text-primary transition-colors duration-200"
          style={serif}
        >
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>
      </div>
    </article>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [regionModal,    setRegionModal]    = useState<string | null>(null);
  const [archiveItemModal, setArchiveItemModal] = useState<Item | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    phone: "",
    email: "",
    message: "",
  });

  const filtered =
    activeCategory === "all"
      ? ITEMS
      : ITEMS.filter((i) => i.categories.includes(activeCategory));

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = "Researcher contact request";
    const body = [
      "Hello,",
      "",
      "I would like to contact a researcher about the Digital Folk Archive.",
      "",
      `Phone: ${contactForm.phone || "Not provided"}`,
      `Email: ${contactForm.email || "Not provided"}`,
      "",
      "Additional information:",
      contactForm.message || "Not provided",
    ].join("\n");

    window.location.href = `mailto:${RESEARCHER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setContactModalOpen(false);
    setContactForm({ phone: "", email: "", message: "" });
  };

  // Smooth scroll helper
  const scrollToSection = (navLink: string) => {
    // Map navigation links to section IDs
    const sectionMap: Record<string, string> = {
      "archive": "archive",
      "regions": "regions",
      "categories": "archive",
      "about": "about",
    };

    const sectionId = sectionMap[navLink.toLowerCase()];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={sans}>

      {/* ── Navigation ──────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-border"
        style={{ backgroundColor: "rgba(19,13,7,0.96)", backdropFilter: "blur(14px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex flex-col leading-tight">
            <span className="text-primary text-xl font-semibold" style={{ ...serif, letterSpacing: "0.02em" }}>
              Спадщина
            </span>
            <span className="text-muted-foreground text-[10px] tracking-widest uppercase" style={mono}>
              Folk Archive
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase().replace(" ", "-"))}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t border-border py-4 px-6 space-y-3"
            style={{ backgroundColor: "rgba(19,13,7,0.99)" }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase().replace(" ", "-"))}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1 w-full text-left"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-24 pt-16 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 bg-muted">
          <img
            src="https://images.unsplash.com/photo-1655678204995-0e1eb3d2fdbc?w=1600&h=1000&fit=crop&auto=format"
            alt="Couple in traditional Ukrainian folk costume"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(19,13,7,0.97) 42%, rgba(19,13,7,0.55) 72%, rgba(19,13,7,0.2) 100%)",
            }}
          />
          {/* Folk pattern overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundImage: folkBg, backgroundRepeat: "repeat" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end w-full">
          {/* Copy */}
          <div>
            <h1
              className="text-5xl lg:text-[5.5rem] font-light leading-[1.08] mb-6 text-foreground"
              style={serif}
            >
              Digital<br />
              <em className="not-italic" style={{ color: "#c9872a" }}>Preservation</em>
              <br />
              of Folk<br />
              Traditions
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-8">
              An open academic archive documenting the living heritage of Ukrainian folk
              culture — songs, rituals, clothing, dances, recipes, crafts, and oral
              histories across all regions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("archive")}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#c9872a", color: "#130d07" }}
              >
                Explore Archive <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
              >
                About the Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Browse ──────────────────────────────────────────────── */}
      <section id="archive" className="py-24 relative scroll-mt-20">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: folkBg, backgroundRepeat: "repeat" }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header row */}
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <SectionLabel>Browse the Archive</SectionLabel>
              <h2 className="text-3xl font-light text-foreground" style={serif}>
                Folk Traditions by Category
              </h2>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORY_TABS.map(({ id, label, icon: Icon }) => (
              <div key={id} className="relative group">
                <button
                  onClick={() => setActiveCategory(id)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs tracking-wide border transition-all duration-200 ${
                    activeCategory === id
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                  style={mono}
                >
                  <Icon size={12} />
                  {label}
                </button>
              </div>
            ))}
          </div>

          {/* Archive grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <ArchiveCard key={item.id} item={item} onSelect={setArchiveItemModal} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-xl font-light" style={serif}>
                No items catalogued in this category yet.
              </p>
              <p className="text-sm mt-2">Field documentation is ongoing.</p>
            </div>
          )}
        </div>
      </section>


      {/* ── Regions ─────────────────────────────────────────────────────── */}
      <section id="regions" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <SectionLabel>Geographic Coverage</SectionLabel>
            <h2 className="text-3xl font-light text-foreground" style={serif}>
              Explore by Region
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {REGIONS.map((region) => (
              <div
                key={region.name}
                onClick={() => setRegionModal(region.name)}
                className="group relative border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden bg-muted"
                style={{ aspectRatio: "4 / 3" }}
              >
                <img
                  src={region.image}
                  alt={`${region.name} folk traditions`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(19,13,7,0.93) 0%, rgba(19,13,7,0.35) 55%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-normal text-foreground mb-0.5" style={serif}>
                    {region.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">{region.specialty}</p>
                  <div className="flex items-center gap-1.5">
                    <Archive size={10} className="text-primary" />
                    <span className="text-xs text-primary" style={mono}>
                      {region.items.toLocaleString()} items
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Mission ─────────────────────────────────────────────── */}
      <section id="about" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Copy */}
            <div>
              <SectionLabel>About the Project</SectionLabel>
              <h2 className="text-4xl font-light leading-[1.2] text-foreground mb-6" style={serif}>
                Preserving Living Heritage<br />
                <em className="italic">Before It Is Lost</em>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Digital Preservation of Folk Traditions project is a collaborative initiative
                between the National Academy of Sciences of Ukraine, Kyiv-Mohyla Academy, and
                international digital humanities partners. Founded in 2018, the project employs
                ethnographers, linguists, musicologists, and archivists across all oblasts.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our methodology combines field documentation — audio recording, photographic survey,
                oral testimony — with rigorous metadata standards based on the ISAD(G) archival
                description framework. All materials are made available under Creative Commons
                licences for educational and research use.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Open-access research archive, free to all",
                  "CC BY-NC 4.0 licensed educational materials",
                  "Multilingual record metadata (UK, EN, DE, PL)",
                  "Ongoing field documentation and digitisation programme",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
              </div>
            </div>

            {/* Image mosaic */}
            <div className="space-y-4">
              <div className="overflow-hidden border border-border bg-muted" style={{ aspectRatio: "16/10" }}>
                <img
                  src="https://images.unsplash.com/photo-1761253876239-c5e62efe81d2?w=900&h=560&fit=crop&auto=format"
                  alt="Women in traditional Eastern European folk costumes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden border border-border bg-muted aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1705769945723-10ecbe1f7df8?w=460&h=460&fit=crop&auto=format"
                    alt="Petrykivka decorative folk painting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden border border-border bg-muted aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1566205092354-2393343083ec?w=460&h=460&fit=crop&auto=format"
                    alt="Traditional embroidery close-up"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ──────────────────────────────────────────────────── */}
      <section
        className="py-20 border-y border-border relative overflow-hidden"
        style={{ backgroundColor: "var(--secondary)" }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: folkBg, backgroundRepeat: "repeat" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Contribute to the Archive</SectionLabel>
          <h2 className="text-4xl font-light text-foreground mb-4" style={serif}>
            Do you carry a folk tradition?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            We work with communities, families, and individual knowledge-bearers to document and
            preserve traditions before they pass out of living memory. All contributions are
            attributed and shared under open licences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setContactModalOpen(true)}
              className="px-7 py-3 text-sm font-semibold tracking-wide border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-200 active:scale-95"
            >
              Contact a Researcher
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-border py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <span
                  className="text-primary text-2xl font-semibold block"
                  style={{ ...serif, letterSpacing: "0.02em" }}
                >
                  Спадщина
                </span>
                <span className="text-muted-foreground text-[10px] tracking-widest uppercase" style={mono}>
                  Digital Folk Archive
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                A living archive of Ukrainian intangible cultural heritage. Open access,
                community supported, academically rigorous.
              </p>
            </div>

            {/* Navigate */}
            <div>
              <p className="text-[11px] text-foreground tracking-widest uppercase mb-4" style={mono}>
                Navigate
              </p>
              <ul className="space-y-2.5">
                {["Archive", "Regions", "Categories", "About the Project"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase().replace("the project", "").trim())}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[11px] text-muted-foreground" style={mono}>
              © 2026 Digital Preservation of Folk Traditions
            </p>
          </div>
        </div>
      </footer>


      {/* ── Contact Researcher Modal ──────────────────────────────────────── */}
      <Modal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)}>
        <div>
          <div className="mb-6">
            <h2 className="text-4xl font-light text-foreground mb-2" style={serif}>
              Contact a Researcher
            </h2>
            <p className="text-xs tracking-widest uppercase text-primary" style={mono}>
              Message will be prepared for {RESEARCHER_EMAIL}
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleContactSubmit}>
            <div>
              <label htmlFor="contact-phone" className="block text-sm text-foreground mb-2" style={mono}>
                Phone number
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={contactForm.phone}
                onChange={(event) => setContactForm((form) => ({ ...form, phone: event.target.value }))}
                placeholder="+48 000 000 000"
                className="w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm text-foreground mb-2" style={mono}>
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={contactForm.email}
                onChange={(event) => setContactForm((form) => ({ ...form, email: event.target.value }))}
                placeholder="your.email@example.com"
                className="w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm text-foreground mb-2" style={mono}>
                Additional information
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={contactForm.message}
                onChange={(event) => setContactForm((form) => ({ ...form, message: event.target.value }))}
                placeholder="Tell us what you would like to discuss or contribute..."
                className="w-full resize-y border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#c9872a", color: "#130d07" }}
              >
                Send Request
              </button>
              <button
                type="button"
                onClick={() => setContactModalOpen(false)}
                className="px-7 py-3 text-sm font-semibold tracking-wide border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-200 active:scale-95"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* ── Archive Item Modal ───────────────────────────────────────────── */}
      <Modal isOpen={archiveItemModal !== null} onClose={() => setArchiveItemModal(null)}>
        {archiveItemModal && (
          <div>
            <div className="mb-6">
              <div className="mb-4 overflow-hidden border border-border bg-muted" style={{ aspectRatio: "16/9" }}>
                <img
                  src={archiveItemModal.image}
                  alt={archiveItemModal.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-4xl font-light text-foreground mb-2" style={serif}>
                {archiveItemModal.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground" style={mono}>
                <div className="flex flex-wrap gap-2">
                  {archiveItemModal.categories.map((categoryId) => (
                    <span key={categoryId} className="tracking-widest uppercase text-primary">
                      {getCategoryLabel(categoryId)}
                    </span>
                  ))}
                </div>
                <span className="w-px h-3 bg-border" />
                <span>{archiveItemModal.region}</span>
                <span className="w-px h-3 bg-border" />
                <span>{archiveItemModal.year}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2 tracking-wide uppercase" style={mono}>
                  Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {archiveItemModal.description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-3">
              {archiveItemModal.categories.map((categoryId) => (
                <button
                  key={categoryId}
                  onClick={() => {
                    setArchiveItemModal(null);
                    setActiveCategory(categoryId);
                    scrollToSection("archive");
                  }}
                  className="flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#c9872a", color: "#130d07" }}
                >
                  View more in {getCategoryLabel(categoryId)} <ArrowRight size={15} />
                </button>
              ))}
            </div>
          </div>
        )}
      </Modal>

      {/* ── Region Modal ────────────────────────────────────────────────── */}
      <Modal isOpen={regionModal !== null} onClose={() => setRegionModal(null)}>
        {regionModal && REGIONS.find(r => r.name === regionModal) && (
          <div>
            {(() => {
              const region = REGIONS.find(r => r.name === regionModal)!;
              return (
                <>
                  <div className="mb-6">
                    <div className="mb-4 overflow-hidden border border-border bg-muted" style={{ aspectRatio: "16/9" }}>
                      <img
                        src={region.image}
                        alt={`${region.name} folk traditions`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-4xl font-light text-foreground mb-2" style={serif}>
                      {region.name}
                    </h2>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground" style={mono}>
                      <span className="tracking-widest uppercase text-primary">{region.specialty}</span>
                      <span className="w-px h-3 bg-border" />
                      <span>{region.items.toLocaleString()} archived items</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2 tracking-wide uppercase" style={mono}>
                        Overview
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {region.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2 tracking-wide uppercase" style={mono}>
                        Cultural Heritage
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {region.heritage}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2 tracking-wide uppercase" style={mono}>
                        Notable Traditions
                      </h3>
                      <ul className="space-y-2">
                        {region.notable.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <button
                      onClick={() => {
                        setRegionModal(null);
                        scrollToSection("archive");
                        setActiveCategory(region.category);
                      }}
                      className="flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: "#c9872a", color: "#130d07" }}
                    >
                      Browse {region.name} Collection <ArrowRight size={15} />
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </Modal>
    </div>
  );
}
