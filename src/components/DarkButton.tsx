import { React } from "react"
import { IoMoon, IoSunny } from "react-icons/io5";
import { darkThemeHook } from "../hooks/DarkTheme";

type Props = {};

function DarkButton({}: Props) {
  let [dark,setDark]=darkThemeHook()
  
  return (
    <button
      className="text-xl border dark:border-zinc-500 dark:hover:bg-zinc-500 hover:bg-zinc-300 p-2 rounded-md"
      onClick={()=>{setDark(!dark)}}
    >
      {dark ? <IoSunny className="hover:animate-spin" /> : <IoMoon />}
    </button>
  );
}

export default DarkButton;
