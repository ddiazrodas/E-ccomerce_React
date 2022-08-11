import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [qtyProducts, setQtyProducts] = useState([0]);
  const [totalCompra, setCalculateTotal] = useState(0);

  const getQtyProducts = () => {
    let qty = 0;
    products.forEach((product) => (qty += product.qty));
    setQtyProducts(qty);
  };

  useEffect(() => {
    getQtyProducts();
    calculateTotal();
  }, [products]);

  const addProduct = (product) => {

    if (checkCartList(product.id)) {
      
      const found = products.find((p) => p.id === product.id); 
      const index = products.indexOf(found); 
      aux[index].qty += product.qty; 
      setProducts(aux);

    } else {
      setProducts([...products, product]);
    }
  };

  const delProduct = (id) => {

    setProducts(products.filter((product) => product.id !== id));
  };

  const checkCartList = (id) => {

    const found = products.find((product) => product.id === id);
    return found ? true : false;
  };

  const clear = () => {
    setProducts([]);
    setQtyProducts([]);
  };

  const calculateTotal = () => {

    setCalculateTotal(products.reduce(
      (contador, product) => contador + product.price * product.qty,
      0
    ));
  };

  return (
    <Provider
      value={{
        products,
        addProduct,
        delProduct,
        qtyProducts,
        clear,
        calculateTotal,
        totalCompra,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartCustomProvider;
