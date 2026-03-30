import React from "react";

const ProductCardSection = ({ products }) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10">

      {/* Container */}
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

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5">
            <button className="bg-[#4f39f6] hover:bg-[#3c2ed9] text-white px-5 py-2.5 rounded-full transition-all duration-200">
              Products
            </button>

            <button className="border border-gray-300 hover:bg-gray-100 px-5 py-2.5 rounded-full transition-all duration-200">
              Cart (2)
            </button>
          </div>
        </div>

        {/* Cards Grid (MAIN RESPONSIVE PART) */}
        <div className="grid gap-6 grid-cols-1 min-[700px]:grid-cols-2 min-[1200px]:grid-cols-3" >
          {products.map((product) => (
            <div key={product.id} className=" p-5 md:p-8  bg-white border border-gray-100  rounded-3xl shadow-sm hover:shadow-xl
              transition-all duration-300  relative  overflow-hidden">
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
              <ul className="space-y-2 md:space-y-3 mb-6">
                {product.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700 text-sm md:text-[15px]"
                  >
                    <span className="text-emerald-500 mt-1">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full bg-[#8B2CFF] hover:bg-[#7C22E6] active:bg-[#6B1ED1] text-white 
              font-semibold py-3 md:py-4 rounded-2xl text-sm md:text-base transition-all duration-200">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCardSection;