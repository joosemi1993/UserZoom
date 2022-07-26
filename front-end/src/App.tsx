import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Explore from "./screens/Explore";
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/explore' element={<Explore/>} />
      </Routes>
    </Router>
  );
}

export default App;
