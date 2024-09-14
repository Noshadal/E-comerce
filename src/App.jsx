import './App.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Sign from './component/Sign';
import Login from './component/Login';
import Home from './component/Home';
import Card from './component/Card';
import Product from './component/Product';
import Loading from './component/loading';
import Profile from './component/profile';
import Addtocard from './component/Addtocard';

function App() {

  return (
    <>
     <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/add" element={<Addtocard />} />
      <Route path="/product" element={<Product />} />
      <Route path="/profile" element={<Profile />} />
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
