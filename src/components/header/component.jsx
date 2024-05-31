/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export const Header = ({ theme, onClick }) => {
    const backgroundColor = useContext(ThemeContext);

      return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <header>Header</header>
            <button style={{ backgroundColor }} onClick={() => onClick(theme)}>Change Theme</button>
        </div>
    )
};
