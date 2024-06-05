/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { Name } from "../name/component";
import { useCount } from "../../hooks/use-count";
import { useEffect } from "react";
import { Button } from "../button/component";
import { useUser } from "../../contexts/user/hooks";

const min = 0;
const max = 10;

export const Dish = ({ dishId }) => {
    const dish = useSelector(state => state.dish.entities[dishId]);
    const { count, increment, decrement } = useCount({ min, max });
    const { user } = useUser();

    useEffect(() => {
        increment();
        decrement();
    }, [increment, decrement]);


    return (
        <span>
            <Name name={dish.name} />
            {!!user && (<div>
                <Button onClick={decrement} disabled={count === min}>-</Button>
                {count}
                <Button onClick={increment} disabled={count === max}>+</Button>
                <div>price: {count * dish.price}$</div>
            </div>
            )}
        </span>
    );
};
