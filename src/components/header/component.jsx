/* eslint-disable react/jsx-key */
import { AuthorizationButton } from "../authorization-button/component";
import { ThemeToggler } from "../theme-toggller/component";

import styles from "./styles.module.scss"

export const Header = ({ logIn, logOut }) => {
    return (
        <header className={styles.root}>
            Header
            <AuthorizationButton logIn={logIn} logOut={logOut} />
            <ThemeToggler />
        </header>
    )
};
