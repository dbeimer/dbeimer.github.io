import { React,useState } from "react"
import DarkButton from "./DarkButton";
import MenuButton from "./MenuButton";
import {DiGithubAlt} from "react-icons/di/index.js"

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
          <a href="/">
            <span className="text-2xl">dbeimer</span>
          </a>
          <div className={"w-full md:block md:w-auto hidden"} id="navbar-default">
            <ul
              className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
            >
              <li className="pr-5">
                <a href="/blog">Blog</a>
              </li>
              <li className="pr-5">
                <a href="/projects">Proyectos</a>
              </li>
              <li className="pr-5 text-2xl"><a href="https://github.com/dbeimer" target="_blank"><DiGithubAlt/></a></li>
              {/* <li className="pr-5">Inicio</li> */}
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
            {/* <button className="text-[20pt] border p-1 rounded">
              <DiGithubAlt/>
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
