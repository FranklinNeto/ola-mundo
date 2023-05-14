import posts from "json/posts.json";
import PostModel from "components/PostModel";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import "./Post.css";
import NotFound from "pages/NotFound";
import Button from "components/Button";

function Post() {
  const navegar = useNavigate();
  const params = useParams();

  const post = posts.find((post) => post.id === Number(params.id)); //params da url sempre vão ser string

  if (!post) {
    return <NotFound />;
  }
  return (
    <PostModel fotoCapa={`/posts/${post.id}/capa.png`} titulo={post.titulo}>
      <div className="post-markdown-container ">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
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
