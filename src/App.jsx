import { useEffect, useState } from "react";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/alchemycodez",
  },
  {
    name: "X",
    url: "https://x.com/alchemycodez",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/your-username",
  },
  {
    name: "Mail",
    url: "mailto:your-email@example.com",
  },
];

const projects = [
  {
    name: "Job Queue System",
    description:
      "An in-memory job queue built from scratch with FIFO scheduling, concurrent workers, retry mechanisms, and a dead-letter queue.",
    technologies: [
      "JavaScript",
      "Node.js",
      "async/await",
      "concurrency",
      "queues",
    ],
    githubUrl:
      "https://github.com/alchemycodez/job-queue-from-scratch",
  },
  {
    name: "Reddit Search",
    description:
      "A full-stack search application that fetches Reddit posts, stores them in PostgreSQL, and ranks results using full-text search.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/alchemycodez/reddit-search",
  },
];

const lavenderSprigs = [
  { x: 25, scale: 0.62, tilt: -5 },
  { x: 88, scale: 0.82, tilt: 4 },
  { x: 150, scale: 0.66, tilt: -3 },
  { x: 218, scale: 1, tilt: 5 },
  { x: 285, scale: 0.72, tilt: -4 },
  { x: 353, scale: 0.88, tilt: 3 },
  { x: 418, scale: 0.64, tilt: -5 },
  { x: 484, scale: 1, tilt: 4 },
  { x: 550, scale: 0.72, tilt: -3 },
  { x: 615, scale: 0.85, tilt: 5 },
];

function SocialIcon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-[18px] w-[18px] shrink-0",
    "aria-hidden": true,
  };

  if (name === "GitHub") {
    return (
      <svg {...common} fill="currentColor">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.72 1.15 1.72 1.15.99 1.7 2.6 1.21 3.22.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.71.78 1.15 1.77 1.15 2.99 0 4.27-2.61 5.21-5.1 5.49.4.35.76 1.02.76 2.06v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (name === "X") {
    return (
      <svg {...common} fill="currentColor">
        <path d="M18.901 1.153h3.68L14.54 10.14l9.424 12.837h-7.381l-5.785-7.563-6.62 7.563H.496l8.58-9.813L.035 1.153H7.603l5.23 6.913zm-1.291 19.563h2.039L6.47 3.298H4.28z" />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg {...common} fill="currentColor">
        <path d="M20.45 2H3.55C2.69 2 2 2.69 2 3.55v16.9c0 .86.69 1.55 1.55 1.55h16.9c.86 0 1.55-.69 1.55-1.55V3.55C22 2.69 21.31 2 20.45 2ZM8 18.5H5V9h3v9.5ZM6.5 7.7a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48ZM19 18.5h-3v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.7h-3V9h2.88v1.3h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.16Z" />
      </svg>
    );
  }

  return (
    <svg
      {...common}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LavenderFlowers() {
  return (
    <div className="overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 640 112"
        preserveAspectRatio="xMidYMax meet"
        className="block h-24 w-full"
        fill="none"
      >
        <path d="M0 103 H640" stroke="#292929" strokeWidth="1" />

        {lavenderSprigs.map(({ x, scale, tilt }) => (
          <g
            key={x}
            transform={`translate(${x} 103) rotate(${tilt}) scale(${scale})`}
          >
            <path
              d="M0 0 C7 -18 -5 -41 2 -68"
              stroke="#77708F"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M1 -15 C-9 -23 -13 -19 -3 -12 C0 -11 1 -13 1 -15Z"
              fill="#77708F"
            />

            <path
              d="M1 -27 C11 -36 15 -31 4 -24 C2 -23 1 -25 1 -27Z"
              fill="#77708F"
            />

            <path
              d="M2 -40 C-7 -48 -11 -43 -2 -36 C1 -36 2 -38 2 -40Z"
              fill="#77708F"
            />

            <g fill="#A78BFA">
              <ellipse cx="2" cy="-68" rx="2.8" ry="4" />
              <ellipse cx="-2.5" cy="-64" rx="2.8" ry="3.5" />
              <ellipse cx="6" cy="-63" rx="2.8" ry="3.5" />
              <ellipse cx="0" cy="-59" rx="2.7" ry="3.5" />
              <ellipse cx="5" cy="-55" rx="2.6" ry="3.5" />
              <ellipse cx="-2" cy="-53" rx="2.5" ry="3" />
              <ellipse cx="2" cy="-48" rx="2.4" ry="3" />
            </g>

            <g fill="#C4B5FD">
              <circle cx="2" cy="-70" r="1.5" />
              <circle cx="-2" cy="-64" r="1.3" />
              <circle cx="6" cy="-63" r="1.3" />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}

function ProjectRow({ project }) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.name} repository on GitHub`}
      className="group block border-b border-[#292929] py-5 first:pt-0"
    >
      <h3 className="text-base font-medium leading-6 text-[#E5E7EB] transition-colors group-hover:text-white">
        {project.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
        {project.description}
      </p>

      <p className="mt-3 font-mono text-xs leading-5 text-[#A1A1AA]">
        {project.technologies.join(" · ")}
      </p>
    </a>
  );
}

function App() {
  const getCurrentPage = () => {
    if (
      window.location.hash === "#/projects" ||
      window.location.pathname === "/projects"
    ) {
      return "projects";
    }

    return "home";
  };

  const [page, setPage] = useState(getCurrentPage);

  useEffect(() => {
    // Convert old hash URLs to clean URLs
    if (
      window.location.hash === "#/home" ||
      window.location.hash === "#/projects"
    ) {
      const path =
        window.location.hash === "#/projects"
          ? "/projects"
          : "/home";

      window.history.replaceState({}, "", path);
    }

    // Handle browser back and forward buttons
    const handleNavigation = () => {
      setPage(getCurrentPage());
    };

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  // Navigate between pages without reloading
  const navigate = (event, path) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();

    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }

    setPage(path === "/projects" ? "projects" : "home");

    window.scrollTo(0, 0);
  };

  const isProjectsPage = page === "projects";

  return (
    <div className="flex min-h-screen flex-col bg-[#090b0a] text-white selection:bg-[#D4D4D8] selection:text-[#090b0a]">

      {/* Navbar */}
      <header>
        <nav className="mx-auto flex w-full max-w-2xl items-center justify-start gap-6 px-6 pt-8 pb-0 text-base">
          <a
            href="/home"
            onClick={(event) => navigate(event, "/home")}
            className={`transition-colors duration-200 hover:text-white ${
              isProjectsPage ? "text-[#A1A1AA]" : "text-white"
            }`}
          >
            /home
          </a>

          <a
            href="/projects"
            onClick={(event) => navigate(event, "/projects")}
            className={`transition-colors duration-200 hover:text-white ${
              isProjectsPage ? "text-white" : "text-[#A1A1AA]"
            }`}
          >
            /projects
          </a>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-6">
        {isProjectsPage ? (
          /* All projects page */
          <section className="py-12">
            <h1 className="mt-0 text-2xl font-medium text-white">
              Side projects:
            </h1>

            <p className="mt-0 text-sm leading-6 text-[#A1A1AA]">
              Things I've been building and exploring.
            </p>

            <div className="mt-8">
              {projects.map((project) => (
                <ProjectRow key={project.name} project={project} />
              ))}
            </div>
          </section>
        ) : (
          /* Home page */
          <>
            <section
              id="home"
              className="scroll-mt-8 pt-6 pb-0"
            >
              <h1 className="text-2xl font-medium tracking-tight text-white">
                alchemycodez
              </h1>

              <p className="mt-2 text-sm text-[#D4D4D8]">
                Engineer - Backend &amp; systems
              </p>

              <div className="mt-5 space-y-1.5 text-sm leading-7 text-[#D4D4D8]">
                <p>
                  Curious developer exploring backend engineering, building APIs and understanding how systems work.
                </p>

                <p>
                  Currently building and exploring backend and infra with ai.
                </p>
              </div>

              {/* Social icons */}
              <div className="mt-6 flex flex-wrap items-center gap-5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={
                      social.name === "Mail" ? undefined : "_blank"
                    }
                    rel={
                      social.name === "Mail" ? undefined : "noreferrer"
                    }
                    aria-label={social.name}
                    title={social.name}
                    className="inline-flex items-center text-[#A1A1AA] transition-colors duration-200 hover:text-white"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ))}
              </div>
            </section>

            {/* Featured projects */}
            <section id="projects" className="scroll-mt-8 py-12">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-light text-white sm:text-2xl">
                  projects
                </h2>

                <a
                  href="/projects"
                  onClick={(event) => navigate(event, "/projects")}
                  className="font-mono text-sm text-[#A1A1AA] transition-colors hover:text-white"
                >
                  see all →
                </a>
              </div>

              <div>
                {projects.slice(0, 2).map((project) => (
                  <ProjectRow key={project.name} project={project} />
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto">
        <div className="mx-auto w-full max-w-2xl px-6 pt-5">
          <LavenderFlowers />

          <div className="py-2 text-xs text-[#A1A1AA] text-center">
            Built by{" "}
            <span className="text-[#E5E7EB]">alchemycodez</span>.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;