/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { AuthorizationButton } from "../authorization-button/component";

export const Header = ({ changeTheme, logIn, logOut }) => {
    const backgroundColor = useContext(ThemeContext);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <header>Header</header>
            <AuthorizationButton logIn={logIn} logOut={logOut} />
            <button style={{ backgroundColor }} onClick={() => changeTheme(backgroundColor)}>Change Theme</button>
        </div>
    )
};
