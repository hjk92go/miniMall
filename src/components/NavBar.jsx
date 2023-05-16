import { Link, Outlet } from "react-router-dom";
import styles from "../css/NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const user = localStorage.getItem("uid");
  return (
    <div>
      <div className={styles.bar}>
        <div className={styles.wrapped}>
          <div>
            <Link to="/">PERFUME THERAPY</Link>
          </div>
          <div className={styles.other}>
            <div>
              <Link to="product">PRODUCT</Link>
            </div>
            <div>
              <Link to="cart">
                <FontAwesomeIcon
                  className={styles.userIcon}
                  icon={faCartShopping}
                />
              </Link>
            </div>
            {user ? (
              <Link to="mypage">
                <FontAwesomeIcon className={styles.cartIcon} icon={faUser} />
              </Link>
            ) : (
              <Link to="login">
                <FontAwesomeIcon className={styles.cartIcon} icon={faUser} />
              </Link>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
