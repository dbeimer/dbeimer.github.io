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
      className={`text-lg transition-opacity duration-200 focus:outline-none hover:opacity-50 p-2 ${className}`}
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
