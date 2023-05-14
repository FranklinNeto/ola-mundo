import Banner from "components/Banner";
import styles from "./Initial.module.css";
import posts from "assets/json/posts.json";
import Post from "components/Post";

function Initial() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Initial;
