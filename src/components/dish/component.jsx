/* eslint-disable react/jsx-key */
import { Name } from "../name/component";
import { useCount } from "../../hooks/use-count";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

const min = 0;
const max = 10;

export const Dish = ({ dish }) => {
    const { count, increment, decrement } = useCount({ min, max });
    const backgroundColor = useContext(ThemeContext);

    useEffect(() => {
        increment();
        decrement();
      }, [increment, decrement]);
    

    return (
        <span>
            <Name name={dish.name} />
            <div>
                <button style={{ backgroundColor }} onClick={decrement} disabled={count === min}>-</button>
                {count}
                <button style={{ backgroundColor }} onClick={increment} disabled={count === max}>+</button>
            </div>
            {count * dish.price}
        </span>
    );
};
