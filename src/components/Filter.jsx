import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Filter({slug, rating, setRating, price, setPrice}) {

    const [categories, setCategories] = useState([]);

    const getCategories = () => {

        axios.get('https://dummyjson.com/products/categories').then(
            (success) => {
                setCategories(success.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    const minPrice = (event) => {
        const startingPrice = event.target.value;
        if (startingPrice > 0) {
            setPrice({...price, from: event.target.value})
        }
    }

    const maxPrice = (event) => {
        const endingPrice = event.target.value;
        if (endingPrice > 0) {
            setPrice({ })
        }
    }


    useEffect(
        () => {
            getCategories();
        },[]
    )
  return (
    <>
    <div className='h-[567px] border border-b-2 bg-white overflow-auto md:block'>
    <div className='m-3'>
        <h1  className='text-gray-950 font-bold text-xl cursor-pointer'>Filter by Rating</h1>
        <div onClick={() => setRating(4)} className={` ps-2 cursor-pointer mt-2 ${ rating == 4 ? 'text-gray-800 font-bold text-[18px] border-s-2 border-gray-800' : 'text-black text-[15px] hover:underline'}`}>
            4 ⭐ $ above
        </div>
        <div onClick={() => setRating(3)} className={` ps-2 cursor-pointer mt-2 ${ rating == 3 ? 'text-gray-800 font-bold text-[18px] border-s-2 border-gray-800' : 'text-black text-[15px] hover:underline'}`}>
            3 ⭐ $ above
        </div>
        <div onClick={() => setRating(2)} className={` ps-2 cursor-pointer mt-2 ${ rating == 2 ? 'text-gray-800 font-bold text-[18px] border-s-2 border-gray-800' : 'text-black text-[15px] hover:underline'}`}>
            2 ⭐ $ above
        </div>
        <div onClick={() => setRating(1)} className={` ps-2 cursor-pointer mt-2 ${ rating == 1 ? 'text-gray-800 font-bold text-[18px] border-s-2 border-gray-800' : 'text-black text-[15px] hover:underline'}`}>
            1 ⭐ $ above
        </div>
    </div>

    <div className='m-3'>
    <h1  className='text-gray-950 font-bold text-xl cursor-pointer'>Filter by Price</h1>
    <div className='flex justify-between items-center mt-5 '>
        <input onChange={minPrice} className='border border-black rounded-md p-1 w-[60px]' placeholder='From' type="number" value={price.from}/>
        To 
        <input onChange={maxPrice} className='border border-black rounded-md p-1 w-[60px]' placeholder='To' type="number" value={price.to}/>
    </div>
    </div>  
    <div className='m-3'>
        <h1 className='text-gray-950 font-bold text-xl cursor-pointer '>Filter by Category</h1>
        <Link to={'/shop'}>
        <div className={`${slug == undefined ? 'text-gray-800 font-bold text-[18px] border-s-2 border-gray-800' : 'text-black text-[15px] hover:underline'} ps-2 cursor-pointer mt-2`}>All Categories</div>
        </Link>
        {
            categories.map(
                (categoryData, categoryIndex) => {
                    return(
                        <Link key={categoryIndex} to={`/shop/${categoryData.slug}`}>
                        <div className={`${categoryData.slug == slug ? 'text-gray-800 font-bold text-[18px] border-s-2 border-gray-800' : 'text-black text-[15px] hover:underline'} my-2 ps-2  cursor-pointer`}>
                            {categoryData.name}
                        </div>
                        </Link>
                    )
                }
            )
        }
        
    </div>
    </div>
    </>
  )
}
