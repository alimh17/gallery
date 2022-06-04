import React, { useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import DisplayImage from "../display-image/DisplayImage";

import style from "./gallery.module.css";

const Gallery = ({ data }) => {
  const [display, setDisplay] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleDisplay = (e) => {
    const filter = data.filter((f) => f.id === e.target.id);

    setDisplay(true);
    setSelected(filter);
  };

  return (
    <div className={style.container}>
      {data &&
        data.map((item) => (
          <div key={item.id} className={style.wrapper}>
            <img
              src={item.urls.full}
              id={item.id}
              onClick={(e) => handleDisplay(e)}
            />
            {display && <DisplayImage selected={selected} show={setDisplay} />}
          </div>
        ))}
    </div>
  );
};

export default Gallery;
