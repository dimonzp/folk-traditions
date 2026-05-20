import { Item } from "./interfaces";
import {
  Music, Scissors, Utensils,
  Flame, Shirt, Wind, Mic,
  FileText, LayoutGrid, Building2
} from "lucide-react";

export const CATEGORY_TABS = [
  { id: "all",            label: "All",           icon: LayoutGrid },
  { id: "songs",          label: "Songs",         icon: Music },
  { id: "dances",         label: "Dances",        icon: Wind },
  { id: "clothing",       label: "Clothing",      icon: Shirt },
  { id: "rituals",        label: "Rituals",       icon: Flame },
  { id: "recipes",        label: "Recipes",       icon: Utensils },
  { id: "crafts",         label: "Crafts",        icon: Scissors },
  { id: "stories",        label: "Stories",       icon: FileText },
  { id: "oral-histories", label: "Oral Histories",icon: Mic },
  { id: "poltava",        label: "Poltava",       icon: Building2 },
  { id: "kyiv",           label: "Kyiv",          icon: Building2 },
  { id: "zaporizhzhia",   label: "Zaporizhzhia",  icon: Building2 },
  { id: "dnipro",         label: "Dnipro",        icon: Building2 },
  { id: "volyn",          label: "Volyn",         icon: Building2 },
  { id: "lviv",           label: "Lviv",          icon: Building2 },
  { id: "frankivsk",      label: "Ivano-Frankivsk",icon: Building2 },
] as const;

export const CATEGORY_INFO: Record<string, { description: string; significance: string; examples: string[] }> = {
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



export const ITEMS: Item[] = [
  {
    id: 1,
    categories: ["clothing", "poltava"],
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
    categories: ["songs", "kyiv"],
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
    categories: ["dances", "zaporizhzhia"],
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
    categories: ["crafts", "dnipro"],
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
    categories: ["rituals", "volyn"],
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
    categories: ["oral-histories", "lviv"],
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
    categories: ["recipes"],
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
    categories: ["stories", "frankivsk"],
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

export const REGIONS = [
  {
    name: "Poltava",
    category: "poltava",
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
    category: "kyiv",
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
    category: "lviv",
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
    category: "zaporizhzhia",
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
    category: "volyn",
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
    category: "dnipro",
    items: 538,
    specialty: "Decorative Painting",
    image:
      "https://images.unsplash.com/photo-1705769945723-10ecbe1f7df8?w=500&h=360&fit=crop&auto=format",
    description: "Home to the UNESCO-recognized Petrykivka decorative painting tradition, featuring vibrant floral motifs and fantastical birds.",
    heritage: "The village of Petrykivka developed a unique decorative painting style characterized by swirling floral compositions, vibrant colors, and symbolic imagery. This tradition, recognized by UNESCO in 2013, adorned homes, ceramics, and ritual objects.",
    notable: ["Petrykivka painting (UNESCO heritage)", "Decorative ceramic traditions", "Floral motif development", "Traditional pigment preparation"]
  },
];