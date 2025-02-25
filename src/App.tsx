import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import Home from "./pages/home";
import LandingPage from "./pages/landing-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
