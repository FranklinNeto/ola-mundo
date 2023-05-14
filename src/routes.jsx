import { BrowserRouter, Route, Routes } from "react-router-dom";
import Initial from "./pages/Initial";
import AboutMe from "./pages/AboutMe";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import PaginaPadrao from "components/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Initial />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Route>
        <Route path="*" element={<h2>Página não encontrada...</h2>} />{" "}
        {/* se não achar nenhuma das rotas acimas, o * é acionado. */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
