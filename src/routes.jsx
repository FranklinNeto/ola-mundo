import { BrowserRouter, Route, Routes } from "react-router-dom";
import Initial from "pages/Initial";
import AboutMe from "pages/AboutMe";
import Post from "pages/Post";
import Menu from "components/Menu";
import Footer from "components/Footer";
import PaginaPadrao from "components/PaginaPadrao";
import NotFound from "pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Initial />} />
          {/* index ==> possui a mesma rota do Route pai */}
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
        {/* se não achar nenhuma das rotas acimas, o * é acionado. */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
