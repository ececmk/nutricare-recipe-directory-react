import { BrowserRouter, Routes, Route } from "react-router-dom";

// page components
import Home from './Pages/Home/Home'
import Create from './Pages/Create/Create'
import Search from './Pages/Search/Search'
import Recipe from './Pages/Recipe/Recipe'

// styles
import './App.css'
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:id" element = {<Recipe />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App