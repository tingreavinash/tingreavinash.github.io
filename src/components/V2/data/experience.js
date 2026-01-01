export const experienceData = [
  {
    id: 'mast',
    company: 'Mastercard',
    logo: '/assets/images/logo-mastercard.svg',
    role: 'Senior Software Engineer',
    period: 'Feb 2024 - Present',
    highlights: [
      'Engineered authentication services for **Mastercard Checkout (MACS)** including 3DS + proprietary flows for **global transactions @ 99.99% uptime**.',
      'Architected **CodeSentinel**, an automated PR reviewer bot using static analysis, reducing review time by **35%**.',
      'Integrated multi-tier **Redis caching**, reducing API latency by **25%** for high-traffic payment flows.',
      'Developed a **WireMock extension** that identified/purged **5000+ unused stubs**, accelerating test execution by **30%**.',
      'Implemented **PACT contract testing**, preventing **20% more integration failures pre-release**.',
      'Automated **PCF config + environment variables**, cutting configuration errors by **40%**.',

    ],
    stack: ['Java 17', 'Spring Boot', 'Redis', 'PCF', 'Karate Framework', 'PACT']
  },
  {
    id: 'opus',
    company: 'Opus Technologies',
    logo: '/assets/images/opus_logo.svg',
    role: 'Senior Software Engineer',
    period: '2022 - 2024',
    highlights: [
      'Built a **centralized Audit Logging framework** with Spring AOP for secure realtime API tracing.',
      'Integrated multiple microservices for the Click-To-Pay program, implementing custom caching for sub-100ms performance.',
      'Developed **Checkout Toolkit WebUI** (React+Spring), improving debugging throughput by **50%**.'
    ],
    stack: ['Java 11', 'Spring Boot', 'ReactJS', 'Redis', 'PostgreSQL']
  },
  {
    id: 'cerence',
    company: 'Cerence',
    logo: '/assets/images/cerence_logo.svg',
    role: 'Software Engineer',
    period: '2021 – 2022',
    highlights: [
      'Automated NLP data extraction using JSON + spreadsheet integration, reducing processing time by **40%**.',
      'Delivered **3 NLP features ahead of schedule** through Agile collaboration and rapid iteration.'
    ],
    stack: ['Java', 'Python', 'JSON', 'NLP', 'Agile', 'Scrum']
  },

  {
    id: 'amdocs',
    company: 'Amdocs',
    logo: '/assets/images/amdocs-logo.png',
    role: 'Software Developer',
    period: '2017 - 2021',
    highlights: [
      'Automated deployment workflows using **Ansible + Shell**, reducing deployment effort by **50% & error rate by 30%**.',
      'Built a high-performance Spring Boot/Hibernate service for critical data transmission between DNS management apps.',
      'Built internal **Leave Management Workflow System** used by **200+ employees**, cutting admin overhead.'
    ],
    stack: ['Java', 'Hibernate', 'Ansible', 'Shell Scripting', 'ReactJS']
  }
];
