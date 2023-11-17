import styles from "./Footer.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

function Footer() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      Desenvolvido por Franklin Neto
    </footer>
  );
}

export default Footer;
