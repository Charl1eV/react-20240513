/* eslint-disable react/jsx-key */

export const Rating = ({ max, value, onButtonClick }) => {

    return (
        <div>
            <span>Rating</span>
            <div>
                {new Array(max).fill(null).map((_, index) =>
                    <button onClick={() => onButtonClick(index)} disabled={value === index + 1}>{index + 1}</button>
                )}
            </div>
        </div>
    )
};
