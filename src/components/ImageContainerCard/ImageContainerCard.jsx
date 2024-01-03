import React, { useEffect } from "react";
import style from "./style.module.css";
import { useRef } from "react";

const ImageContainerCard = ({ source, imgAlt, styles }) => {
  return (
    <div className={styles}>
      {/* image  */}
      <img src={source} alt={imgAlt} className={style.image} />
      {/* black gradient division */}
      <div className=""></div>
    </div>
  );
};

export default ImageContainerCard;
