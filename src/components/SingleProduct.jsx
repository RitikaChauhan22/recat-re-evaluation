import { useEffect } from "react";
import styles from "./singleProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClickedProductData } from "../Redux/actions";


export const SingleProductList = () => {
  const params = useParams();



  const dispatch = useDispatch();
  const data = useSelector((state) => state.clickedProd);

  // make a request to get the details
  useEffect(() => {
    dispatch(getClickedProductData(params.id));
  }, []);
  return (
    <div className={styles.div}>
      <img src={data.image} alt={data.title} />
      <div>
        <h1 style={{
            color: `${data.category == "women" ? "blue" : "black"}`,
            border: `2px solid ${
              data.category == "women" ? "black" : "blue"
            }`,
          }}
        >
          {data.title}
        </h1>

        
        <h2 style={{
            color: `${data.category == "women" ? "black" : "blue"}`,
            border: `2px solid ${
              data.category == "women" ? "blue" : "black"
            }`,
          }}
        >
          Rs:- {data.price}
        </h2>
        <p>Brand:- {data.brand}</p>
        <p>Category:- {data.category}</p>

        {console.log(data)}
      </div>
    </div>
  );
};
