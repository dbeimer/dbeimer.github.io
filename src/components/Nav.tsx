import { React,useState } from "react"
import DarkButton from "./DarkButton";
import MenuButton from "./MenuButton";

type Props = {};

function Nav({}: Props) {
  
  let [showMenu,setShowMenu]=useState(true)
  
  return (
    <div
      className="fixed w-full top-0 left-0 backdrop-blur-lg bg-zinc-100/[.5] dark:bg-zinc-900/[.5]"
    >
      <nav className="w-full border-b dark:border-gray-500">
        <div
          className="flex flex-wrap px-6 justify-between items-center mx-auto max-w-5xl my-2 md:my-0"
        >
          <a href="/page/">
            <span className="text-2xl">dbeimer</span>
          </a>
          <div className={"w-full md:block md:w-auto hidden"} id="navbar-default">
            <ul
              className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
            >
              <li className="pr-5">Proyectos</li>
              <li className="pr-5">Blog</li>
              <li className="pr-5">Inicio</li>
            </ul>
          </div>
          <div>
            <MenuButton onClick={()=>{
              setShowMenu(!showMenu)
              let menu=document.getElementById('navbar-default')
              menu.classList.toggle('hidden')
              console.log('ShowMenu',showMenu)
            }}/>
            <DarkButton/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
