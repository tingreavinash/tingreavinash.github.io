# Avinash Tingre — Personal Portfolio & Resume Site

Personal engineering portfolio and resume site for **Avinash Tingre**, Senior Software Engineer specializing in payments platforms, distributed systems, Java 17, and Spring Boot.

- **Production URL**: [https://tingreavinash.github.io/](https://tingreavinash.github.io/)
- **Domain Alias**: [https://tingre.in/](https://tingre.in/)

---

## Architecture & Content Structure

The production application is located under `src/components/V2/` built with React 18, Tailwind CSS, and Chart.js.

### Single Source of Truth
- **`src/components/V2/data/experience.js`**: Contains career timeline and education details. This file mirrors `I:\Projects\Resume\Avinash_Tingre_Resume.txt`. All copy and highlight bullets must remain public-safe and production-sanitized.
- **`src/components/V2/data/site.js`**: Centralized configuration holding the resume path (`RESUME_URL`), contact email (`EMAIL`), and profile links (`SOCIALS`). All contact links across the site must consume this file.
- **Data Integrity**: All metrics, numbers, and achievements presented in the Hero, About, and Metrics sections (e.g. 40M+ card migration, ~50% p90 latency cut, 90% unit test coverage, 71% branch cleanup) must directly correspond to verifiable milestones in the resume.

---

## Replacing the Resume PDF

To update the downloadable resume:
1. Compile or export the new resume PDF.
2. Replace `public/assets/resume/Avinash_Tingre_Resume.pdf`.
3. Re-build and deploy the project.

---

## Scripts

- **`npm start`**: Runs the development server at `http://localhost:3000`.
- **`npm test`**: Runs the test suite via Jest and React Testing Library (`npm test -- --watchAll=false`).
- **`npm run build`**: Compiles an optimized, production-ready build into the `build/` folder.
- **`npm run deploy`**: Builds the production bundles and publishes the `build/` directory to GitHub Pages via `gh-pages`.
