import React from "react";
import { Link } from "react-router-dom";
function Product({thumbnail,title,price,category,id}){
  return(
    <div className="bg-white mb-9">
      <div className="w-full aspect-square">
        <img className="w-full h-full object-cover" src={thumbnail}/>
      </div>
      <p className="text-gray-150 mt-1.5">{category}</p>
      <h1 className="mt-2 font-sans font-normal text-base	leading-5 font-semibold text-gray-900">{title}</h1>
      <p className="text-sm font-bold font-sans text-gray-900 mt-1.5">${price}</p>
      <Link className="mt-1.5 text-base font-semibold text-gray-900 hover:text-primary-500 " to={"/products/" +id} > View detail </Link>
    </div>
  );
}
export default Product;