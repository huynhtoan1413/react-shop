import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const products = [
    { id: 1, name: "Mật ong rừng", price: 200000, image: "https://via.placeholder.com/200?text=Honey" },
    { id: 2, name: "Sáp ong thiên nhiên", price: 150000, image: "https://via.placeholder.com/200?text=Bee+Wax" },
    { id: 3, name: "Mật ong hoa nhãn", price: 180000, image: "https://via.placeholder.com/200?text=Longan+Honey" }
  ];
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => setCartItems((prev) => [...prev, product]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop Mật Ong</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}
export default App;