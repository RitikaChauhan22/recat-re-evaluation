import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductsData, sortProducts } from "../Redux/actions";
import styles from "./products.module.css";
export const Products = () => {
 
  const data = useSelector((state) => state.sortedProds);

  const nav = useNavigate();
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    dispatch(sortProducts(e.target.value.trim()));
  };
  return (
    <>
      <h2>Products</h2>

      <select id={styles.sort }onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>

      {console.log(data)}
      <div id={styles.cont} className="products-list">
        {}
        {data &&
          data.map((el) => {





            return (
              <div
              
                className={styles.prod}
                key={el.id}
                onClick={() => nav(`/products/${el.id}`)}
              >
                <img src={el.image} alt="" height="95%" width="100%" />
                {
                
                  el.title}
              </div>
            );
          })}
      </div>
    </>
  );
};
