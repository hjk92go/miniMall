import styles from "../css/Cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.basket}>장바구니</div>
      <div>
        <div className={styles.list}>
          <div className={styles.two}>
            <div>
              <input type="checkbox" />
              <label>전체선택</label>
            </div>
            <span>상품정보</span>
          </div>
          <span className={styles.num}>수량</span>
          <div className={styles.three}>
            <span>판매가</span>
            <span>할인액</span>
          </div>
        </div>
        {/* Date 넘겨온 값 */}
        <div className={styles.list}>
          <div className={styles.two}>
            <div>
              <input type="checkbox" />
            </div>
            <img src={require("../img/notFound.png")} />
          </div>
          <span className={styles.num}>수량</span>
          <div className={styles.three}>
            <span>판매가</span>
            <span>할인액</span>
          </div>
        </div>
        <div className={styles.sum}>총 구매금액</div>
        <div className={styles.btns}>
          <Link>
            <button>더 둘러보기</button>
          </Link>
          <Link to="/login">
            <button>주문 하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
<div></div>;
