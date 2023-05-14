import Button from "components/Button";
import styles from "./NotFound.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div
          className={styles.botaoContainer}
          onClick={() => {
            navegar(-1); //-1 retorna para a última página visitada
          }}
        >
          <Button large>Voltar</Button>
        </div>

        <img
          className={styles.imagemCachorro}
          alt="Foto de um cachorro"
          src={erro404}
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
export default NotFound;
