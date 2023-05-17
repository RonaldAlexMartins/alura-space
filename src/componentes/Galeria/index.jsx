import React from "react";
import styles from "./Galeria.module.scss";
import Tags from "../Tags";
import fotos from "./fotos.json";
import open from "./open.png";
import favorito from "./favorito.png";

export default function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela Galeria</h2>
      <Tags />
      <ul className={styles.galeria__cards}>
        {fotos.map((fotos) => {
          return (
            <li key={fotos.id} className={styles.galeria__card}>
              <img
                className={styles.galeria__imagem}
                src={fotos.imagem}
                alt={fotos.titulo}
              />
              <p className={styles.galeria__descricao}>{fotos.titulo}</p>
              <div>
                <p>{fotos.creditos}</p>
                <span>
                  <img src={favorito} alt="Ícone coração de curtir" />
                  <img src={open} alt="Ícone de abrir modal" />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
