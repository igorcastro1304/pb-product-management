import ProductCard from "../ProductCard";

export default function ProductGallery({ products, type, onDelete, onEdit }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, i) => (
        <ProductCard
          key={i}
          product={product}
          type={type}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
