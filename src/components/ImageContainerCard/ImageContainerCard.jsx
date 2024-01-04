import React from "react";
import style from "./style.module.css";

const ImageContainerCard = ({ source, imgAlt, styles }) => {
  return (
    <div className={styles}>
      <img src={source} alt={imgAlt} className={style.image} />
    </div>
  );
};

export default ImageContainerCard;
