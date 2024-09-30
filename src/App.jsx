import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./components/Cadastro/Cadastro";
import Login from "./components/Login/Login";
import Hoje from "./components/Hoje/Hoje";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Cadastro />} />
          <Route path="/hoje" element={<Hoje />} />
          {/* <Route path="/success/:idFilme" element={<SuccessPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;