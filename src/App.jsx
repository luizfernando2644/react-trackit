import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Habitos from "./pages/Habitos/Habitos";
import Hoje from "./pages/Hoje/Hoje";
import Historico from "./pages/Historico/Historico";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Cadastro />} />
          <Route path="/habits" element={<Habitos />}/>
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;