import React from "react";

interface JobItemProps {
  company: string;
  jobTitle: string;
  period: string;
  description: string;
  className?: string;
}

const JobItem: React.FC<JobItemProps> = ({ company, jobTitle, period, description, className = "" }) => {
  const isCurrent = /actualmente|currently/i.test(period);
  const colorClass = isCurrent
    ? "bg-green-500/10 text-green-900 dark:text-green-300 border-green-500"
    : "bg-red-500/10 text-red-900 dark:text-red-300 border-red-500";
  const periodColorClass = isCurrent ? "bg-green-700" : "bg-red-700";
  const symbol = isCurrent ? " + " : " - ";

  return (
    <section
      className={`border-l-2 px-4 pb-4 my-4 ${colorClass} ${className}`}
      role="listitem"
      aria-label={`${jobTitle} en ${company}`}
    >
      <header className="flex items-center gap-2 mb-1">
        <span className="font-semibold">{symbol}{company}</span>
      </header>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="text-base font-medium">{jobTitle}</span>
        <span className={`text-white rounded-lg text-xs px-2 py-0.5 ${periodColorClass}`}>{period}</span>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </section>
  );
};

export default JobItem;