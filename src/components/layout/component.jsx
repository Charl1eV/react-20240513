/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { UserContext } from "../../contexts/user";
import { useTheme } from "../../hooks/use-theme";
import { useUser } from "../../hooks/use-user";
import { useEffect } from "react";
import { Footer } from "../footer/component";
import { Header } from "../header/component";
import { ScrollProgressBar } from "../scroll-progress-bar/component";
import { BUTTON_THEME } from "../../utils/const";

export const Layout = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  const userContecst = useContext(UserContext);
  const { theme, changeTheme } = useTheme({ initialValue: themeContext, theme1: BUTTON_THEME[0], theme2: BUTTON_THEME[1] });
  const { userName, logIn, logOut } = useUser({ initialValue: userContecst });

  useEffect(() => {
    changeTheme();
  }, [changeTheme]);

  useEffect(() => {
    logIn();
    logOut();
  }, [logIn, logOut]);

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={userName}>
        <div>
          <div id="modal" style={{ position: "relative", zIndex: 2 }} />
          <div id="popover" style={{ position: "relative", zIndex: 3 }} />
          <div id="tooltip" style={{ position: "relative", zIndex: 4 }} />
          <div style={{ zIndex: 1 }}>
            <ScrollProgressBar />
            <Header changeTheme={changeTheme} logIn={logIn} logOut={logOut} />
            <div>{children}</div>
            <Footer />
          </div>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
