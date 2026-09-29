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

export interface Role {
  dates: string;
  title: string;
  company: string;
  description?: string;
}

export interface Talk {
  event: string;
  title: string;
  year: string;
  href?: string;
}

export interface Photo extends ImageAsset {
  caption?: string;
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
    talks: Talk[];
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
    talks: string;
    photos: string;
    media: string;
    recognition: string;
  };
}

export const site: SiteContent = {
  name: "Michael A. Dressler",
  navName: "Michael Dressler",
  // TODO: replace with the final domain once chosen (CONTENT.md > Global > Final domain).
  siteUrl: "https://michaeldressler-site.vercel.app",
  title:
    "Michael Dressler — Head of Success at 0G Labs | Decentralized AI & Web3 Infrastructure",
  description:
    "Head of Success at 0G Labs. Ex-Chainlink Labs. Building partner success and ecosystem growth for decentralized AI and Web3 infrastructure.",
  twitterHandle: "@mdressler24",

  hero: {
    tagline: "Decentralized AI + Web3 Infrastructure",
    descriptor:
      "Head of Success at **0G Labs**, leading partner success, ecosystem adoption, and post-integration growth across 0G's modular decentralized AI stack. Previously at Chainlink Labs, where he helped build the Ecosystem Growth team. Ecosystem developer on a mission to bring decentralized AI to production.",
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
      "Michael Dressler is Head of Success at 0G Labs, where he leads partner success, ecosystem adoption, and post-integration growth across 0G’s modular decentralized AI stack. Since joining 0G in 2025, he has worked closely with leading infrastructure providers, AI builders, and DeFi protocols, helping launch and scale the 0G L1 ecosystem through Mainnet and TGE with 100+ partner integrations live.",
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
      dates: "2025 — Present",
      title: "Head of Success",
      company: "0G Labs",
      description:
        "Leads partner success, ecosystem adoption, and post-integration growth for 0G's decentralized AI operating system. Helped take the 0G L1 through mainnet launch and token generation event, onboarding infrastructure, AI, DeFi, and custody partners including Chainlink, Goldsky, Safe, Fireblocks, and BitGo.",
    },
    {
      dates: "2025",
      title: "Advisor, Ecosystem & Partnership Growth",
      company: "K3 Labs",
    },
    {
      dates: "2023 — 2025",
      title: "Ecosystem Growth Lead (Go-to-Market)",
      company: "Chainlink Labs",
      description:
        "Built and led ecosystem growth for Chainlink's data and cross-chain products, supporting Web3 and AI startups from early stage through scale.",
    },
    {
      dates: "2022 — 2023",
      title: "Senior Partnership Success Manager",
      company: "Chainlink Labs",
      description:
        "Hybrid business development and customer success role owning partner relationships across DeFi protocols and L1/L2 ecosystems.",
    },
    {
      dates: "2021 — 2022",
      title: "Partnership Success Manager",
      company: "Chainlink Labs",
      description:
        "Managed onboarding and post-integration success for protocol partners integrating Chainlink oracles.",
    },
    {
      // TODO: start year not confirmed in CONTENT.md
      dates: "Present",
      title: "Founder & CEO",
      company: "DCA Strategies LLC",
      description:
        "Advisory practice helping early-stage startups with market positioning, go-to-market, and fundraising.",
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
    talks: [
      {
        event:
          "The Scaling Summit: House of AI by 499, 0G & Hetu, ETHDenver, Denver",
        title:
          "Panel: How AI becomes trust-minimized, composable, and usable at scale",
        year: "2026",
        href: "https://luma.com/ScalingEthDenver",
      },
    ],
  },

  // Captions below were taken from signage visible in each photo. Review and edit freely.
  photos: [
    {
      src: "/images/photo-01.jpg",
      alt: "Michael Dressler seated with two other panelists on stage at The Scaling Summit: House of AI, ETHDenver 2026",
      caption: "The Scaling Summit: House of AI, ETHDenver 2026",
      width: 2000,
      height: 1333,
    },
    {
      src: "/images/photo-02.jpg",
      alt: "Michael Dressler speaking into a microphone during a panel at The Scaling Summit: House of AI, ETHDenver 2026",
      caption: "The Scaling Summit: House of AI, ETHDenver 2026",
      width: 2000,
      height: 1333,
    },
    {
      src: "/images/photo-05.jpg",
      alt: "Michael Dressler on a panel at Agents Unleashed, ArtScience Museum, October 2025",
      caption: "Agents Unleashed, ArtScience Museum, October 2025",
      width: 1280,
      height: 960,
    },
    {
      src: "/images/photo-06.jpg",
      alt: "Michael Dressler speaking with a microphone on the Agents Unleashed panel",
      caption: "Agents Unleashed, October 2025",
      width: 1280,
      height: 960,
    },
    {
      src: "/images/photo-03.jpg",
      alt: "Michael Dressler speaking on a panel with three other speakers at an evening event",
      width: 2000,
      height: 1127,
    },
    {
      src: "/images/photo-04.jpg",
      alt: "Michael Dressler standing with another attendee outside the EthCC[9] entrance",
      caption: "EthCC[9]",
      width: 2000,
      height: 1333,
    },
    {
      src: "/images/photo-07.jpg",
      alt: "Michael Dressler seated on stage during a panel discussion",
      width: 960,
      height: 1280,
    },
    {
      src: "/images/photo-08.jpg",
      alt: "Michael Dressler standing in front of a Vogue Singapore sign",
      caption: "Vogue Singapore",
      width: 854,
      height: 1280,
    },
    {
      src: "/images/photo-09.jpg",
      alt: "Michael Dressler in front of a climbing wall that reads 'The future is ETH + AI'",
      width: 960,
      height: 1280,
    },
  ],

  // No press, podcasts, or videos were provided in CONTENT.md. Add items here to enable the Media section.
  media: [],

  recognition: [
    { title: "Cum Laude", issuer: "Monmouth University", year: "2013" },
    {
      title: "Dean's List, 6 consecutive terms",
      issuer: "Monmouth University",
      year: "2010 — 2012",
    },
    {
      title: "Founding Brother, Phi Kappa Psi (NJ Beta)",
      issuer: "Monmouth University",
      year: "2009",
    },
  ],

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
    talks: "Past talks",
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
      show: content.speaking.topics.length > 0 || content.speaking.talks.length > 0,
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
