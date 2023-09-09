import Home from "./pages/Home";
import Categoriesmovie from "./pages/Categoriesmovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePath } from "./assets/Route";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={routePath.categories} element={<Categoriesmovie />} />
        <Route path={routePath.invalid} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
