import { Dish } from "../dish/component";

/* eslint-disable react/jsx-key */
export const Menu = ({ menu }) => {
  return (
    <div>
      <ul>
        {menu.map((dish) => (
          <li>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
