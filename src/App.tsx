import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import Home from "./pages/home";
import LandingPage from "./pages/landing-page";
import ProtectedRoute from "./pages/protected";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
