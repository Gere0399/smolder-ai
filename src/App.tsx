import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Create from "./pages/Create";
import Details from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/create" element={<Create />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;