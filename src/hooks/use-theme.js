import { useCallback } from "react";
import { useState } from "react";

export const useTheme = ({ initialValue = null, theme1, theme2 }) => {
  const [theme, setTheme] = useState(initialValue);

  const changeTheme = useCallback(() => {
    setTheme((currentTheme) => currentTheme === theme1 ? theme2 : theme1);
  }, [theme1, theme2]);

  return { theme, changeTheme };
};
