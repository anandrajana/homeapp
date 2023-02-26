import { useEffect, useState } from "react";
import { Product } from "../models/Product";

export interface ProductListRequest {
  error: Error | null;
  loading: boolean;
  productList: Product[];
}

export const MOCK_PRODUCT_LIST_REQUEST: ProductListRequest = {
  error: null,
  loading: true,
  productList: [],
};

export const useProductList = (): ProductListRequest => {
  const [state, setState] = useState<ProductListRequest>(
    MOCK_PRODUCT_LIST_REQUEST
  );

  useEffect(() => {
    fetch("api/cars.json")
      .then((response) => response.json())
      .then((data: Product[]) => {
        setState({
          error: null,
          productList: data,
          loading: false,
        });
      })
      .catch((error) => {
        setState({
          error,
          productList: MOCK_PRODUCT_LIST_REQUEST.productList,
          loading: false,
        });
      });

    return () => {
      setState(MOCK_PRODUCT_LIST_REQUEST);
    };
  }, []);

  return state;
};
