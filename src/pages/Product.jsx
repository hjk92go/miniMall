import { useSelector } from "react-redux";
import styles from "../css/Product.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = () => {
  const goods = useSelector((state) => state.productBox);
  const [filterWords, setFilterWords] = useState("");

  const filterMen = () => {
    setFilterWords("male");
  };
  const filterWomen = () => {
    setFilterWords("female");
  };

  const all = () => {
    setFilterWords("all");
  };

  const filterGender = goods.filter((gender) =>
    filterWords === "all" ? goods : gender.gender === filterWords
  );

  useEffect(() => {
    all();
  }, []);

  console.log(filterGender);

  return (
    <div className={styles.showbox}>
      <div>
        <div className={styles.title}>PRODUCT</div>
      </div>
      <div className={styles.category}>
        <div className={styles.btn}>
          <button onClick={all}>All</button>
          <button onClick={filterMen}>Men</button>
          <button onClick={filterWomen}>Women</button>
        </div>
        <div>
          <div>Search</div>
        </div>
      </div>

      <div className={styles.imgbox}>
        {filterGender.map((product) => (
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
            <div className={styles.price}>{product.price1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
