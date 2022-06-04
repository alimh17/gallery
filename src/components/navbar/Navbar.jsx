import React from "react";
import { FaSearch } from "react-icons/fa";

import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <form className={style.form}>
        <button type="submit">
          <FaSearch />
        </button>
        <input type="text" placeholder="جستجو" />
      </form>
    </nav>
  );
};

export default Navbar;
