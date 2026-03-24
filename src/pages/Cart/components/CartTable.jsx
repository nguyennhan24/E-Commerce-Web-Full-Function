import { useCart } from "../../../context/CartContext";

export default function CartTable() {
  const { cartItems, removeFromCart } = useCart(); // Lấy dữ liệu từ kho thực tế

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 shadow p-4 rounded bg-white font-medium mb-10 text-center">
        <span className="text-left pl-10">Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span className="text-right">Subtotal</span>
      </div>

      <div className="flex flex-col gap-6 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-4 items-center shadow p-4 rounded bg-white relative text-center">
            <div className="flex items-center gap-4 text-left">
              {/* Nút xóa thực tế */}
              <button 
                onClick={() => removeFromCart(item.id)}
                className="absolute top-2 left-2 text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-[10px] shadow"
              >
                X
              </button>
              <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
              <span className="truncate">{item.name}</span>
            </div>
            <span>${item.price}</span>
            <div className="flex justify-center">
              <input type="number" readOnly value={item.quantity} className="border w-16 p-2 rounded outline-none text-center" />
            </div>
            <span className="text-right">${item.price * item.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}