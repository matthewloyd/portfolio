// =====================================================================
//  YOUR PORTFOLIO CONTENT — edit this file to change what the site says.
//  You should rarely need to touch the components to update your info.
// =====================================================================

export const site = {
  name: "Your Name",
  // Short headline shown under your name in the hero section
  role: "Aspiring GRC Analyst",
  tagline:
    "I turn security frameworks into practical, working programs — risk assessments, control mappings, policies, and the automation that keeps them running.",
  location: "City, State",
  email: "you@example.com",
  // Set to true when you're actively looking — shows a badge in the hero
  openToWork: true,
  // Path to a PDF in /public, e.g. "/resume.pdf". Leave "" to hide the button.
  resumeUrl: "",
  // Optional: put a square photo in /public (e.g. "/headshot.jpg"). "" = initials.
  photo: "",
};

export const links = {
  github: "https://github.com/matthewloyd",
  linkedin: "https://www.linkedin.com/in/your-profile",
};

export const about = [
  "I'm building a career in Governance, Risk & Compliance with a technical edge. I'm interested in how security programs actually help a business win trust — not just pass audits.",
  "I'm currently completing CompTIA Security+ and building a portfolio of hands-on GRC projects around a fictional fintech SaaS company, covering SOC 2 readiness, risk management, and compliance automation.",
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frameworks",
    items: ["SOC 2", "NIST CSF 2.0", "NIST SP 800-53", "ISO/IEC 27001", "PCI DSS"],
  },
  {
    group: "GRC Practice",
    items: ["Risk Assessment", "Control Mapping", "Policy Writing", "Vendor Risk", "Audit Readiness"],
  },
  {
    group: "Technical",
    items: ["Python", "Git & GitHub", "Linux", "AWS Fundamentals", "Markdown"],
  },
];

// status: "complete" | "in-progress" | "planned"
export const projects: {
  title: string;
  description: string;
  tags: string[];
  status: "complete" | "in-progress" | "planned";
  repo?: string;
  link?: string;
}[] = [
  {
    title: "Portfolio Website",
    description:
      "This site. Built with Astro, versioned on GitHub, deployed on Vercel. Stack chosen for low dependency and maintenance risk.",
    tags: ["Astro", "GitHub", "Vercel"],
    status: "complete",
    repo: "https://github.com/matthewloyd/portfolio",
  },
  {
    title: "SOC 2 Readiness Assessment",
    description:
      "Gap assessment for a fictional fintech SaaS company against the SOC 2 Trust Services Criteria, with a prioritized remediation roadmap.",
    tags: ["SOC 2", "Gap Analysis", "Risk"],
    status: "planned",
  },
  {
    title: "Risk Register & Methodology",
    description:
      "Risk assessment following NIST SP 800-30: asset inventory, threat scenarios, likelihood/impact scoring, and treatment plans.",
    tags: ["NIST 800-30", "Risk Management"],
    status: "planned",
  },
  {
    title: "Compliance Evidence Collector",
    description:
      "Python tool that gathers configuration evidence and maps it to controls, reducing manual audit prep.",
    tags: ["Python", "Automation", "GRC Engineering"],
    status: "planned",
  },
];

// status: "earned" | "in-progress" | "planned"
export const certifications: {
  name: string;
  issuer: string;
  status: "earned" | "in-progress" | "planned";
  date?: string;
  credentialUrl?: string;
}[] = [
  { name: "Security+", issuer: "CompTIA", status: "in-progress", date: "Expected Nov 2026" },
];

// Navigation — remove an entry to hide it from the menu
export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
