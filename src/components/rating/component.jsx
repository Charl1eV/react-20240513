/* eslint-disable react/jsx-key */
import { Button } from "../button/component";

export const Rating = ({ max, value, onButtonClick }) => {
    return (
        <div>
            <span>Rating</span>
            <div>
                {new Array(max).fill(null).map((_, index) =>
                    <Button onClick={() => onButtonClick(index)} disabled={value === index + 1}>{index + 1}</Button>
                )}
            </div>
        </div>
    )
};
