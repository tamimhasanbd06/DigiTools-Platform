import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import PlaneCards from './Components/PlaneCards';
import Price from './Components/Price';
import ProductCardSection from './Components/ProductCardSection';
import StaticCardSection from './Components/StaticCardSection';
import Transform from './Components/Transform';

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 GLOBAL CART STATE
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchProduct()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  // Add to Cart
  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (!exists) {
      setCartItems(prev => [...prev, product]);
    }
  };

  // Remove
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Banner />
      <Price />

      {loading ? (
        <div className="flex justify-center my-10">
          <span className="loading loading-infinity loading-xl"></span>
        </div>
      ) : (
        <ProductCardSection
          products={products}
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      )}

      <StaticCardSection />
      <PlaneCards />
      <Transform />
      <Footer />
    </>
  );
}

export default App;