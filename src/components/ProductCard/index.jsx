import { useState } from "react";

export default function ProductCard({ product, type, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    onEdit(product.id, editedProduct);
    setIsEditing(false);
  };

  return type !== "list" ? (
    <div className="w-full p-4 m-2 text-center rounded-sm shadow-sm bg-black/20">
      {isEditing ? (
        <div className="mb-4">
          <input
            type="text"
            value={editedProduct.title}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, title: e.target.value })
            }
            className="block w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <textarea
            value={editedProduct.description}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                description: e.target.value,
              })
            }
            className="block w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            value={editedProduct.price}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, price: e.target.value })
            }
            className="block w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleSave}
            className="p-2 text-white bg-green-500 rounded"
          >
            Salvar
          </button>
        </div>
      ) : (
        <>
          <img
            src={product.images[0]}
            alt={product.title}
            className="max-h-[200px] max-w-[200px] mx-auto mb-4"
          />
          <h2 className="mb-2 text-lg font-bold text-yellow-400">
            {product.title}
          </h2>
          <p className="mb-4 text-yellow-400">{product.description}</p>
          <p className="font-bold text-yellow-400">R$ {product.price}</p>
        </>
      )}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleEdit}
          className="px-4 py-2 text-white bg-yellow-400 rounded"
        >
          {isEditing ? "Cancelar" : "Editar"}
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="px-4 py-2 text-white bg-red-500 rounded"
        >
          Excluir
        </button>
      </div>
    </div>
  ) : (
    <div className="w-full p-4 m-2 text-center rounded-sm shadow-sm bg-black/20">
      <img
        src={product.images[0]}
        alt={product.title}
        className="max-h-[200px] max-w-[200px] mx-auto mb-4"
      />
      <h2 className="mb-2 text-lg font-bold text-yellow-400">
        {product.title}
      </h2>
      <p className="mb-4 text-yellow-400">{product.description}</p>
      <p className="font-bold text-yellow-400">R$ {product.price}</p>
    </div>
  );
}
