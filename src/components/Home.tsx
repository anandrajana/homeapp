import React, { useEffect, useState } from "react";
import { Product } from "../common/Product";
import { Carousel } from "./Carousel";

export const Home = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
      fetch("api/cars.json")
      .then((response) => response.json())
      .then((data : Product[]) => setProductList(data));
  }, [])

  if (productList.length === 0) {
    return null;
  }
  
  return <Carousel data={productList}/>;
};
