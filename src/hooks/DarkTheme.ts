import { useState } from "react";

function darkThemeHook() {
  let [dark, setDark] = useState(localStorage.theme==="dark"??window.matchMedia("(prefers-color-scheme: dark)").matches);

  function activateTheme(dark = true) {
    const elemento = document.documentElement;
    localStorage.theme=dark?"dark":"light"
    setDark(dark)

    if (dark) {
      if (!elemento.classList.contains("dark")) {
        elemento.classList.add("dark");
      }
    } else {
      elemento.classList.remove("dark");
    }
  }

  return [dark, activateTheme];
}

export { darkThemeHook };
