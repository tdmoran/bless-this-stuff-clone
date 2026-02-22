export type Category = "Gear" | "Style" | "Living" | "Tech" | "EDC" | "Outdoor";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  currency: string;
  description: string;
  editorialNote: string;
  image: string;
  affiliateLinks: {
    lazada: string;
    shopee: string;
  };
  featured: boolean;
  tags: string[];
}

export const categories: Category[] = ["Gear", "Style", "Living", "Tech", "EDC", "Outdoor"];

export const categoryDescriptions: Record<Category, string> = {
  Gear: "Tools and equipment built to perform",
  Style: "Watches, wallets, and wearables with purpose",
  Living: "Elevate your space with considered design",
  Tech: "Cutting-edge electronics and audio",
  EDC: "Everyday essentials, refined",
  Outdoor: "Adventure-ready gear for the wild",
};

export const products: Product[] = [
  // ─────────────────────────────────────────────
  // GEAR
  // ─────────────────────────────────────────────
  {
    id: "gear-001",
    slug: "leatherman-wave-plus-multi-tool",
    name: "Leatherman Wave+ Multi-Tool",
    category: "Gear",
    price: 159,
    currency: "SGD",
    description:
      "Eighteen tools forged into a single, one-handed fortress of capability. The Wave+ is the benchmark every multi-tool is measured against.",
    editorialNote:
      "If you carry one tool for the rest of your life, make it this one. The Wave+ has solved more problems in more pockets than any gadget ever made.",
    image: "https://picsum.photos/seed/leatherman-wave-plus-multi-tool/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Leatherman%20Wave%2B%20Multi-Tool",
      shopee: "https://shopee.sg/search?keyword=Leatherman%20Wave%2B%20Multi-Tool",
    },
    featured: true,
    tags: ["multi-tool", "edc", "stainless-steel"],
  },
  {
    id: "gear-002",
    slug: "milwaukee-fastback-utility-knife",
    name: "Milwaukee Fastback Utility Knife",
    category: "Gear",
    price: 38,
    currency: "SGD",
    description:
      "A press-and-flip mechanism that deploys faster than thought. Built for job sites but refined enough for the everyday carry rotation.",
    editorialNote:
      "Milwaukee took the humble box cutter and gave it a spine. The Fastback flips open with one hand and cuts with zero hesitation.",
    image: "https://picsum.photos/seed/milwaukee-fastback-utility-knife/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Milwaukee%20Fastback%20Utility%20Knife",
      shopee: "https://shopee.sg/search?keyword=Milwaukee%20Fastback%20Utility%20Knife",
    },
    featured: true,
    tags: ["knife", "utility", "folding"],
  },
  {
    id: "gear-003",
    slug: "knipex-pliers-wrench",
    name: "Knipex Pliers Wrench",
    category: "Gear",
    price: 89,
    currency: "SGD",
    description:
      "German-engineered smooth jaws that grip like a wrench and adjust like pliers. Zero marring, infinite confidence.",
    editorialNote:
      "Once you use a Knipex, every adjustable wrench in your drawer becomes a paperweight. This is the tool that ruins all other tools for you.",
    image: "https://picsum.photos/seed/knipex-pliers-wrench/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Knipex%20Pliers%20Wrench",
      shopee: "https://shopee.sg/search?keyword=Knipex%20Pliers%20Wrench",
    },
    featured: true,
    tags: ["pliers", "wrench", "german-engineering"],
  },
  {
    id: "gear-004",
    slug: "victorinox-swiss-army-knife-pioneer-x",
    name: "Victorinox Swiss Army Knife Pioneer X",
    category: "Gear",
    price: 65,
    currency: "SGD",
    description:
      "Alox-scaled, no-nonsense Swiss precision. The Pioneer X strips the classic formula down to what matters and wraps it in brushed aluminum.",
    editorialNote:
      "Your grandfather carried one. Your grandson will carry this one. The Pioneer X is a century of Swiss engineering in your front pocket.",
    image: "https://picsum.photos/seed/victorinox-swiss-army-knife-pioneer-x/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Victorinox%20Swiss%20Army%20Knife%20Pioneer%20X",
      shopee: "https://shopee.sg/search?keyword=Victorinox%20Swiss%20Army%20Knife%20Pioneer%20X",
    },
    featured: true,
    tags: ["swiss-army", "knife", "classic"],
  },
  {
    id: "gear-005",
    slug: "stanley-fatmax-tape-measure",
    name: "Stanley FatMax Tape Measure",
    category: "Gear",
    price: 28,
    currency: "SGD",
    description:
      "Eleven feet of unsupported standout and a blade so wide it refuses to buckle. The FatMax measures with authority.",
    editorialNote:
      "There is no glamour in a tape measure until you use a FatMax. The blade locks like it means it, and the standout is borderline absurd.",
    image: "https://picsum.photos/seed/stanley-fatmax-tape-measure/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Stanley%20FatMax%20Tape%20Measure",
      shopee: "https://shopee.sg/search?keyword=Stanley%20FatMax%20Tape%20Measure",
    },
    featured: true,
    tags: ["tape-measure", "tool", "precision"],
  },
  {
    id: "gear-006",
    slug: "wera-kraftform-screwdriver-set",
    name: "Wera Kraftform Screwdriver Set",
    category: "Gear",
    price: 72,
    currency: "SGD",
    description:
      "Ergonomic multi-component handles shaped by decades of German obsession with the turning of screws. Anti-roll, hard-tipped perfection.",
    editorialNote:
      "Wera handles feel like they were molded around your hand specifically. Every screwdriver you owned before this set was just practice.",
    image: "https://picsum.photos/seed/wera-kraftform-screwdriver-set/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Wera%20Kraftform%20Screwdriver%20Set",
      shopee: "https://shopee.sg/search?keyword=Wera%20Kraftform%20Screwdriver%20Set",
    },
    featured: true,
    tags: ["screwdriver", "precision", "german"],
  },
  {
    id: "gear-007",
    slug: "makita-18v-impact-driver",
    name: "Makita 18V Impact Driver",
    category: "Gear",
    price: 199,
    currency: "SGD",
    description:
      "Compact, brushless, and ruthlessly efficient. Makita's 18V platform delivers torque that belies its size and a battery ecosystem that never quits.",
    editorialNote:
      "The teal terror. Makita's impact driver sinks lag bolts like they owe it money. Compact enough for tight spaces, powerful enough for everything else.",
    image: "https://picsum.photos/seed/makita-18v-impact-driver/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Makita%2018V%20Impact%20Driver",
      shopee: "https://shopee.sg/search?keyword=Makita%2018V%20Impact%20Driver",
    },
    featured: false,
    tags: ["power-tool", "driver", "cordless"],
  },
  {
    id: "gear-008",
    slug: "benchmade-bugout-535",
    name: "Benchmade Bugout 535",
    category: "Gear",
    price: 185,
    currency: "SGD",
    description:
      "Under two ounces of CPM-S30V steel on an AXIS lock that flicks open with surgical authority. The knife that vanishes in your pocket and appears when needed.",
    editorialNote:
      "Benchmade built the Bugout for people who forget they are carrying a knife -- until the moment they need one. It is almost irresponsibly light.",
    image: "https://picsum.photos/seed/benchmade-bugout-535/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Benchmade%20Bugout%20535",
      shopee: "https://shopee.sg/search?keyword=Benchmade%20Bugout%20535",
    },
    featured: false,
    tags: ["knife", "edc", "lightweight"],
  },
  {
    id: "gear-009",
    slug: "gerber-dime-multi-tool",
    name: "Gerber Dime Multi-Tool",
    category: "Gear",
    price: 32,
    currency: "SGD",
    description:
      "Ten tools crammed into a package smaller than your thumb drive. The Dime clips to your keychain and punches well above its weight class.",
    editorialNote:
      "The Dime is proof that big utility comes in small packages. A bottle opener, pliers, and blade that live on your keys without complaint.",
    image: "https://picsum.photos/seed/gerber-dime-multi-tool/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Gerber%20Dime%20Multi-Tool",
      shopee: "https://shopee.sg/search?keyword=Gerber%20Dime%20Multi-Tool",
    },
    featured: false,
    tags: ["multi-tool", "compact", "keychain"],
  },

  // ─────────────────────────────────────────────
  // STYLE
  // ─────────────────────────────────────────────
  {
    id: "style-001",
    slug: "casio-g-shock-ga-2100-casioak",
    name: "Casio G-Shock GA-2100 CasiOak",
    category: "Style",
    price: 159,
    currency: "SGD",
    description:
      "The octagonal bezel that launched a thousand mod kits. Thin enough to slide under a cuff, tough enough to survive anything you throw at it.",
    editorialNote:
      "Casio accidentally created a cultural icon. The CasiOak blends Royal Oak DNA with G-Shock indestructibility at a price that makes luxury watches nervous.",
    image: "https://picsum.photos/seed/casio-g-shock-ga-2100-casioak/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Casio%20G-Shock%20GA-2100%20CasiOak",
      shopee: "https://shopee.sg/search?keyword=Casio%20G-Shock%20GA-2100%20CasiOak",
    },
    featured: true,
    tags: ["watch", "g-shock", "minimal"],
  },
  {
    id: "style-002",
    slug: "herschel-charlie-cardholder",
    name: "Herschel Charlie Cardholder",
    category: "Style",
    price: 35,
    currency: "SGD",
    description:
      "A slim-profile cardholder that forces you to carry only what matters. Signature striped liner, minimal footprint, maximum intent.",
    editorialNote:
      "The Charlie is a philosophy disguised as a wallet. Carry less, move faster. Three card slots and a center pocket are all you actually need.",
    image: "https://picsum.photos/seed/herschel-charlie-cardholder/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Herschel%20Charlie%20Cardholder",
      shopee: "https://shopee.sg/search?keyword=Herschel%20Charlie%20Cardholder",
    },
    featured: true,
    tags: ["wallet", "cardholder", "minimal"],
  },
  {
    id: "style-003",
    slug: "ray-ban-wayfarer-classic",
    name: "Ray-Ban Wayfarer Classic",
    category: "Style",
    price: 198,
    currency: "SGD",
    description:
      "The frame that defined cool in 1956 and has never stopped. Worn by rebels, presidents, and everyone worth remembering in between.",
    editorialNote:
      "Some things transcend trend. The Wayfarer is not a style choice -- it is a default setting for people who understand that simplicity is the ultimate statement.",
    image: "https://picsum.photos/seed/ray-ban-wayfarer-classic/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Ray-Ban%20Wayfarer%20Classic",
      shopee: "https://shopee.sg/search?keyword=Ray-Ban%20Wayfarer%20Classic",
    },
    featured: true,
    tags: ["sunglasses", "iconic", "uv-protection"],
  },
  {
    id: "style-004",
    slug: "bellroy-note-sleeve-wallet",
    name: "Bellroy Note Sleeve Wallet",
    category: "Style",
    price: 99,
    currency: "SGD",
    description:
      "Environmentally certified leather, RFID protection, and a pull-tab that fans your cards like a deck of possibilities. Slim even when full.",
    editorialNote:
      "Bellroy solved the fat wallet problem years ago and somehow keeps refining the answer. The Note Sleeve is what happens when design thinking meets your back pocket.",
    image: "https://picsum.photos/seed/bellroy-note-sleeve-wallet/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Bellroy%20Note%20Sleeve%20Wallet",
      shopee: "https://shopee.sg/search?keyword=Bellroy%20Note%20Sleeve%20Wallet",
    },
    featured: true,
    tags: ["wallet", "leather", "rfid"],
  },
  {
    id: "style-005",
    slug: "seiko-presage-cocktail-time",
    name: "Seiko Presage Cocktail Time",
    category: "Style",
    price: 420,
    currency: "SGD",
    description:
      "A sunburst dial inspired by the shimmer of a cocktail's surface. Japanese automatic movement meets bartender-level artistry on your wrist.",
    editorialNote:
      "The Cocktail Time proves that Seiko punches in a weight class far above its price. The dial alone would justify twice the cost. The movement is just showing off.",
    image: "https://picsum.photos/seed/seiko-presage-cocktail-time/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Seiko%20Presage%20Cocktail%20Time",
      shopee: "https://shopee.sg/search?keyword=Seiko%20Presage%20Cocktail%20Time",
    },
    featured: true,
    tags: ["watch", "automatic", "dress"],
  },
  {
    id: "style-006",
    slug: "carhartt-wip-anglistic-beanie",
    name: "Carhartt WIP Anglistic Beanie",
    category: "Style",
    price: 45,
    currency: "SGD",
    description:
      "Lambswool-blend knit with a flecked texture that nods to workwear roots while fitting squarely in the fashion lane. Warm, understated, correct.",
    editorialNote:
      "Carhartt WIP took the beanie off the construction site and onto the street without losing an ounce of credibility. The Anglistic earns its place every winter.",
    image: "https://picsum.photos/seed/carhartt-wip-anglistic-beanie/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Carhartt%20WIP%20Anglistic%20Beanie",
      shopee: "https://shopee.sg/search?keyword=Carhartt%20WIP%20Anglistic%20Beanie",
    },
    featured: true,
    tags: ["beanie", "wool", "winter"],
  },
  {
    id: "style-007",
    slug: "filson-original-briefcase",
    name: "Filson Original Briefcase",
    category: "Style",
    price: 325,
    currency: "SGD",
    description:
      "Rugged twill and bridle leather built to outlast your career. The Original Briefcase ages like whiskey -- better with every year and every scar.",
    editorialNote:
      "Filson has been making this bag since before your company existed, and it will still look good long after. Heritage is not a marketing word here -- it is a guarantee.",
    image: "https://picsum.photos/seed/filson-original-briefcase/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Filson%20Original%20Briefcase",
      shopee: "https://shopee.sg/search?keyword=Filson%20Original%20Briefcase",
    },
    featured: false,
    tags: ["bag", "briefcase", "heritage"],
  },
  {
    id: "style-008",
    slug: "nixon-regulus-watch",
    name: "Nixon Regulus Watch",
    category: "Style",
    price: 125,
    currency: "SGD",
    description:
      "A digital watch forged from a single custom stainless steel module, tested to military spec. Stealth mode kills the display at will.",
    editorialNote:
      "Nixon built the Regulus with special forces input, and it shows. The silent stealth mode alone makes this the most tactically aware watch under two hundred dollars.",
    image: "https://picsum.photos/seed/nixon-regulus-watch/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Nixon%20Regulus%20Watch",
      shopee: "https://shopee.sg/search?keyword=Nixon%20Regulus%20Watch",
    },
    featured: false,
    tags: ["watch", "digital", "tactical"],
  },
  {
    id: "style-009",
    slug: "bellroy-sling-bag",
    name: "Bellroy Sling Bag",
    category: "Style",
    price: 109,
    currency: "SGD",
    description:
      "A crossbody sling that carries your daily essentials in a low-profile, water-resistant shell. Quick-access zip and magnetic closure keep things tight.",
    editorialNote:
      "The sling bag grew up. Bellroy ditched the fanny-pack stigma and built something you actually want to wear. Clean lines, smart pockets, zero apologies.",
    image: "https://picsum.photos/seed/bellroy-sling-bag/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Bellroy%20Sling%20Bag",
      shopee: "https://shopee.sg/search?keyword=Bellroy%20Sling%20Bag",
    },
    featured: false,
    tags: ["bag", "sling", "crossbody"],
  },

  // ─────────────────────────────────────────────
  // LIVING
  // ─────────────────────────────────────────────
  {
    id: "living-001",
    slug: "fellow-stagg-ekg-kettle",
    name: "Fellow Stagg EKG Kettle",
    category: "Living",
    price: 195,
    currency: "SGD",
    description:
      "Variable temperature control, a counterbalanced handle, and a pour spout so precise it turns your morning coffee into a ritual. Form follows function into the kitchen.",
    editorialNote:
      "The Stagg EKG sits on your counter like a sculpture that happens to boil water. Fellow turned the kettle into a design object without sacrificing a single degree of precision.",
    image: "https://picsum.photos/seed/fellow-stagg-ekg-kettle/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Fellow%20Stagg%20EKG%20Kettle",
      shopee: "https://shopee.sg/search?keyword=Fellow%20Stagg%20EKG%20Kettle",
    },
    featured: true,
    tags: ["kettle", "pour-over", "precision"],
  },
  {
    id: "living-002",
    slug: "sonos-era-100-speaker",
    name: "Sonos Era 100 Speaker",
    category: "Living",
    price: 349,
    currency: "SGD",
    description:
      "Room-filling stereo sound from a speaker smaller than a hardcover book. Trueplay tuning adapts to your space so you never have to.",
    editorialNote:
      "Sonos redefined what a bookshelf speaker should be. The Era 100 fills rooms the way good architecture fills a city block -- completely and without apology.",
    image: "https://picsum.photos/seed/sonos-era-100-speaker/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Sonos%20Era%20100%20Speaker",
      shopee: "https://shopee.sg/search?keyword=Sonos%20Era%20100%20Speaker",
    },
    featured: true,
    tags: ["speaker", "wireless", "smart"],
  },
  {
    id: "living-003",
    slug: "aesop-reverence-hand-wash",
    name: "Aesop Reverence Hand Wash",
    category: "Living",
    price: 47,
    currency: "SGD",
    description:
      "A botanical paste-format cleanser with fine pumice that exfoliates as it washes. Petitgrain, vetiver, and bergamot leave your hands smelling like intention.",
    editorialNote:
      "Aesop turned handwashing into a sensory experience. The Reverence is the reason guests spend too long in your bathroom. That is a compliment.",
    image: "https://picsum.photos/seed/aesop-reverence-hand-wash/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Aesop%20Reverence%20Hand%20Wash",
      shopee: "https://shopee.sg/search?keyword=Aesop%20Reverence%20Hand%20Wash",
    },
    featured: true,
    tags: ["grooming", "hand-wash", "botanical"],
  },
  {
    id: "living-004",
    slug: "le-creuset-dutch-oven-5-5qt",
    name: "Le Creuset Dutch Oven 5.5Qt",
    category: "Living",
    price: 380,
    currency: "SGD",
    description:
      "Enameled cast iron that distributes heat with the patience of a French grandmother. From stovetop to oven to table, the Dutch Oven does it all in one vessel.",
    editorialNote:
      "A Le Creuset is not a purchase -- it is an inheritance. This Dutch Oven will braise, bake, and stew through decades of dinner parties without ever losing its edge.",
    image: "https://picsum.photos/seed/le-creuset-dutch-oven-5-5qt/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Le%20Creuset%20Dutch%20Oven%205.5Qt",
      shopee: "https://shopee.sg/search?keyword=Le%20Creuset%20Dutch%20Oven%205.5Qt",
    },
    featured: true,
    tags: ["cookware", "dutch-oven", "cast-iron"],
  },
  {
    id: "living-005",
    slug: "dyson-pure-cool-air-purifier",
    name: "Dyson Pure Cool Air Purifier",
    category: "Living",
    price: 549,
    currency: "SGD",
    description:
      "HEPA filtration meets bladeless airflow in a tower that reports your air quality in real time. Captures 99.97% of particles while looking like it belongs in a gallery.",
    editorialNote:
      "Dyson made clean air visible. The Pure Cool does not just purify -- it tells you exactly what it is catching, which will make you very glad you bought it.",
    image: "https://picsum.photos/seed/dyson-pure-cool-air-purifier/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Dyson%20Pure%20Cool%20Air%20Purifier",
      shopee: "https://shopee.sg/search?keyword=Dyson%20Pure%20Cool%20Air%20Purifier",
    },
    featured: true,
    tags: ["air-purifier", "smart", "hepa"],
  },
  {
    id: "living-006",
    slug: "chemex-classic-8-cup",
    name: "Chemex Classic 8-Cup",
    category: "Living",
    price: 48,
    currency: "SGD",
    description:
      "Borosilicate glass, a wooden collar, and a leather tie -- the Chemex has not changed since 1941 because perfection does not need a revision.",
    editorialNote:
      "Sitting in the permanent collection at MoMA, the Chemex brews coffee the way a cathedral holds silence. Slowly, beautifully, and worth every second of the wait.",
    image: "https://picsum.photos/seed/chemex-classic-8-cup/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Chemex%20Classic%208-Cup",
      shopee: "https://shopee.sg/search?keyword=Chemex%20Classic%208-Cup",
    },
    featured: true,
    tags: ["coffee", "pour-over", "glass"],
  },
  {
    id: "living-007",
    slug: "muji-aroma-diffuser",
    name: "Muji Aroma Diffuser",
    category: "Living",
    price: 65,
    currency: "SGD",
    description:
      "Ultrasonic mist dispersal in a minimal, matte-finished form. Add a few drops of essential oil and let the room shift from ordinary to intentional.",
    editorialNote:
      "Muji stripped the diffuser down to its essence -- which is ironic, given that its job is to disperse them. Quiet, beautiful, and impossibly understated.",
    image: "https://picsum.photos/seed/muji-aroma-diffuser/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Muji%20Aroma%20Diffuser",
      shopee: "https://shopee.sg/search?keyword=Muji%20Aroma%20Diffuser",
    },
    featured: false,
    tags: ["diffuser", "aroma", "minimal"],
  },
  {
    id: "living-008",
    slug: "nespresso-vertuo-next",
    name: "Nespresso Vertuo Next",
    category: "Living",
    price: 199,
    currency: "SGD",
    description:
      "Centrifusion technology spins each capsule at 7,000 RPM to extract a crema-topped cup tuned to perfection. From espresso to full mug in a single machine.",
    editorialNote:
      "The Vertuo Next is for the person who wants great coffee without becoming a person who talks about great coffee. Press a button, get perfection, move on with your day.",
    image: "https://picsum.photos/seed/nespresso-vertuo-next/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Nespresso%20Vertuo%20Next",
      shopee: "https://shopee.sg/search?keyword=Nespresso%20Vertuo%20Next",
    },
    featured: false,
    tags: ["coffee", "espresso", "capsule"],
  },
  {
    id: "living-009",
    slug: "philips-hue-starter-kit",
    name: "Philips Hue Starter Kit",
    category: "Living",
    price: 189,
    currency: "SGD",
    description:
      "Sixteen million colors and every shade of white, controlled from your phone, voice, or automation. The starter kit includes the Bridge and three bulbs to begin the transformation.",
    editorialNote:
      "Philips Hue does not just change your lighting -- it changes your relationship with the rooms you live in. Warning: you will never be satisfied with a light switch again.",
    image: "https://picsum.photos/seed/philips-hue-starter-kit/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Philips%20Hue%20Starter%20Kit",
      shopee: "https://shopee.sg/search?keyword=Philips%20Hue%20Starter%20Kit",
    },
    featured: false,
    tags: ["lighting", "smart", "rgb"],
  },

  // ─────────────────────────────────────────────
  // TECH
  // ─────────────────────────────────────────────
  {
    id: "tech-001",
    slug: "sony-wh-1000xm5-headphones",
    name: "Sony WH-1000XM5 Headphones",
    category: "Tech",
    price: 399,
    currency: "SGD",
    description:
      "Eight microphones and two processors conspire to erase the world around you. Thirty hours of battery, multipoint connection, and sound so resolving it feels unfair.",
    editorialNote:
      "Sony's noise cancellation is no longer a feature -- it is a superpower. The XM5 turns a crowded train into a private listening room. Accept no substitutes.",
    image: "https://picsum.photos/seed/sony-wh-1000xm5-headphones/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Sony%20WH-1000XM5%20Headphones",
      shopee: "https://shopee.sg/search?keyword=Sony%20WH-1000XM5%20Headphones",
    },
    featured: true,
    tags: ["headphones", "noise-cancelling", "wireless"],
  },
  {
    id: "tech-002",
    slug: "anker-737-power-bank-24k",
    name: "Anker 737 Power Bank 24K",
    category: "Tech",
    price: 110,
    currency: "SGD",
    description:
      "24,000mAh of portable power with 140W bi-directional USB-C. Charges a MacBook Pro, not just a phone. The digital display tracks every watt in real time.",
    editorialNote:
      "Anker packed enough juice to charge your laptop twice over and gave it a display so you know exactly where you stand. Outlet anxiety, deleted.",
    image: "https://picsum.photos/seed/anker-737-power-bank-24k/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Anker%20737%20Power%20Bank%2024K",
      shopee: "https://shopee.sg/search?keyword=Anker%20737%20Power%20Bank%2024K",
    },
    featured: true,
    tags: ["power-bank", "usb-c", "portable"],
  },
  {
    id: "tech-003",
    slug: "logitech-mx-master-3s-mouse",
    name: "Logitech MX Master 3S Mouse",
    category: "Tech",
    price: 129,
    currency: "SGD",
    description:
      "An electromagnetic scroll wheel that shifts from ratchet to free-spin, an 8K DPI sensor that tracks on glass, and a shape sculpted for marathon work sessions.",
    editorialNote:
      "The MX Master 3S is the mouse equivalent of a Herman Miller chair -- once you use it, everything else feels like a compromise. Your hand will thank you.",
    image: "https://picsum.photos/seed/logitech-mx-master-3s-mouse/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Logitech%20MX%20Master%203S%20Mouse",
      shopee: "https://shopee.sg/search?keyword=Logitech%20MX%20Master%203S%20Mouse",
    },
    featured: true,
    tags: ["mouse", "ergonomic", "wireless"],
  },
  {
    id: "tech-004",
    slug: "samsung-t7-shield-ssd-2tb",
    name: "Samsung T7 Shield SSD 2TB",
    category: "Tech",
    price: 189,
    currency: "SGD",
    description:
      "IP65-rated, drop-resistant to three meters, and capable of 1,050MB/s transfers. Two terabytes of rugged, pocket-sized storage that refuses to die.",
    editorialNote:
      "Samsung wrapped enterprise-grade speed in a rubber armor shell and made it small enough to lose in your bag. Back up everything. Worry about nothing.",
    image: "https://picsum.photos/seed/samsung-t7-shield-ssd-2tb/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Samsung%20T7%20Shield%20SSD%202TB",
      shopee: "https://shopee.sg/search?keyword=Samsung%20T7%20Shield%20SSD%202TB",
    },
    featured: true,
    tags: ["ssd", "portable", "rugged"],
  },
  {
    id: "tech-005",
    slug: "apple-airtag-4-pack",
    name: "Apple AirTag 4-Pack",
    category: "Tech",
    price: 129,
    currency: "SGD",
    description:
      "Precision Finding powered by the U1 chip and a billion-device Find My network. Attach, forget, and find anything with sub-meter accuracy.",
    editorialNote:
      "The AirTag leverages the largest device network on earth to make losing things nearly impossible. Tag your keys, your bag, and your sanity.",
    image: "https://picsum.photos/seed/apple-airtag-4-pack/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Apple%20AirTag%204-Pack",
      shopee: "https://shopee.sg/search?keyword=Apple%20AirTag%204-Pack",
    },
    featured: true,
    tags: ["tracker", "bluetooth", "find-my"],
  },
  {
    id: "tech-006",
    slug: "keychron-q1-pro-keyboard",
    name: "Keychron Q1 Pro Keyboard",
    category: "Tech",
    price: 199,
    currency: "SGD",
    description:
      "Full aluminum CNC-machined body, hot-swappable switches, and gasket-mount typing feel that makes every keystroke an event. Wired or wireless, Mac or PC.",
    editorialNote:
      "Keychron democratized the custom keyboard. The Q1 Pro gives you endgame-tier build quality and sound without requiring a PhD in soldering.",
    image: "https://picsum.photos/seed/keychron-q1-pro-keyboard/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Keychron%20Q1%20Pro%20Keyboard",
      shopee: "https://shopee.sg/search?keyword=Keychron%20Q1%20Pro%20Keyboard",
    },
    featured: true,
    tags: ["keyboard", "mechanical", "wireless"],
  },
  {
    id: "tech-007",
    slug: "razer-kiyo-pro-webcam",
    name: "Razer Kiyo Pro Webcam",
    category: "Tech",
    price: 149,
    currency: "SGD",
    description:
      "An adaptive light sensor with HDR that adjusts to any environment. 1080p at 60fps with a wide-angle lens that makes you look like you invested in a proper setup.",
    editorialNote:
      "Razer built a webcam that makes laptop cameras look like security footage. The Kiyo Pro adapts to bad lighting so you never have to apologize for your face on a call.",
    image: "https://picsum.photos/seed/razer-kiyo-pro-webcam/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Razer%20Kiyo%20Pro%20Webcam",
      shopee: "https://shopee.sg/search?keyword=Razer%20Kiyo%20Pro%20Webcam",
    },
    featured: false,
    tags: ["webcam", "streaming", "hdr"],
  },
  {
    id: "tech-008",
    slug: "caldigit-ts4-thunderbolt-hub",
    name: "CalDigit TS4 Thunderbolt Hub",
    category: "Tech",
    price: 399,
    currency: "SGD",
    description:
      "Eighteen ports including Thunderbolt 4, USB-A, DisplayPort, SD card, and 2.5GbE -- all through a single cable. The dock that ends the dongle era.",
    editorialNote:
      "CalDigit built the dock that every other dock wishes it was. One cable in, eighteen ports out. Your desk just got cleaner and your setup just got serious.",
    image: "https://picsum.photos/seed/caldigit-ts4-thunderbolt-hub/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=CalDigit%20TS4%20Thunderbolt%20Hub",
      shopee: "https://shopee.sg/search?keyword=CalDigit%20TS4%20Thunderbolt%20Hub",
    },
    featured: false,
    tags: ["hub", "thunderbolt", "dock"],
  },
  {
    id: "tech-009",
    slug: "elgato-stream-deck-mk2",
    name: "Elgato Stream Deck MK2",
    category: "Tech",
    price: 149,
    currency: "SGD",
    description:
      "Fifteen customizable LCD keys that trigger actions, switch scenes, launch apps, and control smart devices. A physical interface for your digital life.",
    editorialNote:
      "The Stream Deck started as a streaming tool and became a productivity weapon. Assign any action to any key and watch your workflow compress by hours.",
    image: "https://picsum.photos/seed/elgato-stream-deck-mk2/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Elgato%20Stream%20Deck%20MK2",
      shopee: "https://shopee.sg/search?keyword=Elgato%20Stream%20Deck%20MK2",
    },
    featured: false,
    tags: ["stream-deck", "macro", "productivity"],
  },

  // ─────────────────────────────────────────────
  // EDC
  // ─────────────────────────────────────────────
  {
    id: "edc-001",
    slug: "olight-baton-3-pro-flashlight",
    name: "Olight Baton 3 Pro Flashlight",
    category: "EDC",
    price: 89,
    currency: "SGD",
    description:
      "1,500 lumens in an aluminum body that fits in your palm. Magnetic tail cap, proximity sensor, and USB-C charging make this the last flashlight you will ever buy.",
    editorialNote:
      "Olight turned the flashlight into a pocket cannon. The Baton 3 Pro throws a wall of light that turns midnight into midday, then charges via the same cable as your phone.",
    image: "https://picsum.photos/seed/olight-baton-3-pro-flashlight/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Olight%20Baton%203%20Pro%20Flashlight",
      shopee: "https://shopee.sg/search?keyword=Olight%20Baton%203%20Pro%20Flashlight",
    },
    featured: true,
    tags: ["flashlight", "rechargeable", "compact"],
  },
  {
    id: "edc-002",
    slug: "fisher-space-pen-bullet",
    name: "Fisher Space Pen Bullet",
    category: "EDC",
    price: 32,
    currency: "SGD",
    description:
      "A pressurized cartridge that writes in zero gravity, underwater, upside down, and in extreme temperatures. Machined brass or chrome, compact enough to disappear in a pocket.",
    editorialNote:
      "NASA chose this pen for a reason. The Bullet writes in conditions that would make every other pen quit, and it posts to full size with a satisfying click.",
    image: "https://picsum.photos/seed/fisher-space-pen-bullet/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Fisher%20Space%20Pen%20Bullet",
      shopee: "https://shopee.sg/search?keyword=Fisher%20Space%20Pen%20Bullet",
    },
    featured: true,
    tags: ["pen", "space-pen", "compact"],
  },
  {
    id: "edc-003",
    slug: "ridge-titanium-wallet",
    name: "Ridge Titanium Wallet",
    category: "EDC",
    price: 125,
    currency: "SGD",
    description:
      "Two titanium plates held together by an elastic band, blocking RFID and holding up to twelve cards. No stitching, no leather, no bulk -- just engineered minimalism.",
    editorialNote:
      "The Ridge made the traditional wallet feel ancient. Titanium, RFID-blocking, and a profile thinner than your phone. Once you switch, your old wallet looks like a brick.",
    image: "https://picsum.photos/seed/ridge-titanium-wallet/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Ridge%20Titanium%20Wallet",
      shopee: "https://shopee.sg/search?keyword=Ridge%20Titanium%20Wallet",
    },
    featured: true,
    tags: ["wallet", "titanium", "rfid"],
  },
  {
    id: "edc-004",
    slug: "tile-pro-bluetooth-tracker",
    name: "Tile Pro Bluetooth Tracker",
    category: "EDC",
    price: 35,
    currency: "SGD",
    description:
      "The loudest Tile with the longest range -- 400 feet of Bluetooth connectivity and a ring loud enough to find your keys under a couch cushion fortress.",
    editorialNote:
      "The Tile Pro is insurance against your own absent-mindedness. Clip it to anything you cannot afford to lose and let the network do the remembering for you.",
    image: "https://picsum.photos/seed/tile-pro-bluetooth-tracker/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Tile%20Pro%20Bluetooth%20Tracker",
      shopee: "https://shopee.sg/search?keyword=Tile%20Pro%20Bluetooth%20Tracker",
    },
    featured: true,
    tags: ["tracker", "bluetooth", "loud"],
  },
  {
    id: "edc-005",
    slug: "nite-ize-doohickey",
    name: "Nite Ize DoohicKey",
    category: "EDC",
    price: 8,
    currency: "SGD",
    description:
      "A stainless steel keychain tool that pries, screws, opens bottles, and tightens bolts. Six tools, zero weight, and a price that makes not buying it inexcusable.",
    editorialNote:
      "Eight dollars buys you a bottle opener, flat screwdriver, box cutter, wrench, ruler, and carabiner clip. The DoohicKey is the best value proposition in EDC.",
    image: "https://picsum.photos/seed/nite-ize-doohickey/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Nite%20Ize%20DoohicKey",
      shopee: "https://shopee.sg/search?keyword=Nite%20Ize%20DoohicKey",
    },
    featured: true,
    tags: ["keychain", "multi-tool", "stainless"],
  },
  {
    id: "edc-006",
    slug: "keysmart-pro-key-organizer",
    name: "KeySmart Pro Key Organizer",
    category: "EDC",
    price: 45,
    currency: "SGD",
    description:
      "A Swiss Army-style key holder with built-in Tile tracking. Holds up to ten keys in a silent, compact frame that ends the jingle forever.",
    editorialNote:
      "KeySmart solved the key problem by treating keys like tools in a handle. Add Tile tracking and you have a keychain that is smarter than most of your other gear.",
    image: "https://picsum.photos/seed/keysmart-pro-key-organizer/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=KeySmart%20Pro%20Key%20Organizer",
      shopee: "https://shopee.sg/search?keyword=KeySmart%20Pro%20Key%20Organizer",
    },
    featured: true,
    tags: ["key-organizer", "tile", "compact"],
  },
  {
    id: "edc-007",
    slug: "bellroy-key-cover-plus",
    name: "Bellroy Key Cover Plus",
    category: "EDC",
    price: 55,
    currency: "SGD",
    description:
      "Premium leather wraps your keys in silence and structure. A magnetic closure keeps everything flush, while the loop holds up to eight keys without the bulk.",
    editorialNote:
      "Bellroy did for keys what they did for wallets -- made them civilized. The Key Cover Plus turns a jangling mess into a sleek leather package.",
    image: "https://picsum.photos/seed/bellroy-key-cover-plus/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Bellroy%20Key%20Cover%20Plus",
      shopee: "https://shopee.sg/search?keyword=Bellroy%20Key%20Cover%20Plus",
    },
    featured: false,
    tags: ["key-cover", "leather", "minimal"],
  },
  {
    id: "edc-008",
    slug: "zippo-matte-black-lighter",
    name: "Zippo Matte Black Lighter",
    category: "EDC",
    price: 22,
    currency: "SGD",
    description:
      "A windproof flame in a matte black steel case that has not fundamentally changed since 1932. Lifetime guarantee, iconic click, and a soul forged in Bradford, PA.",
    editorialNote:
      "Every Zippo comes with a lifetime guarantee because Zippo knows it will outlast you. The matte black finish adds stealth to the most recognizable lighter on earth.",
    image: "https://picsum.photos/seed/zippo-matte-black-lighter/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Zippo%20Matte%20Black%20Lighter",
      shopee: "https://shopee.sg/search?keyword=Zippo%20Matte%20Black%20Lighter",
    },
    featured: false,
    tags: ["lighter", "windproof", "classic"],
  },
  {
    id: "edc-009",
    slug: "leatherman-skeletool-cx",
    name: "Leatherman Skeletool CX",
    category: "EDC",
    price: 115,
    currency: "SGD",
    description:
      "A carbon fiber and stainless steel multi-tool stripped to seven essential functions. The skeletonized frame shaves weight without sacrificing capability.",
    editorialNote:
      "Leatherman asked what happens when you remove everything unnecessary from a multi-tool. The Skeletool CX is the answer -- five ounces of pure, distilled utility.",
    image: "https://picsum.photos/seed/leatherman-skeletool-cx/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Leatherman%20Skeletool%20CX",
      shopee: "https://shopee.sg/search?keyword=Leatherman%20Skeletool%20CX",
    },
    featured: false,
    tags: ["multi-tool", "carbon-fiber", "lightweight"],
  },

  // ─────────────────────────────────────────────
  // OUTDOOR
  // ─────────────────────────────────────────────
  {
    id: "outdoor-001",
    slug: "yeti-rambler-36oz-bottle",
    name: "Yeti Rambler 36oz Bottle",
    category: "Outdoor",
    price: 55,
    currency: "SGD",
    description:
      "Double-wall vacuum insulation keeps ice frozen for days and coffee hot for hours. The 18/8 stainless steel body shrugs off dents, drops, and the dishwasher.",
    editorialNote:
      "Yeti built a bottle that is practically indestructible and keeps your water colder than the glacier it came from. Over-engineered in the best possible way.",
    image: "https://picsum.photos/seed/yeti-rambler-36oz-bottle/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Yeti%20Rambler%2036oz%20Bottle",
      shopee: "https://shopee.sg/search?keyword=Yeti%20Rambler%2036oz%20Bottle",
    },
    featured: true,
    tags: ["bottle", "insulated", "stainless"],
  },
  {
    id: "outdoor-002",
    slug: "patagonia-black-hole-duffel-55l",
    name: "Patagonia Black Hole Duffel 55L",
    category: "Outdoor",
    price: 169,
    currency: "SGD",
    description:
      "Recycled ripstop nylon with a TPU laminate that laughs at rain. Converts from duffel to backpack, swallows a week's worth of gear, and cleans up with a hose.",
    editorialNote:
      "The Black Hole is the duffel that has seen every airport, every trailhead, and every surf break on the planet. Patagonia built it from recycled materials because the adventure should not cost the earth.",
    image: "https://picsum.photos/seed/patagonia-black-hole-duffel-55l/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Patagonia%20Black%20Hole%20Duffel%2055L",
      shopee: "https://shopee.sg/search?keyword=Patagonia%20Black%20Hole%20Duffel%2055L",
    },
    featured: true,
    tags: ["duffel", "waterproof", "travel"],
  },
  {
    id: "outdoor-003",
    slug: "osprey-atmos-ag-65-pack",
    name: "Osprey Atmos AG 65 Pack",
    category: "Outdoor",
    price: 310,
    currency: "SGD",
    description:
      "Anti-Gravity suspension wraps your back in a seamless mesh that distributes weight like nothing else on the trail. Sixty-five liters of space, zero hot spots.",
    editorialNote:
      "Osprey's Anti-Gravity system makes heavy loads feel personal. The Atmos AG 65 carries five days of backcountry gear like it is carrying a grudge -- relentlessly and without complaint.",
    image: "https://picsum.photos/seed/osprey-atmos-ag-65-pack/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Osprey%20Atmos%20AG%2065%20Pack",
      shopee: "https://shopee.sg/search?keyword=Osprey%20Atmos%20AG%2065%20Pack",
    },
    featured: true,
    tags: ["backpack", "hiking", "anti-gravity"],
  },
  {
    id: "outdoor-004",
    slug: "msr-pocketrocket-2-stove",
    name: "MSR PocketRocket 2 Stove",
    category: "Outdoor",
    price: 55,
    currency: "SGD",
    description:
      "Seventy-three grams of ultralight cooking power that boils a liter in three and a half minutes. Folds to the size of your fist and sounds like a tiny jet engine.",
    editorialNote:
      "MSR distilled the camp stove to its absolute minimum. The PocketRocket 2 weighs less than your phone and cooks faster than your patience at the end of a long day on the trail.",
    image: "https://picsum.photos/seed/msr-pocketrocket-2-stove/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=MSR%20PocketRocket%202%20Stove",
      shopee: "https://shopee.sg/search?keyword=MSR%20PocketRocket%202%20Stove",
    },
    featured: true,
    tags: ["stove", "ultralight", "camping"],
  },
  {
    id: "outdoor-005",
    slug: "goal-zero-venture-35-solar",
    name: "Goal Zero Venture 35 Solar",
    category: "Outdoor",
    price: 89,
    currency: "SGD",
    description:
      "A rugged, waterproof power bank that pairs with Goal Zero solar panels to keep your devices alive off-grid. IP67-rated and built for basecamp abuse.",
    editorialNote:
      "Goal Zero built a power bank that does not care about rain, dust, or drops. Pair it with a Nomad panel and you have electricity anywhere the sun reaches.",
    image: "https://picsum.photos/seed/goal-zero-venture-35-solar/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Goal%20Zero%20Venture%2035%20Solar",
      shopee: "https://shopee.sg/search?keyword=Goal%20Zero%20Venture%2035%20Solar",
    },
    featured: true,
    tags: ["solar", "charger", "waterproof"],
  },
  {
    id: "outdoor-006",
    slug: "garmin-inreach-mini-2",
    name: "Garmin inReach Mini 2",
    category: "Outdoor",
    price: 399,
    currency: "SGD",
    description:
      "Two-way satellite messaging, SOS with 24/7 monitoring, GPS tracking, and weather forecasts -- all in a device smaller than a deck of cards. Your lifeline beyond cell coverage.",
    editorialNote:
      "The inReach Mini 2 is not a gadget -- it is a safety net with global satellite coverage. When the trail goes dark and the signal dies, this keeps you connected to rescue.",
    image: "https://picsum.photos/seed/garmin-inreach-mini-2/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Garmin%20inReach%20Mini%202",
      shopee: "https://shopee.sg/search?keyword=Garmin%20inReach%20Mini%202",
    },
    featured: true,
    tags: ["gps", "satellite", "sos"],
  },
  {
    id: "outdoor-007",
    slug: "sea-to-summit-ultralight-hammock",
    name: "Sea to Summit Ultralight Hammock",
    category: "Outdoor",
    price: 99,
    currency: "SGD",
    description:
      "A single-person hammock that packs down to the size of a grapefruit and weighs barely 200 grams. Suspended relaxation, anywhere two trees stand.",
    editorialNote:
      "Sea to Summit made rest weightless. The Ultralight Hammock disappears into your pack and reappears as the best seat at camp. Two trees and five minutes -- that is all you need.",
    image: "https://picsum.photos/seed/sea-to-summit-ultralight-hammock/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Sea%20to%20Summit%20Ultralight%20Hammock",
      shopee: "https://shopee.sg/search?keyword=Sea%20to%20Summit%20Ultralight%20Hammock",
    },
    featured: false,
    tags: ["hammock", "ultralight", "camping"],
  },
  {
    id: "outdoor-008",
    slug: "black-diamond-spot-400-headlamp",
    name: "Black Diamond Spot 400 Headlamp",
    category: "Outdoor",
    price: 50,
    currency: "SGD",
    description:
      "400 lumens of waterproof, dustproof illumination with red night vision mode and a PowerTap dimming interface. The headlamp that hikers, climbers, and runners all agree on.",
    editorialNote:
      "Black Diamond nailed the headlamp formula. The Spot 400 is bright enough for trail running in the dark and smart enough to preserve your night vision when you need it.",
    image: "https://picsum.photos/seed/black-diamond-spot-400-headlamp/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Black%20Diamond%20Spot%20400%20Headlamp",
      shopee: "https://shopee.sg/search?keyword=Black%20Diamond%20Spot%20400%20Headlamp",
    },
    featured: false,
    tags: ["headlamp", "waterproof", "bright"],
  },
  {
    id: "outdoor-009",
    slug: "stanley-classic-vacuum-bottle-1-5l",
    name: "Stanley Classic Vacuum Bottle 1.5L",
    category: "Outdoor",
    price: 55,
    currency: "SGD",
    description:
      "A hammertone green icon that has kept coffee hot and soup warm since 1913. Double-wall vacuum insulation, a leak-proof lid that doubles as a cup, and a lifetime of heritage.",
    editorialNote:
      "The Stanley Classic is the thermos your granddad used on job sites, and it still outperforms most modern alternatives. Some designs are born finished. This is one of them.",
    image: "https://picsum.photos/seed/stanley-classic-vacuum-bottle-1-5l/800/600",
    affiliateLinks: {
      lazada: "https://www.lazada.sg/catalog/?q=Stanley%20Classic%20Vacuum%20Bottle%201.5L",
      shopee: "https://shopee.sg/search?keyword=Stanley%20Classic%20Vacuum%20Bottle%201.5L",
    },
    featured: false,
    tags: ["bottle", "vacuum", "heritage"],
  },
];
