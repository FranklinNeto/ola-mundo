import styles from "./Post.module.css";

function Post({ post }) {
  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        src={`/posts/${post.id}/capa.png`}
        alt={post.titulo}
      />
    </div>
  );
}

export default Post;
