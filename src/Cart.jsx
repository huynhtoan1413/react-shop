export default function Cart({ cartItems }) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Giỏ hàng ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Chưa có sản phẩm nào.</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between border-b pb-1">
              <span>{item.name}</span>
              <span>{item.price.toLocaleString()}₫</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}