import Product from './Product';

import classes from './ProductList.module.css';

const ProductList = (props) => {
  return (
    <section>
      <ul className={classes.ul}>
        {props.items.map(item => (
          <Product key={item.id} product={item} />
        ))}
      </ul>
    </section>
  )
}

export default ProductList;