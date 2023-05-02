import styles from "../css/Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.title}>로그인</div> */}
      <div className={styles.left}>
        <div className={styles.member}>회원 로그인</div>
        <div className={styles.notice3}>
          <span>가입하신 아이디와 비밀번호를 입력해주세요.</span>
          <span>비밀번호는 대소문자를 구분합니다.</span>
          <input
            className={styles.id}
            type="text"
            placeholder="아이디를 입력해주세요"
          />
          <input
            className={styles.pass}
            type="text"
            placeholder="비밀번호를 입력해주세요"
          />
          <button className={styles.loginbtn}>로그인</button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.create}>
          <div className={styles.createtitle}>회원가입</div>
          <div className={styles.notice1}>
            <span>아직 회원이 아니신가요?</span>
            <span>회원가입을 하시면 편리하게 이용하실 수 있습니다.</span>
            <Link to="/createid">
              <button className={styles.createbtn}>회원가입</button>
            </Link>
          </div>
        </div>
        <div className={styles.notcreate}>
          <div className={styles.notice2}>
            <span>비회원 구매를 원하세요?</span>
            <span>아래버튼으로 비회원 구매가 가능합니다.</span>
            <button className={styles.notCreatebtn}>비회원 구매</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
