import { useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/ShopPage/Shop';
import { Nav } from './components/navbar/nav';
import Footer from './components/footer/Footer';
import Cart from './components/Cart/Cart';

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>
        <Nav/>
        <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/cart" element={<Cart />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
       
  )
}

export default App;