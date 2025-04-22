import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context/MainContext'
import { Link } from 'react-router-dom';

export default function Cart() {

    const {cart, setCart} = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);

    const showTotalPrice = () => {
      let total = 0;

      cart.forEach((cartData, cartIndex) => {
        total +=(cartData.price*cartData.qty);
      });
      setTotalPrice(total);
    }

    useEffect(
      () => {
        showTotalPrice();
      },[cart]
    )

  return (
    <>
        <div className="w-full mx-auto p-10 px-40 gap-5 bg-[#dfdce6] flex">
      {/* Cart Items Section */}
      <div className="w-2/3 p-4 bg-white rounded-lg shadow-md border border-gray-800">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        { cart.length == 0 
        ?
        <h2 className="text-2xl text-center font-medium">Cart is Empty!</h2>
        :
            cart.map(
                (cartData, cartIndex) => {
                    return(
                    <CartItem key={cartIndex} cartData={cartData} cartIndex={cartIndex}/>
                    )
                }
            )
        }
        
      </div>
      
      {/* Cart Summary Section */}
      <div className="w-1/3 p-4 bg-white rounded-lg shadow-md border max-h-fit border-gray-800">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        <p className="text-gray-700">Subtotal: <span className="font-bold">${totalPrice.toFixed(2)}</span></p>
        <p className="text-gray-700">Tax: <span className="font-bold">${((totalPrice*10)/100).toFixed(2)}</span></p>
        <p className="text-gray-800 font-bold text-lg mt-2">Total: ${(totalPrice+((totalPrice*10)/100)).toFixed(2)}</p>
        <button className="w-full mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
          Proceed to Checkout
        </button>
      </div>
    </div>
    </>
  )
}
 
function CartItem({cartData, cartIndex}) {

    const {cart, setCart} = useContext(Context);

    const removeCartItem = (indexNum) => {
        const oldData = [...cart];
        oldData.splice(indexNum, 1);
        setCart(oldData);
    }

    const QtyChange = (event, Index) => {
      const newQty = event.target.value;

      if (newQty > 0) {
        const oldCart = [...cart]
        oldCart[Index].qty = newQty;
        setCart(oldCart);
      }
      
    }
    return(
        <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow border border-gray-800">
          <img src={cartData.thumbnail} alt="Product" className="size-24 rounded" />
          <div className="flex-1 ml-4">
            <Link to={`/productDetail/${cartData.id}`}>
            <h3 className="font-semibold text-lg">{cartData.title}</h3>
            </Link>
            <p className="text-gray-600 text-sm">Category: {cartData.category}</p>
            <p className="text-gray-800 font-bold">${cartData.price}</p>
            <div className="mt-2 flex items-center">
                <label htmlFor="qty" className="mr-2 text-sm">
                Qty:
                </label>
                <input
                type="number"
                id="qty"
                value={cartData.qty}
                className="w-14 px-2 py-1 border rounded text-center"
                onChange={(event) => QtyChange(event, cartIndex)}
                />
            </div>
          </div>
          <button
            onClick={() => removeCartItem(cartIndex)}
            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Remove
          </button>
        </div>
    )
}