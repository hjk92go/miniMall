import { useSelector } from "react-redux";
import styles from "../css/ImgSlick.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";

const ImgSlick = () => {
  const settings = {
    slidesToShow: 4,
    centerMode: true,
    autoplayspeed: 1000,
    auseOnHover: true,
    arrows: false,
    dots: false,
  };

  const goods = useSelector((state) => state.productBox);
  const slickRef = useRef(null);
  const prevBtn = useCallback(() => slickRef.current.slickPrev(), []);
  const nextBtn = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <div>
      <div className={styles.title}>Best & Hot</div>
      <div className={styles.subTitle}>지금 가장 주목받는 향수!</div>
      <div style={{ position: "relative" }}>
        <div onClick={prevBtn} className={styles.left}>
          ＜
        </div>
        <Slider className={styles.mainSlick} ref={slickRef} {...settings}>
          {goods.map((product) => (
            <div className={styles.mainImg}>
              <Link to={`/goods/${product.id}`}>
                <img
                  className={styles.mainImg}
                  src={require(`../img/${product.productImg1}`)}
                ></img>
              </Link>
              <div className={styles.info}>
                [&nbsp;{product.brand}&nbsp;] {product.name}
                &nbsp;{product.size[0]}
              </div>
              <div className={styles.price}>{product.price1}</div>
            </div>
          ))}
        </Slider>
        <div onClick={nextBtn} className={styles.right}>
          ＞
        </div>
      </div>
    </div>
  );
};

export default ImgSlick;
