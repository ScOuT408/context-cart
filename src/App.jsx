import CartBtn from "./CartBtn";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";

function App() {
  return (
    <>
      <CartBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
