import { useState } from "react";

export const useTheme = (current, alternative) => {
  const [theme, setTheme] = useState(current);

  const toggleTheme = () => {
    const toggle = theme === current ? alternative : current;

    setTheme(toggle);
  };

  return [current, toggleTheme];
};
