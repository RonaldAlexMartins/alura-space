import React from 'react'
import banner from './banner.png'
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.principal}>
      <h1>A Galeria mais completa do espaço</h1>
      <img src={banner} alt="A Imagem da terra vista do espaço" />
    </div>
  );
}
