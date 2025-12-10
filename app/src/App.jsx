import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RSA_Explained from "./pages/RSA_Explained";
import RSA_Calculator from "./pages/RSA_Calculator";

function App() {
  return (
    <BrowserRouter basename="/NJIT-CS351-RSA-Algorithm">
      <Navbar />

      <Routes>
        <Route path="/" element={<RSA_Explained />} />
        <Route path="/calculator" element={<RSA_Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
