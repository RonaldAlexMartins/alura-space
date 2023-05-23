import React from "react";
import styles from "./Menu.module.scss";
import Icone from "./menu/icones";
import icones from "./icones.json"

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
          {icones.map((icone) => <Icone key={icone.nome} style={styles} icone={icone}/>)}
      </ul>
    </nav>
  );
}
