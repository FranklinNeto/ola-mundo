import PostModel from "components/PostModel";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";
import styles from "./AboutMe.module.css";
import Animation from "components/Animation";

function AboutMe() {
  return (
    <Animation>
      <PostModel fotoCapa={fotoCapa} titulo={"Sobre mim"}>
        <h3 className={styles.subtitulo}>Olá, eu sou o Franklin!</h3>
        <img
          className={styles.fotoSobreMim}
          src={fotoSobreMim}
          alt="Minha foto"
        />

        <p className={styles.paragrafo}>
          Oi, tudo bem? Eu sou estudante de Desenvolvimento Web Full Stack e
          estou feliz de te ver por aqui.
        </p>
        <p className={styles.paragrafo}>
          Atualmente estou me graduando em Análise e Desenvolvimento de Sistemas
          pela Faculdade Martha Falcão e possuo formação incompleta em
          Biotecnologia na Universidade Federal do Amazonas.
        </p>
        <p className={styles.paragrafo}>
          Iniciei o ensino superior cursando, por um período, Medicina na
          Universidade do Estado do Amazonas onde descobri minha paixão por
          biotecnologia, que por sua vez, me mostrou que programar seres vivos e
          computadores podem ter conceitos muito parecidos.
        </p>
        <p className={styles.paragrafo}>
          Durante minha formação, tive a oportunidade de participar de
          diferentes atividades extracurriculares sobre Biotecnologia, com
          destaque para participações em eventos nacionais e internacionais como
          o IGEM (International Genetically Engineered Machine). Essas
          experiências me permitiram desenvolver uma visão ampla e integrada de
          como a tecnologia, como a programação, pode ser aplicada na ciência.
        </p>
        <p className={styles.paragrafo}>
          Com uma curiosidade inquieta e sempre disposto a aprender novas
          ferramentas e tecnologias, encontrei na Programação um novo caminho
          para expandir meus conhecimentos e contribuir para a realização de
          novos projetos. Em 2022, iniciei minha jornada como desenvolvedor na
          Kenzie Academy, além de complementar meus estudos com outros cursos
          disponíveis na plataforma Alura, como forma de estar sempre atualizado
          e aprimorar minhas habilidades.
        </p>
        <p className={styles.paragrafo}>
          Nessa trajetória, adquiri experiência em diversas tecnologias, como
          HTML5, CSS3, JavaScript, Typescript, ReactJS, NodeJS, Express e
          Python, já tendo feito alguns pequenos projetos de Front-End e
          Back-End. Enfim, esta é um pouco da minha história. Com este meu
          projeto, espero que aprenda bastante sobre alguns dos meus interesses!
        </p>
      </PostModel>
    </Animation>
  );
}

export default AboutMe;
