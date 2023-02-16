import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product1 from "./components/Product1/Product1";
import Product2 from "./components/Product2/Product2"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/106824010" element={<Home />} />
        <Route path="/381541010" element={<Product1 />} />
        <Route path="/452328010" element={<Product2 />} />
      </Routes>
    </div>
  );
}

export default App;
        
