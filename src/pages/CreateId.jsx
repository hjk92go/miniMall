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
        <div className={styles.email1} for="name">
          * 이메일
          <br />
          <input className={styles.email2} type="text" id="email" />
          <br />
          <br />
        </div>
        <div className={styles.name1} for="name">
          * 이름
          <br />
          <input className={styles.name2} type="text" id="name" />
          <br />
          <br />
        </div>
        <div className={styles.checkpass1} for="password1">
          * 비밀번호
          <br />
          <input className={styles.checkpass2} type="password" /> <br />
          <br />
        </div>
        <div className={styles.repass1} for="password2">
          * 비밀번호 확인
          <br />
          <input className={styles.repass2} type="password" />
          <br />
          <br />{" "}
        </div>
        <label className={styles.choice}>
          <input className={styles.women} type="radio" name="gender" />
          &nbsp;&nbsp; &nbsp;여성 &nbsp;&nbsp;&nbsp;
          <input className={styles.men} type="radio" name="gender" />
          &nbsp;&nbsp;&nbsp; 남성
        </label>
        <br />

        <label className={styles.ok}>
          <input className={styles.agreeBox} type="checkbox" />
          &nbsp;&nbsp; 이용약관 개인정보 수집 및 정보이용에 동의합니다.
        </label>
        <button className={styles.joinbtn}>가입하기</button>
      </div>
    </div>
  );
};

export default CreateId;
