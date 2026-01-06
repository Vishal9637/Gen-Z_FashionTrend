import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home.jsx";
import Results from "./Pages/Results.jsx";
import OutfitDetails from "./Pages/OutfitDetails.jsx";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/outfit/:id" element={<OutfitDetails />} />
      </Routes>
    </HashRouter>
  );
};

export default App;


