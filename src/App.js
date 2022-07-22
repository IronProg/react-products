import classes from "./App.module.css";

import Filter from "./components/Filter/Filter";
import useProducts from "./components/hooks/use-products";
import ProductList from "./components/Products/ProductList";
import Card from "./components/UI/Card/Card";

function App() {
  const { filterHandler, filterList, filteredProducts} = useProducts();

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
