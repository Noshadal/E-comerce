import './App.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Sign from './component/Sign';
import Login from './component/Login';
import Home from './component/Home';
import Card from './component/Card';
import Product from './component/product';

function App() {

  return (
    <>
     <BrowserRouter basename="/">
    <Routes>
      {/* <Route path="/" element={<Lodsing />} /> */}
      <Route path="/product" element={<Product />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Sign" element={<Sign />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
