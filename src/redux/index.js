import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./entities/restaurant";
import { UserSlice } from "./entities/user";
import { ReviewSlice } from "./entities/review";
import { DishSlice } from "./entities/dish";

export const store = configureStore({
    reducer: combineSlices(RestaurantSlice, UserSlice, ReviewSlice, DishSlice),
});

console.log('store:', store.getState());