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
    // con un setProduct con product y spread, validando que el producto no exista en la lista

    if (checkCartList(product.id)) {
      //le paso el id a la funcion checkCartList para revisar si está ya el producto

      const found = products.find((p) => p.id === product.id); //q traiga el que coincide con el ID, para pedir que lo saque luego
      const index = products.indexOf(found); // me indica en que posicion esta ubicado del array
      const aux = [...products]; //hago una copia de estado, ya que no se puede hacer el cambio directo
      aux[index].qty += product.qty; //y que en la posicion del producto al q queremos modificar la cantidad, la actualice
      setProducts(aux);

      //forma resumida PRO seria:  aux[products.indexOf(products.find(p => p.id === product.id))].qty += product.qty
    } else {
      setProducts([...products, product]); //si el producto no está, seteo el estado del array de producst agregando el nuevo
    }
  };

  const delProduct = (id) => {
    // eliminar el producto que tiene el id usando filter
    setProducts(products.filter((product) => product.id !== id)); //me devuelve un nuevo array que lo seteo y cambio el estado, eliminando el que le paso por parametro
  };

  const checkCartList = (id) => {
    // validar en la lista si el producto existe con un find o indexOf
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
