import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import Button from "components/Button";

function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/posts/${post.id}/capa.png`}
          alt={post.titulo}
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <Button>Ler</Button>
      </div>
    </Link>
  );
}

export default PostCard;
