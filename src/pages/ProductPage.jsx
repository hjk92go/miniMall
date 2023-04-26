import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "../css/ProductPage.module.css";
import { useState } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductPage = () => {
  const { id } = useParams();
  const goods = useSelector((state) => state.productBox);
  const goodsPage = goods.find((i) => i.id == id);
  const [goodsPrice, setGoodsPrice] = useState(goodsPage.price1);

  const selectBtn = (e) => {
    setGoodsPrice(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={require(`../img/${goodsPage.productImg1}`)}></img>
        {/* <img src={require(`../img/${goodsPage.productImg2}`)}></img> */}
        <div className={styles.textbox}>
          <div className={styles.name}>
            [&nbsp;{goodsPage.brand}&nbsp;]
            <br />
            {goodsPage.name}
          </div>
          <div className={styles.perfumeInfo}>{goodsPage.info}</div>
          <div className={styles.sizetext}>
            <span>용량</span>
            <div className={styles.sizeBtn2}>
              {goodsPage.sizeNprice.map((one) => (
                <button
                  className={
                    goodsPrice === one.price
                      ? styles.checkcheck
                      : styles.sizeBtn
                  }
                  onClick={() => {
                    selectBtn(one.price);
                  }}
                >
                  {one.size}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.price}>
            <span>판매가격</span>
            {goodsPrice}원
          </div>
          <div className={styles.border}></div>
          <div className={styles.cost}>
            배송비 2,500원 ( 5만원 이상 결제시 무료배송 )
          </div>
          <div className={styles.cost}>출고예정일 결제후 3일 이내 출고</div>
          <div className={styles.cost}>
            배송방법 국내 / 전국 (제주 별도 3,000원 부과)
          </div>
          <div className={styles.btn}>
            <button className={styles.order}>주문하기</button>
            <button className={styles.cart}>장바구니</button>
          </div>
        </div>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className={styles.wrapped}
        justify
      >
        <Tab eventKey="profile" title="상세정보">
          <div className={styles.note}>
            Fragrance Notes <br /> {goodsPage.Note}
          </div>
          <img
            className={styles.img2}
            src={require(`../img/${goodsPage.productImg2}`)}
          />
          <img className={styles.img2} src={require(`../img/auth.jpg`)} />
        </Tab>
        <Tab eventKey="home" title="리뷰">
          리뷰~~~~~~~~~~~
        </Tab>
        <Tab eventKey="longer-tab" title="Q & A">
          789
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductPage;
