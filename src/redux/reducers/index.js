import { combineReducers } from "redux";

import pizzas from "./pizzas";
import cart from "./cart";
import filters from "./filters";

export default combineReducers({
  filters,
  pizzas,
  cart,
});
