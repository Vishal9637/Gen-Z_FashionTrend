import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home.jsx";
import Results from "./Pages/Results.jsx";
import OutfitDetails from "./Pages/OutfitDetails.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/outfit/:id" element={<OutfitDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
