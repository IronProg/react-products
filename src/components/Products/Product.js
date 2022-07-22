import Card from "../UI/Card/Card";
import classes from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <Card color='rgba(0, 149, 107, 0.42)' className={classes.card}>
      <li className={classes.product}>
        <img src={product.images[0].asset.url} alt={product.images[0].alt} />
        <div className={classes.text}>
          <h4>{product.name}</h4>
          <p>{product.shortDescription}</p>
        </div>
      </li>
    </Card>
  );
};

export default Product;
