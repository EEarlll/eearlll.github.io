import useSound from "use-sound";
import { useTheme } from "./theme-provider";

const developmentTools = [
  // Languages
  "HTML/CSS/JS",
  "TypeScript",
  "PHP",
  "Python",
  "C",
  "C#",
  "VB.NET",

  // Frameworks & Libraries
  "React/Next.js",
  "Angular",
  "Express.js",
  "Flask",
  "ASP.NET",

  // Styling
  "Tailwind CSS",
  "Bootstrap",

  // Automation & Testing
  "Puppeteer",
  "Selenium",
  "Postman",

  // Databases
  "MS SQL Server",
  "MySQL",
  "MongoDB",
  "SQLite",
  "Firebase",

  // DevOps & Tools
  "Docker",
  "Nginx",
  "Bash",
  "Git",
];

const NoteList = [
  "a-3.mp3",
  "a-4.mp3",
  "a-5.mp3",
  "a3.mp3",
  "a4.mp3",
  "a5.mp3",
  "b3.mp3",
  "b4.mp3",
  "b5.mp3",
  "c-3.mp3",
  "c-4.mp3",
  "c-5.mp3",
  "c3.mp3",
  "c4.mp3",
  "c5.mp3",
  "c6.mp3",
  "d-3.mp3",
  "d-4.mp3",
  "d-5.mp3",
  "d3.mp3",
  "d4.mp3",
  "d5.mp3",
  "e3.mp3",
  "e4.mp3",
  "e5.mp3",
  "f-3.mp3",
  "f-4.mp3",
  "f-5.mp3",
  "f3.mp3",
  "f4.mp3",
  "f5.mp3",
  "g-3.mp3",
  "g-4.mp3",
  "g-5.mp3",
  "g3.mp3",
  "g4.mp3",
  "g5.mp3",
];

type customSpanProp = {
  title: string;
  note: number;
};

export function CustomSpan({ title, note }: customSpanProp) {
  const { musicEnabled } = useTheme();

  const [playClick] = useSound(`/Notes/${NoteList[note % NoteList.length]}`, {
    soundEnabled: musicEnabled,
    volume: 0.1,
  });
  return (
    <span
      className="bg-background border border-accent text-text p-1.5 text-sm rounded-md boxShadowItemsStyle hover:animate-key-press inline-block"
      onMouseEnter={() => playClick()}
    >
      {title}
    </span>
  );
}

export default function About() {
  const { theme } = useTheme();
  const email = "earleustacio@gmail.com";
  const mailtoLink = `mailto:${email}`;

  return (
    <>
      <div className="grid m-5 md:m-10 grid-cols-1 md:grid-cols-6 gap-4 rounded justify-center items-center">
        <div className="flex justify-center items-center md:col-span-2">
          <img
            src={theme === "dark" ? "/logoDark.webp" : "/logoLight.webp"}
            alt=""
            className="h-[150px] w-[150px] rounded-full object-cover"
          />
        </div>
        <div className="text-center md:text-left flex flex-col justify-center md:col-span-4 pl-4 gap-2 md:gap-0">
          <h1 className="text-3xl text-secondary">Earlvin Eustacio</h1>
          <p className="text-text">developer and programmer</p>
          <p className="text-text">Interested in working with me?</p>
          <p className="text-text">
            Send me an email at{" "}
            <a href={mailtoLink} className="text-secondary underline">
              earleustacio@gmail.com
            </a>
          </p>
        </div>
      </div>
      <section className="grid mx-5 md:mx-10 grid-cols-1 md:grid-cols-6 gap-4 pb-4 md:pb-0">
        <div className="md:col-span-2 md:border-r-2 border-accent/40">
          <h1 className="text-xl font-semibold mb-2 text-text">Education</h1>
          <div className="border-l-2 border-accent/40">
            <p className="pl-2 text-text">
              Bachelor of Science in Computer Engineering (2025)
            </p>
          </div>
          <h1 className="text-xl font-semibold mt-4 mb-2 text-text">
            Interest
          </h1>
          <div>
            <ul className="list-disc pl-4 text-text">
              <li>Web Development</li>
              <li>Machine Learning</li>
              <li>Games</li>
              <li>Anime/Movies</li>
            </ul>
          </div>
        </div>
        <div className="text-center md:col-span-4">
          <h1 className="text-lg font-semibold mb-2 text-text ">
            Technical Skills
          </h1>
          <div className="flex flex-wrap gap-2 justify-center">
            {developmentTools.map((tool, index) => (
              <CustomSpan key={index} title={tool} note={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
