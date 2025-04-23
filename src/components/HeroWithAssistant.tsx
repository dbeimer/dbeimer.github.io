import React, { useState } from "react";

import WrittingText from "../components/WrittingText";
import VirtualAssistantOverlay from "../components/VirtualAssistantOverlay";

export default function HeroWithAssistant() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  return (
    <section className="w-full lg:pt-20 md:pt-20 md:flex md:items-center mb-16">
      <img src="/profile.jpeg"
        width={100}
        height={100}
        alt="profile image" className="shadow w-fit md:w-64 rounded-3xl" />
      <div className="h-fit md:pl-4">
        <h1 className="text-3xl my-4 text-center md:text-left">
          <WrittingText text="Hola, mi nombre es Beimer" />
        </h1>
        <p className="md:mt-5 text-gray-500 dark:text-gray-400 text-justify">
          Soy PROGRAMADOR BACKEND, actualmente trabajo con los lenguajes de NodeJS
          y Python, tengo experiencia en procesamiento de datos tipo batch,
          desarrollo de APIs REST y administración de bases de datos SQL y noSQL
          ,soy alguien a quien le gusta aprender y compartir lo aprendido, uno de
          los temas que me interesa mucho es el Machine Learnig y estoy
          aprendiendo cosas al respecto, si tienes una empresa puedo ayudarte con
          mis servicios y si eres programador podemos compartir retos juntos.
        </p>
        <div className="mt-4 flex justify-around md:justify-between lg:justify-end">
          <button
            className="bg-purple-300/70 hover:bg-purple-300 text-purple-900 border border-purple-300 rounded-md py-1 px-3"
            onClick={() => setAssistantOpen(true)}
          >Contactar</button>
          <a
            target="_blank"
            className="bg-green-300/70 hover:bg-green-300 hover:text-green-900 border border-green-300 rounded-md px-3 py-1 ml-2"
            href="/CV.pdf">Download CV</a>
        </div>
      </div>
      <VirtualAssistantOverlay open={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </section>
  );
}
