import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import About from "./pages/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/settings" exact element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
