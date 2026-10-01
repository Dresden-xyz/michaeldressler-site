/**
 * Single source of truth for all site copy, links, and images.
 * Populated from CONTENT.md. Edit this file to change what the site shows;
 * sections with no content are automatically left out of the page and nav.
 */

export type SectionId =
  | "about"
  | "experience"
  | "speaking"
  | "photos"
  | "media"
  | "recognition"
  | "contact";

export type SocialKind = "linkedin" | "x" | "github" | "website";

export interface Social {
  kind: SocialKind;
  label: string;
  href: string;
}

export interface ImageAsset {
  /** Path under /public, e.g. "/images/hero.jpg" */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Position {
  title: string;
  dates: string;
  description?: string;
}

/** One company block. `positions` is most recent first; the first is the headline role. */
export interface Role {
  company: string;
  /** Overall span at the company, shown in the left column */
  dates: string;
  positions: Position[];
}

export interface Talk {
  /** Event or series name */
  event: string;
  /** Talk, panel, or session title. Omit when only the event is known. */
  title?: string;
  /** Free-form date shown as-is, e.g. "Oct 7, 2026" or "2026" */
  date: string;
  location?: string;
  href?: string;
}

/** A speaker or event graphic that features Michael, linked to its source post. */
export interface EventCard extends ImageAsset {
  caption: string;
  href?: string;
}

export interface Photo extends ImageAsset {
  caption?: string;
  /** CSS object-position for the grid tile crop, e.g. "50% 40%". Defaults to center. */
  focus?: string;
}

export interface MediaItem {
  title: string;
  outlet: string;
  date: string;
  href: string;
}

export interface Honor {
  title: string;
  issuer: string;
  year: string;
}

export interface SiteContent {
  /** Color scheme for the whole site. "dark" is near-black with off-white text. */
  theme: "light" | "dark";
  /** "grid" is the tiled gallery with a lightbox; "carousel" is the WebGL liquid-glass row. */
  galleryStyle: "grid" | "carousel";
  name: string;
  /** Short name shown in the nav */
  navName: string;
  /** Canonical origin, no trailing slash */
  siteUrl: string;
  title: string;
  description: string;
  /** X / Twitter handle used for Twitter card metadata */
  twitterHandle?: string;
  hero: {
    tagline: string;
    /** Wrap text in **double asterisks** to bold it */
    descriptor: string;
    tags: string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    photo: ImageAsset;
  };
  about: {
    heading: string;
    paragraphs: string[];
    stats: Stat[];
  };
  experience: Role[];
  speaking: {
    topics: string[];
    /** Upcoming appearances, soonest first */
    upcoming: Talk[];
    /** Past appearances, most recent first */
    talks: Talk[];
    /** Speaker cards and event graphics featuring Michael, most recent first */
    cards: EventCard[];
  };
  photos: Photo[];
  media: MediaItem[];
  recognition: Honor[];
  contact: {
    heading: string;
    blurb: string;
    email?: string;
    socials: Social[];
    links: { label: string; href: string }[];
  };
  footerLine: string;
  /** Section headings shown under the fixed uppercase labels. Edit freely. */
  headings: {
    experience: string;
    speaking: string;
    upcomingTalks: string;
    talks: string;
    eventCards: string;
    photos: string;
    media: string;
    recognition: string;
  };
}

export const site: SiteContent = {
  theme: "dark",
  galleryStyle: "carousel",
  name: "Michael A. Dressler",
  navName: "Michael Dressler",
  // TODO: replace with the final domain once chosen (CONTENT.md > Global > Final domain).
  siteUrl: "https://michaeldressler-site.vercel.app",
  title:
    "Michael Dressler — Head of Partner Success at 0G Labs | Decentralized AI & Web3 Infrastructure",
  description:
    "Head of Partner Success at 0G Labs. Ex-Chainlink Labs. Building partner success and ecosystem growth for decentralized AI and Web3 infrastructure.",
  twitterHandle: "@mdressler24",

  hero: {
    tagline: "Decentralized AI + Web3 Infrastructure",
    descriptor:
      "Head of Partner Success at **0G Labs**, leading partner success, ecosystem adoption, and post-integration growth across 0G's modular decentralized AI stack. Previously at Chainlink Labs, where he helped build the Ecosystem Growth team. Ecosystem developer on a mission to bring decentralized AI to production.",
    tags: [
      "Partner Success",
      "Ecosystem Growth",
      "Decentralized AI",
      "Web3 Infrastructure",
      "Go-to-Market",
      "Strategic Partnerships",
    ],
    primaryCta: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/michaeladressler/",
    },
    secondaryCta: { label: "@mdressler24", href: "https://x.com/mdressler24" },
    photo: {
      src: "/images/hero-centered.jpg",
      // Event identified from the stage backdrop in the photo; matches the ETHDenver talk below.
      alt: "Michael Dressler speaking on a panel at The Scaling Summit: House of AI, ETHDenver 2026",
      width: 1642,
      height: 1008,
    },
  },

  about: {
    heading: "Turning integrations into ecosystems",
    paragraphs: [
      "Michael Dressler is Head of Partner Success at 0G Labs, where he leads partner success, ecosystem adoption, and post-integration growth across 0G’s modular decentralized AI stack. Since joining 0G in 2025, he has worked closely with leading infrastructure providers, AI builders, and DeFi protocols, helping launch and scale the 0G L1 ecosystem through Mainnet and TGE with 100+ partner integrations live.",
      "Before 0G, Michael spent nearly four years at Chainlink Labs, progressing from Partnership Success Manager to Ecosystem Growth Lead. He helped build the Ecosystem Growth function and supported Web3 and AI companies from early-stage integration through scaled adoption. His work included developing market analysis and penetration frameworks that contributed to Chainlink achieving 95%+ market share by TVL across major blockchain ecosystems, including Ethereum, Polygon, Arbitrum, and BNB, while supporting an ecosystem securing more than $1 trillion in total value secured.",
      "Michael is also the founder of DCA Strategies LLC, an advisory practice focused on helping early-stage startups refine go-to-market strategy, partnerships, and ecosystem growth.",
      "He graduated cum laude from Monmouth University with a Bachelor of Arts in Communication and minors in Business Administration and Screen Studies. He is based in San Francisco.",
    ],
    stats: [
      { value: "10 yrs", label: "In crypto" },
      { value: "100+", label: "Partner integrations at 0G L1 launch" },
      { value: "400+", label: "Integrations across the 0G ecosystem" },
      { value: "95%+", label: "Chainlink market share by TVL across major chains" },
    ],
  },

  experience: [
    {
      company: "0G Labs",
      dates: "2025 — Present",
      positions: [
        {
          title: "Head of Partner Success",
          dates: "2025 — Present",
          description:
            "Leads partner success, ecosystem adoption, and post-integration growth for 0G's decentralized AI operating system. Helped take the 0G L1 through mainnet launch and token generation event, onboarding infrastructure, AI, DeFi, and custody partners including Chainlink, Goldsky, Safe, Fireblocks, and BitGo.",
        },
      ],
    },
    {
      company: "K3 Labs",
      dates: "2025 — 2026",
      positions: [
        {
          title: "Advisor, Ecosystem & Partnership Growth",
          dates: "2025 — 2026",
        },
      ],
    },
    {
      company: "Chainlink Labs",
      dates: "2021 — 2025",
      positions: [
        {
          title: "Ecosystem Growth Lead (Go-to-Market)",
          dates: "2023 — 2025",
          description:
            "Built and led ecosystem growth for Chainlink's data and cross-chain products, supporting Web3 and AI startups from early stage through scale.",
        },
        {
          title: "Senior Partnership Success Manager",
          dates: "2022 — 2023",
          description:
            "Hybrid business development and customer success role owning partner relationships across DeFi protocols and L1/L2 ecosystems.",
        },
        {
          title: "Partnership Success Manager",
          dates: "2021 — 2022",
          description:
            "Managed onboarding and post-integration success for protocol partners integrating Chainlink oracles.",
        },
      ],
    },
    {
      company: "DCA Strategies LLC",
      dates: "2017 — Present",
      positions: [
        {
          title: "Founder & CEO",
          dates: "2017 — Present",
          description:
            "Advisory practice helping early-stage startups with market positioning, go-to-market, and fundraising.",
        },
      ],
    },
  ],

  speaking: {
    topics: [
      "Partner success and post-integration growth for L1 ecosystems",
      "Decentralized AI infrastructure: compute, storage, and data availability",
      "Go-to-market for Web3 infrastructure and developer platforms",
      "Building ecosystem growth teams from zero",
      "AI agents on-chain and trust-minimized AI",
      "Lessons from Chainlink and 0G on scaling integrations",
    ],
    upcoming: [
      {
        event: "Agentic Zero, SF Tech Week by a16z",
        date: "Oct 7, 2026",
        location: "The Avalon, San Francisco",
        href: "https://lnkd.in/p/gkWW6zjt",
      },
    ],
    talks: [
      {
        event: "Côte d'Azur Carré d'Or with FP Block, during EthCC, Cannes",
        title: "Panel: Hardened Security in an AI-Driven World",
        date: "Apr 1, 2026",
        href: "https://lnkd.in/p/gA5fFv35",
      },
      {
        event:
          "The Scaling Summit: House of AI by 499, 0G & Hetu, ETHDenver, Denver",
        title:
          "Panel: How AI becomes trust-minimized, composable, and usable at scale",
        date: "Feb 16, 2026",
        href: "https://luma.com/ScalingEthDenver",
      },
      {
        event: "Dormint Privacy Masters, X Space",
        title: "Privacy is the third era of crypto",
        date: "Nov 21, 2025",
        href: "https://x.com/Dormint_io/status/1991884068351611061",
      },
      {
        event: "Dormint Privacy Masters, X Space",
        title: "Privacy season",
        date: "Nov 14, 2025",
        href: "https://x.com/Dormint_io/status/1989347545865404746",
      },
      {
        event: "Agents Unleashed, ArtScience Museum, Singapore",
        title: "Panel: Prediction markets and AI: hype or substance?",
        date: "Oct 1, 2025",
        href: "https://x.com/autonolas/status/1978461055316840571",
      },
    ],
    cards: [
      {
        src: "/images/cards/agentic-zero-speaker.png",
        alt: "Michael Dressler's speaker portrait for Agentic Zero 2026",
        caption: "Agentic Zero, SF Tech Week 2026",
        width: 512,
        height: 512,
        href: "https://agenticzero.xyz/",
      },
      {
        src: "/images/cards/scaling-summit-speaker.jpg",
        alt: "Guest speaker card for Michael Dressler, Head of Success at 0G Labs, for The Scaling Summit at ETHDenver 2026",
        caption: "Guest speaker, The Scaling Summit, ETHDenver 2026",
        width: 1600,
        height: 1596,
        href: "https://x.com/499_Group/status/2019395585040597201",
      },
      {
        src: "/images/cards/scaling-summit-panel.jpg",
        alt: "Panel card listing Michael Dressler as moderator and speaker for 'How AI actually becomes trust-minimized, composable, and usable at scale' at The Scaling Summit",
        caption: "Panel moderator and speaker, The Scaling Summit, ETHDenver 2026",
        width: 1600,
        height: 1200,
        href: "https://luma.com/ScalingEthDenver",
      },
      {
        src: "/images/cards/dormint-third-era.jpg",
        alt: "Dormint Privacy Masters X Space card for 'Privacy is the third era of crypto' on Nov 21, 2025, featuring Michael from 0G",
        caption: "Dormint Privacy Masters, Nov 21, 2025",
        width: 1600,
        height: 900,
        href: "https://x.com/Dormint_io/status/1991884068351611061",
      },
      {
        src: "/images/cards/dormint-privacy-season.jpg",
        alt: "Dormint Privacy Masters X Space card for 'Privacy season' on Nov 14, 2025, featuring Michael from 0G",
        caption: "Dormint Privacy Masters, Nov 14, 2025",
        width: 1600,
        height: 900,
        href: "https://x.com/Dormint_io/status/1989347545865404746",
      },
    ],
  },

  // Captions below were taken from signage visible in each photo. Review and edit freely.
  photos: [
    {
      src: "/images/gallery-01.jpg",
      alt: "Michael Dressler speaking with a microphone on the Agents Unleashed panel",
      caption: "Agents Unleashed, October 2025",
      width: 1280,
      height: 960,
    },
    {
      src: "/images/gallery-02.jpg",
      alt: "Michael Dressler on a panel at Agents Unleashed, ArtScience Museum, October 2025",
      caption: "Agents Unleashed, ArtScience Museum, October 2025",
      width: 1280,
      height: 960,
    },
    {
      src: "/images/gallery-03.jpg",
      alt: "Michael Dressler speaking on the Agents Unleashed panel alongside fellow panelists",
      caption: "Agents Unleashed, October 2025",
      width: 960,
      height: 1280,
      focus: "50% 45%",
    },
    {
      src: "/images/gallery-04.jpg",
      alt: "Michael Dressler speaking on a panel with three other speakers at an EthCC side event in Cannes",
      caption: "EthCC, Cannes",
      width: 2000,
      height: 1127,
    },
    {
      src: "/images/gallery-05.jpg",
      alt: "Michael Dressler speaking into a microphone to a seated audience at an EthCC side event in Cannes",
      caption: "EthCC, Cannes",
      width: 914,
      height: 1380,
      focus: "50% 30%",
    },
    {
      src: "/images/gallery-06.jpg",
      alt: "Michael Dressler standing with another attendee outside the EthCC[9] entrance in Cannes",
      caption: "EthCC[9], Cannes",
      width: 2000,
      height: 1333,
    },
    {
      src: "/images/gallery-07.jpg",
      alt: "Michael Dressler speaking into a microphone on a three-person panel at The Scaling Summit: House of AI, ETHDenver 2026",
      caption: "The Scaling Summit: House of AI, ETHDenver 2026",
      width: 2000,
      height: 1333,
    },
    {
      src: "/images/gallery-08.jpg",
      alt: "Michael Dressler standing in front of a Vogue Singapore sign",
      caption: "Vogue Singapore",
      width: 854,
      height: 1280,
      focus: "50% 30%",
    },
    {
      src: "/images/gallery-09.jpg",
      alt: "Michael Dressler speaking into a microphone during a panel at The Scaling Summit: House of AI, ETHDenver 2026",
      caption: "The Scaling Summit: House of AI, ETHDenver 2026",
      width: 2000,
      height: 1333,
    },
  ],

  // No press, podcasts, or videos were provided in CONTENT.md. Add items here to enable the Media section.
  media: [],

  // Awards section removed on 2026-10-01; add entries here to bring it back.
  recognition: [],

  contact: {
    heading: "Get in touch",
    blurb: "Reach out on LinkedIn or X.",
    // TODO: add a public contact email to show an email button
    email: undefined,
    socials: [
      {
        kind: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/michaeladressler/",
      },
      { kind: "x", label: "X", href: "https://x.com/mdressler24" },
      { kind: "github", label: "GitHub", href: "https://github.com/Dresden-xyz" },
    ],
    links: [{ label: "0G Labs", href: "https://0g.ai" }],
  },

  footerLine: "© 2026 Michael A. Dressler",

  headings: {
    experience: "Where I've worked",
    speaking: "Topics I speak about",
    upcomingTalks: "Upcoming",
    talks: "Past talks",
    eventCards: "Event features",
    photos: "On stage and around the ecosystem",
    media: "Press, podcasts & video",
    recognition: "Awards & honors",
  },
};

/** Sections that actually have content, in page order. Drives both the page and the nav. */
export function getSections(content: SiteContent): { id: SectionId; label: string }[] {
  const all: { id: SectionId; label: string; show: boolean }[] = [
    { id: "about", label: "About", show: content.about.paragraphs.length > 0 },
    { id: "experience", label: "Experience", show: content.experience.length > 0 },
    {
      id: "speaking",
      label: "Speaking",
      show:
        content.speaking.topics.length > 0 ||
        content.speaking.upcoming.length > 0 ||
        content.speaking.talks.length > 0 ||
        content.speaking.cards.length > 0,
    },
    { id: "photos", label: "Photos", show: content.photos.length > 0 },
    { id: "media", label: "Media", show: content.media.length > 0 },
    { id: "recognition", label: "Recognition", show: content.recognition.length > 0 },
    {
      id: "contact",
      label: "Contact",
      show: Boolean(content.contact.email) || content.contact.socials.length > 0,
    },
  ];
  return all.filter((s) => s.show).map(({ id, label }) => ({ id, label }));
}
