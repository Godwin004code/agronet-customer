
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
