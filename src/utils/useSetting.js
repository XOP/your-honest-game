import { useState } from "react";
import { useLocalstorage } from "rooks/dist/cjs/hooks/useLocalstorage";

export const useSetting = (key, def) => {
  let current = def;

  const [storageValue, storageSet] = useLocalstorage(`YHG/${key}`, current);

  if (storageValue && current !== storageValue) {
    current = storageValue;
  }

  const [setting, setSetting] = useState(current);

  const toggleSetting = () => {
    const toggle = !setting;

    setSetting(toggle);
    storageSet(toggle);
  };

  return [setting, toggleSetting];
};
