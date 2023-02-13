import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className={style.navbar}>
      <ul className={style.navbar_menu}>
        <li className={style.navbar_item}><Link to="/Home"> Trang Chủ</Link> </li>
        <li className={style.navbar_item}>
          Thể Loại
          <ul className={style.submenu}>
            <li className={style.subitem}>Nike</li>
            <li className={style.subitem}>Adidas</li>
            <li className={style.subitem}>puma</li>
          </ul>
        </li>
        <li className={style.navbar_item}>
        <Link to="/product">Chi tiết</Link>
        <ul className={style.submenu}>
            <li className={style.subitem}>Nike</li>
            <li className={style.subitem}>Adidas</li>
            <li className={style.subitem}>puma</li>
          </ul>
        </li>
        <li className={style.navbar_item}> <Link to ='/connect'>Liên Hệ</Link> </li>
      </ul>
    </nav>
  );
}

export default NavBar;
