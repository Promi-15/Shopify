import React from "react";

const ProductItem = ({ item }) => {
  console.log(item);
  return (
    // <div className='w-72 hover:scale-x-105 hover:scale-y-110 transition-all ease-in border-2 flex flex-col rounded-xl p-2'>
    //       <img src={item.image}  className='h-64 w-full object-cover rounded-xl'   alt="" />
    //       <div className='mx-5 my-5'>
    //           <p className='text-gray-500 text-center text-xl prata-regular'>  {item.name}</p>
    //           <p className='text-gray-500 text-center'>price : ${ item.price}</p>
    //       </div>
    // </div>
    <div>
      <a href="#" className="group relative block overflow-hidden">
        <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src={item.image}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <p className="text-gray-700">
            ${item.price}
            <span className="text-gray-400 line-through">  $80</span>
          </p>

          <h3 className="mt-1.5 text-lg font-medium text-gray-900">
           {item.name}
          </h3>


          <form className="mt-4 flex gap-4">
            <button className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
              Add to Cart
            </button>

            <button
              type="button"
              className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
            >
              Buy Now
            </button>
          </form>
        </div>
      </a>
    </div>
  );
};

export default ProductItem;
