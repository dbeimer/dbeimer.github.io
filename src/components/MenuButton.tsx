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
    className={`inline-flex items-center ml-3 md:hidden focus:outline-none text-xl hover:opacity-50 p-2 transition-opacity duration-200 ${className}`}
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
