import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "./Reducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setItems(res.data);
    };
    fetchProduct();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: items,
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
