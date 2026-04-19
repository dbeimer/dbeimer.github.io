import { Github as LucideGithub } from "lucide-react";
import React, { useState, useEffect } from "react";
import DarkButton from "./DarkButton";
import MenuButton from "./MenuButton";

interface NavProps { }

const Nav: React.FC<NavProps> = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuToggle = () => {
    setShowMenu((prev) => !prev);
    const menu = document.getElementById("navbar-default");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <header
      className="fixed w-full top-0 left-0 z-50 backdrop-blur-md transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent",
      }}
    >
      <div
        className="dark:block hidden absolute inset-0 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      />
      <nav
        className="w-full relative z-10"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="flex px-4 sm:px-6 justify-between items-center mx-auto max-w-5xl py-3">
          <a href="/" className="focus:outline-none rounded">
            <span className="glitch-hover font-mono text-base sm:text-lg font-semibold tracking-tight" data-text="dbeimer_">
              dbeimer<span className="text-black/30 dark:text-white/30">_</span>
            </span>
          </a>
          <div
            className={
              `w-full md:block md:w-auto ${showMenu ? "block absolute top-full left-0 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/10 dark:border-white/10" : "hidden"}`
            }
            id="navbar-default"
          >
            <ul className="list-none flex flex-col px-4 py-3 md:flex-row md:space-x-6 md:p-0 md:text-xs font-mono" role="menubar">
              <li role="none" className="py-2 md:py-0">
                <a href="/blog" role="menuitem" className="link-hover text-xs uppercase tracking-widest hover:opacity-50 transition-opacity pb-0.5">
                  <span className="text-black/30 dark:text-white/30">/</span>blog
                </a>
              </li>
              <li role="none" className="py-2 md:py-0">
                <a href="/projects" role="menuitem" className="link-hover text-xs uppercase tracking-widest hover:opacity-50 transition-opacity pb-0.5">
                  <span className="text-black/30 dark:text-white/30">/</span>projects
                </a>
              </li>
              <li role="none" className="py-2 md:py-0">
                <a href="https://github.com/dbeimer" target="_blank" rel="noopener noreferrer" aria-label="GitHub" role="menuitem" className="transition-opacity hover:opacity-50 inline-flex items-center">
                  <LucideGithub className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <MenuButton onClick={handleMenuToggle} ariaExpanded={showMenu} />
            <DarkButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
