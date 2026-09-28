import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Homepages from "./Pages/Homepages";
import Cart from "./Pages/Cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const cartCount = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );
  const handleAddToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  };
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(1, product.quantity - 1),
            }
          : product,
      ),
    );
  };

  const handleRemoveFromCart = (index) => {
    setCart((current) => current.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <Routes>
      <Route element={<MainLayout cart={cart} cartCount={cartCount} />}>
        <Route
          path="/"
          element={<Homepages handleAddToCart={handleAddToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
      </Route>
    </Routes>
  );
}
