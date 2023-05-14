import { BrowserRouter, Route, Routes } from "react-router-dom";
import Initial from "./pages/Initial";
import AboutMe from "./pages/AboutMe";
import Menu from "./components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<h2>Página não encontrada...</h2>} />{" "}
        {/* se não achar nenhuma das rotas acimas, o * é acionado. */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
