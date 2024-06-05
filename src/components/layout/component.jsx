/* eslint-disable react/jsx-key */
import { Footer } from "../footer/component";
import { Header } from "../header/component";
import { ScrollProgressBar } from "../scroll-progress-bar/component";

export const Layout = ({ children }) => {
  return (
      <div>
        <div id="modal" style={{ position: "relative", zIndex: 2 }} />
        <div id="popover" style={{ position: "relative", zIndex: 3 }} />
        <div id="tooltip" style={{ position: "relative", zIndex: 4 }} />
        <div style={{ zIndex: 1 }}>
          <ScrollProgressBar />
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </div>
  );
};
