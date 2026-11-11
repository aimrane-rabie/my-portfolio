import React, { useEffect, useState } from "react";
import {
  sections,
  skillCategories,
  skillLevels,
  getProjectById,
  skills,
} from "../data/portfolioData";
import SkillIcon from "./UI/SkillIcon";
import SkillsMarquee from "./UI/SkillsMarquee";

import Tabs from "./UI/Tabs";

export default function Skills() {
  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Databases",
    "DevOps",
  ];
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [filltredSkills, setFilltredSkills] = useState(skills);

  useEffect(() => {
    if (activeTab === "All") {
      setFilltredSkills(skills);
    } else {
      const filtredData = skills.filter(
        (skill) => skill.category.toLowerCase() === activeTab.toLocaleLowerCase(),
      );
      setFilltredSkills(filtredData);
    }
  }, [activeTab,skills]);

  return (
    <section>
      <div className="wrap p-6 flex flex-col gap-4 sm-gap-8">
        <div className="skills-head flex flex-col gap-4">
          <div className="reveal flex flex-col gap-3">
            <div className="text-primary text-heading text-xl font-semibold font-heading tracking-wider">
              {sections.skills.eyebrow}
            </div>
            <h2 className="font-bold text-3xl font-heading tracking-wide text-ink">
              {sections.skills.title}
            </h2>
            <p className="tracking-wide text-muted">
              {sections.skills.subtitle}
            </p>
          </div>
          <div className="tabs-scroll ">
            <Tabs
              tabs={categories}
              onChange={(index) => setActiveTab(categories[index])}
            />
          </div>
        </div>
        <div className="marques ">
          <SkillsMarquee />
        </div>
        <div className="skillGrid w-full p-6 flex justify-center">
          <div className="wrap w-[100%] justify-center grid grid-cols-[repeat(auto-fit,minmax(280px,280px))] gap-4 ">
            {
                filltredSkills.map((skill,index)=>(
                    
                    <div key={index} className="card w-[16rem] p-4 h-40 flex flex-col gap-4 rounded-xl bg-surface hover:ring-2 hover:ring-primary hover:shadow-lg shadow-primary cursor-pointer group">
                    <div className="front-content group-hover:hidden flex flex-col gap-1">
                        <SkillIcon
                        name={skill.icon}
                        fill={skill.brand}
                        className="size-8 mb-6"
                        />
                        <h3 className="font-semibold font-heading text-ink">
                        {skill.name}
                        </h3>
                        <p className='text-muted relative before:content-[""] before:absolute before:w-2 before:h-2 before:-left-2 before:bottom-1.5 before:bg-primary before:rounded-full px-1 ml-2'>
                        {skill.level.charAt(0).toUpperCase() +
                            skill.level.slice(1)}
                        </p>
                    </div>
                    <div className="back-content group-hover:flex flex-col gap-3 hidden ">
                        <h3 className="text-primary font-heading">
                        USED IN PROJECT {getProjectById(skill.project)?.number}
                        </h3>
                        <p className="text-muted text-sm">{skill.usage}</p>
                        <a href={"#"+skill.project} className="text-ink block flex items-center gap-1">
                        See the project
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-3 mt-1"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                        </svg>
                        </a>
                    </div>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
