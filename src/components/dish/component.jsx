/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Name } from "../name/component";

export const Dish = ({ dish }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <span>
            <Name name={dish.name} />
            <span>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </span>
        </span>
    );
};
