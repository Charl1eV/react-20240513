/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Name } from "../name/component";
import { Counter } from "../counter/component";

const initialValue = 0;

export const Dish = ({ dish }) => {
    const [count, setCount] = useState(initialValue);

    return (
        <span>
            <Name name={dish.name} />
            <Counter value={count} onChange={setCount} />
            {count * dish.price}
        </span>
    );
};
