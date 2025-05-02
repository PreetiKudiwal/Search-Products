import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../Context/MainContext";

export default function Home() {

  
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const getProducts = () => {
    const ProductApiUrl = `https://dummyjson.com/products/category/mobile-accessories?limit=${limit}`;

    axios
      .get(ProductApiUrl)
      .then((success) => {
        setProducts(success.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {/* slider section start */}
      <div className="relative w-full bg-gray-100 pt-3 pb-10">
        <div className="container mx-auto">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className=" relative h-[550px] bg-contain bg-center bg-[url('/images/slide-04.jpg')]">
              <div className="flex flex-col justify-center h-full p-10 text-white bg-black/50">
                <span className="text-4xl font-semibold">
                  Women Collection 2025
                </span>
                <h2 className="text-6xl font-bold my-4">New arrivals</h2>
                <Link to={"/shop/:slug?"}>
                  <button className="w-[150px] rounded-md mt-2 p-2 text-xl font-medium bg-gray-800 hover:bg-gray-900 transition duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="relative h-[550px] bg-cover bg-center bg-[url('/images/slide-03.jpg')]">
              <div className="flex flex-col justify-center h-full p-10 text-white bg-black/50">
                <span className="text-4xl font-semibold">
                  Men Collection 2025
                </span>
                <h2 className="text-6xl font-bold my-4">New arrivals</h2>
                <Link to={"/shop/:slug?"}>
                  <button className="w-[150px] rounded-md mt-2 p-2 text-xl font-medium bg-gray-800 hover:bg-gray-900 transition duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="relative h-[550px] bg-cover bg-center bg-[url('/images/slide-02.jpg')]">
              <div className="flex flex-col justify-center h-full p-10 text-white bg-black/50">
                <span className="text-4xl font-semibold">Men New-Season</span>
                <h2 className="text-6xl font-bold my-4">Jackets & Coats</h2>
                <Link to={"/shop/:slug?"}>
                  <button className="w-[150px] rounded-md mt-2 p-2 text-xl font-medium bg-gray-800 hover:bg-gray-900 transition duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* slider section end */}

      {/* banner section start */}

      <div className="bg-white pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {/* Banner Block 1 */}
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
              <Link to={"/shop/:slug?"}>
                <div className="relative overflow-hidden group border border-gray rounded-md cursor-pointer">
                  <img
                    src="images/banner-01.jpg"
                    alt="IMG-BANNER"
                    className="w-full h-auto"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-10 transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-20">
                    <div>
                      <span className="text-2xl font-semibold text-black mb-2 transition-all duration-300 group-hover:text-white">
                        Women
                      </span>
                      <br />
                      <span className="text-md text-black transition-all duration-300 group-hover:text-white">
                        Summer 2025
                      </span>
                    </div>

                    {/* Shop Now */}
                    <div className="pb-1 transform translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-lg text-white font-medium group-hover:text-white border-b-2 border-transparent group-hover:border-white transition-all duration-300">
                        Shop Now
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Banner Block 2 */}
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
              <Link to={"/shop/:slug?"}>
                <div className="relative overflow-hidden group border border-gray rounded-md cursor-pointer">
                  <img
                    src="images/banner-02.jpg"
                    alt="IMG-BANNER"
                    className="w-full h-auto"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-10 transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-20">
                    <div>
                      <span className="text-2xl font-semibold text-black mb-2 transition-all duration-300 group-hover:text-white">
                        Men
                      </span>
                      <br />
                      <span className="text-md text-black transition-all duration-300 group-hover:text-white">
                        Summer 2025
                      </span>
                    </div>

                    {/* Shop Now */}
                    <div className="pb-1 transform translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-lg text-white font-medium group-hover:text-white border-b-2 border-transparent group-hover:border-white transition-all duration-300">
                        Shop Now
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Banner Block 3 */}
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
              <Link to={"/shop/:slug?"}>
                <div className="relative overflow-hidden group border border-gray rounded-md cursor-pointer">
                  <img
                    src="images/banner-07.jpg"
                    alt="IMG-BANNER"
                    className="w-full h-auto"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-10 transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-20">
                    <div>
                      <span className="text-3xl font-semibold text-black mb-2 transition-all duration-300 group-hover:text-white">
                        Accessories
                      </span>
                      <br />
                      <span className="text-md text-black transition-all duration-300 group-hover:text-white">
                        New Trend
                      </span>
                    </div>

                    {/* Shop Now */}
                    <div className="pb-1 transform translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-lg text-white font-medium group-hover:text-white border-b-2 border-transparent group-hover:border-white transition-all duration-300">
                        Shop Now
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* banner section end */}

      {/* product oveview section start */}

      <div className="w-full text-5xl p-5 ps-8">Best of Electronics</div>
      <div className="w-full flex flex-wrap justify-center gap-10 p-10 bg-[#dfdce6]">
      {
        products.map(
          (productData, productIndex) => {
            return(
              <ProductOverview key={productIndex} productData={productData} />
            )
          }
        )
      }
      </div>
      
      
      {/* product oveview section start */}
    </>
  );
}

function ProductOverview({productData}) {

  const {cart, setCart, toast} = useContext(Context);
  
      const addToCart = () => {
          const {id, title, price, thumbnail, category} = productData;
          const productDetail = {id, title, price, thumbnail, category, qty:1}
           
          const matchCartData = cart.filter(
              (cartData, cartIndex) => {
                  return cartData.id == productDetail.id;
              }
          )
  
          if (matchCartData == 0) {
              const finelData = [...cart, productDetail]
              setCart(finelData);
              toast.success('Item added to cart!')
          }else {
              toast.error('Item already in cart!')
          }
          }

  
  return (
    
          <div className="w-[255px] h-[426] bg-white shadow-lg flex flex-col justify-between rounded-lg p-3 border border-gray-800 hover:scale-[1.04] hover:bg-blue-100 transition duration-300">
            <Link to={`/productDetail/${productData.id}`}>
              <img
                src={productData.thumbnail}
                alt="Product Image"
                className="w-full h-41 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold text-black">
                {productData.title}
              </h3>
              <p className="text-sm text-black">
                Category: {productData.category}
              </p>
              <div className="flex items-baseline  gap-1">
                <p className="text-lg font-bold text-black mt-2">
                  ${productData.price}
                </p>
                <span className="text-sm text-black">
                  ({productData.rating.toFixed(2)}/5)
                </span>
              </div>
            </Link>
            <button
              onClick={addToCart}
              className="bg-gray-800 w-full mt-2 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition"
            >
              Add to Cart
            </button>
          </div>
        
      
  );
}
