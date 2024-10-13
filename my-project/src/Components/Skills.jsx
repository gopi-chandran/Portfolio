import React from "react";
import SkillsLevel from "./SkillsLevel";

export default function Skills () {
  return (
    <section id="skills" className="bg-white-500 dark:bg-slate-800 dark:text-white ">
      <div className="container md:w-[70%] sm:py-1 py-10 flex justify-center md:justify-end">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="sm:order-2 font-bold relative ">
            
            <h1 className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-3x5 md:text-4xl">
              Skills
            </h1>
          </div>
          <div className="text-black-400 sm:order-2 ">
            <SkillsLevel skillsName="HTML" percentage="75%" />
            <p className="font-bold">Experience:8 Months made 4 projects using Html</p>
            <SkillsLevel skillsName="CSS" percentage="60%" />
            <p className="font-bold">Experience:7 Months made 2 projects using CSS</p>
            <SkillsLevel skillsName="JavaScript" percentage="70%" />
            <p className="font-bold">Experience:5 Months made 3 projects using JS</p>
            <SkillsLevel skillsName="React.js" percentage="75%" />
            <p className="font-bold">Experience:2 Months made 3 projects using React.js</p>
            <SkillsLevel skillsName="Tailwind" percentage="50%" />
            <p className="font-bold">Experience:1 Month</p>
            <SkillsLevel skillsName="Node.js" percentage="20%" />
            <p className="font-bold">Experience:2 Months</p>
          </div>
        </div>
      </div>
    </section>
  );
};

