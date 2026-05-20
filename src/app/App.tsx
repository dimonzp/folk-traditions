import { useState } from "react";
import {
  Search, Menu, X, ChevronRight, MapPin,
  Music, Scissors, Utensils,
  Flame, Shirt, Wind, Mic, ArrowRight,
  Archive, FileText, LayoutGrid,
} from "lucide-react";

// ── SVG folk-pattern (Ukrainian embroidery diamond repeat) ───────────────────
const svgRaw = `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><path d='M30 5L55 30L30 55L5 30Z' fill='none' stroke='rgba(201,135,42,0.11)' stroke-width='0.8'/><line x1='30' y1='18' x2='30' y2='42' stroke='rgba(201,135,42,0.07)' stroke-width='0.8'/><line x1='18' y1='30' x2='42' y2='30' stroke='rgba(201,135,42,0.07)' stroke-width='0.8'/><circle cx='30' cy='30' r='1.8' fill='rgba(201,135,42,0.16)'/></svg>`;
const folkBg = `url("data:image/svg+xml;charset=utf8,${encodeURIComponent(svgRaw)}")`;

// ── Data ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["Archive", "Regions", "Categories", "About"];

const CATEGORY_TABS = [
  { id: "all",            label: "All",           icon: LayoutGrid },
  { id: "songs",          label: "Songs",         icon: Music },
  { id: "dances",         label: "Dances",        icon: Wind },
  { id: "clothing",       label: "Clothing",      icon: Shirt },
  { id: "rituals",        label: "Rituals",       icon: Flame },
  { id: "recipes",        label: "Recipes",       icon: Utensils },
  { id: "crafts",         label: "Crafts",        icon: Scissors },
  { id: "stories",        label: "Stories",       icon: FileText },
  { id: "oral-histories", label: "Oral Histories",icon: Mic },
] as const;

const CATEGORY_INFO: Record<string, { description: string; significance: string; examples: string[] }> = {
  "songs": {
    description: "Ukrainian folk songs encompass a rich tradition of ritual, seasonal, and work songs passed down through generations. These include весняки (vesnianky - spring songs), колискові (kolyskovi - lullabies), and козацькі пісні (cossack songs).",
    significance: "Folk songs served as historical records, educational tools, and cultural preservation mechanisms. Many contain pre-Christian ritual elements and reflect the agricultural calendar, community values, and historical events.",
    examples: ["Ritual spring songs (vesnianky)", "Harvest songs (zhnyvarski)", "Wedding ceremonial songs", "Epic ballads (dumy)", "Work songs for weaving and farming"]
  },
  "dances": {
    description: "Ukrainian folk dances represent regional identities and social customs. From the energetic Hopak to the graceful Kolomyjka, each dance tells a story of community, celebration, or historical events.",
    significance: "Traditional dances served as social bonding activities, courtship rituals, and expressions of regional pride. Cossack dances demonstrated strength and military prowess, while circle dances reinforced community cohesion.",
    examples: ["Hopak (Cossack warrior dance)", "Kolomyjka (Carpathian circle dance)", "Hutsulka (mountain region dance)", "Arkan (men's competitive dance)", "Metelytsia (whirling couple dance)"]
  },
  "clothing": {
    description: "Traditional Ukrainian clothing, especially the vyshyvanka (embroidered shirt), features intricate geometric and floral patterns unique to each region. Colors, stitching techniques, and motifs conveyed social status, marital status, and regional identity.",
    significance: "Embroidery patterns were passed mother to daughter, with specific symbols offering protection, blessing fertility, or honoring ancestors. Each region developed distinct color palettes and motifs reflecting local flora and cultural history.",
    examples: ["Poltava red-and-black geometric vyshyvanka", "Hutsul multi-colored wool clothing", "Ceremonial headdresses (vinok)", "Regional apron designs", "Men's embroidered shirts"]
  },
  "rituals": {
    description: "Ukrainian folk rituals blend pre-Christian Slavic traditions with later Christian practices. Seasonal rituals marked agricultural cycles, while life-cycle rituals celebrated birth, marriage, and death.",
    significance: "These rituals maintained cosmic balance, ensured good harvests, protected communities from misfortune, and preserved ancient cosmological beliefs about the relationship between humans, nature, and the divine.",
    examples: ["Kupala Night (midsummer fire and water rituals)", "Koliadky (winter solstice caroling)", "Spring wreath ceremonies", "Wedding bread (korovai) rituals", "Harvest first-sheaf ceremonies"]
  },
  "recipes": {
    description: "Traditional Ukrainian cuisine reflects agricultural abundance, preservation techniques, and ritual significance. Many dishes are tied to specific holidays, seasons, or ceremonial occasions.",
    significance: "Food served both nutritional and symbolic functions. Ritual breads, grain-based dishes, and fermented foods connected communities to agricultural cycles and ancestral traditions. Recipes encoded preservation knowledge and seasonal eating patterns.",
    examples: ["Regional borscht variations", "Ceremonial bread (korovai, paska)", "Kutia (ritual grain pudding)", "Varenyky (stuffed dumplings)", "Preserved vegetables and fermented foods"]
  },
  "crafts": {
    description: "Ukrainian traditional crafts include ceramics, woodcarving, weaving, and decorative painting. The Petrykivka painting style, recognized by UNESCO, features vibrant floral motifs and symbolic imagery.",
    significance: "Crafts were both utilitarian and sacred, decorating homes while offering spiritual protection. Patterns and techniques were closely guarded family secrets, and master craftspeople held respected positions in communities.",
    examples: ["Petrykivka decorative painting", "Pysanky (Easter egg decoration)", "Carpet weaving (kilim, lyzhnyk)", "Wood carving and inlay", "Pottery and ceramic work"]
  },
  "stories": {
    description: "Ukrainian folktales encompass mythological narratives, moral fables, and historical legends. Characters include forest spirits (lisovyk), water nymphs (rusalky), and legendary heroes (bogatyrs).",
    significance: "Oral storytelling preserved cultural memory, taught moral lessons, explained natural phenomena, and maintained connections to pre-Christian mythology. Stories were entertainment, education, and spiritual guidance.",
    examples: ["Tales of the Firebird and magical transformations", "Rusalka and mavka water spirit stories", "Cossack heroic epics", "Animal fables with moral lessons", "Origin stories of natural features"]
  },
  "oral-histories": {
    description: "Oral histories capture first-person accounts of traditional practices, community life, and cultural transmission. Elder testimonies document techniques, songs, and customs that exist primarily in living memory.",
    significance: "These recordings preserve not just information but voice, dialect, emotion, and personal perspective. They capture the last generation's direct connection to pre-industrial village life and traditional knowledge systems.",
    examples: ["Testimonies of traditional weaving techniques", "Accounts of pre-war village rituals", "Memories of seasonal agricultural practices", "Personal narratives of folk healing", "Descriptions of lost musical traditions"]
  }
};

interface Item {
  id: number;
  category: string;
  title: string;
  region: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

const ITEMS: Item[] = [
  {
    id: 1,
    category: "clothing",
    title: "Poltava Vyshyvanka — Ceremonial Blouse",
    region: "Poltava Oblast",
    year: "c. 1887",
    description:
      "Hand-stitched ceremonial blouse featuring the characteristic red-black cross-stitch geometric motifs of the Poltava region. Collected from the village of Velyki Sorochyntsi.",
    image:
      "https://images.unsplash.com/photo-1566205092354-2393343083ec?w=600&h=400&fit=crop&auto=format",
    tags: ["vyshyvanka", "embroidery", "ceremonial"],
    featured: true,
  },
  {
    id: 2,
    category: "songs",
    title: "Vesnianky — Spring Ritual Songs",
    region: "Kyiv Oblast",
    year: "Collected 1923",
    description:
      "A collection of 34 spring ritual songs documented by ethnomusicologist Klyment Kvitka in villages along the Ros River. Includes original notation and verse.",
    image:
      "https://images.unsplash.com/photo-1561812938-f6e60cbf95e3?w=600&h=400&fit=crop&auto=format",
    tags: ["ritual", "seasonal", "vocal"],
    featured: true,
  },
  {
    id: 3,
    category: "dances",
    title: "Hopak — Cossack Dance Notation",
    region: "Zaporizhzhia",
    year: "c. 1905",
    description:
      "Choreographic notation and photographs of the Hopak as performed at the annual Zaporizhzhian gathering. Includes 12 distinct movement sequences.",
    image:
      "https://images.unsplash.com/photo-1761253962607-6c64c25d0240?w=600&h=400&fit=crop&auto=format",
    tags: ["cossack", "choreography", "performance"],
  },
  {
    id: 4,
    category: "crafts",
    title: "Petrykivka Decorative Painting",
    region: "Dnipropetrovsk Oblast",
    year: "c. 1930",
    description:
      "Original decorative panel in the Petrykivka style, featuring the characteristic swirling floral motifs, birds, and berries unique to this UNESCO-recognised tradition.",
    image:
      "https://images.unsplash.com/photo-1705769945723-10ecbe1f7df8?w=600&h=400&fit=crop&auto=format",
    tags: ["UNESCO", "painting", "decorative"],
    featured: true,
  },
  {
    id: 5,
    category: "rituals",
    title: "Kupala Night — Midsummer Ceremony",
    region: "Volyn Oblast",
    year: "Documented 1912",
    description:
      "Field notes and photographs from the Ivan Kupala midsummer celebration. Includes wreath-weaving, fire-jumping, and water rituals documented across 7 villages.",
    image:
      "https://images.unsplash.com/photo-1683881572750-b4cdcb1c85b9?w=600&h=400&fit=crop&auto=format",
    tags: ["midsummer", "pagan", "water-ritual"],
  },
  {
    id: 6,
    category: "oral-histories",
    title: "Halychyna Weaving Songs — Oral Testimony",
    region: "Lviv Oblast",
    year: "Recorded 1978",
    description:
      "Audio testimonies from elder weavers of the Halychyna region, describing traditional loom techniques and the songs sung during weaving. 3h 42min of recordings.",
    image:
      "https://images.unsplash.com/photo-1761253876239-c5e62efe81d2?w=600&h=400&fit=crop&auto=format",
    tags: ["audio", "weaving", "testimony"],
  },
  {
    id: 7,
    category: "recipes",
    title: "Borscht Variations — Regional Manuscript",
    region: "Multiple Regions",
    year: "Compiled 1955",
    description:
      "Handwritten compilation of 47 regional borscht variations gathered across Ukrainian oblasts. Each recipe includes seasonal ingredient notes and ritual significance.",
    image:
      "https://images.unsplash.com/photo-1643609873467-15cfffe782be?w=600&h=400&fit=crop&auto=format",
    tags: ["cuisine", "regional", "manuscript"],
  },
  {
    id: 8,
    category: "stories",
    title: "Carpathian Folktales — Hutsul Tradition",
    region: "Ivano-Frankivsk Oblast",
    year: "Transcribed 1899",
    description:
      "A collection of 23 folktales from the Hutsul mountain communities, including mythological narratives of forest spirits, water nymphs, and seasonal deities.",
    image:
      "https://images.unsplash.com/photo-1662555200242-2a0ff73e987f?w=600&h=400&fit=crop&auto=format",
    tags: ["mythology", "Hutsul", "spirits"],
  },
];

const REGIONS = [
  {
    name: "Poltava",
    items: 847,
    specialty: "Embroidery & Ritual Song",
    image:
      "https://images.unsplash.com/photo-1655678204995-0e1eb3d2fdbc?w=500&h=360&fit=crop&auto=format",
    description: "Central Ukrainian region known for its distinctive red-and-black geometric embroidery patterns and rich tradition of ritual songs.",
    heritage: "Poltava Oblast preserves some of the most recognizable Ukrainian embroidery styles, with cross-stitch patterns that encode ancient cosmological symbols. The region's spring ritual songs (vesnianky) were extensively documented by ethnomusicologist Klyment Kvitka in the 1920s.",
    notable: ["Red-and-black vyshyvanka embroidery", "Preserved wooden architecture", "Traditional pottery centers", "Spring ritual song repertoire"]
  },
  {
    name: "Kyiv Oblast",
    items: 1203,
    specialty: "Ritual & Oral History",
    image:
      "https://images.unsplash.com/photo-1643609873467-15cfffe782be?w=500&h=360&fit=crop&auto=format",
    description: "The historical heartland surrounding the capital, with extensive documentation of seasonal rituals and oral traditions from villages along the Dnieper and Ros rivers.",
    heritage: "As the historical center of Kyivan Rus', this region maintains deep connections to both pre-Christian Slavic traditions and Orthodox ritual life. Rich oral history recordings document the transition from traditional village life to Soviet collectivization.",
    notable: ["Extensive oral history archives", "Dnieper river ritual traditions", "Historical folk instrument crafting", "Preserved calendar rituals"]
  },
  {
    name: "Lviv Oblast",
    items: 923,
    specialty: "Crafts & Textile",
    image:
      "https://images.unsplash.com/photo-1761253876239-c5e62efe81d2?w=500&h=360&fit=crop&auto=format",
    description: "Western Ukrainian region encompassing Hutsul, Boyko, and Lemko cultural zones, each with distinct craft traditions, textiles, and mountain folklore.",
    heritage: "The Carpathian mountain communities of Lviv Oblast preserved unique craft techniques through geographic isolation. Hutsul woodcarving, textile patterns, and leather work represent some of the most distinctive Ukrainian folk art traditions.",
    notable: ["Hutsul woodcarving and leather work", "Multi-colored wool textiles", "Mountain ritual traditions", "Distinctive musical instruments (trembita, tsymbaly)"]
  },
  {
    name: "Zaporizhzhia",
    items: 612,
    specialty: "Cossack Dance",
    image:
      "https://images.unsplash.com/photo-1761253962607-6c64c25d0240?w=500&h=360&fit=crop&auto=format",
    description: "Southeastern region and historical heart of Zaporizhian Cossack culture, preserving military dances, epic songs (dumy), and warrior traditions.",
    heritage: "Former territory of the Zaporizhian Sich, this region maintains living traditions of Cossack culture including the energetic Hopak dance, epic ballad singing, and martial arts elements integrated into folk choreography.",
    notable: ["Hopak and other Cossack dances", "Epic ballad (dumy) tradition", "Martial folk choreography", "Historical costume reconstruction"]
  },
  {
    name: "Volyn",
    items: 445,
    specialty: "Ritual & Weaving",
    image:
      "https://images.unsplash.com/photo-1683881572750-b4cdcb1c85b9?w=500&h=360&fit=crop&auto=format",
    description: "Northwestern region preserving ancient ritual practices, especially water-based ceremonies, and maintaining traditional linen weaving techniques.",
    heritage: "Volyn's geographic position as a historical borderland allowed it to preserve pre-Christian ritual elements alongside Christian practices. The region's Kupala Night celebrations and traditional weaving songs are extensively documented.",
    notable: ["Kupala Night water rituals", "Traditional linen weaving", "Preserved ritual songs", "Ancient calendar celebrations"]
  },
  {
    name: "Dnipropetrovsk",
    items: 538,
    specialty: "Decorative Painting",
    image:
      "https://images.unsplash.com/photo-1705769945723-10ecbe1f7df8?w=500&h=360&fit=crop&auto=format",
    description: "Home to the UNESCO-recognized Petrykivka decorative painting tradition, featuring vibrant floral motifs and fantastical birds.",
    heritage: "The village of Petrykivka developed a unique decorative painting style characterized by swirling floral compositions, vibrant colors, and symbolic imagery. This tradition, recognized by UNESCO in 2013, adorned homes, ceramics, and ritual objects.",
    notable: ["Petrykivka painting (UNESCO heritage)", "Decorative ceramic traditions", "Floral motif development", "Traditional pigment preparation"]
  },
];

const STATS = [
  { value: "4,568", label: "Archived Items" },
  { value: "24",    label: "Regions Covered" },
  { value: "312",   label: "Contributors" },
  { value: "1891",  label: "Earliest Record" },
];

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

function TagChip({ tag }: { tag: string }) {
  return (
    <span
      className="text-xs px-2 py-0.5 border border-border text-muted-foreground"
      style={mono}
    >
      #{tag}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-widest uppercase text-primary mb-2" style={mono}>
      {children}
    </p>
  );
}

function ArchiveCard({ item }: { item: Item }) {
  return (
    <article
      onClick={() => alert(`Viewing details for: ${item.title}\n\nIn production, this would open a detailed view with full metadata, images, and related items.`)}
      className="group border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer bg-card"
    >
      <div className="relative overflow-hidden aspect-[3/2] bg-muted">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.featured && (
          <span
            className="absolute top-3 left-3 text-xs px-2 py-0.5"
            style={{ backgroundColor: "#c9872a", color: "#130d07", ...mono }}
          >
            Featured
          </span>
        )}
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
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <TagChip key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [searchOpen,     setSearchOpen]     = useState(false);
  const [categoryModal,  setCategoryModal]  = useState<string | null>(null);
  const [regionModal,    setRegionModal]    = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? ITEMS
      : ITEMS.filter((i) => i.category === activeCategory);

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
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 ml-2"
              aria-label="Toggle search"
            >
              <Search size={17} />
            </button>
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

        {/* Search bar */}
        {searchOpen && (
          <div
            className="border-t border-border px-6 py-3"
            style={{ backgroundColor: "rgba(19,13,7,0.99)" }}
          >
            <div className="max-w-2xl mx-auto flex items-center gap-3">
              <Search size={15} className="text-muted-foreground flex-shrink-0" />
              <input
                autoFocus
                placeholder="Search songs, rituals, regions, crafts…"
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-sm outline-none py-1"
                style={sans}
              />
            </div>
          </div>
        )}

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
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-primary text-[11px] tracking-widest uppercase" style={mono}>
                Digital Humanities Project — Est. 2018
              </span>
            </div>

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

          {/* Hero stat card */}
          <div className="hidden lg:flex justify-end">
            <div
              className="w-72 border border-border p-6"
              style={{ backgroundColor: "rgba(29,18,9,0.88)", backdropFilter: "blur(10px)" }}
            >
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-5" style={mono}>
                Archive at a glance
              </p>
              <div className="space-y-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex justify-between items-baseline border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="text-3xl font-light text-primary" style={serif}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
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
            <button
              onClick={() => alert("Full catalogue view would open here.\n\nIn production, this would show a paginated list of all archive items with advanced filtering.")}
              className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              View full catalogue <ChevronRight size={14} />
            </button>
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
                {id !== "all" && (
                  <button
                    onClick={() => setCategoryModal(id)}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-background flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    title={`Learn about ${label}`}
                  >
                    i
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Archive grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <ArchiveCard key={item.id} item={item} />
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

      {/* ── Stats strip ─────────────────────────────────────────────────── */}
      <section
        className="border-y border-border py-14"
        style={{ backgroundImage: folkBg, backgroundRepeat: "repeat", backgroundColor: "var(--secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center px-6 py-2">
                <div className="text-5xl font-light text-primary mb-2" style={serif}>
                  {stat.value}
                </div>
                <div className="text-[11px] tracking-widest uppercase text-muted-foreground" style={mono}>
                  {stat.label}
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
                <p className="text-xs text-muted-foreground mb-3" style={mono}>Partner institutions</p>
                <div className="flex flex-wrap gap-3">
                  {["NAS of Ukraine", "Kyiv-Mohyla Academy", "Ukrainian Institute", "Europeana", "DARIAH"].map((p) => (
                    <span key={p} className="text-xs border border-border px-3 py-1 text-muted-foreground" style={mono}>
                      {p}
                    </span>
                  ))}
                </div>
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
              onClick={() => alert("Submission form would open here. In production, this would link to a contribution portal.")}
              className="flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#c9872a", color: "#130d07" }}
            >
              Submit a Record <ArrowRight size={15} />
            </button>
            <button
              onClick={() => alert("Contact form would open here. In production, this would link to a researcher contact page.")}
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
                    onClick={() => alert("Contact form would open here.\n\nIn production, this would show contact information for the research team.")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Partners */}
            <div>
              <p className="text-[11px] text-foreground tracking-widest uppercase mb-4" style={mono}>
                Partners
              </p>
              <ul className="space-y-2.5">
                {[
                  "NAS of Ukraine",
                  "Kyiv-Mohyla Academy",
                  "Ukrainian Institute",
                  "Europeana Foundation",
                  "DARIAH-EU",
                ].map((partner) => (
                  <li key={partner}>
                    <span className="text-sm text-muted-foreground">{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[11px] text-muted-foreground" style={mono}>
              © 2024 Digital Preservation of Folk Traditions Project — CC BY-NC 4.0
            </p>
            <div className="flex gap-6 flex-wrap">
              {["Privacy Policy", "Terms of Use", "API Access", "Data Download"].map((link) => (
                <button
                  key={link}
                  onClick={() => alert(`${link} page would open here.\n\nIn production, this would link to the ${link.toLowerCase()} documentation.`)}
                  className="text-[11px] text-muted-foreground hover:text-primary transition-colors duration-200"
                  style={mono}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── Category Modal ──────────────────────────────────────────────── */}
      <Modal isOpen={categoryModal !== null} onClose={() => setCategoryModal(null)}>
        {categoryModal && CATEGORY_INFO[categoryModal] && (
          <div>
            <div className="mb-6">
              {CATEGORY_TABS.find(c => c.id === categoryModal) && (
                <>
                  {(() => {
                    const Icon = CATEGORY_TABS.find(c => c.id === categoryModal)!.icon;
                    return <Icon size={32} className="text-primary mb-4" />;
                  })()}
                </>
              )}
              <h2 className="text-4xl font-light text-foreground mb-2" style={serif}>
                {CATEGORY_TABS.find(c => c.id === categoryModal)?.label}
              </h2>
              <p className="text-xs tracking-widest uppercase text-primary" style={mono}>
                Folk Tradition Category
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2 tracking-wide uppercase" style={mono}>
                  Description
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {CATEGORY_INFO[categoryModal].description}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2 tracking-wide uppercase" style={mono}>
                  Cultural Significance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {CATEGORY_INFO[categoryModal].significance}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2 tracking-wide uppercase" style={mono}>
                  Examples in Archive
                </h3>
                <ul className="space-y-2">
                  {CATEGORY_INFO[categoryModal].examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span className="text-sm text-muted-foreground">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <button
                onClick={() => {
                  setCategoryModal(null);
                  setActiveCategory(categoryModal);
                  scrollToSection("archive");
                }}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#c9872a", color: "#130d07" }}
              >
                View {CATEGORY_TABS.find(c => c.id === categoryModal)?.label} in Archive <ArrowRight size={15} />
              </button>
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
