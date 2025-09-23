import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
