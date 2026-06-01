import { Item } from "./interfaces";
import { LayoutGrid, Building2 } from "lucide-react";

export const CATEGORY_TABS = [
    { id: "all", label: "All", icon: LayoutGrid },
    { id: "poltava", label: "Poltava", icon: Building2 },
    { id: "kyiv", label: "Kyiv", icon: Building2 },
    { id: "zaporizhzhia", label: "Zaporizhzhia", icon: Building2 },
    { id: "dnipro", label: "Dnipro", icon: Building2 },
    { id: "volyn", label: "Volyn", icon: Building2 },
    { id: "lviv", label: "Lviv", icon: Building2 },
    { id: "frankivsk", label: "Ivano-Frankivsk", icon: Building2 },
    { id: "odesa", label: "Odesa", icon: Building2 },
] as const;

export const ITEMS: Item[] = [
    {
        id: 1,
        categories: ["poltava"],
        title: "Poltava Vyshyvanka — Ceremonial Blouse",
        region: "Poltava Oblast",
        year: "c. 1887",
        description:
            "Hand-stitched ceremonial blouse featuring the characteristic red-black cross-stitch geometric motifs of the Poltava region. Collected from the village of Velyki Sorochyntsi. Embroidery patterns were passed mother to daughter, with specific symbols offering protection, blessing fertility, or honoring ancestors. Each region developed distinct color palettes and motifs reflecting local flora and cultural history.",
        image: "https://images.unsplash.com/photo-1566205092354-2393343083ec?w=600&h=400&fit=crop&auto=format",
    },
    {
        id: 2,
        categories: ["kyiv"],
        title: "Vesnianky — Spring Ritual Songs",
        region: "Kyiv Oblast",
        year: "Collected 1923",
        description:
            "A collection of 34 spring ritual songs documented by ethnomusicologist Klyment Kvitka in villages along the Ros River. Includes original notation and verse. Folk songs served as historical records, educational tools, and cultural preservation mechanisms. Many contain pre-Christian ritual elements and reflect the agricultural calendar, community values, and historical events.",
        image: "https://images.unsplash.com/photo-1561812938-f6e60cbf95e3?w=600&h=400&fit=crop&auto=format",
    },
    {
        id: 3,
        categories: ["zaporizhzhia"],
        title: "Hopak — Cossack Dance Notation",
        region: "Zaporizhzhia",
        year: "c. 1905",
        description:
            "Choreographic notation and photographs of the Hopak as performed at the annual Zaporizhzhian gathering. Includes 12 distinct movement sequences. Traditional dances served as social bonding activities, courtship rituals, and expressions of regional pride. Cossack dances demonstrated strength and military prowess, while circle dances reinforced community cohesion.",
        image: "https://images.unsplash.com/photo-1761253962607-6c64c25d0240?w=600&h=400&fit=crop&auto=format",
    },
    {
        id: 4,
        categories: ["dnipro"],
        title: "Petrykivka Decorative Painting",
        region: "Dnipropetrovsk Oblast",
        year: "c. 1930",
        description:
            "Original decorative panel in the Petrykivka style, featuring the characteristic swirling floral motifs, birds, and berries unique to this UNESCO-recognised tradition. Crafts were both utilitarian and sacred, decorating homes while offering spiritual protection. Patterns and techniques were closely guarded family secrets, and master craftspeople held respected positions in communities.",
        image: "https://images.unsplash.com/photo-1705769945723-10ecbe1f7df8?w=600&h=400&fit=crop&auto=format",
    },
    {
        id: 5,
        categories: ["volyn"],
        title: "Kupala Night — Midsummer Ceremony",
        region: "Volyn Oblast",
        year: "Documented 1912",
        description:
            "Field notes and photographs from the Ivan Kupala midsummer celebration. Includes wreath-weaving, fire-jumping, and water rituals documented across 7 villages. These rituals maintained cosmic balance, ensured good harvests, protected communities from misfortune, and preserved ancient cosmological beliefs about the relationship between humans, nature, and the divine.",
        image: "https://images.unsplash.com/photo-1683881572750-b4cdcb1c85b9?w=600&h=400&fit=crop&auto=format",
    },
    {
        id: 6,
        categories: ["lviv"],
        title: "Halychyna Weaving Songs — Oral Testimony",
        region: "Lviv Oblast",
        year: "Recorded 1978",
        description:
            "Audio testimonies from elder weavers of the Halychyna region, describing traditional loom techniques and the songs sung during weaving. 3h 42min of recordings. These recordings preserve not just information but voice, dialect, emotion, and personal perspective. They capture the last generation's direct connection to pre-industrial village life and traditional knowledge systems.",
        image: "https://images.unsplash.com/photo-1761253876239-c5e62efe81d2?w=600&h=400&fit=crop&auto=format",
    },
    {
        id: 7,
        categories: ["recipes"],
        title: "Borscht Variations — Regional Manuscript",
        region: "Multiple Regions",
        year: "Compiled 1955",
        description:
            "Handwritten compilation of 47 regional borscht variations gathered across Ukrainian oblasts. Each recipe includes seasonal ingredient notes and ritual significance. Oral storytelling preserved cultural memory, taught moral lessons, explained natural phenomena, and maintained connections to pre-Christian mythology. Stories were entertainment, education, and spiritual guidance.",
        image: "https://images.unsplash.com/photo-1643609873467-15cfffe782be?w=600&h=400&fit=crop&auto=format",
    },
    {
        id: 8,
        categories: ["frankivsk"],
        title: "Carpathian Folktales — Hutsul Tradition",
        region: "Ivano-Frankivsk Oblast",
        year: "Transcribed 1899",
        description:
            "A collection of 23 folktales from the Hutsul mountain communities, including mythological narratives of forest spirits, water nymphs, and seasonal deities.",
        image: "https://images.unsplash.com/photo-1662555200242-2a0ff73e987f?w=600&h=400&fit=crop&auto=format",
    },
    {
        id: 9,
        categories: ["poltava"],
        title: "Opishnya Ceramic",
        region: "Poltava",
        year: "from XII century",
        description:
            "Opishnya Ceramic Whistles (Zozulky): Making clay whistles shaped like birds or animals. Historically, they were not just toys but amulets used in spring rituals to drive away evil spirits with their sound. The tradition gained formalized safeguarding status in 1989 with the founding of the National Museum of Ukrainian Pottery in Opishnya.",
        image: "/images/Opishnya.jpg",
    },
    {
        id: 10,
        categories: ["poltava"],
        title: "Poltava Halushka",
        region: "Poltava",
        year: "first mention in 1798",
        description:
            "Poltava Halushka Rituals: The famous local dumpling is celebrated in lore as a symbol of prosperity. Feeding guests halushky involves specific traditional expressions of hospitality and wishing wealth to the household. The modern physical monument and festive gathering traditions were officially established in Poltava in 2006.",
        image: "/images/PoltavaHalushka.jpg",
    },
    {
        id: 11,
        categories: ["poltava"],
        title: "Embroidery",
        region: "Poltava",
        year: "end of XIX century",
        description:
            "Reshetylivka White-on-White Embroidery (Bilym po bilomu): A highly sophisticated folk craft where geometric or floral patterns are embroidered using white thread on white linen, symbolizing spiritual purity. A delicate, complex embroidery style utilizing up to 50 distinct technical stitches simultaneously. It was officially inscribed on the National Inventory of Intangible Cultural Heritage of Ukraine in 2017.",
        image: "/images/Embroidery.jpg",
    },
    {
        id: 12,
        categories: ["poltava"],
        title: "The Bride’s Wedding Bread",
        region: "Poltava",
        year: "XIX century",
        description:
            "The Bride’s Wedding Bread (Korovai): Poltava weddings are famous for complex bread-baking rituals. The korovai is decorated with intricate dough birds (representing the couple) and periwinkle leaves, accompanied by ritual singing. The baking process must be executed exclusively by happily married women (korovainytsi), explicitly banning widows from participating to preserve the couple's romantic fortune.",
        image: "/images/TheBridesWeddingBread.jpg",
    },
    {
        id: 13,
        categories: ["poltava"],
        title: "St. Andrew’s Eve",
        region: "Poltava",
        year: "XIX century",
        description:
            "St. Andrew’s Eve (Kalyta): A winter youth gathering where a large, sweet round bread (kalyta) is hung from the ceiling. The dry, honey-baked dough ring symbolizes the winter sun, which young men must protect from being smeared with soot by a comical guardian. Young men try to bite it without using their hands while riding a broomstick, surrounded by ritual jokes.",
        image: "/images/empty.jpg",
    },
    {
        id: 14,
        categories: ["poltava"],
        title: "Symon Zylot",
        region: "Poltava",
        year: "over 1000 years ago",
        description:
            "Gathering of Herbs on Symon Zylot (May 10): An ancient pre-Christian animistic ritual. Village communities believed that the earth was blessed with maximum bio-energy on this day, requiring absolute silence and specific white clothing during the harvest of medicinal roots.",
        image: "/images/empty.jpg",
    },
    {
        id: 15,
        categories: ["poltava"],
        title: "Weather Divination",
        region: "Poltava",
        year: "late XVIII century",
        description:
            "Weather Divination by Morning Dew: A local agricultural folk practice where elders read the density of morning dew and rainbows during key spring holidays to predict harvest volumes and rainfall.",
        image: "/images/empty.jpg",
    },
    {
        id: 16,
        categories: ["poltava"],
        title: "Dolls-Motanky",
        region: "Poltava",
        year: "XVIII century",
        description:
            "Dolls-Motanky as Cradleguards: An ancient folk custom of making knot-dolls (motanky). A facialless textile amulet tradition tracing back to the Trypillian period but localized as a domestic protective technique in Poltava households throughout the 18th and 19th centuries. They were bound entirely without needles or knots. In Poltava villages, it was common to hang a second, empty cradle with a doll inside to distract malevolent spirits from the real baby.",
        image: "/images/DollsMotanky.jpg",
    },
    {
        id: 17,
        categories: ["odesa"],
        title: "The Rite of Trifon Zarezan",
        region: "Odesa",
        year: "XIX century",
        description:
            "The Rite of Trifon Zarezan (Vine Pruning): A traditional folk ritual borrowed from regional Bulgarian/Balkan communities. In early spring, vineyards are blessed, pruned, and watered with wine to ensure a huge grape harvest.",
        image: "/images/TheRiteOfTrifonZarezan.jpg",
    },
    {
        id: 18,
        categories: ["odesa"],
        title: "Humorous Fishermen Lore",
        region: "Odesa",
        year: "XIX century",
        description:
            "Humorous Fishermen Lore: A specific coastal oral storytelling tradition developed among the multi-ethnic port workers of the Black Sea. The unique superstitions regarding maritime winds and fish migration were documented in regional coastal chronicles during the 1850s. Deep-rooted oral folklore, full of specific tall tales, sea-spirit superstitions, and unique jargon about catching local fish like bychki.",
        image: "/images/HumorousFishermenLore.jpg",
    },
    {
        id: 19,
        categories: ["odesa"],
        title: "The Odesa Language Anecdotes",
        region: "Odesa",
        year: "XX century",
        description:
            "The 'Odesa Language' Anecdotes: A distinct urban oral folklore combining Ukrainian, Yiddish, Russian, and French grammatical structures into witty stories, proverbs, and street humor.",
        image: "/images/empty.jpg",
    },
    {
        id: 20,
        categories: ["odesa"],
        title: "The Moldavian Martisor Spring Ritual",
        region: "Odesa",
        year: "XVIII century",
        description:
            "The Moldavian 'Martisor' Spring Ritual: Celebrated in the southern districts, where people twist red and white wool threads together into small badges worn on clothes during March to greet spring and ensure health.",
        image: "/images/TheMoldavianMartisorSpringRitual.jpg",
    },
    {
        id: 21,
        categories: ["odesa"],
        title: "Grecian Wine-Pouring Hospitality",
        region: "Odesa",
        year: "XVIII century",
        description:
            "Grecian Wine-Pouring Hospitality: An open-table welcoming ritual tracing back to the late 18th century Greek settlements in places like Odesa and Bilhorod-Dnistrivskyi. Coastal villages settled by ethnic Greeks preserve folk tales and rituals where wine must be poured in a single continuous stream while wishing the guest safe sea travels. The pouring protocol required specific oral wishing for a calm sea (Halini).",
        image: "/images/empty.jpg",
    },
    {
        id: 22,
        categories: ["odesa"],
        title: "The Tales of the Odesa Catacombs",
        region: "Odesa",
        year: "XIX century",
        description:
            "The Tales of the Odesa Catacombs: A modern folklore layer featuring dark stories, ghost encounters, and historical smuggler legends set within the massive underground stone labyrinth beneath the city. Stories regarding hidden labyrinth paths and treasure caches began developing rapidly during the industrial limestone mining boom of the 1830s.",
        image: "/images/TheTalesOfTheOdesaCatacombs.jpg",
    },
    {
        id: 23,
        categories: ["odesa"],
        title: "Water-Blessing at the Sea",
        region: "Odesa",
        year: "XIX century",
        description:
            "Water-Blessing at the Sea: Epiphany (January) winter rituals where entire villages gather on the sandy beaches of the Black Sea to watch brave youth dive into icy seawater to retrieve a wooden cross. This specific open-water winter adaptation, which differs from traditional river ice-hole diving due to the shifting marine tides, was documented by local maritime parishes starting in the 1850s.",
        image: "/images/empty.jpg",
    },
    {
        id: 24,
        categories: ["kyiv"],
        title: "Wild-Hive Beekeeping Lore",
        region: "Kyiv",
        year: "X century",
        description:
            "Wild-Hive Beekeeping Lore (Bortnytstvo): An ancient forest honey-gathering craft active since Kyivan Rus (10th century). It was given formal national protection in 2018 when the traditional forest beekeeping practices of the Kyivan Polissia were added to Ukraine’s Intangible Heritage inventory. It was accompanied by strict oral codes, protective spells, and family tree-marking traditions.",
        image: "/images/WildHiveBeekeepingLore.jpg",
    },
    {
        id: 25,
        categories: ["kyiv"],
        title: "The Legend of the Golden Gate",
        region: "Kyiv",
        year: "XI century",
        description:
            "The Legend of the Golden Gate Dragon: A deep-rooted city folklore tale about a mythical serpent living under Kyiv's hills, defeated by folk heroes like Mykyta the Tanner (Mykyta Kozhumyaka). The tale was formally printed and canonized in early Ukrainian folklore compendiums during the 1870s.",
        image: "/images/TheLegendOfTheGoldenGate.jpg",
    },
    {
        id: 26,
        categories: ["kyiv"],
        title: "Kupala Fire-Jumping",
        region: "Kyiv",
        year: "Pre-Christian eras",
        description:
            "Kupala Fire-Jumping: Midsummer purification bonfires structurally unchanged since pre-Christian eras. The specific local variation involving the burning of stinging nettles and willow branches was heavily documented near Kyiv by ethnographer Pavlo Chubynsky in 1872.",
        image: "/images/KupalaFireJumping.jpg",
    },
    {
        id: 27,
        categories: ["kyiv"],
        title: "Floating Flowers",
        region: "Kyiv",
        year: "XIX century",
        description:
            "Floating Flower Wreaths: During summer solstice rituals, young women weave wreaths of wild flowers with lit candles and float them down the Dnipro River to divine their romantic future based on how the wreath floats.",
        image: "/images/FloatingFlowers.jpg",
    },
    {
        id: 28,
        categories: ["kyiv"],
        title: "Vertep",
        region: "Kyiv",
        year: "XVIII century",
        description:
            "Vertep (Puppet Theater) caroling: A Christmas tradition deeply cultivated in Kyiv’s historical academies and villages, combining biblical plays with secular, humorous folk sketches performed with a portable wooden box theater. Its performance texts were systematically structured by students of the Kyiv-Mohyla Academy around 1770.",
        image: "/images/Vertep.jpg",
    },
    {
        id: 29,
        categories: ["kyiv"],
        title: "Slavuta",
        region: "Kyiv",
        year: "XIX century",
        description:
            "The Cult of the Dnipro River (Slavuta): Folk personification of the river as a warrior entity. The naming conventions and narrative poems were extensively collected and published by Mikhail Maksimovich in his foundational 1827 anthology of Ukrainian folk songs.",
        image: "/images/Slavuta.jpg",
    },
    {
        id: 30,
        categories: ["kyiv"],
        title: "Zeleni Svyata",
        region: "Kyiv",
        year: "XVIII century",
        description:
            "Trinity Greenery Decoration (Zeleni Svyata): An aromatic plant ritual dating back centuries. Kyiv regional custom dictates the specific use of calamus reeds (lepekha) to carpet earthen floors, a practice detailed in local theological warnings against pagan domestic superstitions in the early 18th century.",
        image: "/images/ZeleniSvyata.jpg",
    },
    {
        id: 31,
        categories: ["zaporizhzhia"],
        title: "The Cossack Code of Honor",
        region: "Zaporizhzhia",
        year: "XVI-XVIII century",
        description:
            "The Cossack Code of Honor (Zvycheyeve Pravo): An unwritten system of customary law organized on the Khortytsia island between 1552 and 1775. It regulated all political, military, and diplomatic interactions within the Cossack republic via oral consensus.",
        image: "/images/empty.jpg",
    },
    {
        id: 32,
        categories: ["zaporizhzhia"],
        title: "Dumy",
        region: "Zaporizhzhia",
        year: "XV-XVI century",
        description:
            "Dumy (Heroic Epics): Vocal-instrumental historical epics performed by blind bard guilds (bandura players and kobzars). The specific musical modes and structural composition of these long monologues were transcribed systematically starting in 1908 by musicologist Filaret Kolessa.",
        image: "/images/Dumy.jpg",
    },
    {
        id: 33,
        categories: ["zaporizhzhia"],
        title: "The Hopak as Martial Practice",
        region: "Zaporizhzhia",
        year: "XVI century",
        description:
            "The Hopak as Martial Practice: Originally, this famous dance was an exclusive male ritual on the Sich that allowed Cossacks to practice combat moves, agility, leaps, and swordplay through rhythm. It was formalized into an artistic dance choreography structure in 1940 by Pavlo Virsky.",
        image: "/images/TheHopakAsMartialPractice.jpg",
    },
    {
        id: 34,
        categories: ["zaporizhzhia"],
        title: "Initiation into the Host",
        region: "Zaporizhzhia",
        year: "XVII century",
        description:
            "Initiation into the Host: A folklore ritual for young recruits (dzhury), who had to pass physical tests. Recruits had to navigate the dangerous, now-submerged Dnipro rapids using manual wooden oars to prove their absolute emotional composure under pressure to be accepted as true free men.",
        image: "/images/empty.jpg",
    },
    {
        id: 35,
        categories: ["zaporizhzhia"],
        title: "The Osetledets Ritual",
        region: "Zaporizhzhia",
        year: "X century (XVI century adaptation)",
        description:
            "The Osetledets Ritual: The traditional practice of shaving the head clean except for a long lock of hair (osetledets) left on the crown, symbolized high military caste and a defiance of death. A specific warrior hairstyle dating back to Prince Svyatoslav in the 10th century but universally adapted as an exclusive military guild marker by the Zaporozhian Cossacks from the 1550s onward.",
        image: "/images/TheOsetledetsRitual.jpg",
    },
    {
        id: 36,
        categories: ["zaporizhzhia"],
        title: "Cossack Sorcery",
        region: "Zaporizhzhia",
        year: "XVI-XVIII century",
        description:
            "Cossack Sorcery (Kharakternyky): Rich local legends about magical warriors who could allegedly catch bullets with their bare hands, read minds, turn into wolves, and lock rivers to hide from enemies.",
        image: "/images/empty.jpg",
    },
    {
        id: 37,
        categories: ["zaporizhzhia"],
        title: "Burial of a Warrior with his Horse",
        region: "Zaporizhzhia",
        year: "XVII century",
        description:
            "Burial of a Warrior with his Horse: A specific funeral custom where a fallen Cossack’s horse was led behind the coffin. Folklore dictated that a warrior's horse was his closest spiritual brother, mourning him humanly.",
        image: "/images/BurialOfAWarriorWithHisHorse.jpg",
    },
    {
        id: 38,
        categories: ["zaporizhzhia"],
        title: "The Dnipro Rapids Lore",
        region: "Zaporizhzhia",
        year: "XVI-XVIII century",
        description:
            "The Dnipro Rapids Lore: Every specific rock rapid of the lower Dnipro had its own mythical name and scary folk legend attached to it, requiring sailors to make small ritual offerings of bread or tobacco.",
        image: "/images/TheDniproRapidsLore.jpg",
    },
    {
        id: 39,
        categories: ["dnipro"],
        title: "Onion Motif",
        region: "Dnipro",
        year: "XVIII century",
        description:
            "The Magic of the 'Cybulka' (Onion Motif): A specific element in Petrykivka folklore painting where flowers are drawn in the shape of an onion, symbolizing family unity and physical health. The structural core of Petrykivka design, formalized by Master Tatiana Pata in 1911.",
        image: "/images/OnionMotif.jpg",
    },
    {
        id: 40,
        categories: ["dnipro"],
        title: "Cossack Wintering Songs",
        region: "Dnipro",
        year: "XVIII century",
        description:
            "Cossack Wintering Songs (Zymivnyky): Folk songs originating from stationary Cossack agricultural farms (zymivnyky), focusing on the transition from warrior life to peaceful farming and cattle breeding. On November 28, 2016, this vocal tradition was inscribed onto the UNESCO Intangible Cultural Heritage List in Need of Urgent Safeguarding.",
        image: "/images/empty.jpg",
    },
    {
        id: 41,
        categories: ["dnipro"],
        title: "Malanka Goat Ritual",
        region: "Dnipro",
        year: "Pre-Christian eras",
        description:
            "Malanka Goat Ritual (Vodynnya Kozy): A New Year’s folk theater pageant where a youth dresses up in a goatskin. The 'goat' dances, dies, and is comically resurrected, symbolizing the death of winter and rebirth of nature.",
        image: "/images/MalankaGoatRitual.jpg",
    },
    {
        id: 42,
        categories: ["dnipro"],
        title: "Harvesting the Apple",
        region: "Dnipro",
        year: "Pre-Christian eras",
        description:
            "Harvesting the 'Spas' Apple: A folklore ritual on the Feast of the Transfiguration (Spas), where apples and honey are blessed. Eating the first bite of the blessed apple involves making a secret wish for family health. A pre-Christian solar harvest feast integrated into the Orthodox calendar. Local 19th-century estate records show that up until this mid-August day, eating apples was considered taboo to protect the seasonal maturation of orchards.",
        image: "/images/empty.jpg",
    },
    {
        id: 43,
        categories: ["dnipro"],
        title: "Lark Breads",
        region: "Dnipro",
        year: "XIX century",
        description:
            "Baking the 'Zhavoronky' (Lark Breads): A spring ritual of baking dough in the shape of flying lark birds. The custom of children elevating these sweet yeast breads on long wooden sticks to manually simulate the flight of migratory birds was documented across the region in 1884.",
        image: "/images/LarkBreads.jpg",
    },
    {
        id: 44,
        categories: ["dnipro"],
        title: "Steppe Mound Legends",
        region: "Dnipro",
        year: "VII-III BC",
        description:
            "Steppe Mound Legends (Mohyly): Abundant local folk stories regarding ancient Scythian and Cossack burial mounds. It was strictly forbidden to dig or disrespect them, as they were believed to be guarded by spirits.",
        image: "/images/SteppeMoundLegends.jpg",
    },
    {
        id: 45,
        categories: ["dnipro"],
        title: "The Craft of Woven Carpets",
        region: "Dnipro",
        year: "XIX century",
        description:
            "The Craft of 'Kolyaska' Woven Carpets: A regional weaving tradition where heavy wool rugs were adorned with geometric stars and protective solar signs to keep cold and evil away from the household. A structural weaving style popular in winter settlements throughout the 19th century.",
        image: "/images/TheCraftOfWovenCarpets.jpg",
    },
    {
        id: 46,
        categories: ["volyn"],
        title: "Mavka and Lisovyk Lore",
        region: "Volyn",
        year: "XIX-XX century",
        description:
            "Mavka and Lisovyk Lore: Deeply embedded folk belief in nature spirits—Mavka (a forest nymph who takes souls) and Lisovyk (a forest lord). Locals wore garlic to protect themselves from being lured into swamps. This framework deeply bound to the geography of the Shatsk wetlands. This oral mythology was immortalized and structurally analyzed by Lesya Ukrainka in her famous 1911 drama The Forest Song.",
        image: "/images/MavkaAndLisovykLore.jpg",
    },
    {
        id: 47,
        categories: ["volyn"],
        title: "Polissian Ritual",
        region: "Volyn",
        year: "Pre-Christian eras",
        description:
            "Polissian 'Kust' Ritual (The Bush): An ancient pre-Christian green-week custom where a young girl is completely dressed up in fresh green maple and birch leaves. She is led through the village as a living icon of vegetative fertility. This ancient ritual has been preserved continuously in the remote forest borders and was formally added to Ukraine’s National Inventory of Intangible Heritage in 2019.",
        image: "/images/PolissianRitual.jpg",
    },
    {
        id: 48,
        categories: ["volyn"],
        title: "The Moving Candle",
        region: "Volyn",
        year: "XV century",
        description:
            "Carrying the 'Svichka' (The Moving Candle): A unique communal tradition where a massive, decorated holy wax candle, weighing up to 30 kilograms, is melted down and recast annually by the community during a closed ritual meal.",
        image: "/images/empty.jpg",
    },
    {
        id: 49,
        categories: ["volyn"],
        title: "The Legend of Lake Svitiaz",
        region: "Volyn",
        year: "XV century",
        description:
            "The Legend of Lake Svitiaz: A famous local myth about a Sunken City. When an enemy attacked, the city sank into the ground and turned into a pristine lake, while its women turned into white flowers to escape dishonor.",
        image: "/images/TheLegendOfLakeSvitiaz.jpg",
    },
    {
        id: 50,
        categories: ["volyn"],
        title: "Spring Mermaid Songs",
        region: "Volyn",
        year: "Pre-Christian eras",
        description:
            "Spring 'Rusalni' Songs: Ritual songs sung exclusively during the week after Trinity, dedicated to water nymphs (rusalkas). It was believed these songs pacified nymphs so they wouldn't drown people or ruin crops. Ethnographic field recordings from 1973 confirmed that older women maintained strict taboos against entering forest zones while these melodies were active.",
        image: "/images/SpringMermaidSongs.jpg",
    },
    {
        id: 51,
        categories: ["volyn"],
        title: "Woven Straw Spiders",
        region: "Volyn",
        year: "XIX century",
        description:
            "Woven Straw Spiders (Pavuky): A winter folk art piece made of interconnected straw triangles suspended from the ceiling. They acted as cosmic energy catchers, absorbing negative energy from the house during Christmas holidays. These modular hanging polyhedrons were documented as universal household air purification amulets across Volyn in the 1860s.",
        image: "/images/WovenStrawSpiders.jpg",
    },
    {
        id: 52,
        categories: ["volyn"],
        title: "Lamentations for the Dead",
        region: "Volyn",
        year: "XX century",
        description:
            "Lamentations for the Dead (Plachi): Highly ritualized, poetic musical crying performed by elderly local women at funerals. The texts are deeply emotional improvisations addressing the soul of the departed.",
        image: "/images/LamentationsForTheDead.jpg",
    },
    {
        id: 53,
        categories: ["lviv"],
        title: "The Grand Christmas Star",
        region: "Lviv",
        year: "XIX century",
        description:
            "The Grand Christmas Star (Zirka): Lviv caroling is famous for constructing massive, multi-pointed wooden stars covered in colorful ribbons and mirrors. The star rotates mechanically as caroling groups march through streets. It was highly organised into professional town caroling guilds around 1890.",
        image: "/images/TheGrandChristmasStar.jpg",
    },
    {
        id: 54,
        categories: ["lviv"],
        title: "Toy Painting",
        region: "Lviv",
        year: "XVII century",
        description:
            "Yavoriv Toy Painting: A unique folk craft of making lightweight wooden toys (rocking horses, birds) painted in bright red, yellow, and green strokes, using a special local style called 'verbivka' (willow branch lines). This traditional art form was officially included in the National Inventory of Intangible Cultural Heritage of Ukraine in 2019.",
        image: "/images/ToyPainting.jpg",
    },
    {
        id: 55,
        categories: ["lviv"],
        title: "The Didukh Ritual",
        region: "Lviv",
        year: "XIX century",
        description:
            "The Didukh Ritual: A Christmas Eve tradition where a large, ornate sheaf of wheat or rye is placed in the primary corner of the house. It represents the ancestral spirits coming to join the family holiday dinner. The installation of the Didukh takes place during Christmas Eve.",
        image: "/images/TheDidukhRitual.jpg",
    },
    {
        id: 56,
        categories: ["lviv"],
        title: "Bright Monday Drenching",
        region: "Lviv",
        year: "XV century",
        description:
            "Bright Monday Drenching (Svyatyy Ponedilok): The day after Easter where young men splash single women with water. In regional folklore, water acts as a purifying element ensuring beauty, health, and quick marriage.",
        image: "/images/BrightMondayDrenching.jpg",
    },
    {
        id: 57,
        categories: ["lviv"],
        title: "The Urban Coffee Lore",
        region: "Lviv",
        year: "XIX century",
        description:
            "The Urban Coffee Lore: A specific 19th-century urban folklore surrounding Lviv coffeehouses, involving complex social etiquette, storytelling, and local legends about discovering coffee beans in city dungeons.",
        image: "/images/empty.jpg",
    },
    {
        id: 58,
        categories: ["lviv"],
        title: "Medivnyky",
        region: "Lviv",
        year: "XVII century",
        description:
            "Baking 'Medivnyky' (Honey Cakes): Baking hard, long-lasting gingerbread cookies flavored with honey and spices for church fairs. They were shaped like hearts or saints and gifted as tokens of romantic affection. The trade regulations for folk honey-baking stalls surrounding Lviv’s St. George Cathedral were legally codified in church fair manuals in 1772.",
        image: "/images/Medivnyky.jpg",
    },
    {
        id: 59,
        categories: ["lviv"],
        title: "The Rohatyn Wedding Cap Custom",
        region: "Lviv",
        year: "XIX century",
        description:
            "The Rohatyn Wedding Cap Custom: A dramatic folk ritual during weddings where the bride's maiden wreath is replaced with a married woman’s cap (ochipok), accompanied by melancholic ritual songs about losing youth.",
        image: "/images/TheRohatynWeddingCapCustom.jpg",
    },
    {
        id: 60,
        categories: ["lviv"],
        title: "Bazaars of St. Nicholas",
        region: "Lviv",
        year: "XIX century",
        description:
            "Bazaars of St. Nicholas: Traditional winter folk markets where specific 'Mykolaychyky' sweet biscuits are sold alongside small birch twigs wrapped in gold paper, used as a playful warning for naughty children.",
        image: "/images/BazaarsOfStNicholas.jpg",
    },
    {
        id: 61,
        categories: ["frankivsk"],
        title: "Polonyna Departure March",
        region: "Ivano-Frankivsk",
        year: "XIX century",
        description:
            "Polonyna Departure March (Polonynskyy Khid): A massive spring ritual where shepherds lead sheep herds up to high mountain pastures (polonynas) for the summer. It involves playing long trembitas and lighting a sacred bonfire. This complex ritual process was documented in its classical form by Ivan Franko in 1881.",
        image: "/images/PolonynaDepartureMarch.jpg",
    },
    {
        id: 62,
        categories: ["frankivsk"],
        title: "The Trembita Communication",
        region: "Ivano-Frankivsk",
        year: "XI-XII century",
        description:
            "The Trembita Communication: Using a giant, 4-meter-long wooden horn made from lightning-struck spruce trees. Historically, it wasn't just music, but a ritual signaling tool to announce births, deaths, or danger across mountains.",
        image: "/images/TheTrembitaCommunication.jpg",
    },
    {
        id: 63,
        categories: ["frankivsk"],
        title: "Hutsul Woodcrafting",
        region: "Ivano-Frankivsk",
        year: "XIX century",
        description:
            "Hutsul Inlaid Woodcrafting (Rizba): Intricate geometric wood carving on axes, boxes, and home interiors, often inlaid with mother-of-pearl and metal wires to serve as physical protective symbols.",
        image: "/images/HutsulWoodcrafting.jpg",
    },
    {
        id: 64,
        categories: ["frankivsk"],
        title: "The Arkan Dance",
        region: "Ivano-Frankivsk",
        year: "XVII century",
        description:
            "The Arkan Dance: A sacred, ritual circle dance performed strictly by men. It serves as an endurance test and initiation for young boys becoming mature mountain warriors and protectors. It serves as a historical military testing rite, tracing back to the defensive tactical routines of Carpathian fighters in the 17th century.",
        image: "/images/TheArkanDance.jpg",
    },
    {
        id: 65,
        categories: ["frankivsk"],
        title: "Oleksa Dovbush Legends",
        region: "Ivano-Frankivsk",
        year: "XVIII century",
        description:
            "Oleksa Dovbush Legends: An extensive epic narrative cycle focusing on the historical leader of the Opryshky movement who operated between 1738 and 1745. His mythical attributes were compiled into comprehensive text volumes by Panteleimon Kulish in 1856.",
        image: "/images/OleksaDovbushLegends.jpg",
    },
    {
        id: 66,
        categories: ["frankivsk"],
        title: "Easter Pysanka Writing",
        region: "Ivano-Frankivsk",
        year: "XIII century",
        description:
            "Easter 'Pysanka' Writing: A deeply spiritual practice of decorating raw eggs using beeswax and layered dyes. Every geometric sign (crosses, triangles, deer) is a specific coded prayer for protection or health. The architectural patterns were given a dedicated home with the founding of the Pysanka Museum in Kolomyia in 1987.",
        image: "/images/EasterPysankaWriting.jpg",
    },
    {
        id: 67,
        categories: ["frankivsk"],
        title: "The Living Fire",
        region: "Ivano-Frankivsk",
        year: "Pre-Christian Era",
        description:
            "The Living Fire (Vatra): The continuous shepherd’s fire produced manually by rubbing two wooden sticks together. Shepherds on mountain pastures maintain a single campfire that must never go out during the entire summer season. Letting the vatra die is viewed as a catastrophic omen for the cattle.",
        image: "/images/TheLivingFire.jpg",
    },
    {
        id: 68,
        categories: ["frankivsk"],
        title: "Hutsul Caroling with Axes",
        region: "Ivano-Frankivsk",
        year: "XVIII century",
        description:
            "Hutsul Caroling with Axes (Kolyada): Groups of male carolers march through snow-covered mountain valleys holding ceremonial axes (bartkas), tossing them into the air and singing ancient multi-part songs.",
        image: "/images/HutsulCarolingWithAxes.jpg",
    },
];

export const REGIONS = [
    {
        name: "Poltava",
        category: "poltava",
        items: 9,
        specialty: "Embroidery & Ritual Song",
        image: "https://images.unsplash.com/photo-1655678204995-0e1eb3d2fdbc?w=500&h=360&fit=crop&auto=format",
        description:
            "Central Ukrainian region known for its distinctive red-and-black geometric embroidery patterns and rich tradition of ritual songs.",
        heritage:
            "Poltava Oblast preserves some of the most recognizable Ukrainian embroidery styles, with cross-stitch patterns that encode ancient cosmological symbols. The region's spring ritual songs (vesnianky) were extensively documented by ethnomusicologist Klyment Kvitka in the 1920s.",
        notable: [
            "Red-and-black vyshyvanka embroidery",
            "Preserved wooden architecture",
            "Traditional pottery centers",
            "Spring ritual song repertoire",
        ],
    },
    {
        name: "Kyiv Oblast",
        category: "kyiv",
        items: 8,
        specialty: "Ritual & Oral History",
        image: "https://images.unsplash.com/photo-1643609873467-15cfffe782be?w=500&h=360&fit=crop&auto=format",
        description:
            "The historical heartland surrounding the capital, with extensive documentation of seasonal rituals and oral traditions from villages along the Dnieper and Ros rivers.",
        heritage:
            "As the historical center of Kyivan Rus', this region maintains deep connections to both pre-Christian Slavic traditions and Orthodox ritual life. Rich oral history recordings document the transition from traditional village life to Soviet collectivization.",
        notable: [
            "Extensive oral history archives",
            "Dnieper river ritual traditions",
            "Historical folk instrument crafting",
            "Preserved calendar rituals",
        ],
    },
    {
        name: "Lviv Oblast",
        category: "lviv",
        items: 9,
        specialty: "Crafts & Textile",
        image: "https://images.unsplash.com/photo-1761253876239-c5e62efe81d2?w=500&h=360&fit=crop&auto=format",
        description:
            "Western Ukrainian region encompassing Hutsul, Boyko, and Lemko cultural zones, each with distinct craft traditions, textiles, and mountain folklore.",
        heritage:
            "The Carpathian mountain communities of Lviv Oblast preserved unique craft techniques through geographic isolation. Hutsul woodcarving, textile patterns, and leather work represent some of the most distinctive Ukrainian folk art traditions.",
        notable: [
            "Hutsul woodcarving and leather work",
            "Multi-colored wool textiles",
            "Mountain ritual traditions",
            "Distinctive musical instruments (trembita, tsymbaly)",
        ],
    },
    {
        name: "Zaporizhzhia",
        category: "zaporizhzhia",
        items: 9,
        specialty: "Cossack Dance",
        image: "https://images.unsplash.com/photo-1761253962607-6c64c25d0240?w=500&h=360&fit=crop&auto=format",
        description:
            "Southeastern region and historical heart of Zaporizhian Cossack culture, preserving military dances, epic songs (dumy), and warrior traditions.",
        heritage:
            "Former territory of the Zaporizhian Sich, this region maintains living traditions of Cossack culture including the energetic Hopak dance, epic ballad singing, and martial arts elements integrated into folk choreography.",
        notable: [
            "Hopak and other Cossack dances",
            "Epic ballad (dumy) tradition",
            "Martial folk choreography",
            "Historical costume reconstruction",
        ],
    },
    {
        name: "Volyn",
        category: "volyn",
        items: 8,
        specialty: "Ritual & Weaving",
        image: "https://images.unsplash.com/photo-1683881572750-b4cdcb1c85b9?w=500&h=360&fit=crop&auto=format",
        description:
            "Northwestern region preserving ancient ritual practices, especially water-based ceremonies, and maintaining traditional linen weaving techniques.",
        heritage:
            "Volyn's geographic position as a historical borderland allowed it to preserve pre-Christian ritual elements alongside Christian practices. The region's Kupala Night celebrations and traditional weaving songs are extensively documented.",
        notable: [
            "Kupala Night water rituals",
            "Traditional linen weaving",
            "Preserved ritual songs",
            "Ancient calendar celebrations",
        ],
    },
    {
        name: "Dnipropetrovsk",
        category: "dnipro",
        items: 8,
        specialty: "Decorative Painting",
        image: "https://images.unsplash.com/photo-1705769945723-10ecbe1f7df8?w=500&h=360&fit=crop&auto=format",
        description:
            "Home to the UNESCO-recognized Petrykivka decorative painting tradition, featuring vibrant floral motifs and fantastical birds.",
        heritage:
            "The village of Petrykivka developed a unique decorative painting style characterized by swirling floral compositions, vibrant colors, and symbolic imagery. This tradition, recognized by UNESCO in 2013, adorned homes, ceramics, and ritual objects.",
        notable: [
            "Petrykivka painting (UNESCO heritage)",
            "Decorative ceramic traditions",
            "Floral motif development",
            "Traditional pigment preparation",
        ],
    },
    {
        name: "Odesa",
        category: "odesa",
        items: 7,
        specialty: "Maritime Folklore",
        image: "/images/odesa.jpg",
        description:
            "Black Sea coastal region shaped by centuries of multicultural exchange, preserving maritime traditions, urban folklore, fishing customs, and unique hospitality rituals.",
        heritage:
            "Historically influenced by Ukrainian, Greek, Bulgarian, Moldavian, Jewish, and other Black Sea communities, Odesa developed a distinctive cultural identity reflected in seafaring legends, ritual celebrations, vineyard traditions, and the famous wit of Odesa storytelling.",
        notable: [
            "Black Sea maritime folklore",
            "Odesa urban humor and anecdotes",
            "Traditional fishing customs and legends",
            "Multicultural wine and hospitality rituals",
        ],
    },
];
