/**
 * Single source of truth for work experience and education.
 * Mirrors I:\Projects\Resume\Avinash_Tingre_Resume.txt.
 * All wording must remain public-safe and production-sanitized.
 */

export const experienceData = [
  {
    id: "mastercard",
    company: "Mastercard",
    logo: "/assets/images/logo-mastercard.svg",
    role: "Senior Software Engineer",
    period: "Feb 2024 – Present",
    location: "Pune, India",
    awards: ["Game Changer badge", "Spot Award", "Move Fast achievement"],
    roles: [
      {
        title: "Card Management Service, Mastercard Checkout Solutions",
        period: "Sep 2025 – Present",
        awards: ["Spot Award", "Game Changer badge"],
        highlights: [
          "Design owner and epic lead for migrating **40M+ card records** from the legacy issuer directory to the **Directory 2.0** platform that powers P2P payments; authored both low-level designs (LLDs), led design reviews, and orchestrated cross-functional cutover across 4–5 engineers, 2 architects, DBA, and SRE through production DDL and cutover.",
          "**Halved p90 latency** on the Directory 2.0 update API (**40 ms → 20 ms**) and lookup API (**16 ms → 9 ms**) by executing decryption in parallel, dropping unused token decryption, replacing N+1 queries with batched reads, and bounding async fan-out; verified with Dynatrace and load tests.",
          "Designed and shipped a paginated bulk id-lookup API with stable ordering and continuation tokens (1,000/page default, 5,000 max, optional issuer filters) so migration and consumer jobs can resume where they left off instead of scanning full records.",
          "Built the P2P enrollment tokenization flow and standalone Tokenize API (MDES tokenization, encryption-service integration, rollback on save failure) with full Karate coverage; ran 4 regression cycles across 2 releases with no regressions.",
          "Diagnosed and resolved a **P2 production OOM** crash caused by ~1.5M verification records on a single card: identified root cause, coordinated data cleanup, fixed unbounded inserts, and drafted cleanup plan for a 2.9M-row buildup.",
          "Raised engineering standards across **7 repos**: lifted unit test coverage from **75% → 90%**, standardized squash merges, cleaned **720 of 1,013 stale branches**, served as primary code reviewer on 3 repos, onboarded 3 engineers, and authored 20+ design and analysis pages.",
          "Built a config-driven **batch framework** (partitioning, SELECT FOR UPDATE row locks, chunked parallel processing, job tracking) migrating millions of PAN hashes to HMAC for **PCI DSS v4.0** compliance.",
        ],
      },
      {
        title: "Authentication Orchestration, Mastercard Checkout Solutions",
        period: "Feb 2024 – Sep 2025",
        awards: ["Move Fast achievement"],
        highlights: [
          "Delivered FIDO/passkey and MFA capabilities for Click to Pay authentication: eligibility checks by country, issuer, BIN range, and MFA enablement, native-app integration checks across six B2B and B2C APIs, session state handling, and assertion token generation.",
          "Engineered alternate-site retry with circuit breaking for tokenization-service calls (active-active failover) and consolidated auth-type-specific session endpoints into a single unified session API.",
          "Fixed a **Priority-1** BindMFA 503 failure in a shared test facility, built negative-scenario simulators for crypto validation, and enriched KPI events behind the BizOps liability-shift dashboard.",
        ],
      },
    ],
    stack: [
      "Java 17",
      "Spring Boot",
      "Spring Batch",
      "Oracle",
      "Redis",
      "Cloud Foundry",
      "Karate",
      "Dynatrace",
      "Splunk",
    ],
  },
  {
    id: "opus",
    company: "Opus Technologies",
    logo: "/assets/images/opus_logo.svg",
    role: "Senior Software Engineer",
    period: "Feb 2022 – Feb 2024",
    location: "Pune, India",
    subtitle: "Payments consultancy, 3 client engagements",
    awards: ["3x Spot Award"],
    roles: [
      {
        title: "Client: Mastercard, Click to Pay",
        period: "Feb 2023 – Feb 2024",
        awards: ["3x Spot Award"],
        highlights: [
          "Enhanced the Click to Pay checkout service (Java, Spring Boot, Redis) with microservice integrations and Redis checkout-path caching; shipped critical fixes in tight release windows.",
          "Built a custom WireMock extension that identified and removed **5,000 dead stubs**, making functional test suites substantially faster and easier to maintain.",
          "Designed and implemented a centralized audit logging framework (Spring Boot, Spring AOP) that records every API request across services for security compliance review.",
          "Built the Checkout Toolkit web UI (ReactJS, Spring Boot), widely adopted across internal engineering and partner teams for day-to-day testing.",
        ],
      },
      {
        title: "Client: ACI Worldwide",
        period: "Aug 2022 – Feb 2023",
        highlights: [
          "Built backend payment routing features and integration services using Java, Spring Boot, and PostgreSQL.",
        ],
      },
      {
        title: "Client: NCR",
        period: "Feb 2022 – Aug 2022",
        highlights: [
          "Developed high-throughput transaction processing endpoints and Spring Boot microservice interfaces.",
        ],
      },
    ],
    stack: [
      "Java 11",
      "Spring Boot",
      "Spring AOP",
      "ReactJS",
      "Redis",
      "PostgreSQL",
      "WireMock",
    ],
  },
  {
    id: "cerence",
    company: "Cerence",
    logo: "/assets/images/cerence_logo.svg",
    role: "Software Engineer",
    period: "May 2021 – Feb 2022",
    location: "Pune, India",
    highlights: [
      "Built features and microservice integrations for the Natural Language Processing (NLP) Server in Java.",
      "Engineered a high-performance JSON-to-spreadsheet extraction utility that accelerated data analysis workflows for the team.",
    ],
    stack: ["Java", "Python", "NLP", "Agile"],
  },
  {
    id: "amdocs",
    company: "Amdocs",
    logo: "/assets/images/amdocs-logo.png",
    role: "Software Developer",
    period: "Oct 2017 – Feb 2021",
    location: "Pune, India",
    awards: ["Spot Award"],
    highlights: [
      "Automated Linux deployment workflows using Ansible and shell scripts, cutting deployment time by **50%** and operational errors by **30%**.",
      "Built a high-performance Spring Boot and Hibernate web service that synchronized critical data between in-house inventory and DNS management applications.",
      "Built internal tools used across the organization: a Hotfix Search app (Java, ReactJS, Apache POI) and a Leave Management System with auto-approval workflows.",
    ],
    stack: ["Java", "Spring Boot", "Hibernate", "ReactJS", "Ansible", "Shell"],
  },
];

export const education = {
  school: "Savitribai Phule Pune University",
  degree: "Bachelor of Engineering, Computer Science",
  year: "2017",
  location: "Pune, India",
};
