import axios from "axios";

export const setPizzas = (items) => ({ type: "SET_PIZZAS", payload: items });

export const fetchPizzas = (category, sortBy) => async (dispatch) => {
  dispatch(setLoaded(false));
  const { data } = await axios.get(`/pizzas?${category !== null ? `category=${category}` : ""}&_sort=${sortBy.type}&_order=${sortBy.order}`);
  dispatch(setPizzas(data));
  dispatch(setLoaded(true));
};

export const setLoaded = (payload) => ({ type: "SET_LOADED", payload });
