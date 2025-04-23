import { Github as LucideGithub } from "lucide-react";
import React, { useState } from "react";
import DarkButton from "./DarkButton";
import MenuButton from "./MenuButton";

interface NavProps { }

const Nav: React.FC<NavProps> = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu((prev) => !prev);
    const menu = document.getElementById("navbar-default");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-[#111132]/70 dark:backdrop-blur-2xl shadow-lg border-b border-transparent dark:border-blue-900/60">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-sky-900/30 blur-2xl opacity-60 dark:opacity-80"></div>
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[60vw] h-[20vw] bg-blue-700/20 rounded-full blur-2xl opacity-40"></div>
      </div>
      <nav
        className="w-full"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="flex flex-wrap px-6 justify-between items-center mx-auto max-w-5xl my-2 md:my-0">
          <a href="/" className="focus:outline-none focus:ring-2 focus:ring-zinc-400 rounded">
            <span className="text-2xl font-bold tracking-tight">dbeimer</span>
          </a>
          <div
            className={
              `w-full md:block md:w-auto ${showMenu ? "" : "hidden"}`
            }
            id="navbar-default"
          >
            <ul className="list-none flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0" role="menubar">
              <li className="pr-5" role="none">
                <a href="/blog" role="menuitem" className="hover:underline">Blog</a>
              </li>
              <li className="pr-5" role="none">
                <a href="/projects" role="menuitem" className="hover:underline">Proyectos</a>
              </li>
              <li className="pr-5 text-2xl" role="none">
                <a href="https://github.com/dbeimer" target="_blank" rel="noopener noreferrer" aria-label="GitHub" role="menuitem" className="transition-colors text-zinc-700 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400">
                  <LucideGithub className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <MenuButton onClick={handleMenuToggle} ariaExpanded={showMenu} />
            <DarkButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
