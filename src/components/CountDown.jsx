import { useEffect, useState } from "react";
import styles from "../css/CountDown.module.css";
import { Link } from "react-router-dom";

const CountDown = () => {
  //카운트다운 데드라인
  const deadLine = new Date("2023-05-30T00:00:00+0900");
  //현재 시간
  const now = new Date();
  //남은 시간 구하기
  const time = deadLine.getTime() - now.getTime();
  //1분
  const oneMin = 1000 * 60;

  const h = Math.floor(time / (oneMin * 60 * 24));
  const m = Math.floor((time % (oneMin * 60 * 24)) / (oneMin * 60));
  const d = Math.floor((time % (oneMin * 60)) / oneMin);
  const s = Math.floor((time % oneMin) / 1000);

  const [day, setDay] = useState(h);
  const [hour, setHour] = useState(m);
  const [min, setMin] = useState(d);
  const [sec, sestSec] = useState(s);

  useEffect(() => {
    const timer = setInterval(() => {
      if (parseInt(sec) > 0) sestSec(parseInt(sec) - 1);

      if (parseInt(sec) === 0) {
        if (parseInt(min) === 0) {
          if (parseInt(hour) === 0) {
            if (parseInt(day) === 0) {
              clearInterval(timer);
            } else {
              setDay(parseInt(day) - 1);
              setHour(23);
              setMin(59);
              sestSec(59);
            }
          } else {
            setHour(parseInt(hour) - 1);
            setMin(59);
            sestSec(59);
          }
        } else {
          setMin(parseInt(min) - 1);
          sestSec(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [day, hour, min, sec]);

  //판매종료 조건
  const stop = sec <= 0 && min <= 0 && hour <= 0 && day <= 0;

  const padhour = String(hour).padStart(2, "0");
  const padMin = String(min).padStart(2, "0");
  const padSec = String(sec).padStart(2, "0");

  return (
    <div className={styles.countDay}>
      <div className={styles.title}>SUPER SALE</div>
      <div className={styles.subTitle}>망설이면 품절!</div>
      {stop ? (
        <div className={styles.wrapp}>
          <img
            className={styles.endimg}
            src={require(`../img/perfume005_1.jpg`)}
          />

          <div className={styles.end}>판매 종료</div>
        </div>
      ) : (
        <div className={styles.set}>
          <div className={styles.count}>
            {padhour}&nbsp;
            {padMin}&nbsp;
            {padSec}
          </div>
          <Link to={`/goods/5`}>
            <img
              className={styles.saleimg}
              src={require("../img/perfume005_1.jpg")}
            />
          </Link>
          <div className={styles.text}>지금구매하러가기</div>
        </div>
      )}
    </div>
  );
};

export default CountDown;
