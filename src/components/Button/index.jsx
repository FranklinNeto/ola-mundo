import styles from "./Button.module.css";

function Button({ children, large = false }) {
  return (
    <button
      className={`${styles.botao}
  ${large ? styles.botaoGrande : ""} `}
    >
      {children}
    </button>
  );
}

export default Button;
