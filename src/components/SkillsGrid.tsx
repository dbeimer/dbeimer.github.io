import React from "react";
import { SiNodedotjs, SiNestjs, SiPython, SiLinux, SiHtml5, SiExpress, SiGooglebigquery, SiMongodb, SiPostgresql, SiRabbitmq, SiGithub } from "react-icons/si";

const skills = [
  { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "APIs REST", icon: SiExpress, color: "#000000" },
  { name: "BigQuery", icon: SiGooglebigquery, color: "#4285F4" },
  { name: "Mongo", icon: SiMongodb, color: "#47A248" },
  { name: "Postgres", icon: SiPostgresql, color: "#336791" },
  { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
  { name: "Git & Github", icon: SiGithub, color: "#181717" },
];

export default function SkillsGrid() {
  return (
    <div className="grid sm:grid-cols-6 grid-cols-3 divide-x divide-y divide-zinc-700/40 dark:divide-blue-900/60 bg-transparent overflow-hidden rounded-xl">
      {skills.map((skill, i) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center py-6 px-2 md:py-8 md:px-4 transition-all duration-300 hover:bg-blue-900/20 hover:scale-105 cursor-pointer group"
        >
          <skill.icon
            className={
              "w-9 h-9 md:w-12 md:h-12 mb-2 opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_var(--glow)]"
            }
            style={{
              color: (typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && ["#000000", "#181717"].includes(skill.color)) ? "#fff" : skill.color,
              // --glow: blanco puro si el icono es negro en dark mode, si no, el color del icono
              '--glow': (typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && ["#000000", "#181717"].includes(skill.color)) ? '#fff' : skill.color
            } as React.CSSProperties}
            aria-label={skill.name}
          />
          <span className="text-xs md:text-sm font-semibold text-zinc-800 dark:text-zinc-200 text-center select-none">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}
