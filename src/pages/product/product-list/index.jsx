import { useEffect, useState } from "react";
import ProductGallery from "../../../components/ProductGallery";
import { Spinner } from "@material-tailwind/react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-5">
      <h1 className="mb-4 text-xl font-bold text-yellow-400">
        Galeria de Produtos
      </h1>

      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner className="text-yellow-400" />
        </div>
      ) : (
        <ProductGallery products={products} type={"list"} />
      )}
    </div>
  );
}
