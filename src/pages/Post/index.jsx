import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import NotFound from "pages/NotFound";
import Button from "components/Button";
import PostCard from "components/PostCard";
import "./Post.css";
import styles from "./Post.module.css";

function Post() {
  const navegar = useNavigate();
  const params = useParams();

  const post = posts.find((post) => post.id === Number(params.id)); //params da url sempre vão ser string

  if (!post) {
    return <NotFound />;
  }

  const postRecomendados = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <PostModel fotoCapa={`/posts/${post.id}/capa.png`} titulo={post.titulo}>
      <div className="post-markdown-container ">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
      <div>
        <h2 className={styles.tituloOutrosPosts}>
          Outros posts que você pode gostar:
        </h2>
        <ul className={styles.postsRecomendados}>
          {postRecomendados.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>

      <div
        className="botao__container"
        onClick={() => {
          navegar(-1);
        }}
      >
        <Button large>Voltar</Button>
      </div>
    </PostModel>
  );
}

export default Post;
