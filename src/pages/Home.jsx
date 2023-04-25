import CountDown from "../components/CountDown";
import ImgSlick from "../components/ImgSlick";
import styles from "../css/Home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <img src={require("../img/main02.jpg")} />
      <CountDown />
      <ImgSlick />
    </div>
  );
};

export default Home;
