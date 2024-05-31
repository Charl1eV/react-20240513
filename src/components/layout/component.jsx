/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { useState } from "react";
import { useCallback } from "react";
import { Footer } from "../footer/component";
import { Header } from "../header/component";
import { ScrollProgressBar } from "../scroll-progress-bar/component";
import { BUTTON_THEME } from "../../utils/const";

export const Layout = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  const [theme, setTheme] = useState(themeContext);

  const changeTheme = useCallback(() => {
    setTheme((currentTheme) => currentTheme === BUTTON_THEME[0] ? BUTTON_THEME[1] : BUTTON_THEME[0]);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <div id="modal" style={{ position: "relative", zIndex: 2 }} />
        <div id="popover" style={{ position: "relative", zIndex: 3 }} />
        <div id="tooltip" style={{ position: "relative", zIndex: 4 }} />
        <div style={{ zIndex: 1 }}>
          <ScrollProgressBar />
          <Header theme={theme} onClick={changeTheme} />
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
