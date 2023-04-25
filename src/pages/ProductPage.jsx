import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "../css/ProductPage.module.css";
import { useState } from "react";
const ProductPage = () => {
  const { id } = useParams();
  const goods = useSelector((state) => state.productBox);
  const goodsPage = goods.find((i) => i.id == id);

  const [goodsPrice, setGoodsPrice] = useState();

  return (
    <div className={styles.info}>
      <img src={require(`../img/${goodsPage.productImg1}`)}></img>
      {/* <img src={require(`../img/${goodsPage.productImg2}`)}></img> */}
      <div>
        [&nbsp;{goodsPage.brand}&nbsp;] {goodsPage.name}
      </div>
      <div>
        용량
        {goodsPage.sizeNprice.map((one) => (
          <button onClick={(e) => setGoodsPrice(one.price)}>{one.size}</button>
        ))}
      </div>
      <div className={styles.price}>판매가격 {goodsPrice}원</div>
      <button>주문하기</button>
      <button>장바구니</button>
      <hr />
    </div>
  );
};

export default ProductPage;
