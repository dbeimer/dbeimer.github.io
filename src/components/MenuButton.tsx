import React from "react";
import { IoMenu } from "react-icons/io5";

interface MenuButtonProps {
  onClick: () => void;
  className?: string;
  ariaExpanded?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, className = "", ariaExpanded = false }) => (
  <button
    data-collapse-toggle="navbar-default"
    type="button"
    className={`inline-flex border items-center ml-3 md:hidden focus:outline-none text-xl hover:bg-zinc-700 hover:text-white dark:hover:bg-zinc-700 p-2 rounded-md transition-colors duration-200 ${className}`}
    aria-controls="navbar-default"
    aria-expanded={ariaExpanded}
    aria-label="Abrir menú de navegación"
    onClick={onClick}
    role="button"
  >
    <IoMenu />
  </button>
);

export default MenuButton;
