import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductChild from "./ProductChild";
import "./Redux.css";

const ProductsParent = ({ search }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const stateProducts = useSelector((state) => state.productReducer.product);
  const getApiData = async () => {
    const apiData = await axios.get("http://localhost:5050/products");
    setProducts(apiData.data.data)
    // console.log("--->", apiData.data.data);
    dispatch({ type: "Add-Product", data: apiData.data });
  };
  // console.log(products)
  useEffect(() => {
    getApiData();
  },[]);
  useEffect(() => {
    const filtered = stateProducts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    // setProducts(filtered);
  }, [search]);

  return (
    <div>
      <div className="caros"></div>
      <div className="cards-parent">
        {products.map((item) => {
          console.log('hi there -----',products);
          return <ProductChild item={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductsParent;
