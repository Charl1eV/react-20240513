/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export const Tab = ({ title, onClick, isActiv }) => {
    const backgroundColor = useContext(ThemeContext);

    return (
        <span>
            <button style={{ backgroundColor }} onClick={onClick} disabled={isActiv}>{title}</button>
        </span>
    )
};
