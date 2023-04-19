import { useEffect, useState } from "react";
import styles from "../css/CountDown.module.css";

const CountDown = () => {
  //카운트다운 데드라인
  const deadLine = new Date("2023-05-05");
  //현재 시간
  const date = new Date();
  //남은 시간 구하기
  const time = deadLine.getTime() - date.getTime();
  console.log("time", time);
  //1분 계산식
  const min1 = 1000 * 60;

  const d = Math.floor(time / (min1 * 60 * 24));
  const h = Math.floor((time % (min1 * 60 * 24)) / (min1 * 60));
  const m = Math.floor((time % (min1 * 60)) / min1);
  const s = Math.floor((time % min1) / 1000);

  const [day, setDay] = useState(d);
  const [hour, setHour] = useState(h - 9); //표준시와 9시간 차이
  const [sec, setSec] = useState(s);
  const [min, setMin] = useState(m);
  console.log(min, "min");

  useEffect(() => {
    const Timer = setInterval(() => {
      setSec((sec) => sec - 1);
    }, 1000);
    if (sec === 0) {
      if (min === 0) {
        if (hour === 0) {
          if (day === 0) {
            clearInterval(Timer);
          } else {
            setDay(day - 1);
            setHour(23);
            setMin(59);
            setSec(59);
          }
          setHour(hour - 1);
          setMin(59);
          setSec(59);
        }
      } else {
        setMin(min - 1);
        setSec(59);
      }
    }

    return () => clearInterval(Timer);
  }, [sec, min, hour, day]);

  const padhour = String(hour).padStart(2, "0");
  const padMin = String(min).padStart(2, "0");
  const padSec = String(sec).padStart(2, "0");

  return (
    <div className={styles.count}>
      <div>오늘의 특가</div>
      <div className={styles.countDay}>
        {day}일:{padhour}:{padMin}:{padSec}
      </div>
      <img src={require("../img/perfume004_1.jpg")} />
    </div>
  );
};

export default CountDown;
