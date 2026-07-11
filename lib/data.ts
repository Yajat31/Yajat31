export const site = {
  name: "Yajat Lakhanpal",
  shortName: "Yajat",
  email: "yajatlakhanpal31@gmail.com",
  phone: "+91 92058 05450",
  phoneHref: "tel:+919205805450",
  location: "Hyderabad, India",
  github: "https://github.com/Yajat31",
  linkedin: "https://www.linkedin.com/in/yajat-lakhanpal",
  tagline: "Systems · Backend · Research",
  motto: "Systems that hold under pressure",
};

export const intro =
  "Welcome. I build reliable distributed systems and adaptive learning platforms — from quorum-replicated key-value stores to LLM-grounded tutoring pipelines. Dual degree student at IIIT Hyderabad, researching retrieval, agents, and the infrastructure that makes them trustworthy.";

export const about = {
  label: "About",
  headline: "Rooted in systems thinking",
  body: "I am pursuing a B.Tech in Computer Science and MS by Research in CSE at IIIT Hyderabad (CGPA 8.54). My work sits at the intersection of distributed systems, backend architecture, and applied ML — building tools that are correct under failure, measurable under load, and useful in the classroom.",
};

export const approach = [
  {
    title: "Systems",
    verb: "BUILD",
    body: "Kernel schedulers, networked file systems, and storage layers — designing for concurrency, failure, and measurable performance.",
  },
  {
    title: "Backend",
    verb: "SHIP",
    body: "Production APIs, auth, and data models with Next.js, Express, and Go. End-to-end workflows that stay coherent under real traffic.",
  },
  {
    title: "Distributed",
    verb: "SCALE",
    body: "Consistent hashing, quorums, gossip, anti-entropy — Dynamo-style designs validated with chaos and linearizability tests.",
  },
  {
    title: "Research",
    verb: "PROBE",
    body: "Retrieval pipelines, pedagogical LLM agents, and adaptive learning middleware — grounding models in structured knowledge.",
  },
];

export const projects = [
  {
    title: "Dynamo-Style Distributed Key-Value Store",
    tags: ["Go", "Consistent Hashing", "Gossip", "gRPC"],
    body: "AP key-value store with virtual-node consistent hashing, configurable N/R/W quorums, hinted handoff, vector clocks, Merkle-tree anti-entropy, and gossip membership. Validated via Jepsen/Porcupine across 36 chaos permutations.",
  },
  {
    title: "Index & Storage Benchmarking Suite",
    tags: ["Python", "Inverted Indices", "Compression"],
    body: "Boolean, word-count, and TF-IDF indices over a 50K+ Wikipedia corpus. VByte and zlib compression cut index size by up to 44% (1.77×) with under 5% added query latency.",
  },
  {
    title: "Distributed Network File System",
    tags: ["C", "TCP/IP", "Concurrency"],
    body: "Concurrent multi-server file system with a centralized naming service, LRU metadata caching, and fine-grained mutex synchronization to eliminate data races.",
  },
  {
    title: "XV6 Kernel: Syscalls & Scheduler",
    tags: ["C", "xv6", "OS Internals"],
    body: "Custom system calls plus MLFQ and lottery scheduling in xv6. Benchmarked MLFQ against round-robin with ~13% lower average process wait time.",
  },
];

export const experience = [
  {
    role: "Undergraduate Researcher & Research Assistant",
    org: "Information Retrieval & Extraction Lab, IIIT Hyderabad",
    period: "May 2025 – Present",
    points: [
      "Co-founded a learning middleware platform (Python + Next.js) across 5+ services; deployed to 700+ users.",
      "Stateful learner profiles for personalized adaptive workflows; retrieval and guardrail pipelines for grounded LLM outputs.",
      "Collaborating with Adobe Research on a benchmark for tool-calling reliability of pedagogical LLM agents.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Quick-Commerce Apparel Platform",
    period: "Jan 2025 – Apr 2025",
    points: [
      "Full-stack Next.js + Express app for browsing, ordering, and inventory across 3 integrated workflows.",
      "JWT auth, order lifecycle APIs, and MongoDB with indexed queries for efficient catalog retrieval.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "IIIT Hyderabad",
    period: "Aug 2025 – Present",
    points: [
      "CS6.201 Introduction to Software Systems (Jan 2026–Present): mentoring 270+ students in Bash, Python, and web fundamentals.",
      "Digital Systems & Microcontrollers (Aug–Dec 2025): guiding 300+ students from logic gates through basic microcontroller design.",
    ],
  },
];

export const skills = {
  Languages: ["Go", "C", "C++", "Python", "JavaScript", "SQL", "Bash"],
  "Systems / Backend": [
    "Distributed Systems",
    "Data Pipelines",
    "OS Internals",
    "Caching",
    "REST APIs",
    "Microservices",
    "gRPC",
  ],
  Frameworks: ["Node.js", "Express.js", "Next.js", "React.js", "Flask", "PyTorch"],
  "Tools & Databases": [
    "Docker",
    "Git",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "TCP/IP Sockets",
  ],
};

export const education = {
  school: "IIIT Hyderabad",
  degree: "B.Tech CSE + MS by Research (Dual Degree)",
  period: "Aug 2023 – Present",
  detail: "CGPA 8.54 / 10.00",
};
