import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductDetail } from './API';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Loading from './Loading';
import NotFound from "./NotFound";

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

 
    
  useEffect(
    function() {
      getProductDetail(id).then(function(product) {
        setProduct(product);
        setLoading(false);
        setCount(1);
      }).catch(function() {
        setLoading(false);
      });
    },
    [id]
  );


  function handleCountChange(event) {
    setCount(+event.target.value);
  }
  
  function handleButtonClick() {
    onAddToCart(id, count);
  }


  if (loading) {
    return <Loading />;
  }
  if (!product) {
    return <NotFound />;
  }


  return product ? (
    <div className="mx-1.85 my-5 sm:m-5">
      <Link to="/" className="text-2xl hover:text-primary-500">
        <FiArrowLeft />
      </Link>
      <div className="px-3.5 bg-white pt-1.85 pb-4.5 sm:px-7.2 sm:py-5 lg:flex max-w-6xl mx-auto xl:px-24 xl:py-20">
        <div className="w-full aspect-square mt-4 hover:bg-primary-500">
          <img className="h-full w-full object-cover" src={product.thumbnail} />
        </div>
        <div className="mt-3 lg:ml-9 lg:w-10/12">
          <h1 className="text-gray-800 text-3xl font-normal font-sans">
            {product.title}
          </h1>
          <p className="text-gray-800 text-xl lg:text-2xl font-bold font-sans mt-4">
            ${product.price}
          </p>
          <p className="text-gray-800 text-base leading-6 font-normal font-sans mt-1 lg:mt-2.5">{product.description}</p>
          <div className="">
            <input
              className="p-1.2 border bg-white w-9.5 h-9 font-sans font-normal text-gray-150 border-gray-50 text-sm leading-5"
              type="number"
              value={count}
              onChange={handleCountChange}
            />
            <button
              onClick={handleButtonClick}
              className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-2.5 ml-2  rounded-md font-sans font-bold text-sm leading-4 mt-6">
              ADD TO CART
					</button>
          </div>
          <hr className="mt-4 lg:border"></hr>
          <p className="text-gray-800 text-sm xl:text-base font-normal pt-3">Category: <span className="text-primary-500 text-sm xl:text-base font-normal">{product.category}</span></p>


          <hr className="mt-4 border-2 border-primary-500 lg:hidden"></hr>


        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          {id > 1 && (
            <Link className="flex items-center justify-center hover:bg-gray-900 w-36 border border-gray-50 p-1.71 bg-gray-800 rounded-md font-sans font-bold text-sm leading-4 text-white"
              to={'/products/' + (id - 1)}>
              <FiArrowLeft className="" />
              Previous
					</Link>
          )}
        </div>

        <div>
          {id < 100 && (
            <Link className="flex items-center justify-center hover:bg-gray-900 w-36 border border-gray-50 p-1.71 bg-gray-800 rounded-md font-sans font-bold text-sm leading-4 text-white"
              to={'/products/' + (id + 1)}
            >Next
						<FiArrowRight className="" />
            </Link>
          )}
        </div>
      </div>
    </div>
  ) : (
      <Loading />
    );
}

export default ProductDetail;
