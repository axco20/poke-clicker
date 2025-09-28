import { Routes, Route } from "react-router-dom";
import Home from "./pages/login";
import Dashboard from "./pages/dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
