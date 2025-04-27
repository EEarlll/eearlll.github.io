import React from "react";
import Cards from "./Cards";

const projects = [
  {
    img_src: "CodeNotes_logo.png",
    caption: "CodeNotes",
    project: "CodeNotes",
  },
  {
    img_src: "explore_books_logo.png",
    caption: "ExploreBooks",
    project: "ExploreBooks",
  },
  {
    img_src: "pde_logo.png",
    caption: "Price Data Exchange",
    project: "pde",
  },
  {
    img_src: "MRS_logo.png",
    caption: "Movie Reservation System",
    project: "Movie Reservation System",
  },
  {
    img_src: "TTAIL_logo.png",
    caption: "TTAIL Attendance System",
    project: "TTAIL Attendance System",
  },
  {
    img_src: "portfolio_logo.png",
    caption: "This Site",
    project: "Portfolio",
  },
  {
    img_src: "Ftd_logo.png",
    caption: "Filipino Translate Dictionary",
    project: "Filipino Translate Dictionary",
  },
  {
    img_src: "E-Trends_logo.png",
    caption: "E-Trends",
    project: "E-Trends",
  },
  {
    img_src: "Cortex_logo.png",
    caption: "Wikipedia Summarized",
    project: "Wikipedia Summarized",
  },
  {
    img_src: "GeminiCli_logo.png",
    caption: "Gemini CLI",
    project: "Gemini CLI",
  },
];

const chunkProjects = (arr) => {
  const chunks = [];
  let i = 0,
    chunkSize = 3;

  while (i < arr.length) {
    chunks.push(arr.slice(i, i + chunkSize));
    i += chunkSize;
    chunkSize = chunkSize === 3 ? 2 : 3; // Toggle between 3 and 2
  }

  return chunks;
};

const Work = () => {
  const projectRows = chunkProjects(projects);
  console.log(projectRows);
  let rowNum = 0;

  return (
    <div className="bg-[#0f0d15] min-h-[100vh] pt-5 w-full" id="work">
      <div className=" max-w-[60%] mx-auto text-xl md:text-2xl lg:text-3xl mt-12 relative">
        <p className="text-lg text-secondarytext">Work /&gt;</p>
        <p className="font-bold text-secondarytext">
          Selected web, application projects...
        </p>
      </div>
      <span className="text-[4rem] md:text-[6rem] xl:text-[8rem] text-secondary absolute font-sans font-bold right-0">
        Projects
      </span>

      {/* 3 grids */}
      {projectRows.map((row, projectRowIndex) => {
        return (
          <div
            key={projectRowIndex}
            className={`grid grid-cols-1 ${
              row.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
            } gap-12 md:gap-0 items-end pt-14`}
          >
            {row.map((project, index) => {
              return (
                <div
                  key={index}
                  className={`mx-auto pl-36 md:m-0 ${
                    index === 0 && row.length === 3
                      ? "md:pt-32"
                      : index === 1 && row.length === 3
                      ? "md:pb-32"
                      : index === 0 && row.length === 2
                      ? "md:pl-72"
                      : index === 1 && row.length === 2
                      ? "md:pr-32"
                      : ""
                  }`}
                >
                  <Cards
                    img_src={project.img_src}
                    caption={project.caption}
                    project={project.project}
                    num={rowNum++}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Work;
