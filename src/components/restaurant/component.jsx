/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { ReviewForm } from "../review-form/component";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector(state => state.restaurant.entities[restaurantId]);

  if (!restaurant) {
    return <div>No Restaurant</div>;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      {!!restaurant.menu?.length && (
        <div>
          <h3>Menu</h3>
          <Menu menuIds={restaurant.menu} />
        </div>
      )}
      {!!restaurant.reviews?.length && (
        <div>
          <h3>Reviews</h3>
          <Reviews reviewIds={restaurant.reviews} />
          <ReviewForm />
        </div>
      )}
    </div>
  );
};
