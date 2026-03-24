import { useCart } from "../../context/CartContext";

export default function Toast() {
  // Lấy câu thông báo từ kho dữ liệu trung tâm
  const { notification } = useCart();

  // Nếu không có thông báo gì thì không hiển thị component này (return null)
  if (!notification) return null;

  return (
    // fixed bottom-10 right-10: Cố định ở góc dưới cùng bên phải màn hình
    // z-[100]: Đảm bảo nó luôn nằm trên cùng, không bị các khối khác đè lên
    <div className="fixed bottom-10 right-10 z-[100] bg-black text-white px-6 py-4 rounded-md shadow-2xl transition-all duration-300">
      <p className="font-medium text-sm md:text-base">{notification}</p>
    </div>
  );
}