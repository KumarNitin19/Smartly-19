
import './App.css';
import {Routes , Route, Navigate} from 'react-router-dom'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ProductDetail from './Components/Products/ProductDetail';
import Cart from './Cart/Cart';
import Checkout from './Cart/Checkout';
import { AuthProvider } from './Context/authContext';


function App() {
  return (
   <AuthProvider>
       <div className="App">
      <Navbar></Navbar>
      {/* <Home></Home> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/' element={<Home />} />
        </Routes>
    </div>
   </AuthProvider>
  );
}

export default App;
