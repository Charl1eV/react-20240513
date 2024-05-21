/* eslint-disable react/jsx-key */
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return <div>No Restaurant</div>;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      {!!restaurant.menu?.length && (
        <div>
          <h3>Menu</h3>
          <Menu menu={restaurant.menu} />
        </div>
      )}
      {!!restaurant.reviews?.length && (
        <div>
          <h3>Reviews</h3>
          <Reviews reviews={restaurant.reviews} />
        </div>
      )}
    </div>
  );
};
