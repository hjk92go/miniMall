import { Outlet } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      PerfumeTherapy
      <li>검색창</li>
      <li>Cart</li>
      <li>MyPage</li>
      <Outlet />
    </div>
  );
};

export default NavBar;
