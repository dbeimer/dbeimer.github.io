import React, { useState } from "react";

import WrittingText from "../components/WrittingText";
import VirtualAssistantOverlay from "../components/VirtualAssistantOverlay";

export default function HeroWithAssistant() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  return (
    <section className="w-full md:pt-16 mb-12 md:mb-20">
      <div className="flex justify-center mb-5 md:hidden hero-image-reveal">
        <div
          className="glitch-img scanlines w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden cursor-pointer"
          style={{ backgroundImage: "url('/profile.png')" }}
        >
          <img
            src="/profile.png"
            width={160}
            height={160}
            alt="profile image"
            className="w-full h-full object-cover object-center grayscale contrast-110"
          />
        </div>
      </div>

      <div
        className="hidden md:block float-right ml-8 mb-4 hero-image-reveal"
      >
        <div
          className="glitch-img scanlines w-48 lg:w-56 aspect-[3/4] overflow-hidden cursor-pointer"
          style={{ backgroundImage: "url('/profile.png')" }}
        >
          <img
            src="/profile.png"
            width={224}
            height={300}
            alt="profile image"
            className="w-full h-full object-cover object-center grayscale contrast-110"
          />
        </div>
      </div>

      <div className="text-center md:text-left">
        <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter hero-text-reveal">
          <WrittingText text="Beimer Campos" />
        </h1>
        <p className="font-mono text-[10px] sm:text-xs text-black/30 dark:text-white/30 mt-1.5 tracking-wider hero-text-reveal">
          Backend Software Engineer
        </p>
        <p className="text-black/50 dark:text-white/50 text-xs sm:text-sm leading-relaxed font-body mt-4 md:mt-6 hero-text-reveal-delay text-left">
          Soy PROGRAMADOR BACKEND, actualmente trabajo con los lenguajes de NodeJS
          y Python, tengo experiencia en procesamiento de datos tipo batch,
          desarrollo de APIs REST y administración de bases de datos SQL y noSQL
          ,soy alguien a quien le gusta aprender y compartir lo aprendido, uno de
          los temas que me interesa mucho es el Machine Learnig y estoy
          aprendiendo cosas al respecto, si tienes una empresa puedo ayudarte con
          mis servicios y si eres programador podemos compartir retos juntos.
        </p>
        <div className="mt-4 md:mt-6 flex flex-wrap gap-3 justify-center md:justify-start hero-text-reveal-delay-2">
          <button
            className="font-mono text-[10px] sm:text-[11px] bg-black dark:bg-white text-white dark:text-black uppercase tracking-widest px-4 sm:px-5 py-2 sm:py-2.5 hover:opacity-70 transition-all duration-300 active:scale-95"
            onClick={() => setAssistantOpen(true)}
          >Contactar</button>
          <a
            target="_blank"
            className="font-mono text-[10px] sm:text-[11px] border border-black dark:border-white uppercase tracking-widest px-4 sm:px-5 py-2 sm:py-2.5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 active:scale-95"
            href="/CV.pdf">Download CV</a>
        </div>
      </div>

      <div className="clear-both" />
      <VirtualAssistantOverlay open={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </section>
  );
}
