import { React } from "react"
import { IoMenu } from "react-icons/io5";

type Props = {
  onClick
};

function MenuButton(props: Props) {
  
  return (
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex border items-center ml-3 md:hidden focus:outline-none text-xl hover:bg-zinc-500 p-2 rounded-md"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={props.onClick}
        >
          <IoMenu />
        </button>

  );
}

export default MenuButton;
