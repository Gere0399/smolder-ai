import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Create from "./pages/Create";
import Product from "./pages/Product";
import Plans from "./pages/Plans";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/create" element={<Create />} />
      <Route path="/product" element={<Product />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;