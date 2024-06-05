import { Dish } from "../dish/component";

/* eslint-disable react/jsx-key */
export const Menu = ({ menuIds }) => {
  return (
    <div>
      <ul>
        {menuIds.map((dishId) => (
          <li>
            <Dish dishId={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
