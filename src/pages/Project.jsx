import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop.jsx";
import Reveal from "../Components/Reveal.jsx";
import { Images } from "../utils/utils.js";

const project_list = {
  CodeNotes: {
    id: "0",
    source: [
      Images.CodeNotes1,
      Images.CodeNotes2,
      Images.CodeNotes3,
      Images.CodeNotes4,
      Images.CodeNotes5,
      Images.CodeNotes6,
      Images.CodeNotes7,
    ],
    info: "CodeNotes is platform for sharing and discovering snippets. Easily create, format, and organize your snippets for various purposes.",
    tech: "React, Vite, shadCN, TanStack Query, React Router, TailwindCSS, Flask, SQLite, Waitress, Firebase Authentication, Nginx, Docker",
    url: "https://earleustacio.me/",
  },
  ExploreBooks: {
    id: "1",
    source: [
      Images.explore_books1,
      Images.explore_books2,
      Images.explore_books3,
      Images.explore_books4,
      Images.explore_books5,
    ],
    info: "Developed as a project to hone full-stack development skills, this application integrates Node.js, Express, Next.js, to create a feature-rich experience for book enthusiasts. The primary goal of ExploreBooks is to allow users to add, delete, and edit books with PDF attachments, while also offering public access for anyone to view and download PDFs.",
    tech: "Next.js, Reactjs, Tailwindcss, Nodejs, Express, Mongodb, Firebase",
    url: "https://explorebooks.vercel.app/",
  },
  pde: {
    id: "2",
    source: [Images.pde1, Images.pde2, Images.pde3, Images.pde4, Images.pde5],
    info: "Price Data Exchange (PDE) is a web application designed to provide historical data on fiat currencies, cryptocurrencies, and stocks, along with confidence indicators. It's built for practicing Laravel PHP and MySQL.",
    tech: "Laravel, PHP, MySql, DaisyUi, Tailwindcss",
    url: "https://github.com/EEarlll/Price-data-exchange",
  },
  "TTAIL Attendance System": {
    id: "3",
    source: [Images.Ttail1, Images.Ttail2, Images.Ttail3],
    info: "This project involves the development of an advanced attendance system using PHP and MySQL, enhanced with GSM module integration for SMS notifications. The primary features include QR code-based attendance recording and automated SMS alerts to ensure efficient and reliable attendance tracking. The system has been successfully implemented in two educational institutions: The Thomas Aquinas Institute of Learning and Southwoods School of Cavite.",
    tech: "PHP, MySQL, HTML, CSS, JavaScript, QR Code Libraries/Tools, GSM Module",
    url: "https://github.com/EEarlll/TTAIL",
  },
  Portfolio: {
    id: "4",
    source: [Images.Portfolio1, Images.Portfolio2],
    info: "Created to showcase and practice web development skills.",
    tech: "React, Vite, Tailwindcss, Framer Motion",
    url: "/",
  },
  Pomodoro: {
    id: "5",
    source: [
      Images.Pomodoro1,
      Images.Pomodoro2,
      Images.Pomodoro3,
      Images.Pomodoro4,
      Images.Pomodoro5,
    ],
    info: "This is a simple web application made to practice the fundamentals of HTML/CSS/JS. The Pomodoro Technique is a time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.",
    tech: "HTML, CSS, JS",
    url: "https://eearlll.github.io/Pomodoro/",
  },
  "Movie Reservation System": {
    id: "6",
    source: [
      Images.MRS1,
      Images.MRS2,
      Images.MRS3,
      Images.MRS4,
      Images.MRS5,
      Images.MRS6,
    ],
    info: "The Movie Reservation System is a web application designed to allow users to browse, search, and reserve movie tickets. It provides a comprehensive list of movies, including details such as genre, plot, runtime, and poster images.",
    tech: "ASP.NET Core MVC, Entity Framework, SQL Server, Bootstrap, Razor",
    url: "https://github.com/EEarlll/MovieReservationSystemMVC",
  },
  "Filipino Translate Dictionary": {
    id: "7",
    source: [Images.Ftd1, Images.Ftd2, Images.Ftd3, Images.Ftd4],
    info: "This project is a comprehensive language translation and dictionary service specializing in Filipino languages such as Ilocano, Hiligaynon, Cebuano, and Tagalog. The application leverages Google Translate for translations and utilizes a dictionary populated with data scraped from multiple sources.",
    tech: "Angular, Angular Material, Google Translate API, Express.js, Puppeteer, PostgreSQL",
    url: "https://filipino-translate-dictionary.vercel.app/",
  },
  "E-Trends": {
    id: "8",
    source: [
      Images.e_trends1,
      Images.e_trends2,
      Images.e_trends3,
      Images.e_trends4,
      Images.e_trends5,
    ],
    info: "Created this website with the intention of learning and exploring various technologies. My primary focus has been on Vite, React, and Tailwind CSS.",
    tech: "Vite, React, and Tailwind CSS",
    url: "https://e-trends.vercel.app/",
  },
  "Wikipedia Summarized": {
    id: "9",
    source: [Images.Cortex1, Images.Cortex2, Images.Cortex3],
    info: "This project is a web application that provides summarized information from Wikipedia articles. It utilizes the Wikipedia API to fetch article content and employs Gemini 2.5 Flash model to generate concise summaries.",
    tech: "Angular, PrimeNG, Gemini 2.5 Flash, MediaWiki API, firebase",
    url: "https://cortex-645b7.web.app/",
  },
  "Gemini CLI": {
  id: "10",
    source: [Images.GeminiCli1],
    info: "Gemini CLI is a command-line interface (CLI) tool designed to interact with the Gemini protocol. It allows users to access and interact with gemini, providing a simple and efficient way to call api in a text-based environment.",
    tech: "Bash, Gemini Protocol, curl, jq",
    url: "https://github.com/EEarlll/gemini-cli"
  }
};

const Project = () => {
  const { id } = useParams();
  const [srcIndex, setsrcIndex] = useState(0);

  useEffect(() => {
    console.log(srcIndex);
  }, [srcIndex]);

  return (
    <>
      <ScrollToTop />
      {/* container */}
      <Reveal background={"#5918df"} x={75}>
        <div className="flex md:flex-row flex-col">
          {/* sidebar */}

          <div className="p-11 min-w-[30%] bg-bg2 md:sticky top-0 h-screen md:w-[30%] w-full flex flex-col">
            <nav className="flex justify-between text-text pb-12">
              <div className="pointer_event">
                <Link to={"/"}>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    fill="#ffffff"
                    width={45}
                    height={45}
                    className="hover:scale-110 duration-300 ease-in-out pointer_event"
                  >
                    <g
                      id="SVGRepo_bgCarrier"
                      stroke-width="0"
                      className="pointer_event"
                    ></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="pointer_event"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <circle
                        fill="#5918df"
                        cx="256"
                        cy="256"
                        r="256"
                        className="pointer_event"
                      ></circle>
                      <g>
                        <polygon
                          fill="#f9f9f9"
                          className="pointer_event"
                          points="213.2,332.464 110.432,256 213.2,179.52 222.768,192.368 137.248,256 222.768,319.616 "
                        ></polygon>
                        <rect
                          x="123.84"
                          y="248"
                          fill="#f9f9f9"
                          width="277.696"
                          height="16"
                          className="pointer_event"
                        ></rect>
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>
              <div className="flex justify-center items-center gap-4">
                {/* left arrow */}
                <div
                  className="pointer_event"
                  onClick={() =>
                    setsrcIndex((prevIndex) =>
                      prevIndex - 1 < 0
                        ? project_list[id].source.length - 1
                        : prevIndex - 1
                    )
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    className="pointer_event"
                  >
                    <g
                      id="SVGRepo_bgCarrier"
                      stroke-width="0"
                      className="pointer_event"
                    ></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="pointer_event"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M15 5L9 12L15 19"
                        stroke="#5918df"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="pointer_event"
                      ></path>
                    </g>
                  </svg>
                </div>
                {/* middle */}
                <h1 className="text-secondarytext text-2xl">{srcIndex + 1}</h1>
                {/* right arrow */}
                <div
                  className="pointer_event"
                  onClick={() =>
                    setsrcIndex((prevIndex) =>
                      prevIndex + 1 > project_list[id].source.length - 1
                        ? 0
                        : prevIndex + 1
                    )
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(180)"
                    width={25}
                    height={25}
                    className="pointer_event"
                  >
                    <g
                      id="SVGRepo_bgCarrier"
                      stroke-width="0"
                      className="pointer_event"
                    ></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="pointer_event"
                    ></g>
                    <g id="SVGRepo_iconCarrier" className="pointer_event">
                      <path
                        d="M15 5L9 12L15 19"
                        stroke="#5918df"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="pointer_event"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </nav>
            <section className="text-secondarytext pb-12">
              <h1 className=" text-3xl">Technology Used: </h1> <br />
              <ul>
                <li>{project_list[id].tech}</li>
              </ul>
            </section>
            <main className="text-text grow">
              <strong className="text-4xl">{id}</strong>
              <p className="text-wrap tracking-wide">
                <br />
                {project_list[id].info}
              </p>
              {project_list[id].url && (
                <div className="bg-primary p-4 rounded-full md:px-10 my-12  hover:scale-110 ease-out duration-300 hover:shadow-lg hover:shadow-primary/50 tracking-widest w-fit pointer_event">
                  <a
                    href={project_list[id].url}
                    target="_blank"
                    className="text-xl pointer_event"
                  >
                    Visit Site
                  </a>
                </div>
              )}
            </main>
            <footer className="flex">
              <div className=" bg-white h-[2px] my-4 rounded-full w-[90%]"></div>
              <h1 className="text-text pl-12 flex justify-center items-center">
                {project_list[id].id}
              </h1>
            </footer>
          </div>
          {/* main */}
          <div className="grow flex items-center justify-center bg-black">
            <img
              key={project_list[id].source[srcIndex]}
              src={`${project_list[id].source[srcIndex]}`}
              alt={id}
              className="h-full object-contain"
            />
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Project;
