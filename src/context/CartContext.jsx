import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  console.log(items);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setItems(res.data);
    };
    fetchProduct();
  }, []);

  const [state, dispatch] = useReducer(CartReducer, {
    products: items,
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
