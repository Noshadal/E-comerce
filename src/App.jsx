import './App.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Sign from './component/Sign';
import Login from './component/Login';
import Home from './component/Home';
import Card from './component/Card';
import Product from './component/Product';
import Loading from './component/Loading';
import Profile from './component/Profile';
import Addtocard from './component/Addtocard';
import Notfound from './Notfount'

function App() {

  return (
    <>
     <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="*" element={<Notfound />} />
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
