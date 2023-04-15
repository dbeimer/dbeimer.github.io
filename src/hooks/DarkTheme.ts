import { useState } from "react";

function activateDarkTheme(activate = true) {
  let [darkTheme, enableDarkTheme] = useState(activate);

  const activateTheme = () => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      enableDarkTheme(true);
    } else {
      document.documentElement.classList.remove("dark");
      enableDarkTheme(false);
    }
  };

  return [darkTheme, activateTheme];
}

export { activateDarkTheme };
