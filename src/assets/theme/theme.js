import React from "react";

export const themeDefault = 'dark';
export const themeAlternative = 'light';

const ThemeContext = React.createContext([themeDefault, () => null]);
const ThemeProvider = ThemeContext.Provider;

export { ThemeProvider };
export default ThemeContext;
