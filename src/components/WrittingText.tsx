import React, { useState, useEffect, useRef } from "react";

type WrittingTextProps = {
  text: string;
  className?: string;
};

const WrittingText: React.FC<WrittingTextProps> = ({ text, className = "" }) => {
  const [part, setTextPart] = useState("");
  const indexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTextPart("");
    indexRef.current = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      indexRef.current++;
      setTextPart(text.slice(0, indexRef.current));
      if (indexRef.current === text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 80);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  return (
    <span className={className} aria-live="polite">
      {part}
      <b className="animate-pulse text-blue-600 dark:text-blue-400">_</b>
    </span>
  );
};

export default WrittingText;