import { useState } from "react";
import { useLocalstorage } from "rooks/dist/cjs/hooks/useLocalstorage";

import isServer from "./isServer";

export const useTheme = (def, alt) => {
  let current = def;

  const [storageTheme, storageSet] = useLocalstorage("YHG/theme", current);

  if (storageTheme && current !== storageTheme) {
    current = storageTheme;
  }

  const [theme, setTheme] = useState(current);

  if (!isServer) {
    document.documentElement.setAttribute('data-theme', storageTheme);
  }

  const toggleTheme = () => {
    const toggle = theme === def ? alt : def;

    setTheme(toggle);
    storageSet(toggle);

    document.documentElement.setAttribute('data-theme', toggle);
  };

  return [theme, toggleTheme];
};
