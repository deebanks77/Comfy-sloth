import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  About,
  Cart,
  Checkout,
  Error,
  Private,
  Products,
  SingleProduct,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />

          <Route exact path="cart" element={<Cart />} />

          <Route exact path="products" element={<Products />} />

          <Route exact path="products/:id" element={<SingleProduct />} />
          <Route
            exact
            path="/checkout"
            element={
              <Private>
                <Checkout />
              </Private>
            }
          />

          {/* <Route exact path="/checkout" element={<Checkout />}></Route> */}
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
