import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { darkThemeHook } from "../hooks/DarkTheme";

interface DarkButtonProps {
  className?: string;
}

const DarkButton: React.FC<DarkButtonProps> = ({ className = "" }) => {
  const [dark, setDark] = darkThemeHook();
  return (
    <button
      aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
      title={dark ? "Modo claro" : "Modo oscuro"}
      className={`text-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400 dark:border-zinc-500 dark:hover:bg-zinc-700 hover:bg-zinc-200 p-2 rounded-md ${className}`}
      onClick={() => setDark(!dark)}
      type="button"
      role="switch"
      aria-checked={dark}
    >
      {dark ? (
        <IoSunny className="transition-transform duration-300 hover:rotate-180" />
      ) : (
        <IoMoon className="transition-transform duration-300 hover:scale-110" />
      )}
    </button>
  );
};

export default DarkButton;
