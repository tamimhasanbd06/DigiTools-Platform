import React, { useState } from "react";

const ProductCardSection = ({
  products, cartItems, addToCart, removeFromCart }) => {

  const [selectedBtn, setSelectedBtn] = useState("Products");

  // Check if in cart
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  // Total Price
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  // Checkout
  const handleCheckout = () => {
    alert("Checkout Complete ");
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Premium Digital Tools
          </h2>

          <p className="mt-4 mb-6 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          {/* Toggle Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5">

            <button onClick={() => setSelectedBtn("Products")} className={`${ selectedBtn === "Products" ?
               "bg-[#4f39f6] text-white shadow-md scale-105" :
                "border border-gray-300 hover:bg-gray-100"} px-5 py-2.5 rounded-full transition-all duration-200`}>
              Products
            </button>

            <button
              onClick={() => setSelectedBtn("Cart")} className={`${ selectedBtn === "Cart" ? 
              "bg-[#4f39f6] text-white shadow-md scale-105" 
              : "border border-gray-300 hover:bg-gray-100" } px-5 py-2.5 rounded-full transition-all duration-200`}>
              Cart ({cartItems.length})
            </button>

          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        {selectedBtn === "Products" && (
          <div className="grid gap-6 grid-cols-1 min-[700px]:grid-cols-2 min-[1200px]:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="p-5 md:p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl
               transition-all duration-300 relative overflow-hidden">

                {/* Tag */}
                <div className="absolute top-5 right-5 bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-xs md:text-sm">
                  {product.tag}
                </div>

                {/* Icon */}
                <div className="mb-5 w-14 h-14 md:w-16 md:h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-3xl md:text-4xl">
                  {product.icon}
                </div>

                {/* Title */}
                <h2 className="text-lg md:text-[26px] font-bold text-gray-900 mb-2 leading-snug">
                  {product.name}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-[15px] mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl md:text-4xl font-bold">
                    ${product.price}
                  </span>
                  <span className="text-gray-500 text-sm md:text-lg ml-1">
                    /{product.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 md:space-y-3 mb-6"> {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm md:text-[15px]">
                      <span className="text-emerald-500 mt-1">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                {isInCart(product.id) ? (
                  <button onClick={() => removeFromCart(product.id)} className="w-full bg-red-500 hover:bg-red-600
                   text-white font-semibold py-3 md:py-4 rounded-2xl text-sm md:text-base transition-all duration-200">
                    Remove
                  </button>
                ) : (
                  <button onClick={() => addToCart(product)} className="w-full bg-[#8B2CFF] hover:bg-[#7C22E6] active:bg-[#6B1ED1]
                   text-white font-semibold py-3 md:py-4 rounded-2xl text-sm md:text-base transition-all duration-200">
                    Buy Now
                  </button>
                )}

              </div>
            ))}

          </div>
        )}

        {/* ================= CART ================= */}
        {selectedBtn === "Cart" && ( <div className="max-w-7xl mx-auto bg-gray-50 p-4 sm:p-6 md:p-8 rounded-2xl">

            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">
              Your Cart
            </h2>

            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 py-10">
                Your cart is empty 🛒
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start 
                  sm:items-center gap-4 bg-white p-4 rounded-xl mb-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 font-bold text-xs sm:text-sm">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm font-bold" >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Total */}
                <div className="flex justify-between items-center mt-6 mb-4 text-sm sm:text-base">
                  <span className="text-black text-xl font-bold">Total</span>
                  <span className="font-bold text-lg">${totalPrice}</span>
                </div>

                {/* Checkout */}
                <button
                  onClick={handleCheckout} className="w-full bg-blue-600 hover:bg-blue-700 font-bold text-white py-3 rounded-full transition">
                  Proceed To Checkout
                </button>
              </>
            )}

          </div>
        )}

      </div>
    </section>
  );
};

export default ProductCardSection;