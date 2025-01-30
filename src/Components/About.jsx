import React from "react";

const CodeStyle = ({ text, color, dot }) => {
  const text_color = {
    method: "text-green",
    object: "text-yellow",
    comment: "text-secondarytext",
    primary: "text-primary",
    instance: "text-red-400",
    white: "text-white",
    instance_name: "text-light_green",
    number: "text-orange-400",
  };
  const dots = Array.from({ length: dot }, (_, index) => (
    <span
      key={index}
      className="text-accent md:inline-block transform -translate-y-1 pr-2 text-sm hidden"
    >
      .
    </span>
  ));
  return (
    <span>
      {dots}
      <span className={`tracking-widest ${text_color[color]}`}>{text}</span>
    </span>
  );
};

const SkillStyle = ({ num, text }) => {
  return (
    <div
      className={`hover:bg-[#231D28] before:content-[attr(data-num)] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent`}
      data-num={num}
    >
      <CodeStyle text={"{ "} color={"white"} dot={6} />
      <CodeStyle text={text} color={"method"} />
      <CodeStyle text={"  } ,"} color={"white"} />
    </div>
  );
};

const EducationStyle = ({ num, text }) => {
  return (
    <div
      className={`hover:bg-[#231D28] before:content-[attr(data-num)] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent`}
      data-num={num}
    >
      <CodeStyle text={"{ "} color={"white"} dot={6} />
      <CodeStyle text={text} color={"method"} />
      <CodeStyle text={"  } ,"} color={"white"} />
    </div>
  );
};

const SkillList = [
  "'HTML/CSS/JS', 'Bootstrap/Tailwind', 'Webpack/Vite'",
  "'npm/yarn/pip', 'SSR', 'SPA', 'GIT'",
  "'Firebase', 'MySQL', 'MongoDB', 'MsSQL', 'PostgreSQL', 'SQLite'",
  "'Wordpress', 'React', 'Angular' ,'React Native' ,'NextJS', 'Laravel', 'ASP.NET Core','Pytorch'",
  "'C#', 'Python', 'C', 'PHP', 'Node.js', 'Typescript'",
];

const EducationList = [
  "'2006-2012': 'Jubileum Academy'",
  "'2012-2019': 'The Thomas Aquinas Institute of Learning'",
  "'2019-Present': 'Lyceum of the Philippines University Cavite - Bachelor of Engineering Major in Computer Engineering'",
];

function About() {
  return (
    <div className=" min-h-[100vh] bg-[#14121c]" id="about">
      <div className=" text-text flex justify-left  min-h-[100vh]">
        <div className="min-w-[97%]">
          <div className="text-l md:text-lg pt-12 pl-[20%]">
            <p className="text-secondarytext pb-4">About /&gt;</p>
            {/* class */}
            <div className="hover:bg-[#231D28] before:content-['01'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"class "} color={"primary"} />
              <CodeStyle text={"Earlvin Eustacio"} color={"object"} />
              <CodeStyle text={" :"} color={"white"} /> <br />
            </div>
            <div className="hover:bg-[#231D28] before:content-['02'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle
                text={"// A goal without a plan is just a wish."}
                color={"comment"}
                dot={2}
              />
              <br />
            </div>
            <div className="hover:bg-[#231D28] before:content-['03'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle
                text={"// Never give up, believe in yourself."}
                color={"comment"}
                dot={2}
              />
              <br />
            </div>
            <br />

            {/* constructor */}
            <div className="hover:bg-[#231D28] before:content-['04'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"def "} color={"primary"} dot={2} />
              <CodeStyle text={"__init__"} color={"object"} />
              <CodeStyle text={"("} color={"white"} />
              <CodeStyle text={"self"} color={"instance"} />
              <CodeStyle text={"):"} color={"white"} />
              <br />
            </div>
            <div className="hover:bg-[#231D28] before:content-['05'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"self"} color={"instance"} dot={4} />
              <CodeStyle text={"."} color={"white"} />
              <CodeStyle text={"name"} color={"instance_name"} />
              <CodeStyle
                text={" = 'Earlvin Nocon Eustacio'"}
                color={"method"}
              />
              <br />
            </div>
            <div className="hover:bg-[#231D28] before:content-['06'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"self"} color={"instance"} dot={4} />
              <CodeStyle text={"."} color={"white"} />
              <CodeStyle text={"day_of_birth"} color={"instance_name"} />
              <CodeStyle text={" = 20020714"} color={"number"} />
              <br />
            </div>
            <div className="hover:bg-[#231D28] before:content-['07'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"self"} color={"instance"} dot={4} />
              <CodeStyle text={"."} color={"white"} />
              <CodeStyle text={"email"} color={"instance_name"} />
              <CodeStyle
                text={" = 'earleustacio@gmail.com'"}
                color={"method"}
              />
              <br />
            </div>
            <br />

            {/* Method 1  Education*/}

            <div className="hover:bg-[#231D28] before:content-['08'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"def "} color={"primary"} dot={2} />
              <CodeStyle text={"education"} color={"object"} />
              <CodeStyle text={"("} color={"white"} />
              <CodeStyle text={"self"} color={"instance"} />
              <CodeStyle text={"):"} color={"white"} />
              <br />
            </div>
            <div className="hover:bg-[#231D28] before:content-['09'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"return"} color={"primary"} dot={4} />
              <CodeStyle text={" ["} color={"white"} />
            </div>
            {EducationList.map((education, index) => (
              <EducationStyle text={education} num={index + 10} />
            ))}
            <div className="hover:bg-[#231D28] before:content-['13'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"]"} color={"white"} dot={4} />
            </div>
            <br />

            {/* Method 2 Skills */}
            <div className="hover:bg-[#231D28] before:content-['14'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"def "} color={"primary"} dot={2} />
              <CodeStyle text={"skills"} color={"object"} />
              <CodeStyle text={"("} color={"white"} />
              <CodeStyle text={"self"} color={"instance"} />
              <CodeStyle text={"):"} color={"white"} />
              <br />
            </div>
            <div className="hover:bg-[#231D28] before:content-['15'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"return"} color={"primary"} dot={4} />
              <CodeStyle text={" ["} color={"white"} />
            </div>
            {SkillList.map((skill, index) => (
              <SkillStyle text={skill} num={index + 16} />
            ))}
            <div className="hover:bg-[#231D28] before:content-['21'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"]"} color={"white"} dot={4} />
            </div>
            <br />

            {/* Method 3  Others*/}
            <div className="hover:bg-[#231D28] before:content-['22'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"def "} color={"primary"} dot={2} />
              <CodeStyle text={"Introduction"} color={"object"} />
              <CodeStyle text={"("} color={"white"} />
              <CodeStyle text={"self"} color={"instance"} />
              <CodeStyle text={"):"} color={"white"} />
              <br />
            </div>
            <div className="hover:bg-[#231D28] before:content-['23'] before:left-[10%] before:md:left-[12.5%] before:absolute before:text-accent">
              <CodeStyle text={"return"} color={"primary"} dot={4} />
              <CodeStyle
                text={
                  " f\"Hi, I'm {self.name}. I'm currently pursuing BSCPE at LPU Cavite. "
                }
                color={"method"}
              />{" "}
              <br />
              <CodeStyle
                text={
                  "I have experience in various technologies, including {', '.join(self.skills())}. \""
                }
                color={"method"}
                dot={6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
