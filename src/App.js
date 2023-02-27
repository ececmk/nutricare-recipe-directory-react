import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home'
import Create from './Pages/Create/Create'
import Recipe from './Pages/Recipe/Recipe'
import Search from './Pages/Search/Search'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes/:id" element={<Recipe />} />
    </Routes>
    </div>
  );
}

export default App;
