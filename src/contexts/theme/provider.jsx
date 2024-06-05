import { ThemeContext } from "./context";
import { useState } from "react";
import { useMemo } from "react";
import { BUTTON_THEME } from "./const";

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(BUTTON_THEME.default);

    const contextValue = useMemo(() => ({
        theme,
        toggleTheme: () => setTheme(theme === BUTTON_THEME.default ? BUTTON_THEME.alter : BUTTON_THEME.default)
    }), [theme]);

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
};