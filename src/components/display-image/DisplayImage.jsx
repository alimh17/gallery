import React from "react";
import { FaTimes } from "react-icons/fa";

import style from "./display.module.css";

const DisplayImage = ({ selected, show }) => {
  return (
    <>
      <div className={style.display}></div>
      <FaTimes className={style.times} onClick={() => show(false)} />
      <img src={selected[0].urls.full} className={style.img} />
    </>
  );
};

export default DisplayImage;
