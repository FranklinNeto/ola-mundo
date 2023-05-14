import posts from "assets/json/posts.json";
import PostModel from "components/PostModel";
import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();

  const post = posts.find((post) => post.id === Number(params.id)); //params da url sempre vão ser string

  return (
    <PostModel
      fotoCapa={`/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    ></PostModel>
  );
}

export default Post;
