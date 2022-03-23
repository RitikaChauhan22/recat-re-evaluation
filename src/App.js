import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Products } from "./components/ProductsDashboard";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
     
       <Router>
         <div>
           
         
           <Routes>
           
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="products" element={<Products />} />

           </Routes>


         </div>
         
       </Router>

    </div>
  );
}

export default App;
