import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./components/Cadastro/Cadastro";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Cadastro />} />
          {/* <Route path="/seats/:idFilme" element={<SeatsPage />} />
          <Route path="/success/:idFilme" element={<SuccessPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;