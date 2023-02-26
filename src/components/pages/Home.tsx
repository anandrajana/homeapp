import { useProductList } from "../../hooks/useProductList";
import { Loader } from "../atoms/Loader";
import { ProductList } from "../organisms/ProductList";

export const Home = () => {
  const { loading, productList, error } = useProductList();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="m-auto w-full bg-white py-5">
        {loading && <Loader />}
        {error && (
          <div className="flex flex-col items-center justify-center">
            An error occured while retriving products
          </div>
        )}
        {!loading && !error && (productList == null || productList.length === 0) && (
          <div className="flex flex-col items-center justify-center">
            No products found
          </div>
        )}
        {!loading && productList.length > 0 && (
          <ProductList data={productList} />
        )}
      </div>
    </div>
  );
};
