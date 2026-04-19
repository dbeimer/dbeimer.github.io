import React, { useEffect, useRef, useState } from "react";
import "../styles/assistant-entrance.css";

interface VirtualAssistantOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function VirtualAssistantOverlay({ open, onClose }: VirtualAssistantOverlayProps) {
  const circleRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(open);
  const [animState, setAnimState] = useState<"in" | "out" | null>(null);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setAnimState("in");
    } else if (visible) {
      setAnimState("out");
      setTimeout(() => setVisible(false), 3000);
    }
  }, [open]);

  const classAnimation = animState === "in" ? "" : animState === "out" ? " animating-out" : "";

  return (
    <div
      className={"assistant fixed flex inset-0 z-[1000] bg-white/80 dark:bg-black/80 backdrop-blur-sm" + (visible ? "" : " hidden")}
      onClick={e => {
        if (
          e.target === e.currentTarget ||
          (circleRef.current && circleRef.current === e.target)
        ) {
          onClose();
        }
      }}
    >
      <div className={"ring-container" + classAnimation} onClick={() => onClose()}>
        <div
          className={
            `neon-ring` +
            classAnimation
          }
          ref={circleRef}
          onClick={e => e.stopPropagation()}
          style={{ pointerEvents: 'auto' }}
        />
      </div>
      <div className="fixed bottom-0 left-0 w-full z-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 sm:py-5 border-t border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-md flex flex-row items-center justify-center text-center relative">
          <span className="text-xs sm:text-sm text-black/70 dark:text-white/70 tracking-wide block w-full pr-8">
            Esta funcionalidad está siendo construida.<br />
            Pronto podrás interactuar con un asistente virtual inteligente.
          </span>
          <button
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center hover:opacity-50 text-lg transition-opacity"
            onClick={onClose}
            aria-label="Cerrar"
            style={{ pointerEvents: 'auto' }}
          >&#10005;</button>
        </div>
      </div>
    </div>
  );
}
