import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
