import { useEffect, useState } from "react";
import ProductGallery from "../../../components/ProductGallery";
import { Spinner } from "@material-tailwind/react";

export default function ProductForm() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const saveToReport = (actionType, product) => {
    const timestamp = new Date().toLocaleString();
    const action = { actionType, product, timestamp };

    const report = JSON.parse(localStorage.getItem("@product_report")) || [];

    report.push(action);

    localStorage.setItem("@product_report", JSON.stringify(report));
  };

  const handleDelete = (id) => {
    const productToDelete = products.find((product) => product.id === id);
    saveToReport("deleted", productToDelete);
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (id, updatedProduct) => {
    const productToEdit = products.find((product) => product.id === id);
    saveToReport("edited", { ...productToEdit, ...updatedProduct });
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

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
        <ProductGallery
          products={products}
          type={"form"}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}
