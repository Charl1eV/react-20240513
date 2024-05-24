/* eslint-disable react/jsx-key */

export const Counter = ({ value, max = 5, min = 0, onChange }) => {

    return (
        <div>
            <button onClick={() => onChange(value - 1)} disabled={value === min}>-</button>
            {value}
            <button onClick={() => onChange(value + 1)} disabled={value === max}>+</button>
        </div>
    );
};
