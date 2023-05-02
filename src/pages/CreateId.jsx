import styles from "../css/CreateId.module.css";

const CreateId = () => {
  return (
    <div className={styles.wrapped}>
      <div className={styles.container}>
        <h2>
          회원가입을 위해
          <br />
          정보를 입력해주세요.
        </h2>
        <label className={styles.email1} for="name">
          * 이메일
          <br />
          <input className={styles.email2} type="text" id="email" />
          <br />
          <br />
        </label>
        <label className={styles.name1} for="name">
          * 이름
          <br />
          <input className={styles.name2} type="text" id="name" />
          <br />
          <br />
        </label>
        <label className={styles.checkpass1} for="password1">
          * 비밀번호
          <br />
          <input
            className={styles.checkpass2}
            class="pw"
            id="password1"
            type="password"
          />{" "}
          <br />
          <br />
        </label>
        <label className={styles.repass1} for="password2">
          * 비밀번호 확인
          <br />
          <input
            className={styles.repass2}
            class="pw"
            id="password2"
            type="password"
          />
          <br />
          <br />{" "}
        </label>
        <label className={styles.choice}>
          <input
            className={styles.women}
            type="radio"
            class="radio"
            name="gender"
          />
          &nbsp; 여성 &nbsp;
          <input
            className={styles.men}
            type="radio"
            class="radio"
            name="gender"
          />
          &nbsp; 남성
        </label>
        <br />
        <br />
        <label className={styles.ok}>
          <input className={styles.box} type="checkbox" class="agree" />
          &nbsp; 이용약관 개인정보 수집 및 정보이용에 동의합니다.
        </label>
        <button className={styles.joinbtn}>가입하기</button>
      </div>
    </div>
  );
};

export default CreateId;
