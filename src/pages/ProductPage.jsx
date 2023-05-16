import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "../css/ProductPage.module.css";
import { useState } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductPage = () => {
  const { id } = useParams();
  const goods = useSelector((state) => state.productBox);
  const goodsPage = goods.find((i) => i.id == id);
  const [goodsPrice, setGoodsPrice] = useState(goodsPage.price1);
  //할인가 구하기
  const salePrice = Math.round(parseInt(goodsPrice.replace(",", "")) * 0.7);
  //숫자 3단위 콤마 정규식
  const result = salePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const selectBtn = (e) => {
    setGoodsPrice(e);
  };

  // const dispatch = useDispatch();
  // const sendCart = () => {
  //   dispatch(

  //   )
  // };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={require(`../img/${goodsPage.productImg1}`)}></img>
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
          </div>{" "}
          <div className={styles.price}>
            {goodsPage.checkSale === true ? (
              <>
                <span>할인판매가격( 30% 할인 )</span>
                <div>{result}원</div>
              </>
            ) : (
              <>
                <span>할인가격</span>
                <div>NOT SALE</div>
              </>
            )}
          </div>
          <div className={styles.border}></div>
          <div className={styles.cost}>
            배송비 2,500원 ( 15만원 이상 결제시 무료배송 )
          </div>
          <div className={styles.cost}>출고예정일 결제후 3일 이내 출고</div>
          <div className={styles.cost}>배송방법 국내 / 전국</div>
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
        <Tab eventKey="longer-tab" title="FAQ">
          <div className={styles.faq}>
            <span className={styles.kofaq}>자주 묻는 질문</span>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  [ 상품 ] 알코올 냄새가 강하게 나요
                </Accordion.Header>
                <Accordion.Body>
                  향수는 알코올 성분과 향수의 원료로 이루어져 배송 중에 제품이
                  많이 흔들리게 되면 향수의 탑, 미들, 베이스 노트가 뒤섞이게
                  됩니다.
                  <br /> 이때, 향수를 바로 사용하게 되면 향이 금세 날아가거나
                  알코올 향이 강하게 느껴질 수 있고 <br />
                  이로인해 다른 향처럼 느껴지실 수도 있습니다. <br />
                  따라서 향수는 서늘한 곳에 흔들리지 않게 두고 2~3일 후에
                  사용하시면 됩니다. <br />
                  향수는 흔들어서 사용하지 말아 주세요:-)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {" "}
                  [ 상품 ] 향수가 새어나와요. 불량인가요?
                </Accordion.Header>
                <Accordion.Body>
                  새상품의 경우 개봉 당시 이미 스프레이 주변에 내용물이 흘러
                  나와있는 흔적이 있거나, 처음 분사 시 향수가 줄줄 새어나와{" "}
                  <br /> 불량인 것처럼 의심되는 경우가 있습니다. 이는 제조 과정
                  중에 보틀과 스프레이를 결합하는 과정에서 내용물이 흘러
                  넘치면서 스프레이 내부 쪽에 고여있다가 배송중에 흔들림으로
                  인해 결합 부분에서 조금씩 새어나오기도 하며, <br /> 또는, 처음
                  분사 시 노즐 내부의 공기때문에 스프레이 압력이 제대로 들어가지
                  않아 분사가 제대로 되지 않으며 분사구를 타고 흘러 안쪽에
                  고이면서 새어나온다고 느껴지기도 합니다. <br /> 1. 먼저,
                  스프레이 캡을 열어 내부와 바깥쪽을 꼼꼼하게 닦아낸 후, 힘있게
                  눌러 2-3회 정도 분사하여 새어나오는 것이 있는지 확인 바랍니다.
                  * 향수마다 스프레이 압력이 다르기 때문에 약하게 누를 경우
                  두번째 경우와 동일하게 새어나오는 것 처럼 느껴질 수 있습니다.{" "}
                  <br /> 2. 1번을 시도하신 후 새어나오는게 없었다면, 향수를
                  거꾸로 뒤집어 놓으시고 일정시간이 지난 후 새어나오는 것이
                  있는지 확인 바랍니다.
                  <br />
                  안내드린 방법에도 불구하고 계속해서 새어나온다면 고객센터로
                  문의 바랍니다.
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  [ 상품 ] 동일한 상품인데 향기가 달라요
                </Accordion.Header>
                <Accordion.Body>
                  향수는 분사할수록 알코올 성분이 먼저 빠져나가고, 향료의 비중이
                  높아짐에 따라 점차 깊은 향기를 냅니다. <br />
                  후각은 예민하기 때문에 풍부한 향기에 익숙해져있다가 새상품을
                  사용하였을 경우 확연히 다르다고 느끼실 수 있습니다. <br />
                  이는 정상적인 반응으로 제품의 이상이 아니며, 비록 지금은
                  새상품이라 아쉬운 부분이 있을 수 있으나 <br />
                  사용할수록 점차 본연의 깊고 풍부한 향기를 나타낼 것이니
                  안심하시기 바랍니다.
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  [ 상품 ] 국문 라벨이 부착된 정품인가요?
                </Accordion.Header>
                <Accordion.Body>
                  국내배송 상품은 모두 국문 라벨이 부착되어 있습니다. <br />
                  해외배송 상품은 구매 대행으로 현지에서 직배송되어 라벨이
                  부착되지 않습니다.
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  {" "}
                  [ 배송/반품/교환 ] 운송장번호를 받았는데 배송 조회가 되지
                  않아요
                </Accordion.Header>
                <Accordion.Body>
                  국내배송은 실제 배송이 시작되는 오후 6-7시 이후부터 조회가
                  가능합니다.
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  [ 배송/반품/교환 ] 반품 / 환불처리는 언제 되나요?
                </Accordion.Header>
                <Accordion.Body>
                  주문 취소 또는 반품 처리는 평일 영업시간 내에 이루어 집니다.
                  <br />
                  무통장 결제는 오후5시 이후 처리되며, 그외 결제는 처리 기간에
                  따라 평균 2-5일 정도 소요됩니다.
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  [ 배송/반품/교환 ] 주문한 상품이 품절이면 어떻게 하나요?
                </Accordion.Header>
                <Accordion.Body>
                  1) 매일 오후 2시 이전까지 결제(입금)가 완료된 주문에 한하여
                  당일 출고가 진행됩니다. <br />
                  2) 금요일 오후 2시 이후부터 다음주 월요일 오후 2시까지의
                  결제가 완료된 주문은 월요일날 출고됩니다.
                  <br /> (단, 월요일 출고량이 많을 경우 배송이 지연될 수
                  있습니다.) <br /> 3) 발송된 제품은 보통 배송완료일(제품이
                  발송된날)로부터 평균 2~3일내에 고객님께 도착하며, 배송시일은
                  운영진 쪽에서 조절할 수 없는 점 양해 부탁드립니다.
                  <br /> (단, 제주도 및 도서지역은 추가 3일이상 소요될 수
                  있습니다.)
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  [ 배송/반품/교환 ] 배송 및 교환/환불 비용은 어떻게 되나요?
                </Accordion.Header>
                <Accordion.Body>
                  [ 제품구입시 ] 20만원 이상 구입시 무료배송입니다. 20만원 미만
                  구입시에는 배송비 2,500원이 발생합니다. <br />[
                  반품,교환,환불시 ] 오배송이나 상품에 문제가 있을 경우 전자
                  상거래 법에 의거하여 수령하신 날로부터 20일내인 경우에 한하여{" "}
                  <br /> 100% 환불이나 교환처리 해 드리며, 소요되는 모든 비용은
                  저희 퍼퓸테라피가 부담합니다. <br />
                  ※단, 하자가 없는 상품이나 고객 주문 실수, 단순변심 등으로 인한
                  교환이나 반품 시 반품배송비 5,000원은 고객님께서 부담하셔야
                  합니다.
                </Accordion.Body>
              </Accordion.Item>{" "}
            </Accordion>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductPage;
