import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Categories,
  PizzaBlock,
  PizzaLoadingBlock,
  SortPopup,
} from "../components";
import { addPizzaToCart } from "../redux/actions/cart";

import { setCategory, setSortBy } from "./../redux/actions/filters";
import { fetchPizzas } from "./../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortPopup = (type) => {
    dispatch(setSortBy(type));
  };

  const handleAddPizzaToCart = (pizzaObj) => dispatch(addPizzaToCart(pizzaObj));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortPopup}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded &&
          items.map((obj) => (
            <PizzaBlock
              key={`${obj.name}_${obj.id}`}
              onClickAddPizza={handleAddPizzaToCart}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}
            />
          ))}
        {!isLoaded &&
          Array(10)
            .fill()
            .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
