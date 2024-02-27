//? Hooks
import { Routes, Route, useLocation } from "react-router-dom";

//? Components
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";

//? Utilities

const App = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {(pathname === "/home" ||
        pathname === "/createActivity" ||
        pathname.includes("/search")) && <NavBar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search/:userInput" element={<Search />} />
        <Route path="/countries/:id" element={<Detail />} />
        <Route path="/createActivity" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
