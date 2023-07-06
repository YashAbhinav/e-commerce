import React from "react";
import Product from "./Product";
function ProductList({products}){
return(
  <div 
    className="sm:grid grid-cols-3 gap-4 mt-7.5">
    { products.map(function (item){
      return (
      <Product 
        key={item.title}
        {...item}
        />
        );
    })}
  </div>
      );
}
export default ProductList;