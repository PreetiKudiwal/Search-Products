import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../Context/MainContext';

export default function Products({slug, rating, price}) {

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(20);
    const [loading, setLoading] = useState(false);

    const getProducts = () => {
        let ProductApiUrl ;
        if (slug == undefined) {
            ProductApiUrl = `https://dummyjson.com/products?limit=${limit}`;
        }else{
            ProductApiUrl = `https://dummyjson.com/products/category/${slug}?limit=${limit}`;
        }
         

        axios.get(ProductApiUrl).then(
            (success) => {
                const finelData = success.data.products.filter(
                    (filterData, filterIndex) => {
                        if (filterData.rating >= rating &&
                            filterData.price >= price.from &&
                            filterData.price <= price.to
                        ) {
                            return true;
                        }
                    }
                );
                setProducts(finelData);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(
        () => {
            setLoading(true);
            getProducts();
            setTimeout(() => {
                setLoading(false);
            },1000
        )
        },[slug, limit, rating, price]
    )

  return (
    <>
    <h2 className='text-xl font-medium bg-[#dfdce6] ps-5 pt-5'>Total: {products.length}</h2>
    <div className="flex items-start p-5 gap-5 flex-wrap min-h-screen bg-[#dfdce6]">
        {
            products.map(
                (productData, productIndex) => {
                    return loading == true ? 
                    (
                        <div
                        key={productIndex}
                        className="w-64 p-4 bg-white shadow-md rounded-lg"
                        >
                            <div className="h-40 bg-gray-300 rounded-md animate-pulse"></div>
                            <div className="mt-4">
                                <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                                <div className="h-4 bg-gray-300 rounded w-full mt-2 animate-pulse"></div>
                                <div className="h-4 bg-gray-300 rounded w-5/6 mt-2 animate-pulse"></div>
                            </div>
                            <div className="mt-4 flex space-x-2">
                                <div className="h-8 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                                <div className="h-8 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <ProductCard key={productIndex} productData={productData}/>
                    )
                }
            )
        }
    
    </div>
        <div className='w-full text-center bg-[#dfdce6]'>
        <button onClick={() => setLimit(limit+10)} className="bg-gray-800 mb-5 mt-2 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition">
                        Load More
        </button>
        </div>
    </>
  )
}

function ProductCard({productData}) {

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
        <>
        
            <div className="w-[255px] h-[426px] bg-white shadow-lg flex flex-col justify-between rounded-lg p-3  border border-gray-800 hover:scale-[1.04] hover:bg-blue-100 transition duration-300">
                <Link to={`/productDetail/${productData.id}`}>
                <img 
                    src={productData.thumbnail}
                    alt="Product Image" 
                    className="w-full h-41 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold text-black">{productData.title}</h3>
                <p className="text-sm text-black">Category: {productData.category}</p>
                <div className='flex items-baseline  gap-1'>
                <p className="text-lg font-bold text-black mt-2">${productData.price}</p>
                <span className='text-sm text-black'>({(productData.rating).toFixed(2)}/5)</span>
                </div>

                </Link>
                <button onClick={addToCart} className="bg-gray-800 w-full mt-2 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition">
                     Add to Cart
                </button>
            </div>
        </>
    )
}
