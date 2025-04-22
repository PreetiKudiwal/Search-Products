import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Context/MainContext";

export default function ProductDetail() {
  const { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const { cart, setCart, toast } = useContext(Context);
  const [selectedImage, setSelectedImage] = useState("");

  const getProduct = () => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((success) => {
        setCurrentProduct(success.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const addToCart = () => {
    const { id, title, price, thumbnail, category } = currentProduct;
    const productDetail = { id, title, price, thumbnail, category, qty: 1 };
    const finelData = [...cart, productDetail];
    setCart(finelData);
    toast.success("Item added to cart!");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#dfdce6] p-8">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full border border-gray-800 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="ps-10">
            <img
              src={selectedImage || currentProduct.thumbnail}
              alt="Product"
              className="rounded-lg w-[500px] object-cover"
            />
            <div className="flex gap-2 mt-2">
              {currentProduct?.images?.map((imageData, imageIndex) => {
                return (
                  <img
                    key={imageIndex}
                    src={imageData}
                    alt={`Thumbnail ${imageIndex + 1}`}
                    className={`w-16 h-16 rounded-lg cursor-pointer border-2 
                                ${selectedImage === imageData ? "border-gray-700" : "border-gray-400"} 
                                hover:border-gray-700`}
                    onClick={() => setSelectedImage(imageData)}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black">
              {currentProduct.title}
            </h2>
            <p className="text-xl text-black font-semibold mt-2">
              ${currentProduct.price}
            </p>
            <div className="flex items-center mt-2">
              <span className=" text-black">
                Rating: ({currentProduct.rating}/5)
              </span>
            </div>

            <p className="text-black mt-4">{currentProduct.description}</p>
            <button
              onClick={addToCart}
              className="mt-6 w-full bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
            >
              Add to Cart
            </button>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Customer Reviews</h3>
              <div className="mt-4 border-t pt-4">
                {currentProduct?.reviews?.map((reviewData, reviewIndex) => {
                  return (
                    <div key={reviewIndex} className="mb-4">
                      <p className="font-semibold">{reviewData.reviewerName}</p>
                      <span className="text-black">
                        Rating: ({reviewData.rating}/5)
                      </span>
                      <p className="text-gray-600">{reviewData.comment}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
