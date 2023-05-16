import Banner from '../../componentes/Banner'
import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/menu";
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />

      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner/>
        </section>
      </main>
    </>
  );
}
