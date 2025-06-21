export default function ProductList({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow p-4 rounded hover:shadow-lg transition">
          <img src={product.image} alt={product.name} className="mb-2 w-full h-40 object-cover" />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-yellow-600 font-bold">{product.price.toLocaleString()}₫</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 w-full"
          >
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
}