import Banner from '../../componentes/Banner'
import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/menu";
import styles from './PaginaInicial.module.scss'
import Rodape from '../../componentes/rodape';
import Galeria from '../../componentes/Galeria';

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
      <div>
        <Galeria/>
      </div>
      <Rodape/>
    </>
  );
}
