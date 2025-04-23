import React from "react";

interface Job {
  position: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceTimelineProps {
  jobs: Job[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ jobs }) => (
  <div className="relative border-l-2 border-blue-500/30 pl-6">
    {jobs.map((job, idx) => (
      <div key={idx} className="mb-8 group relative">
        <div className="absolute -left-3 top-4 w-6 h-6 rounded-full bg-blue-500/80 border-4 border-white dark:border-[#0a0a23] group-hover:scale-110 transition-transform" />
        <div className="bg-white/80 dark:bg-[#181f3a]/80 rounded-xl shadow-sm border border-zinc-200 dark:border-blue-900/40 p-4 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-300 transition">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-blue-700 dark:text-blue-300">{job.position}</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-300">{job.period}</span>
          </div>
          <div className="text-zinc-700 dark:text-zinc-200 font-semibold">{job.company}</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{job.description}</div>
        </div>
      </div>
    ))}
  </div>
);

export default ExperienceTimeline;
