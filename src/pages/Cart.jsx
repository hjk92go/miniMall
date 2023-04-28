import styles from "../css/Cart.module.css";

const Cart = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.basket}>장바구니</div>
        <div className={styles.list}>
          <span>선택</span>
          <span>상품정보</span>
          <span>수량</span>
          <span>판매가</span>
          <span>할인액</span>
        </div>
        <div className={styles.goods}></div>
        <div className={styles.sum}>총 구매금액</div>
      </div>
      <div className={styles.btns}>
        <button>선택 주문하기</button>
        <button>주문하기</button>
      </div>
    </div>
  );
};

export default Cart;
<div></div>;
