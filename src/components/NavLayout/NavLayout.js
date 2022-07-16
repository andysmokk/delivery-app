import { NavLink, Outlet } from "react-router-dom";
import s from "./NavLayout.module.css";

function NavLayout() {
  return (
    <>
      <header className={s.header}>
        <NavLink to="/" className={s.link}>
          Shop
        </NavLink>
        <NavLink to="/shopping-cart" className={s.link}>
          Shopping cart
        </NavLink>
      </header>
      <Outlet />
    </>
  );
}

export default NavLayout;
