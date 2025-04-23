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
      className={"assistant fixed flex inset-0 z-[1000] bg-black/40 dark:bg-[#0a0a23]/60 backdrop-blur-sm" + (visible ? "" : " hidden")}
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
        <div className="glass-futuristic-card max-w-2xl mx-auto px-6 py-5 rounded-t-2xl border border-white/40 backdrop-blur-lg flex flex-row items-center justify-center text-center relative"
          style={{
            background: "rgba(255,255,255,0.10)",
          }}>
          <span className="text-white text-base font-normal tracking-wide drop-shadow block w-full">
            Esta funcionalidad está siendo construida 🚧<br />
            Pronto podrás interactuar con un asistente virtual inteligente, capaz de responder preguntas, ayudarte a navegar el sitio y mucho más.
          </span>
          <button
            className="absolute top-1 right-1 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white text-xl font-bold backdrop-blur-md"
            onClick={onClose}
            aria-label="Cerrar"
            style={{ pointerEvents: 'auto' }}
          >&#10005;</button>
        </div>
      </div>
    </div>
  );
}
