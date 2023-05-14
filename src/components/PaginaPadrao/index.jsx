import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

function PaginaPadrao() {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
    /* https://reactrouter.com/en/main/start/overview#nested-routes */
  );
}

export default PaginaPadrao;
