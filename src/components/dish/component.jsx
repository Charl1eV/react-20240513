/* eslint-disable react/jsx-key */
import { Name } from "../name/component";
import { useCount } from "../../hooks/use-count";
import { useEffect } from "react";

const min = 0;
const max = 10;

export const Dish = ({ dish }) => {
    const { count, increment, decrement, result } = useCount({ min, max });

    useEffect(() => {
        increment();
        decrement();
      }, [increment, decrement, result]);
    

    return (
        <span>
            <Name name={dish.name} />
            <div>
                <button onClick={decrement} disabled={count === min}>-</button>
                {count}
                <button onClick={increment} disabled={count === max}>+</button>
            </div>
            {count * dish.price}
        </span>
    );
};
