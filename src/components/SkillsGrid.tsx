import React, { useEffect, useRef } from "react";
import { SiNodedotjs, SiNestjs, SiPython, SiLinux, SiHtml5, SiExpress, SiGooglebigquery, SiMongodb, SiPostgresql, SiRabbitmq, SiGithub } from "react-icons/si";

const skills = [
  { name: "NodeJS", icon: SiNodedotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "Python", icon: SiPython },
  { name: "Linux", icon: SiLinux },
  { name: "HTML5", icon: SiHtml5 },
  { name: "APIs REST", icon: SiExpress },
  { name: "BigQuery", icon: SiGooglebigquery },
  { name: "Mongo", icon: SiMongodb },
  { name: "Postgres", icon: SiPostgresql },
  { name: "RabbitMQ", icon: SiRabbitmq },
  { name: "Git", icon: SiGithub },
];

export default function SkillsGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 overflow-hidden reveal-stagger border-l border-t border-black/10 dark:border-white/10">
      {skills.map((skill, i) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center py-6 px-2 sm:py-8 md:py-10 md:px-4 cursor-pointer group border-b border-r border-black/10 dark:border-white/10 transition-all duration-300"
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          <skill.icon
            className="skill-icon w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 mb-2 sm:mb-3 opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
            style={{ color: "currentColor" }}
            aria-label={skill.name}
          />
          <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider text-center select-none text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-all duration-300">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}
