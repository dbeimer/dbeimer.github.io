import { IoMoon, IoSunny } from "react-icons/io5";

type Props = {};
let dark =
  localStorage.theme == "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

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
	activateTheme(dark)
  return (
    <button
      className="text-xl dark:hover:bg-zinc-500 hover:bg-zinc-300 p-1 rounded-md"
      onClick={() => {
        //change
        localStorage.theme = localStorage.theme == "dark" ? "light" : "dark";
        activateTheme(localStorage.theme == "dark");
        // if (
        //   localStorage.theme == "dark"
        // || (
        //   !('theme' in localStorage)
        //   && window.matchMedia('(prefers-color-scheme: dark)').matches)
        // ) {
        //   document.documentElement.classList.add("dark");
        //   localStorage.theme = "dark";
        // setTheme('ligth')
        // } else {
        //   document.documentElement.classList.remove("dark");
        //   localStorage.removeItem("theme");
        //   // setTheme('dark')
        // }
      }}
    >
      {dark ? <IoSunny /> : <IoMoon />}
    </button>
  );
}

export default DarkButton;
