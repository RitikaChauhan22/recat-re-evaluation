import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { getProductsReq } from "../Redux/actions";

export const Products = () => {
  // to get all products list on component mounts;

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {

    const response = await axios
 .get("https://movie-fake-server.herokuapp.com/products")
                    .catch((err) => {console.log(err)});
                    dispatch(getProductsReq(response.data));

  }
  

  
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js

    fetchProducts();
    // dispatch(getproductsData())
  }, []);

let data = products;

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>

      <div className="products-list">
        {data &&
          data.map((c) => {
            return <div>
             <div>
               <img src= {c.image}/>
             </div>
             <h3> {c.brand}</h3>
          
              </div>;
          })}
      </div>
  
      
    </>
  );
};
