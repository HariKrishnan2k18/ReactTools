import { restaurantActionType } from "./RestaurantAction";

const restaurantState = [];

const restaurantReducer = (state = restaurantState, action) => {
  switch (action.type) {
    case restaurantActionType.ADD:
      state.push(action.payload);
      return [...state];

    case restaurantActionType.DELETE:
      state.splice(action.payload, 1);
      return [...state];
    default:
      return state;
  }
};

export default restaurantReducer;
