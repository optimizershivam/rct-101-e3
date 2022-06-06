import React, { useEffect, useState } from "react";
import axios from "axios"
import Product from "./Product/Product"

const Products = () => {


  const [proData, setProData] = useState (([]))
  useEffect(()=>{
    axios.get("http://localhost:8080/products").then(({data}) =>
    {
      setProData(data)
    })
  },[])
  return <div>{/* Code here */}
  <h1>Products</h1>
  <div>
    {proData.map((ele) =>(
      <Product key={ele.id} {...ele}/>
    ))}
  </div>
  
  
  </div>;
};

export default Products;
