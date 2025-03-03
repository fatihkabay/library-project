import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/form/Login";
import Register from "./pages/form/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
