import React from 'react';
import ProductList from './ProductList';
import { getProductList } from './API';
import { useState, useEffect } from 'react';
import Loading from "./Loading";
import NoMatching from './NoMatching';
function ProductListpage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    const list = getProductList();

    list.then(function(product) {
      setProductList(product);
      setLoading(false);
    });
  }, []);

  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('default');

  let data = productList.filter(function(item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == 'lowToHigh') {
    data.sort(function(x, y) {
      return x.price < y.price ? -1 : 1;
    });
  } else if (sort == 'highToLow') {
    data.sort(function(x, y) {
      return x.price < y.price ? 1 : -1;
    });
  } else if (sort == 'title') {
    data.sort(function(x, y) {
      return x.title > y.title ? -1 : 1;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }
  return loading ? <Loading /> : (
    <div className="mx-1.85 my-5 sm:m-5">
    <div className="px-3.5 pt-1.85 pb-4.5 max-w-6xl mx-auto sm:px-9 sm:py-12.5 bg-white sm:my-15 md:px-24 md:py-20">
      <div className="md:flex justify-between ">
        <input
          className="w-47 placeholder:text-gray-150  border border-gray-50 p-1.71 bg-gray-100"
          value={query}
          placeholder="search"
          onChange={handleQueryChange}
        />
        <select
          className="w-47 text-gray-150 border border-gray-50 p-1.71 bg-gray-100 mt-2 sm:mt-0"
          onChange={handleSortChange}
          value={sort}
        >
          <option value="default"> Default sorting</option>
          <option value="title">Sort by title</option>
          <option value="lowToHigh">Sort by price: low to high</option>
          <option value="highToLow">Sort by price: high to low</option>
        </select>
      </div>

      {data.length > 0 && <ProductList products={data} />}
      {data.length == 0 && <NoMatching>No Matching Result Found...</NoMatching>}
    </div>
      </div>
  );
}
export default ProductListpage;
