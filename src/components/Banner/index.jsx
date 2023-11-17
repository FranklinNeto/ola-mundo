import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.jpg";
import Animation from "components/Animation";
function Banner() {
  return (
    <Animation>
      <div className={styles.banner}>
        <div className={styles.apresentacao}>
          <h1 className={styles.titulo}>Olá, mundo!</h1>
          <p className={styles.paragrafo}>
            Boas vindas ao meu espaço pessoal! Eu sou Franklin Neto, estudante
            de Desenvolvimento Web Full Stack. Aqui compartilho vários conhecimentos, espero
            que aprenda algo novo :)
          </p>
        </div>
        <div className={styles.imagens}>
          <img
            className={styles.circuloColorido}
            src={circuloColorido}
            alt="Circulo Colorido"
            aria-hidden={true}
          />
          <img className={styles.minhaFoto} src={minhaFoto} alt="Minha Foto" />
        </div>
      </div>
    </Animation>
  );
}

export default Banner;
