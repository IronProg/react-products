import { useEffect, useState } from "react";

import classes from "./App.module.css";

import Filter from "./components/Filter/Filter";
import ProductList from "./components/Products/ProductList";
import Card from "./components/UI/Card/Card";

function App() {
  const [products, setProducts] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [filterId, setFilterId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("data.json", {});
      const { data } = await res.json();
      setProducts(data.nodes);
      const filterId = data.nodes
        .map((item) => item.category._id)
        .filter((value, index, array) => array.indexOf(value) === index);
      const filterNames = data.nodes
        .map((item) => item.category.name)
        .filter((value, index, array) => array.indexOf(value) === index);
      setFilterList(
        filterId.map((item, index) => ({
          id: item,
          name: filterNames[index],
        }))
      );
    };
    fetchData();
  }, []);

  const filterHandler = (type) => {
    setFilterId(type);
  };

  let filteredProducts = products;
  if (filterId !== "" && filterId) {
    filteredProducts = products.filter((item) => item.category._id === filterId);
  }

  return (
    <>
      <h1 className={classes.header}>React Products</h1>
      <Card className={classes.wrapper} color='white'>
        <Filter onFilter={filterHandler} options={filterList} />
        <ProductList items={filteredProducts} />
      </Card>
    </>
  );
}

export default App;
