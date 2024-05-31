/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export const Rating = ({ max, value, onButtonClick }) => {
    const backgroundColor = useContext(ThemeContext);

    return (
        <div>
            <span>Rating</span>
            <div>
                {new Array(max).fill(null).map((_, index) =>
                    <button style={{ backgroundColor }} onClick={() => onButtonClick(index)} disabled={value === index + 1}>{index + 1}</button>
                )}
            </div>
        </div>
    )
};
