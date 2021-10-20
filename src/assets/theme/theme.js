import React from "react";

export const themeDefault = 'light';
export const themeAlternative = 'dark';

const ThemeContext = React.createContext([themeDefault, () => null]);
const ThemeProvider = ThemeContext.Provider;

export { ThemeProvider };
export default ThemeContext;
