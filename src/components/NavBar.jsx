import { Outlet } from "react-router-dom";
import styles from "../css/NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div className={styles.bar}>
        <li>PerfumeTherapy</li>
        <li>
          <input className={styles.search} placeholder="여기에 검색해주세요." />
        </li>
        <li>Cart</li>
        <li>MyPage</li>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
