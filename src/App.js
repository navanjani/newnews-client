import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import SearchArticlePage from "./pages/SearchArticlePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/search" element={<SearchArticlePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
