import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import PlayingVideo from "./pages/PlayingVideo/PlayingVideo";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      
      <Header onClick={() => setOpen(!open)} />
      <Menu isOpen={open} />
   <div
        className={`${
          open ? "md:ml-[240px] lg:ml-[240px]" : "md:ml-[72px] lg:ml-[72px]"
        } transition-all duration-300`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<PlayingVideo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
