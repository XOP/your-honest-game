import React from "react";

const SettingsContext = React.createContext({
  sound: [false, () => null ],
  vibration: [false, () => null ],
});

const SettingsProvider = SettingsContext.Provider;

export { SettingsProvider };
export default SettingsContext;
