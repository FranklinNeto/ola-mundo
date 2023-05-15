import styles from "./Initial.module.css";
import posts from "json/posts.json";
import PostCard from "components/PostCard";
import Animation from "components/Animation";
function Initial() {
  return (
    <Animation>
      <ul className={styles.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          );
        })}
      </ul>
    </Animation>
  );
}

export default Initial;
