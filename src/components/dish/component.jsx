/* eslint-disable react/jsx-key */
import { Name } from "../name/component";
import { useCount } from "../../hooks/use-count";

const min = 0;
const max = 10;

export const Dish = ({ dish }) => {
    const { count, increment, decrement } = useCount({ min, max });

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
