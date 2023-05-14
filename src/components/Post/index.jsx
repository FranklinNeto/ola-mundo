import styles from "./Post.module.css";

function Post({ post }) {
  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        src={`/posts/${post.id}/capa.png`}
        alt={post.titulo}
      />
      <h2 className={styles.titulo}>{post.titulo}</h2>
      <button className={styles.botaoLer}>Ler</button>
    </div>
  );
}

export default Post;
