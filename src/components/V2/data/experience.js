export const experienceData = [
    {
      id: 'mast',
      company: 'Mastercard',
      role: 'Senior Software Engineer',
      period: 'Feb 2024 - Present',
      highlights: [
        'Leading **Authentication services** for Mastercard Checkout Solution (MACS), implementing 3DS and proprietary protocols.',
        'Developed **CodeSentinel**, an Auto PR Reviewer that utilizes static analysis to provide real-time code feedback.',
        'Optimized test suites by building a **WireMock Extension**, identifying and deleting **5,000+ unused stubs**, drastically reducing CI/CD overhead.',
        'Engineered the **Payload Decryption Service** (Web UI), significantly improving cross-team developer efficiency.'
      ],
      stack: ['Java 21', 'Spring Boot', 'Redis', 'PCF', 'Karate Framework', 'PACT']
    },
    {
      id: 'opus',
      company: 'Opus Technologies',
      role: 'Senior Software Engineer',
      period: '2022 - 2024',
      highlights: [
        'Developed an **Audit Logging Framework** with Spring Boot, enabling granular API tracking and security compliance.',
        'Integrated multiple microservices for the Click-To-Pay program, implementing custom caching for sub-100ms performance.',
        'Developed the **Checkout Toolkit Web UI** using ReactJS and Spring Boot for operational streamlining.'
      ],
      stack: ['Java 17', 'Spring Boot', 'ReactJS', 'Redis', 'PostgreSQL']
    },
    {
      id: 'amdocs',
      company: 'Amdocs',
      role: 'Software Developer',
      period: '2017 - 2021',
      highlights: [
        'Automated Linux deployment tasks with **Ansible & Shell**, achieving a **50% reduction in deployment time** and 30% fewer manual errors.',
        'Built a high-performance Spring Boot/Hibernate service for critical data transmission between DNS management apps.',
        'Created a **Leave Management System** with automated approval workflows, reducing HR manual overhead.'
      ],
      stack: ['Java', 'Hibernate', 'Ansible', 'Shell Scripting', 'ReactJS']
    }
];
