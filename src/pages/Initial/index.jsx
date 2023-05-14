import styles from "./Initial.module.css";
import posts from "json/posts.json";
import PostCard from "components/PostCard";

function Initial() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
}

export default Initial;
