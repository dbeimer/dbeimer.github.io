import { IoMoon, IoSunny } from "react-icons/io5";
import {useState,React} from "react"

type Props = {};

function activateTheme(dark = true) {
  const elemento = document.documentElement;
  if (dark) {
    if (!elemento.classList.contains("dark")) {
      elemento.classList.add("dark");
    }
  } else {
    elemento.classList.remove("dark");
  }
}

function DarkButton({}: Props) {
  console.log(localStorage)
  const [dark,setDark]=useState(localStorage.theme==="dark"??window.matchMedia("(prefers-color-scheme: dark)").matches)
	activateTheme(dark)
  function handleClick() {
    setDark(!dark)
    localStorage.theme=!dark?"dark":"light"
  }
  return (
    <button
      className="text-xl border dark:border-zinc-500 dark:hover:bg-zinc-500 hover:bg-zinc-300 p-2 rounded-md"
      onClick={handleClick}
    >
      {dark ? <IoSunny className="hover:animate-spin" /> : <IoMoon />}
    </button>
  );
}

export default DarkButton;
