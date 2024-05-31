import HomePage from "./assets/HomePage";
import Navbar from "./assets/Navbar"
import Contact from "./assets/Contact";
import Footer from "./assets/Footer";
import Shop from "./assets/Shop";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Reviews from "./assets/Reviews";
import About from "./assets/About";
import ProductsType from "./assets/ProductsType";
import DisplayCart from "./assets/DisplayCart";
import MidNav from "./assets/MidNav";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab)
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

export default function App(){

  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/about" element={
          <>
           <MidNav text = 'About Us'/>
          <About/>
          </>
          }/>
             <Route
          path="/products"
          element={<ProductsType/>}
        />
         <Route path="/cart" element={<DisplayCart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/reviews" element={<>
        <MidNav text="Our Clients' Reviews"/>
          < Reviews/>
        </>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cakes" element={<Shop />} /> 
        <Route path="/biscuits" element={<Shop />} /> 
        <Route path="/cupcakes" element={<Shop />} /> 
        <Route path="/biscuits" element={<Shop />} /> 
      </Routes>
      <Footer />
    </Router>
  )
}





