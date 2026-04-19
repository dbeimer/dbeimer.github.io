import React, { useEffect, useRef } from "react";

interface Job {
  position: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceTimelineProps {
  jobs: Job[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ jobs }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -30px 0px" }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative border-l border-black/15 dark:border-white/15 pl-6 sm:pl-8 ml-1 sm:ml-2">
      {jobs.map((job, idx) => (
        <div
          key={idx}
          className="timeline-item mb-8 sm:mb-10 group relative opacity-0 translate-x-[-16px]"
          style={{
            transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${idx * 120}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${idx * 120}ms`,
          }}
        >
          <div className="absolute -left-[calc(1.5rem+3.5px)] sm:-left-[calc(2rem+3.5px)] top-2 w-[7px] h-[7px] border border-black dark:border-white bg-white dark:bg-black transition-all duration-500 group-hover:bg-black dark:group-hover:bg-white group-hover:scale-150" />
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-black/30 dark:text-white/30">
              {job.period}
            </span>
            {idx === 0 && (
              <span className="font-mono text-[8px] sm:text-[9px] tracking-widest uppercase text-black/20 dark:text-white/20 border border-black/15 dark:border-white/15 px-1.5 py-0.5">active</span>
            )}
          </div>
          <h3 className="font-mono text-xs sm:text-sm font-semibold tracking-tight group-hover:translate-x-1 transition-transform duration-300">{job.position}</h3>
          <div className="font-mono text-[10px] sm:text-xs text-black/40 dark:text-white/40">{job.company}</div>
          {job.description && (
            <div className="text-[10px] sm:text-xs text-black/30 dark:text-white/30 mt-1 leading-relaxed font-body">{job.description}</div>
          )}
        </div>
      ))}
      <style>{`
        .timeline-item.visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </div>
  );
};

export default ExperienceTimeline;
