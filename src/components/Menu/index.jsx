import styles from "./Menu.module.css";
import MenuLink from "./MenuLink";

function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/aboutme">Sobre mim</MenuLink>
      </nav>
    </header>
  );
}

export default Menu;
