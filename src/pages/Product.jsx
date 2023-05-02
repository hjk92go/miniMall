import { useSelector } from "react-redux";
import styles from "../css/Product.module.css";
import { Link } from "react-router-dom";

const Product = () => {
  const goods = useSelector((state) => state.productBox);

  return (
    <div className={styles.showbox}>
      <div>
        <div>Perfume</div>
      </div>
      <div>
        <div>All</div>
        <div>Men</div>
        <div>WoMen</div>
      </div>
      <div>Search</div>
      <div className={styles.imgbox}>
        {goods.map((product) => (
          <div className={styles.product}>
            <Link to={`/goods/${product.id}`}>
              <img
                className={styles.productimg}
                src={require(`../img/${product.productImg1}`)}
              ></img>
            </Link>
            <div className={styles.producttext}>
              [&nbsp;{product.brand}&nbsp;] {product.name}
              &nbsp;{product.size[0]}
            </div>
            <div>{product.price1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
