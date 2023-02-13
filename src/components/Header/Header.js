import React from "react";
import style from "./Header.module.css";
import clsx from "clsx";
import Button from "../common/Button/Button";
function Header() {
  return (
    <div className={style.header}>
      <img className={style.header_logo} src="./img/logo.png" alt="logo" />
      <div className={style.header_content}>
        <div className={style.header_input}>
          <input className={style.header_input_item} placeholder="Tìm Kiếm" />
          <i
            className={clsx(
              style.header_input_icon,
              "fa-solid fa-magnifying-glass"
            )}
          ></i>
        </div>
        <div className={style.header_contact}>
          <div className={style.header_contact_content}>
            <div className={style.header_content_title}>Tư vấn bán hàng</div>
            <div className={style.header_content_text}>Gọi ngay 0833832976</div>
          </div>
          <Button className={style.header_contact_icon}>
            <i class="fa-solid fa-phone"></i>
          </Button>
          </div>
          <Button><i class="fa-sharp fa-solid fa-user"></i></Button>
          <Button><i class="fa-sharp fa-solid fa-cart-plus"> </i></Button>
       
        <div className=""></div>
      </div>
    </div>
  );
}

export default Header;
