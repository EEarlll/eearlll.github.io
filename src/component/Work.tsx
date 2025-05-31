import { CustomSpan } from "./About";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tech: string[];
};

const projectList = [
  {
    title: "CodeNotes",
    description:
      "CodeNotes is platform for sharing and discovering snippets. Easily create, format, and organize your snippets for various purposes.",
    imageUrl: "/Images/CodeNotes/CodeNotes1.webp",
    link: "https://earleustacio.me/",
    tech: [
      "React",
      "Vite",
      "shadCN",
      "TanStack Query",
      "React Router",
      "TailwindCSS",
      "Flask",
      "SQLite",
      "Waitress",
      "Firebase Authentication",
      "Nginx",
      "Docker",
    ],
  },
  {
    title: "ExploreBooks",
    description:
      "A feature-rich app for book enthusiasts to add, edit, and view books with PDF attachments. Built to hone full-stack skills.",
    imageUrl: "/Images/ExploreBooks/explore_books_logo.webp",
    link: "https://explorebooks.vercel.app/",
    tech: [
      "Next.js",
      "Reactjs",
      "Tailwindcss",
      "Nodejs",
      "Express",
      "Mongodb",
      "Firebase",
    ],
  },
  {
    title: "Price Data Exchange (PDE)",
    description:
      "Web app for historical data on fiat, crypto, and stocks with confidence indicators. Built for Laravel PHP and MySQL practice.",
    imageUrl: "/Images/PDE/pde1.webp",
    link: "https://github.com/EEarlll/Price-data-exchange",
    tech: ["Laravel", "PHP", "MySql", "DaisyUi", "Tailwindcss"],
  },
  {
    title: "TTAIL Attendance System",
    description:
      "Advanced attendance system with QR code and SMS notifications, implemented in educational institutions.",
    imageUrl: "/Images/TTAIL/TTAIL1.webp",
    link: "https://github.com/EEarlll/TTAIL",
    tech: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "QR Code Libraries/Tools",
      "GSM Module",
    ],
  },
  {
    title: "Old Portfolio",
    description: "Created to showcase and practice web development skills.",
    imageUrl: "/Images/Portfolio/portfolio_logo.webp",
    link: "https://eearlll.github.io/portfolio2/",
    tech: ["React", "Vite", "Tailwindcss", "Framer Motion"],
  },
  {
    title: "Pomodoro",
    description:
      "Simple Pomodoro timer web app to practice HTML/CSS/JS fundamentals.",
    imageUrl: "/Images/Pomodoro/Pomodoro1.webp",
    link: "https://eearlll.github.io/Pomodoro/",
    tech: ["HTML", "CSS", "JS"],
  },
  {
    title: "Movie Reservation System",
    description:
      "Web app for browsing, searching, and reserving movie tickets with detailed movie info.",
    imageUrl: "/Images/MRS/MRS1.webp",
    link: "https://github.com/EEarlll/MovieReservationSystemMVC",
    tech: [
      "ASP.NET Core MVC",
      "Entity Framework",
      "SQL Server",
      "Bootstrap",
      "Razor",
    ],
  },
  {
    title: "Filipino Translate Dictionary",
    description:
      "Comprehensive translation and dictionary service for Filipino languages, leveraging Google Translate and scraped data.",
    imageUrl: "/Images/Ftd/Ftd1.webp",
    link: "https://filipino-translate-dictionary.vercel.app/",
    tech: [
      "Angular",
      "Angular Material",
      "Google Translate API",
      "Express.js",
      "Puppeteer",
      "PostgreSQL",
    ],
  },
  {
    title: "E-Trends",
    description:
      "Website created to learn and explore Vite, React, and Tailwind CSS.",
    imageUrl: "/Images/E-trends/E-Trends1.webp",
    link: "https://e-trends.vercel.app/",
    tech: ["Vite", "React", "Tailwind CSS"],
  },
  {
    title: "Wikipedia Summarized",
    description:
      "Web app providing summarized Wikipedia articles using Gemini 2.5 Flash and Wikipedia API.",
    imageUrl: "/Images/Cortex/Cortex1.webp",
    link: "https://cortex-645b7.web.app/",
    tech: [
      "Angular",
      "PrimeNG",
      "Gemini 2.5 Flash",
      "MediaWiki API",
      "firebase",
    ],
  },
  {
    title: "Gemini CLI",
    description:
      "CLI tool to interact with the Gemini protocol and call APIs in a text-based environment.",
    imageUrl: "/Images/GeminiCli/GeminiCli_logo.webp",
    link: "https://github.com/EEarlll/gemini-cli",
    tech: ["Bash", "Gemini Protocol", "curl", "jq"],
  },
];

function ProjectCard({
  title,
  description,
  imageUrl,
  link,
  tech,
}: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8  pb-8 mb-8 border-b border-accent">
      <div className="md:col-span-2">
        <a href={link} target="_blank">
          <img src={imageUrl} alt={title} className="rounded-lg object-cover" />
        </a>
      </div>
      <div className="md:col-span-3">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">
          <a href={link} target="_blank">
            {title}
          </a>
        </h2>
        <p className="pb-4 text-text">{description}</p>
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <CustomSpan key={index} title={item} note={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <div className="flex flex-col h-full m-10 gap-4">
      <h1 className="mb-4 text-2xl font-bold">Project List</h1>
      {projectList.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          link={project.link}
          tech={project.tech}
        />
      ))}
    </div>
  );
}
