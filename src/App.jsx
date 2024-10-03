import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { AuthProvider } from "./contexts/AuthContext";
import { ProgressProvider } from "./contexts/PercentageContext";
import { Habits, Historic, Login, Register, Today } from "./pages";

export const pathsWithoutHeaderAndMenu = ['/', '/register'];

export default function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/today" element={<Today />} />
            <Route path="/historic" element={<Historic />} />
          </Routes>
          <Menu />
        </BrowserRouter>
      </ProgressProvider>
    </AuthProvider>
  );
}